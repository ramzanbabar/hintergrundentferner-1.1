"use client";

// Supported image formats
export const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
] as const;

export const SUPPORTED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
] as const;

// File size limits
export const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB
export const MAX_DIMENSION = 5000; // 5000px

// Validation result type
export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validates if a file is a supported image format
 */
export function validateImageFormat(file: File): ValidationResult {
  const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));

  // Check MIME type
  if (!SUPPORTED_FORMATS.includes(file.type as typeof SUPPORTED_FORMATS[number])) {
    // Also check extension as fallback (some browsers don't set MIME type correctly)
    if (!SUPPORTED_EXTENSIONS.includes(extension as typeof SUPPORTED_EXTENSIONS[number])) {
      return {
        valid: false,
        error: `Nicht unterstütztes Format. Bitte verwende JPG, PNG, WebP oder HEIC.`,
      };
    }
  }

  return { valid: true };
}

/**
 * Validates file size
 */
export function validateFileSize(file: File): ValidationResult {
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `Datei zu groß. Maximum ist ${formatFileSize(MAX_FILE_SIZE)}. Deine Datei ist ${formatFileSize(file.size)}.`,
    };
  }

  return { valid: true };
}

/**
 * Validates image dimensions
 */
export async function validateImageDimensions(
  file: File
): Promise<ValidationResult> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      if (img.width > MAX_DIMENSION || img.height > MAX_DIMENSION) {
        resolve({
          valid: false,
          error: `Bild zu groß. Maximum ist ${MAX_DIMENSION}x${MAX_DIMENSION}px. Dein Bild ist ${img.width}x${img.height}px.`,
        });
      } else {
        resolve({ valid: true });
      }
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => {
      resolve({
        valid: false,
        error: "Bild konnte nicht geladen werden. Bitte versuche eine andere Datei.",
      });
    };
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Complete image validation
 */
export async function validateImage(file: File): Promise<ValidationResult> {
  // Check format
  const formatResult = validateImageFormat(file);
  if (!formatResult.valid) {
    return formatResult;
  }

  // Check file size
  const sizeResult = validateFileSize(file);
  if (!sizeResult.valid) {
    return sizeResult;
  }

  // Check dimensions
  const dimensionResult = await validateImageDimensions(file);
  if (!dimensionResult.valid) {
    return dimensionResult;
  }

  return { valid: true };
}

/**
 * Formats file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Generates a unique filename for download
 */
export function generateFilename(prefix: string = "hintergrund-entfernt"): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  return `${prefix}-${timestamp}`;
}

/**
 * Gets file extension from filename
 */
export function getFileExtension(filename: string): string {
  return filename.slice(filename.lastIndexOf(".")).toLowerCase();
}

/**
 * Converts HEIC/HEIF to a standard format (requires browser support)
 * Note: Most browsers don't support HEIC natively, but we'll try
 */
export async function convertHeicToStandard(file: File): Promise<File> {
  if (file.type === "image/heic" || file.type === "image/heif") {
    // Create a canvas and convert
    return new Promise((resolve, reject) => {
      const img = new Image();
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
          (blob) => {
            if (blob) {
              const newFile = new File([blob], file.name.replace(/\.(heic|heif)$/i, ".jpg"), {
                type: "image/jpeg",
                lastModified: Date.now(),
              });
              resolve(newFile);
            } else {
              reject(new Error("Fehler beim Konvertieren des Bildes"));
            }
          },
          "image/jpeg",
          0.95
        );
      };
      img.onerror = () => reject(new Error("Fehler beim Laden des HEIC-Bildes"));
      img.src = URL.createObjectURL(file);
    });
  }
  return file;
}

/**
 * Creates a thumbnail from a file
 */
export async function createThumbnail(
  file: File,
  maxSize: number = 200
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let newWidth: number;
      let newHeight: number;

      if (img.width > img.height) {
        newWidth = maxSize;
        newHeight = Math.round((img.height / img.width) * maxSize);
      } else {
        newHeight = maxSize;
        newWidth = Math.round((img.width / img.height) * maxSize);
      }

      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas-Kontext nicht verfügbar"));
        return;
      }

      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      resolve(canvas.toDataURL("image/jpeg", 0.8));
    };
    img.onerror = () => reject(new Error("Fehler beim Erstellen des Vorschaubildes"));
    img.src = URL.createObjectURL(file);
  });
}
