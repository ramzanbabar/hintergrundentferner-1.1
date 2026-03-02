"use client";

import { useEffect, useState } from "react";
import { useConsent } from "@/components/layout/GdprBanner";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

export function AdSlot({ slot, format = "auto", className }: AdSlotProps) {
  const { hasConsent } = useConsent();
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!hasConsent) return;

    // Load AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", process.env.NEXT_PUBLIC_ADSENSE_ID ?? "");
    script.onload = () => setAdLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [hasConsent]);

  if (!hasConsent) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-8 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
          className
        )}
      >
        Werbung (akzeptiere Cookies zum Anzeigen)
      </div>
    );
  }

  return (
    <div className={cn("flex justify-center", className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format={format}
        data-ad-slot={slot}
        data-full-width-responsive="true"
      />
    </div>
  );
}
