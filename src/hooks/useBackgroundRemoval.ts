"use client";

import { useState, useCallback } from "react";
import { removeImageBackground, revokeBlobUrl } from "@/lib/backgroundRemoval";
import type { RemovalConfig } from "@/lib/backgroundRemoval";

export type RemovalStatus = "idle" | "uploading" | "processing" | "done" | "error";

export interface BackgroundRemovalState {
  status: RemovalStatus;
  progress: number;
  progressStage: string;
  originalFile: File | null;
  originalURL: string | null;
  originalWidth: number | null;
  originalHeight: number | null;
  resultBlob: Blob | null;
  resultURL: string | null;
  errorMessage: string | null;
  processingTime: number | null;
}

const initialState: BackgroundRemovalState = {
  status: "idle",
  progress: 0,
  progressStage: "",
  originalFile: null,
  originalURL: null,
  originalWidth: null,
  originalHeight: null,
  resultBlob: null,
  resultURL: null,
  errorMessage: null,
  processingTime: null,
};

export function useBackgroundRemoval() {
  const [state, setState] = useState<BackgroundRemovalState>(initialState);

  /**
   * Process an image file and remove its background
   */
  const processImage = useCallback(
    async (file: File, config?: Partial<RemovalConfig>) => {
      // Clean up previous result
      if (state.resultURL) {
        revokeBlobUrl(state.resultURL);
      }
      if (state.originalURL) {
        URL.revokeObjectURL(state.originalURL);
      }

      // Set uploading state
      setState({
        ...initialState,
        status: "uploading",
        originalFile: file,
        originalURL: URL.createObjectURL(file),
      });

      try {
        // Get image dimensions
        const img = new Image();
        const dimensions = await new Promise<{ width: number; height: number }>(
          (resolve, reject) => {
            img.onload = () => {
              resolve({ width: img.width, height: img.height });
            };
            img.onerror = () => reject(new Error("Bild konnte nicht geladen werden"));
            img.src = URL.createObjectURL(file);
          }
        );

        // Update state with dimensions and start processing
        setState((prev) => ({
          ...prev,
          status: "processing",
          progress: 0,
          progressStage: "Initialisiere...",
          originalWidth: dimensions.width,
          originalHeight: dimensions.height,
        }));

        // Process image
        const result = await removeImageBackground(
          file,
          config,
          (progress, stage) => {
            setState((prev) => ({
              ...prev,
              progress,
              progressStage: stage,
            }));
          }
        );

        // Success
        setState((prev) => ({
          ...prev,
          status: "done",
          progress: 100,
          progressStage: "Fertig!",
          resultBlob: result.blob,
          resultURL: result.url,
          processingTime: result.processingTime,
        }));

        return result;
      } catch (error) {
        setState((prev) => ({
          ...prev,
          status: "error",
          errorMessage:
            error instanceof Error
              ? error.message
              : "Ein unbekannter Fehler ist aufgetreten",
        }));
        throw error;
      }
    },
    [state.resultURL, state.originalURL]
  );

  /**
   * Reset state and clean up resources
   */
  const reset = useCallback(() => {
    if (state.resultURL) {
      revokeBlobUrl(state.resultURL);
    }
    if (state.originalURL) {
      URL.revokeObjectURL(state.originalURL);
    }
    setState(initialState);
  }, [state.resultURL, state.originalURL]);

  /**
   * Update result blob (e.g., after compositing with new background)
   */
  const updateResult = useCallback((blob: Blob, url: string) => {
    // Revoke old URL if exists
    if (state.resultURL) {
      revokeBlobUrl(state.resultURL);
    }

    setState((prev) => ({
      ...prev,
      resultBlob: blob,
      resultURL: url,
    }));
  }, [state.resultURL]);

  return {
    ...state,
    processImage,
    reset,
    updateResult,
  };
}
