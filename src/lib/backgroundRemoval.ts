"use client";

import removeBackground from "@imgly/background-removal";

export interface RemovalConfig {
  quality: "fast" | "medium" | "high";
  outputFormat: "image/png" | "image/webp";
}

export interface RemovalResult {
  blob: Blob;
  url: string;
  processingTime: number;
}

const defaultConfig: RemovalConfig = {
  quality: "high",
  outputFormat: "image/png",
};

/**
 * Entfernt den Hintergrund eines Bildes mithilfe von KI
 * Runs entirely in the browser - no server upload required
 */
export async function removeImageBackground(
  imageFile: File | string | HTMLImageElement | HTMLCanvasElement,
  config: Partial<RemovalConfig> = {},
  onProgress?: (progress: number, stage: string) => void
): Promise<RemovalResult> {
  const startTime = performance.now();
  const finalConfig = { ...defaultConfig, ...config };

  try {
    onProgress?.(0, "Initialisiere KI-Modell...");

    const result = await removeBackground(imageFile, {
      // Use CDN for model files - this is the default and most reliable
      // The library will automatically load models from unpkg CDN
      output: {
        format: finalConfig.outputFormat,
        quality: 1.0,
      },
      model: finalConfig.quality === "fast" ? "small" : "medium",
      progress: (key, current, total) => {
        const progressPercent = Math.round((current / total) * 100);
        let stage = "Verarbeite Bild...";

        if (key === "fetch:model") {
          stage = "Lade KI-Modell...";
        } else if (key === "compute:inference") {
          stage = "KI analysiert das Bild...";
        } else if (key === "encode") {
          stage = "Erstelle Ergebnis...";
        }

        onProgress?.(progressPercent, stage);
      },
    });

    const endTime = performance.now();
    const processingTime = Math.round(endTime - startTime);

    // Create blob URL
    const url = URL.createObjectURL(result);

    return {
      blob: result,
      url,
      processingTime,
    };
  } catch (error) {
    console.error("Fehler beim Entfernen des Hintergrunds:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unbekannter Fehler bei der Hintergrundentfernung"
    );
  }
}

/**
 * Revokes a blob URL to free memory
 */
export function revokeBlobUrl(url: string): void {
  if (url && url.startsWith("blob:")) {
    URL.revokeObjectURL(url);
  }
}

/**
 * Checks if background removal is supported in this browser
 */
export function isBackgroundRemovalSupported(): boolean {
  // Check for WebAssembly support
  if (typeof WebAssembly !== "object") {
    return false;
  }

  // Check for necessary APIs
  if (typeof OffscreenCanvas === "undefined") {
    return false;
  }

  return true;
}
