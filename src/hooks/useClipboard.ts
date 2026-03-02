"use client";

import { useEffect, useCallback, useRef } from "react";

export interface UseClipboardOptions {
  onPaste?: (file: File) => void;
  enabled?: boolean;
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { onPaste, enabled = true } = options;
  const onPasteRef = useRef(onPaste);

  // Keep callback ref updated
  useEffect(() => {
    onPasteRef.current = onPaste;
  }, [onPaste]);

  // Handle paste event
  const handlePaste = useCallback((event: ClipboardEvent) => {
    if (!enabled) return;

    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file && onPasteRef.current) {
          event.preventDefault();
          onPasteRef.current(file);
          break;
        }
      }
    }
  }, [enabled]);

  // Add event listener
  useEffect(() => {
    if (!enabled) return;

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [enabled, handlePaste]);

  return {
    // Utility function to programmatically paste
    pasteFromClipboard: useCallback(async (): Promise<File | null> => {
      try {
        const clipboardItems = await navigator.clipboard.read();

        for (const item of clipboardItems) {
          const imageType = item.types.find((type) => type.startsWith("image/"));
          if (imageType) {
            const blob = await item.getType(imageType);
            const file = new File([blob], `clipboard-${Date.now()}.png`, {
              type: imageType,
            });
            return file;
          }
        }
      } catch (error) {
        console.warn("Konnte nicht aus Zwischenablage lesen:", error);
      }

      return null;
    }, []),
  };
}
