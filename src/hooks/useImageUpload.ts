"use client";

import { useState, useCallback } from "react";
import {
  validateImage,
  MAX_FILE_SIZE,
  SUPPORTED_FORMATS,
} from "@/lib/imageUtils";

export interface ImageUploadState {
  file: File | null;
  preview: string | null;
  error: string | null;
  isDragging: boolean;
}

export interface UseImageUploadOptions {
  maxSize?: number;
  onSuccess?: (file: File, preview: string) => void;
  onError?: (error: string) => void;
}

export function useImageUpload(options: UseImageUploadOptions = {}) {
  const { maxSize = MAX_FILE_SIZE, onSuccess, onError } = options;

  const [state, setState] = useState<ImageUploadState>({
    file: null,
    preview: null,
    error: null,
    isDragging: false,
  });

  /**
   * Handle file selection
   */
  const handleFile = useCallback(
    async (file: File) => {
      // Reset error
      setState((prev) => ({ ...prev, error: null }));

      // Validate
      const validation = await validateImage(file);
      if (!validation.valid) {
        setState((prev) => ({ ...prev, error: validation.error ?? null }));
        onError?.(validation.error ?? "Validierungsfehler");
        return false;
      }

      // Create preview
      const preview = URL.createObjectURL(file);

      // Update state
      setState({
        file,
        preview,
        error: null,
        isDragging: false,
      });

      onSuccess?.(file, preview);
      return true;
    },
    [onSuccess, onError]
  );

  /**
   * Handle file input change
   */
  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return false;
      return handleFile(file);
    },
    [handleFile]
  );

  /**
   * Handle drag events
   */
  const handleDragEnter = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setState((prev) => ({ ...prev, isDragging: true }));
    },
    []
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setState((prev) => ({ ...prev, isDragging: false }));
    },
    []
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  const handleDrop = useCallback(
    async (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setState((prev) => ({ ...prev, isDragging: false }));

      const file = event.dataTransfer.files[0];
      if (!file) return false;
      return handleFile(file);
    },
    [handleFile]
  );

  /**
   * Handle paste from clipboard
   */
  const handlePaste = useCallback(
    async (event: ClipboardEvent) => {
      const items = event.clipboardData?.items;
      if (!items) return false;

      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) {
            return handleFile(file);
          }
        }
      }

      return false;
    },
    [handleFile]
  );

  /**
   * Reset state
   */
  const reset = useCallback(() => {
    if (state.preview) {
      URL.revokeObjectURL(state.preview);
    }
    setState({
      file: null,
      preview: null,
      error: null,
      isDragging: false,
    });
  }, [state.preview]);

  /**
   * Clear error
   */
  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    handleFile,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
    reset,
    clearError,
    accept: SUPPORTED_FORMATS.join(","),
    maxSize,
  };
}
