"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

import {
  ThemeToggler,
  type ThemeSelection,
  type Resolved,
  type Direction,
} from "@/components/animate-ui/primitives/effects/theme-toggler";

interface ThemeTogglerDemoProps {
  direction: Direction;
  position: "tl" | "tr" | "bl" | "br";
}

export const ThemeTogglerButton = ({
  direction,
  position,
}: ThemeTogglerDemoProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPositionClasses = (pos: string) => {
    switch (pos) {
      case "tl":
        return "top-4 left-4";
      case "tr":
        return "top-4 right-4";
      case "bl":
        return "bottom-4 left-4";
      case "br":
        return "bottom-4 right-4";
      default:
        return "bottom-4 right-4";
    }
  };

  if (!mounted) {
    return (
      <button
        className={clsx(
          "fixed z-50 p-3 rounded-full bg-white border border-gray-200 shadow-lg",
          getPositionClasses(position)
        )}
        aria-label="테마 토글"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </button>
    );
  }

  return (
    <ThemeToggler
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
    >
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === "dark" ? "light" : "dark";

        return (
          <button
            onClick={() => toggleTheme(nextTheme)}
            className={clsx(
              "fixed z-50 p-3 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer",
              getPositionClasses(position)
            )}
            aria-label="테마 토글"
          >
            {effective === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        );
      }}
    </ThemeToggler>
  );
};
