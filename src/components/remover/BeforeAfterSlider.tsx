"use client";

import { useState } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  className,
}: BeforeAfterSliderProps) {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50));
  const handleResetZoom = () => setZoom(100);

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      {/* Zoom controls */}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-lg bg-white/90 p-1 shadow-lg dark:bg-gray-900/90">
        <button
          onClick={handleZoomOut}
          className="rounded p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          title="Verkleinern"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="min-w-[3rem] px-2 text-center text-xs font-medium text-gray-600 dark:text-gray-400">
          {zoom}%
        </span>
        <button
          onClick={handleZoomIn}
          className="rounded p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          title="Vergrößern"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          onClick={handleResetZoom}
          className="rounded p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          title="Zurücksetzen"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Comparison slider */}
      <div
        className="relative overflow-hidden"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "center center",
        }}
      >
        <ReactCompareSlider
          itemOne={
            <div className="relative h-full w-full">
              <img
                src={beforeSrc}
                alt={beforeLabel}
                className="h-full w-full object-contain"
              />
              <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white">
                {beforeLabel}
              </span>
            </div>
          }
          itemTwo={
            <div className="relative h-full w-full">
              {/* Checkerboard for transparency */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <img
                src={afterSrc}
                alt={afterLabel}
                className="relative z-10 h-full w-full object-contain"
              />
              <span className="absolute bottom-3 right-3 z-20 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white">
                {afterLabel}
              </span>
            </div>
          }
          className="h-[400px] w-full md:h-[500px]"
        />
      </div>

      {/* Instructions */}
      <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
        Ziehe den Regler, um Vorher/Nachher zu vergleichen
      </p>
    </div>
  );
}
