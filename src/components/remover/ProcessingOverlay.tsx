"use client";

import { Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPercentage } from "@/lib/formatters";

interface ProcessingOverlayProps {
  progress: number;
  stage: string;
  originalPreview?: string | null;
  className?: string;
}

export function ProcessingOverlay({
  progress,
  stage,
  originalPreview,
  className,
}: ProcessingOverlayProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6 py-12", className)}>
      {/* Preview image (dimmed) */}
      {originalPreview && (
        <div className="relative">
          <img
            src={originalPreview}
            alt="Wird verarbeitet..."
            className="max-h-[300px] rounded-lg opacity-30"
          />
          {/* Processing overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-500" />
              <div className="flex h-20 w-20 items-center justify-center">
                <Sparkles className="h-8 w-8 text-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status text */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          KI analysiert dein Bild...
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stage}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md space-y-2">
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
          {formatPercentage(progress)}
        </p>
      </div>

      {/* Privacy reminder */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Dein Bild bleibt auf deinem Gerät</span>
      </div>
    </div>
  );
}
