"use client";

import { useEffect, useState } from "react";

import {
  applyGoogleConsentChoice,
  readGoogleConsentChoice,
  writeGoogleConsentChoice,
  type GoogleConsentChoice,
} from "@/lib/consent-mode";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type ConsentModeManagerProps = {
  locale: SupportedLocale;
};

const copyByLocale: Record<
  SupportedLocale,
  {
    accept: string;
    decline: string;
    label: string;
    text: string;
  }
> = {
  fr: {
    accept: "Accepter",
    decline: "Refuser",
    label: "Préférences de mesure",
    text: "Nous utilisons des cookies de mesure pour comprendre les campagnes et améliorer nos pages.",
  },
  en: {
    accept: "Accept",
    decline: "Decline",
    label: "Measurement preferences",
    text: "We use measurement cookies to understand campaign performance and improve our pages.",
  },
  de: {
    accept: "Akzeptieren",
    decline: "Ablehnen",
    label: "Messeinstellungen",
    text: "Wir nutzen Mess-Cookies, um Kampagnen zu verstehen und unsere Seiten zu verbessern.",
  },
  nl: {
    accept: "Accepteren",
    decline: "Weigeren",
    label: "Meetvoorkeuren",
    text: "We gebruiken meetcookies om campagnes te begrijpen en onze pagina's te verbeteren.",
  },
};

export function ConsentModeManager({ locale }: ConsentModeManagerProps) {
  const [visible, setVisible] = useState(false);
  const copy = copyByLocale[locale] ?? copyByLocale.fr;

  useEffect(() => {
    const storedChoice = readGoogleConsentChoice();
    if (storedChoice) {
      applyGoogleConsentChoice(storedChoice);
      return;
    }

    setVisible(true);
  }, []);

  const choose = (choice: GoogleConsentChoice) => {
    writeGoogleConsentChoice(choice);
    applyGoogleConsentChoice(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      aria-label={copy.label}
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto flex max-w-3xl flex-col gap-3 rounded-lg border border-white/20 bg-[#153a54] p-4 text-white shadow-2xl sm:flex-row sm:items-center sm:justify-between"
      role="dialog"
    >
      <p className="text-sm font-medium leading-5 text-white/90">{copy.text}</p>
      <div className="flex shrink-0 gap-2">
        <button
          className="rounded-md border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          type="button"
          onClick={() => choose("denied")}
        >
          {copy.decline}
        </button>
        <button
          className="rounded-md bg-[#f47b5f] px-4 py-2 text-sm font-extrabold text-[#0f2b3c] transition hover:bg-[#e3654d]"
          type="button"
          onClick={() => choose("granted")}
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
