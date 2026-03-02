"use client";

import { useCallback, useRef } from "react";
import { Upload, Image as ImageIcon, Link, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { useImageUpload } from "@/hooks/useImageUpload";
import { formatFileSize, MAX_FILE_SIZE } from "@/lib/imageUtils";

interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  className?: string;
}

export function ImageUploader({ onImageSelect, className }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const { handleFile, handleDragEnter, handleDragLeave, handleDragOver, handleDrop, isDragging, error, clearError } =
    useImageUpload({
      onSuccess: onImageSelect,
    });

  const handleUrlSubmit = useCallback(async () => {
    const url = urlInputRef.current?.value;
    if (!url) return;

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = url.split("/").pop() || "image.jpg";
      const file = new File([blob], filename, { type: blob.type });
      await handleFile(file);
    } catch {
      // Handle error
    }
  }, [handleFile]);

  const handlePasteClick = useCallback(async () => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        const imageType = item.types.find((type) => type.startsWith("image/"));
        if (imageType) {
          const blob = await item.getType(imageType);
          const file = new File([blob], `clipboard-${Date.now()}.png`, { type: imageType });
          await handleFile(file);
          return;
        }
      }
    } catch {
      // Clipboard API not supported or no image
    }
  }, [handleFile]);

  return (
    <div className={cn("w-full", className)}>
      {/* Drop zone */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-all",
          isDragging
            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950"
            : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800",
          error && "border-red-500 bg-red-50 dark:bg-red-950"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp,image/heic,image/heif"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4 text-center">
          <div
            className={cn(
              "rounded-full p-4",
              isDragging
                ? "bg-indigo-100 dark:bg-indigo-900"
                : "bg-gray-100 dark:bg-gray-800"
            )}
          >
            <Upload
              className={cn(
                "h-8 w-8",
                isDragging
                  ? "text-indigo-500"
                  : "text-gray-400 dark:text-gray-500"
              )}
            />
          </div>

          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Drag dein Bild hierher oder klicke
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              JPG, PNG, WebP bis {formatFileSize(MAX_FILE_SIZE)} — Kostenlos
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-indigo-500 px-6 py-2.5 font-medium text-white transition-colors hover:bg-indigo-600"
          >
            Datei auswählen
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            oder füge ein Bild mit <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-700">Strg+V</kbd> ein
          </p>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-3 flex items-center justify-between rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          <span>{error}</span>
          <button onClick={clearError} className="text-red-500 hover:text-red-700">
            ×
          </button>
        </div>
      )}

      {/* Alternative upload methods */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handlePasteClick}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <Clipboard className="h-4 w-4" />
          Aus Zwischenablage
        </button>

        <div className="flex items-center gap-2">
          <input
            ref={urlInputRef}
            type="url"
            placeholder="Bild-URL eingeben..."
            className="w-48 rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
          />
          <button
            onClick={handleUrlSubmit}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Link className="h-4 w-4" />
            Laden
          </button>
        </div>
      </div>
    </div>
  );
}
