"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { X, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "cookie_consent";

export type ConsentLevel = "none" | "minimal" | "accepted";

// Helper function to get stored consent
function getStoredConsent(): ConsentLevel {
  if (typeof window === "undefined") return "none";
  const stored = localStorage.getItem(CONSENT_KEY);
  return (stored as ConsentLevel) || "none";
}

// Consent store
let consentListeners: Array<() => void> = [];

function subscribeToConsentStore(callback: () => void) {
  consentListeners.push(callback);
  return () => {
    consentListeners = consentListeners.filter((l) => l !== callback);
  };
}

function getConsentSnapshot(): ConsentLevel {
  return getStoredConsent();
}

function notifyConsentChange(consent: ConsentLevel) {
  localStorage.setItem(CONSENT_KEY, consent);
  consentListeners.forEach((l) => l());
  window.dispatchEvent(new CustomEvent("consent-changed", { detail: consent }));
}

export function GdprBanner() {
  const consent = useSyncExternalStore(subscribeToConsentStore, getConsentSnapshot, () => "none");
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [localConsent, setLocalConsent] = useState<ConsentLevel>(consent);

  // Show banner after delay if no consent
  useEffect(() => {
    const timer = setTimeout(() => {
      if (getStoredConsent() === "none") {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    notifyConsentChange("accepted");
    setLocalConsent("accepted");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    notifyConsentChange("minimal");
    setLocalConsent("minimal");
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    notifyConsentChange(localConsent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6",
        "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
        "shadow-lg"
      )}
    >
      <div className="container mx-auto max-w-4xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wir verwenden Cookies, um unsere Website zu verbessern und Werbung zu
                personalisieren.{" "}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Deine Bilder werden niemals gespeichert oder an Server übertragen.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Settings className="mr-2 inline h-4 w-4" />
                Einstellungen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Nur notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Notwendige Cookies
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Für die Funktion der Website erforderlich
                  </p>
                </div>
                <span className="text-sm text-gray-500">Immer aktiv</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Analyse & Werbung
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Google Analytics und AdSense
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={localConsent === "accepted"}
                    onChange={(e) => setLocalConsent(e.target.checked ? "accepted" : "minimal")}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Hook to check consent status
 */
export function useConsent() {
  const consent = useSyncExternalStore(subscribeToConsentStore, getConsentSnapshot, () => "none");

  return {
    consent,
    hasConsent: consent === "accepted",
  };
}
