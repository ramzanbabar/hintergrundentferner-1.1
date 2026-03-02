"use client";

export interface GradientConfig {
  type: "linear" | "radial";
  angle?: number;
  colors: string[];
}

/**
 * Converts a Blob to a data URL
 */
export async function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Converts a data URL to a Blob
 */
export async function dataURLToBlob(dataURL: string): Promise<Blob> {
  const response = await fetch(dataURL);
  return response.blob();
}

/**
 * Creates an HTMLImageElement from a Blob
 */
export async function blobToImage(blob: Blob): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Fehler beim Laden des Bildes"));
    };
    img.src = url;
  });
}

/**
 * Creates an HTMLImageElement from a URL
 */
export async function urlToImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Fehler beim Laden des Bildes"));
    img.src = url;
  });
}

/**
 * Composites a foreground image with a solid color background
 */
export async function compositeWithColor(
  foregroundBlob: Blob,
  hexColor: string,
  width: number,
  height: number
): Promise<Blob> {
  const foreground = await blobToImage(foregroundBlob);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas-Kontext nicht verfügbar");
  }

  // Fill background with color
  ctx.fillStyle = hexColor;
  ctx.fillRect(0, 0, width, height);

  // Draw foreground
  ctx.drawImage(foreground, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Fehler beim Erstellen des Bildes"));
        }
      },
      "image/png",
      1.0
    );
  });
}

/**
 * Composites a foreground image with a gradient background
 */
export async function compositeWithGradient(
  foregroundBlob: Blob,
  gradient: GradientConfig,
  width: number,
  height: number
): Promise<Blob> {
  const foreground = await blobToImage(foregroundBlob);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas-Kontext nicht verfügbar");
  }

  // Create gradient
  let canvasGradient: CanvasGradient;
  if (gradient.type === "radial") {
    canvasGradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 2
    );
  } else {
    const angle = (gradient.angle ?? 135) * (Math.PI / 180);
    const x1 = width / 2 - Math.cos(angle) * width;
    const y1 = height / 2 - Math.sin(angle) * height;
    const x2 = width / 2 + Math.cos(angle) * width;
    const y2 = height / 2 + Math.sin(angle) * height;
    canvasGradient = ctx.createLinearGradient(x1, y1, x2, y2);
  }

  // Add color stops
  gradient.colors.forEach((color, index) => {
    canvasGradient.addColorStop(index / (gradient.colors.length - 1), color);
  });

  // Fill background with gradient
  ctx.fillStyle = canvasGradient;
  ctx.fillRect(0, 0, width, height);

  // Draw foreground
  ctx.drawImage(foreground, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Fehler beim Erstellen des Bildes"));
        }
      },
      "image/png",
      1.0
    );
  });
}

/**
 * Composites a foreground image with a custom background image
 */
export async function compositeWithImage(
  foregroundBlob: Blob,
  backgroundImageUrl: string,
  width: number,
  height: number
): Promise<Blob> {
  const [foreground, background] = await Promise.all([
    blobToImage(foregroundBlob),
    urlToImage(backgroundImageUrl),
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas-Kontext nicht verfügbar");
  }

  // Calculate cover dimensions for background
  const bgAspect = background.width / background.height;
  const canvasAspect = width / height;

  let drawWidth: number;
  let drawHeight: number;
  let drawX: number;
  let drawY: number;

  if (bgAspect > canvasAspect) {
    drawHeight = height;
    drawWidth = height * bgAspect;
    drawX = (width - drawWidth) / 2;
    drawY = 0;
  } else {
    drawWidth = width;
    drawHeight = width / bgAspect;
    drawX = 0;
    drawY = (height - drawHeight) / 2;
  }

  // Draw background (cover)
  ctx.drawImage(background, drawX, drawY, drawWidth, drawHeight);

  // Draw foreground
  ctx.drawImage(foreground, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Fehler beim Erstellen des Bildes"));
        }
      },
      "image/png",
      1.0
    );
  });
}

/**
 * Creates a blurred background from the original image
 */
export async function compositeWithBlur(
  originalImageUrl: string,
  foregroundBlob: Blob,
  blurRadius: number,
  width: number,
  height: number
): Promise<Blob> {
  const [foreground, original] = await Promise.all([
    blobToImage(foregroundBlob),
    urlToImage(originalImageUrl),
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas-Kontext nicht verfügbar");
  }

  // Draw original image
  ctx.drawImage(original, 0, 0, width, height);

  // Apply blur filter
  ctx.filter = `blur(${blurRadius}px)`;
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = "none";

  // Draw foreground
  ctx.drawImage(foreground, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Fehler beim Erstellen des Bildes"));
        }
      },
      "image/png",
      1.0
    );
  });
}

/**
 * Resizes an image to fit within max dimensions while maintaining aspect ratio
 */
export async function resizeImage(
  file: File,
  maxDimension: number
): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Check if resize is needed
      if (img.width <= maxDimension && img.height <= maxDimension) {
        resolve(file);
        return;
      }

      // Calculate new dimensions
      let newWidth: number;
      let newHeight: number;
      if (img.width > img.height) {
        newWidth = maxDimension;
        newHeight = Math.round((img.height / img.width) * maxDimension);
      } else {
        newHeight = maxDimension;
        newWidth = Math.round((img.width / img.height) * maxDimension);
      }

      // Create canvas and resize
      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas-Kontext nicht verfügbar"));
        return;
      }

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Fehler beim Skalieren des Bildes"));
          }
        },
        file.type,
        0.95
      );
    };

    img.onerror = () => reject(new Error("Fehler beim Laden des Bildes"));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Gets image dimensions from a file
 */
export async function getImageDimensions(
  file: File
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => reject(new Error("Fehler beim Laden des Bildes"));
    img.src = URL.createObjectURL(file);
  });
}
