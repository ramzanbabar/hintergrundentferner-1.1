"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "bg_removal_history";
const MAX_HISTORY_ITEMS = 10;
const MAX_THUMBNAIL_SIZE = 200; // pixels
const MAX_DATA_URL_SIZE = 2 * 1024 * 1024; // 2MB

export interface HistoryItem {
  id: string;
  timestamp: number;
  thumbnailURL: string;
  resultURL: string;
  originalWidth: number;
  originalHeight: number;
  processingTime: number | null;
}

/**
 * Generate a thumbnail from an image URL
 */
async function generateThumbnail(
  imageUrl: string,
  maxSize: number = MAX_THUMBNAIL_SIZE
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let newWidth: number;
      let newHeight: number;

      if (img.width > img.height) {
        newWidth = maxSize;
        newHeight = Math.round((img.height / img.width) * maxSize);
      } else {
        newHeight = maxSize;
        newWidth = Math.round((img.width / img.height) * maxSize);
      }

      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas-Kontext nicht verfügbar"));
        return;
      }

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Compress if too large
      let quality = 0.7;
      let dataURL = canvas.toDataURL("image/jpeg", quality);

      while (dataURL.length > MAX_DATA_URL_SIZE && quality > 0.1) {
        quality -= 0.1;
        dataURL = canvas.toDataURL("image/jpeg", quality);
      }

      resolve(dataURL);
    };
    img.onerror = () => reject(new Error("Fehler beim Erstellen des Thumbnails"));
    img.src = imageUrl;
  });
}

/**
 * Load history from localStorage
 */
function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is HistoryItem =>
        typeof item === "object" &&
        typeof item.id === "string" &&
        typeof item.timestamp === "number" &&
        typeof item.thumbnailURL === "string" &&
        typeof item.resultURL === "string"
    );
  } catch {
    return [];
  }
}

/**
 * Save history to localStorage
 */
function saveHistory(history: HistoryItem[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.warn("Konnte Verlauf nicht speichern:", error);
  }
}

// History store
let historyListeners: Array<() => void> = [];
let currentHistory: HistoryItem[] = [];

function subscribeToHistoryStore(callback: () => void) {
  historyListeners.push(callback);
  return () => {
    historyListeners = historyListeners.filter((l) => l !== callback);
  };
}

function getHistorySnapshot(): HistoryItem[] {
  return currentHistory;
}

function notifyHistoryChange(history: HistoryItem[]) {
  currentHistory = history;
  saveHistory(history);
  historyListeners.forEach((l) => l());
}

// Initialize on client
if (typeof window !== "undefined") {
  currentHistory = loadHistory();
}

export function useLocalHistory() {
  const history = useSyncExternalStore(
    subscribeToHistoryStore,
    getHistorySnapshot,
    () => []
  );
  const isLoaded = typeof window !== "undefined";

  /**
   * Add an item to history
   */
  const addToHistory = useCallback(
    async (
      resultURL: string,
      originalWidth: number,
      originalHeight: number,
      processingTime: number | null
    ): Promise<void> => {
      try {
        // Generate thumbnail
        const thumbnailURL = await generateThumbnail(resultURL);

        // Create new item
        const newItem: HistoryItem = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          timestamp: Date.now(),
          thumbnailURL,
          resultURL,
          originalWidth,
          originalHeight,
          processingTime,
        };

        // Update store
        const updated = [newItem, ...currentHistory].slice(0, MAX_HISTORY_ITEMS);
        notifyHistoryChange(updated);
      } catch (error) {
        console.error("Fehler beim Speichern im Verlauf:", error);
      }
    },
    []
  );

  /**
   * Remove an item from history
   */
  const removeFromHistory = useCallback((id: string): void => {
    const updated = currentHistory.filter((item) => item.id !== id);
    notifyHistoryChange(updated);
  }, []);

  /**
   * Clear all history
   */
  const clearHistory = useCallback((): void => {
    notifyHistoryChange([]);
  }, []);

  /**
   * Get a history item by ID
   */
  const getHistoryItem = useCallback(
    (id: string): HistoryItem | undefined => {
      return history.find((item) => item.id === id);
    },
    [history]
  );

  return {
    history,
    isLoaded,
    addToHistory,
    removeFromHistory,
    clearHistory,
    getHistoryItem,
  };
}
