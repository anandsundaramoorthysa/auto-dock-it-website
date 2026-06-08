"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/ui/icon";

/** Round icon button that flips between light and dark, mirroring the app. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle color theme"
      }
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border2 bg-surface text-fg transition-colors hover:border-fg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg ${className}`}
    >
      {/* Render-safe before mount: show a neutral icon to avoid mismatch. */}
      {mounted ? (
        <Icon name={isDark ? "Sun" : "Moon"} className="h-4 w-4" />
      ) : (
        <Icon name="Sun" className="h-4 w-4" />
      )}
    </button>
  );
}
