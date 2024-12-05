"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme")!;
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", "dark");
  }, []);
  return <ThemeProvider>{children}</ThemeProvider>;
}
