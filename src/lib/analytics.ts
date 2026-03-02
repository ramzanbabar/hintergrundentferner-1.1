"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Event tracking types
export type AnalyticsEvent =
  | "image_upload"
  | "background_removal_start"
  | "background_removal_complete"
  | "background_removal_error"
  | "download_png"
  | "download_jpg"
  | "download_webp"
  | "copy_to_clipboard"
  | "batch_upload"
  | "batch_complete"
  | "background_select"
  | "tab_switch";

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Initialize Google Analytics
 */
export function initGA(measurementId: string): void {
  if (typeof window === "undefined") return;

  // Load GA script dynamically
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: AnalyticsEvent, params?: EventParams): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, params);
}

/**
 * Track page view
 */
export function trackPageView(path: string): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", process.env.NEXT_PUBLIC_GA4_ID ?? "", {
    page_path: path,
  });
}

/**
 * Track image upload
 */
export function trackImageUpload(fileSize: number, format: string): void {
  trackEvent("image_upload", {
    file_size_kb: Math.round(fileSize / 1024),
    format,
  });
}

/**
 * Track background removal completion
 */
export function trackBackgroundRemovalComplete(
  processingTime: number,
  imageSize: string
): void {
  trackEvent("background_removal_complete", {
    processing_time_ms: processingTime,
    image_size: imageSize,
  });
}

/**
 * Track download
 */
export function trackDownload(format: "png" | "jpg" | "webp"): void {
  trackEvent(`download_${format}` as AnalyticsEvent);
}

/**
 * Track background selection
 */
export function trackBackgroundSelect(type: string): void {
  trackEvent("background_select", { background_type: type });
}

/**
 * Track error
 */
export function trackError(errorType: string, errorMessage: string): void {
  trackEvent("background_removal_error", {
    error_type: errorType,
    error_message: errorMessage,
  });
}
