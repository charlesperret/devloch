"use client";

import { useEffect } from "react";

import {
  buildPaidAttributionSnapshot,
  compactPaidAttribution,
  hasPaidAttribution,
  isPaidHostname,
  PAID_ATTRIBUTION_STORAGE_KEY,
  pushPaidAnalyticsEvent,
  readPaidAttributionFromCookie,
  readPaidAttributionFromSearch,
  type PaidAttribution,
  writePaidAttributionCookie,
} from "@/lib/paid-attribution";

function readStoredAttribution() {
  try {
    const stored = window.sessionStorage.getItem(PAID_ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as PaidAttribution) : {};
  } catch {
    return {};
  }
}

function writeStoredAttribution(attribution: PaidAttribution) {
  try {
    window.sessionStorage.setItem(PAID_ATTRIBUTION_STORAGE_KEY, JSON.stringify(compactPaidAttribution(attribution)));
  } catch {
    // sessionStorage can be unavailable in strict privacy modes.
  }
}

export function PaidAttributionTracker() {
  useEffect(() => {
    const paidHost = isPaidHostname(window.location.hostname);
    const currentAttribution = readPaidAttributionFromSearch(new URLSearchParams(window.location.search));
    const storedAttribution = {
      ...readPaidAttributionFromCookie(),
      ...readStoredAttribution(),
    };
    const paidVisit = paidHost || hasPaidAttribution(currentAttribution) || hasPaidAttribution(storedAttribution);

    if (!paidVisit) return;

    const attribution = buildPaidAttributionSnapshot({
      currentAttribution,
      currentUrl: window.location.href,
      paidHost,
      referrer: document.referrer,
      storedAttribution,
    });

    writeStoredAttribution(attribution);
    writePaidAttributionCookie(attribution);
    pushPaidAnalyticsEvent("paid_site_view", attribution);
  }, []);

  return null;
}
