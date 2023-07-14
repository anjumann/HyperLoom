"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-wrap-balancer";
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <Provider>{children}</Provider>
    </NextThemesProvider>
  );
}
