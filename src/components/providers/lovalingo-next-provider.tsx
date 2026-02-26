"use client";

import type { ReactNode } from "react";
import { LovalingoProvider } from "@lovalingo/lovalingo";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_4lsv3rhzupizsd64v86j2p8w38aeli92";

export function LovalingoNextProvider({ children }: { children: ReactNode }) {
  return (
    <LovalingoProvider
      publicAnonKey={LOVALINGO_PUBLIC_ANON_KEY}
      defaultLocale="fr"
      locales={["fr", "en"]}
      routing="path"
      switcherPosition="bottom-right"
      switcherOffsetY={20}
      switcherTheme="dark"
      overlayBgColor="#ffffff"
    >
      {children}
    </LovalingoProvider>
  );
}
