"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushAnalyticsEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  } else {
    window.dataLayer.push(["event", event, params]);
  }
}
