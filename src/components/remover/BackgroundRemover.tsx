"use client";

import { useState, useCallback, useEffect } from "react";
import { ImageUploader } from "./ImageUploader";
import { ProcessingOverlay } from "./ProcessingOverlay";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { BackgroundPicker } from "./BackgroundPicker";
import { DownloadPanel } from "./DownloadPanel";
import { useBackgroundRemoval } from "@/hooks/useBackgroundRemoval";
import { useClipboard } from "@/hooks/useClipboard";
import { useLocalHistory } from "@/hooks/useLocalHistory";
import { useDownload } from "@/hooks/useDownload";
import {
  compositeWithColor,
  compositeWithGradient,
  blobToImage,
  blobToDataURL,
} from "@/lib/canvasUtils";
import { parseGradientColors } from "@/lib/presetBackgrounds";
import { AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackgroundRemoverProps {
  defaultBackground?: string;
  defaultTab?: string;
  className?: string;
}

export function BackgroundRemover({
  defaultBackground = "transparent",
  defaultTab = "transparent",
  className,
}: BackgroundRemoverProps) {
  const {
    status,
    progress,
    progressStage,
    originalFile,
    originalURL,
    originalWidth,
    originalHeight,
    resultBlob,
    resultURL,
    errorMessage,
    processingTime,
    processImage,
    reset,
    updateResult,
  } = useBackgroundRemoval();

  const { addToHistory } = useLocalHistory();
  const { copyToClipboard } = useDownload();

  const [selectedBackground, setSelectedBackground] = useState<{
    type: string;
    value: string | null;
  }>({ type: defaultBackground, value: null });
  const [compositeBlob, setCompositeBlob] = useState<Blob | null>(null);

  // Handle clipboard paste
  useClipboard({
    onPaste: (file) => {
      if (status === "idle") {
        processImage(file);
      }
    },
    enabled: status === "idle",
  });

  // Handle image selection
  const handleImageSelect = useCallback(
    (file: File, preview: string) => {
      processImage(file);
    },
    [processImage]
  );

  // Handle background selection
  const handleBackgroundSelect = useCallback(
    async (type: string, value: string | null) => {
      setSelectedBackground({ type, value });

      if (!resultBlob || !originalWidth || !originalHeight) return;

      try {
        let newBlob: Blob | null = null;

        if (type === "transparent") {
          newBlob = resultBlob;
        } else if (type === "color" && value) {
          newBlob = await compositeWithColor(resultBlob, value, originalWidth, originalHeight);
        } else if (type === "gradient" && value) {
          const colors = parseGradientColors(value);
          newBlob = await compositeWithGradient(
            resultBlob,
            { type: "linear", angle: 135, colors },
            originalWidth,
            originalHeight
          );
        }

        if (newBlob) {
          const url = URL.createObjectURL(newBlob);
          setCompositeBlob(newBlob);
          // Revoke old composite URL if exists
        }
      } catch (error) {
        console.error("Fehler beim Anwenden des Hintergrunds:", error);
      }
    },
    [resultBlob, originalWidth, originalHeight]
  );

  // Save to history when processing is complete
  useEffect(() => {
    if (status === "done" && resultURL && originalWidth && originalHeight) {
      addToHistory(resultURL, originalWidth, originalHeight, processingTime);
    }
  }, [status, resultURL, originalWidth, originalHeight, processingTime, addToHistory]);

  // Reset handler
  const handleReset = useCallback(() => {
    reset();
    setSelectedBackground({ type: defaultBackground, value: null });
    setCompositeBlob(null);
  }, [reset, defaultBackground]);

  // Determine which blob to use for download
  const downloadBlob = selectedBackground.type === "transparent" ? resultBlob : compositeBlob;

  return (
    <div id="tool" className={cn("w-full", className)}>
      {/* Error state */}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="font-medium text-red-700 dark:text-red-300">
                Fehler beim Verarbeiten
              </p>
              <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Erneut versuchen
          </button>
        </div>
      )}

      {/* Upload state */}
      {status === "idle" && (
        <ImageUploader onImageSelect={handleImageSelect} />
      )}

      {/* Processing state */}
      {(status === "uploading" || status === "processing") && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <ProcessingOverlay
            progress={progress}
            stage={progressStage}
            originalPreview={originalURL}
          />
        </div>
      )}

      {/* Result state */}
      {status === "done" && resultURL && (
        <div className="space-y-6">
          {/* Success message */}
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Hintergrund erfolgreich entfernt!</span>
            {processingTime && (
              <span className="ml-auto text-sm opacity-75">
                {processingTime}ms
              </span>
            )}
          </div>

          {/* Before/After comparison */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <BeforeAfterSlider
              beforeSrc={originalURL ?? ""}
              afterSrc={compositeBlob ? URL.createObjectURL(compositeBlob) : resultURL}
            />
          </div>

          {/* Background selection */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
              Hintergrund wählen
            </h3>
            <BackgroundPicker
              onSelect={handleBackgroundSelect}
              defaultTab={defaultTab}
            />
          </div>

          {/* Download panel */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
              Herunterladen
            </h3>
            <DownloadPanel
              resultBlob={downloadBlob ?? resultBlob!}
              onReset={handleReset}
            />
          </div>
        </div>
      )}
    </div>
  );
}
