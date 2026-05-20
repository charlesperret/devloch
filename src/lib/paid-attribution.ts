export const PAID_ATTRIBUTION_STORAGE_KEY = "devlo_paid_attribution_v1";

export type PaidAttribution = {
  current_page_url?: string;
  gbraid?: string;
  gclid?: string;
  landing_page_url?: string;
  paid_first_seen_at?: string;
  paid_host?: string;
  paid_session_id?: string;
  referrer?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
  wbraid?: string;
};

const paidHostnames = new Set([
  "devlosales.com",
  "www.devlosales.com",
  "devlosales.de",
  "www.devlosales.de",
]);
const paidParamKeys = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function isPaidHostname(hostname: string) {
  return paidHostnames.has(hostname.toLowerCase());
}

export function hasPaidAttribution(attribution: PaidAttribution) {
  return (
    attribution.paid_host === "true" ||
    paidParamKeys.some((key) => Boolean(attribution[key]))
  );
}

export function readPaidAttributionFromSearch(searchParams: URLSearchParams): PaidAttribution {
  const attribution: PaidAttribution = {};

  paidParamKeys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      attribution[key] = value;
    }
  });

  return attribution;
}

export function compactPaidAttribution(attribution: PaidAttribution): PaidAttribution {
  return Object.fromEntries(
    Object.entries(attribution).filter(([, value]) => typeof value === "string" && value.trim().length > 0),
  ) as PaidAttribution;
}

function createPaidSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `paid_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function buildPaidAttributionSnapshot(params: {
  currentAttribution: PaidAttribution;
  currentUrl: string;
  paidHost: boolean;
  referrer?: string;
  storedAttribution: PaidAttribution;
}) {
  const hasFreshPaidParams = params.paidHost || hasPaidAttribution(params.currentAttribution);
  const firstSeenAt = params.storedAttribution.paid_first_seen_at || new Date().toISOString();

  return compactPaidAttribution({
    ...params.storedAttribution,
    ...params.currentAttribution,
    paid_first_seen_at: firstSeenAt,
    paid_host: params.paidHost ? "true" : params.storedAttribution.paid_host,
    paid_session_id: params.storedAttribution.paid_session_id || createPaidSessionId(),
    landing_page_url: hasFreshPaidParams
      ? params.currentUrl
      : params.storedAttribution.landing_page_url,
    current_page_url: params.currentUrl,
    referrer: params.storedAttribution.referrer || params.referrer,
  });
}

function buildAnalyticsPayload(attribution: PaidAttribution) {
  return {
    event_category: "paid_acquisition",
    qualified_commitment_min_chf: 22000,
    qualified_commitment_max_chf: 25000,
    ...compactPaidAttribution(attribution),
  };
}

export function pushPaidAnalyticsEvent(event: string, attribution: PaidAttribution) {
  if (typeof window === "undefined" || !hasPaidAttribution(attribution)) return;

  const payload = buildAnalyticsPayload(attribution);
  window.dataLayer = window.dataLayer || [];

  // Object form keeps the event consumable by GTM / LinkedIn later.
  window.dataLayer.push({
    event,
    ...payload,
  });

  // gtag form sends the event directly to GA4 without requiring GTM triggers.
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  } else {
    window.dataLayer.push(["event", event, payload]);
  }
}

export function buildPaidStrategySelections(attribution: PaidAttribution) {
  const compact = compactPaidAttribution(attribution);
  const lines = [
    "=== PAID ACQUISITION ATTRIBUTION ===",
    "Paid site strategy: same devlo.ch experience served on devlosales.com with noindex",
    "Qualification threshold: EUR/CHF 22k-25k over 4 months",
    "",
    ...Object.entries(compact).map(([key, value]) => `${key}: ${value}`),
  ];

  return lines.join("\n");
}
