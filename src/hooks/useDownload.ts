"use client";

import { useCallback } from "react";
import { generateFilename } from "@/lib/imageUtils";
import { blobToDataURL } from "@/lib/canvasUtils";

export interface DownloadOptions {
  filename?: string;
  quality?: number;
}

/**
 * Trigger a file download
 */
function triggerDownload(url: string, filename: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function useDownload() {
  /**
   * Download blob as PNG
   */
  const downloadAsPNG = useCallback(
    (blob: Blob, options: DownloadOptions = {}) => {
      const filename = options.filename ?? `${generateFilename()}.png`;
      const url = URL.createObjectURL(blob);
      triggerDownload(url, filename);
      // Clean up after a short delay
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },
    []
  );

  /**
   * Download blob as JPG
   */
  const downloadAsJPG = useCallback(
    async (blob: Blob, options: DownloadOptions = {}) => {
      const quality = options.quality ?? 0.9;
      const filename = options.filename ?? `${generateFilename()}.jpg`;

      // Create image from blob
      const img = new Image();
      const url = URL.createObjectURL(blob);

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Bild konnte nicht geladen werden"));
        img.src = url;
      });

      // Draw on canvas
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        URL.revokeObjectURL(url);
        throw new Error("Canvas-Kontext nicht verfügbar");
      }

      // Fill white background (JPG doesn't support transparency)
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      URL.revokeObjectURL(url);

      // Convert to JPG
      return new Promise<void>((resolve, reject) => {
        canvas.toBlob(
          (jpgBlob) => {
            if (jpgBlob) {
              const jpgUrl = URL.createObjectURL(jpgBlob);
              triggerDownload(jpgUrl, filename);
              setTimeout(() => URL.revokeObjectURL(jpgUrl), 1000);
              resolve();
            } else {
              reject(new Error("Fehler beim Erstellen des JPG"));
            }
          },
          "image/jpeg",
          quality
        );
      });
    },
    []
  );

  /**
   * Download blob as WebP
   */
  const downloadAsWebP = useCallback(
    async (blob: Blob, options: DownloadOptions = {}) => {
      const quality = options.quality ?? 0.85;
      const filename = options.filename ?? `${generateFilename()}.webp`;

      // Create image from blob
      const img = new Image();
      const url = URL.createObjectURL(blob);

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Bild konnte nicht geladen werden"));
        img.src = url;
      });

      // Draw on canvas
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        URL.revokeObjectURL(url);
        throw new Error("Canvas-Kontext nicht verfügbar");
      }

      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      // Convert to WebP
      return new Promise<void>((resolve, reject) => {
        canvas.toBlob(
          (webpBlob) => {
            if (webpBlob) {
              const webpUrl = URL.createObjectURL(webpBlob);
              triggerDownload(webpUrl, filename);
              setTimeout(() => URL.revokeObjectURL(webpUrl), 1000);
              resolve();
            } else {
              reject(new Error("Fehler beim Erstellen des WebP"));
            }
          },
          "image/webp",
          quality
        );
      });
    },
    []
  );

  /**
   * Copy image to clipboard
   */
  const copyToClipboard = useCallback(async (blob: Blob): Promise<boolean> => {
    try {
      // Check if ClipboardItem is supported
      if (typeof ClipboardItem === "undefined") {
        console.warn("ClipboardItem wird nicht unterstützt");
        return false;
      }

      // Convert to PNG if needed (clipboard only accepts PNG)
      const pngBlob =
        blob.type === "image/png"
          ? blob
          : await new Promise<Blob>((resolve, reject) => {
              const img = new Image();
              const url = URL.createObjectURL(blob);
              img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                  reject(new Error("Canvas-Kontext nicht verfügbar"));
                  return;
                }
                ctx.drawImage(img, 0, 0);
                canvas.toBlob(
                  (pngBlob) => {
                    URL.revokeObjectURL(url);
                    if (pngBlob) {
                      resolve(pngBlob);
                    } else {
                      reject(new Error("Fehler beim Konvertieren zu PNG"));
                    }
                  },
                  "image/png"
                );
              };
              img.onerror = () => reject(new Error("Bild konnte nicht geladen werden"));
              img.src = url;
            });

      // Write to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": pngBlob }),
      ]);

      return true;
    } catch (error) {
      console.error("Fehler beim Kopieren in die Zwischenablage:", error);
      return false;
    }
  }, []);

  /**
   * Share image (Web Share API)
   */
  const shareImage = useCallback(
    async (blob: Blob, filename: string = "hintergrund-entfernt.png"): Promise<boolean> => {
      try {
        // Check if Web Share API is supported
        if (!navigator.share) {
          console.warn("Web Share API wird nicht unterstützt");
          return false;
        }

        const file = new File([blob], filename, { type: "image/png" });

        await navigator.share({
          files: [file],
        });

        return true;
      } catch (error) {
        console.error("Fehler beim Teilen:", error);
        return false;
      }
    },
    []
  );

  return {
    downloadAsPNG,
    downloadAsJPG,
    downloadAsWebP,
    copyToClipboard,
    shareImage,
  };
}
