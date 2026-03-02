/**
 * German formatters for the application
 */

// German locale
const LOCALE = "de-DE";

/**
 * Format a number with German locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat(LOCALE).format(num);
}

/**
 * Format a file size in bytes to human-readable format (German)
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toLocaleString(LOCALE, { maximumFractionDigits: 1 })} KB`;
  }
  return `${(bytes / (1024 * 1024)).toLocaleString(LOCALE, { maximumFractionDigits: 1 })} MB`;
}

/**
 * Format a duration in milliseconds to human-readable format (German)
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${ms} ms`;
  }
  if (ms < 60000) {
    const seconds = ms / 1000;
    return `${seconds.toLocaleString(LOCALE, { maximumFractionDigits: 1 })} Sekunden`;
  }
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.round((ms % 60000) / 1000);
  return `${minutes} Min. ${seconds} Sek.`;
}

/**
 * Format a date in German format
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

/**
 * Format a date and time in German format
 */
export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

/**
 * Format a relative time (e.g., "vor 5 Minuten")
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diffMs / 1000);
  const diffMinutes = Math.round(diffSeconds / 60);
  const diffHours = Math.round(diffMinutes / 60);
  const diffDays = Math.round(diffHours / 24);

  if (diffSeconds < 60) {
    return "gerade eben";
  }
  if (diffMinutes < 60) {
    return `vor ${diffMinutes} Minute${diffMinutes === 1 ? "" : "n"}`;
  }
  if (diffHours < 24) {
    return `vor ${diffHours} Stunde${diffHours === 1 ? "" : "n"}`;
  }
  if (diffDays < 7) {
    return `vor ${diffDays} Tag${diffDays === 1 ? "" : "en"}`;
  }
  return formatDate(date);
}

/**
 * Format image dimensions
 */
export function formatDimensions(width: number, height: number): string {
  return `${width.toLocaleString(LOCALE)} × ${height.toLocaleString(LOCALE)} px`;
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toLocaleString(LOCALE)}%`;
}
