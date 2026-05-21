export const GOOGLE_CONSENT_STORAGE_KEY = "devlo_google_consent_v2";

export type GoogleConsentChoice = "granted" | "denied";

export function buildGoogleConsentPayload(choice: GoogleConsentChoice) {
  return {
    ad_storage: choice,
    analytics_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    functionality_storage: "granted",
    security_storage: "granted",
  };
}

export function readGoogleConsentChoice(): GoogleConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(GOOGLE_CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function writeGoogleConsentChoice(choice: GoogleConsentChoice) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(GOOGLE_CONSENT_STORAGE_KEY, choice);
  } catch {
    // localStorage can be unavailable in strict privacy modes.
  }
}

export function applyGoogleConsentChoice(choice: GoogleConsentChoice) {
  if (typeof window === "undefined") return;

  const payload = buildGoogleConsentPayload(choice);
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
    return;
  }

  window.dataLayer.push(["consent", "update", payload]);
}
