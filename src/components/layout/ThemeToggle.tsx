"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use mounted state synchronously after first render
  if (typeof window !== "undefined" && !mounted) {
    queueMicrotask(() => setMounted(true));
  }

  if (!mounted) {
    return (
      <button
        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        aria-label="Thema wechseln"
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "rounded-lg p-2 transition-colors",
        "text-gray-700 hover:bg-gray-100",
        "dark:text-gray-300 dark:hover:bg-gray-800"
      )}
      aria-label={theme === "dark" ? "Hell-Modus aktivieren" : "Dunkel-Modus aktivieren"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
