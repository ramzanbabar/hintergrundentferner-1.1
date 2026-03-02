"use client";

import { useState } from "react";
import { Download, Copy, Share2, RefreshCw, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDownload } from "@/hooks/useDownload";

interface DownloadPanelProps {
  resultBlob: Blob;
  onReset?: () => void;
  className?: string;
}

export function DownloadPanel({
  resultBlob,
  onReset,
  className,
}: DownloadPanelProps) {
  const { downloadAsPNG, downloadAsJPG, downloadAsWebP, copyToClipboard, shareImage } =
    useDownload();
  const [isCopying, setIsCopying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showAllFormats, setShowAllFormats] = useState(false);

  const handleCopy = async () => {
    setIsCopying(true);
    const success = await copyToClipboard(resultBlob);
    setIsCopying(false);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    await shareImage(resultBlob);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Primary download button */}
      <Button
        onClick={() => downloadAsPNG(resultBlob)}
        className="w-full bg-emerald-500 hover:bg-emerald-600"
        size="lg"
      >
        <Download className="mr-2 h-5 w-5" />
        PNG herunterladen — kostenlos
      </Button>

      {/* Other format options */}
      <div className="space-y-2">
        <button
          onClick={() => setShowAllFormats(!showAllFormats)}
          className="flex w-full items-center justify-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Weitere Formate
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", showAllFormats && "rotate-180")}
          />
        </button>

        {showAllFormats && (
          <div className="flex gap-2">
            <Button
              onClick={() => downloadAsJPG(resultBlob)}
              variant="outline"
              className="flex-1"
            >
              <Download className="mr-2 h-4 w-4" />
              JPG
            </Button>
            <Button
              onClick={() => downloadAsWebP(resultBlob)}
              variant="outline"
              className="flex-1"
            >
              <Download className="mr-2 h-4 w-4" />
              WebP
            </Button>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
          variant="outline"
          className="flex-1"
          disabled={isCopying}
        >
          {isCopied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-emerald-500" />
              Kopiert!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Kopieren
            </>
          )}
        </Button>

        {/* Share button (mobile) */}
        {typeof navigator !== "undefined" && navigator.share && (
          <Button onClick={handleShare} variant="outline" className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Teilen
          </Button>
        )}

        {/* Reset button */}
        {onReset && (
          <Button onClick={onReset} variant="outline" className="flex-1">
            <RefreshCw className="mr-2 h-4 w-4" />
            Neues Bild
          </Button>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        🔒 Dein Bild wurde ausschließlich lokal verarbeitet
      </p>
    </div>
  );
}
