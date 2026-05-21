import { isPaidHostname } from "@/lib/paid-hosts";

export const PAID_ATTRIBUTION_STORAGE_KEY = "devlo_paid_attribution_v1";
export const PAID_ATTRIBUTION_COOKIE_KEY = "devlo_paid_attr";
const PAID_ATTRIBUTION_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

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

const paidParamKeys = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export { isPaidHostname };

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

function getCookieDomain() {
  if (typeof window === "undefined") return "";

  const hostname = window.location.hostname.toLowerCase();
  if (hostname === "localhost" || /^[0-9.]+$/.test(hostname)) return "";

  return `domain=${hostname.replace(/^www\./, "")}`;
}

export function readPaidAttributionFromCookie(): PaidAttribution {
  if (typeof document === "undefined") return {};

  const encoded = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${PAID_ATTRIBUTION_COOKIE_KEY}=`))
    ?.split("=")[1];

  if (!encoded) return {};

  try {
    return JSON.parse(decodeURIComponent(encoded)) as PaidAttribution;
  } catch {
    return {};
  }
}

export function writePaidAttributionCookie(attribution: PaidAttribution) {
  if (typeof document === "undefined") return;

  const compact = compactPaidAttribution(attribution);
  if (!hasPaidAttribution(compact)) return;

  document.cookie = [
    `${PAID_ATTRIBUTION_COOKIE_KEY}=${encodeURIComponent(JSON.stringify(compact))}`,
    `max-age=${PAID_ATTRIBUTION_COOKIE_MAX_AGE_SECONDS}`,
    "path=/",
    "SameSite=Lax",
    "Secure",
    getCookieDomain(),
  ].filter(Boolean).join("; ");
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

function buildAnalyticsPayload(attribution: PaidAttribution, params: Record<string, unknown> = {}) {
  return {
    event_category: "paid_acquisition",
    qualified_commitment_min_chf: 22000,
    qualified_commitment_max_chf: 25000,
    ...compactPaidAttribution(attribution),
    ...params,
  };
}

export function pushPaidAnalyticsEvent(event: string, attribution: PaidAttribution, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !hasPaidAttribution(attribution)) return;

  const payload = buildAnalyticsPayload(attribution, params);
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
    "Paid site strategy: same devlo.ch experience served on paid local domains with noindex",
    "Qualification threshold: EUR/CHF 22k-25k over 4 months",
    "",
    ...Object.entries(compact).map(([key, value]) => `${key}: ${value}`),
  ];

  return lines.join("\n");
}
