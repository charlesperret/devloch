"use client";

import { pushAnalyticsEvent } from "@/lib/analytics";
import { readGoogleConsentChoice } from "@/lib/consent-mode";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { hasPaidAttribution, pushPaidAnalyticsEvent, type PaidAttribution } from "@/lib/paid-attribution";

type LeadFields = Record<string, string | string[]>;

type LeadConversionParams = {
  attribution: PaidAttribution;
  fields?: LeadFields | null;
  formId: string;
  formType: string;
  locale: SupportedLocale;
};

const PAID_LEAD_VALUE = 1;
const PAID_LEAD_CURRENCY = "USD";

function firstField(fields: LeadFields | null | undefined, names: string[]) {
  if (!fields) return "";

  for (const name of names) {
    const value = fields[name];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (Array.isArray(value)) {
      const first = value.find((entry) => entry.trim().length > 0);
      if (first) return first.trim();
    }
  }

  return "";
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function normalizePhone(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  return hasPlus ? `+${digits}` : digits;
}

async function sha256Hex(value: string) {
  const encoder = new TextEncoder();
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function buildEnhancedUserData(fields?: LeadFields | null) {
  const email = normalizeEmail(firstField(fields, ["email", "professional_email"]));
  const phone = normalizePhone(firstField(fields, ["mobilephone", "phone", "phone_number", "professional_telephone_number"]));
  const userData: Record<string, string> = {};

  if (email) {
    userData.sha256_email_address = await sha256Hex(email);
  }

  if (phone) {
    userData.sha256_phone_number = await sha256Hex(phone);
  }

  return userData;
}

export async function setEnhancedConversionUserData(fields?: LeadFields | null) {
  if (
    typeof window === "undefined" ||
    typeof crypto === "undefined" ||
    !crypto.subtle ||
    readGoogleConsentChoice() !== "granted"
  ) {
    return false;
  }

  const userData = await buildEnhancedUserData(fields);
  if (Object.keys(userData).length === 0) return false;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === "function") {
    window.gtag("set", "user_data", userData);
  } else {
    window.dataLayer.push(["set", "user_data", userData]);
  }

  window.dataLayer.push({
    event: "paid_enhanced_conversion_user_data_ready",
    has_sha256_email_address: Boolean(userData.sha256_email_address),
    has_sha256_phone_number: Boolean(userData.sha256_phone_number),
  });

  return true;
}

function buildLeadEventParams(params: LeadConversionParams, enhancedConversionReady: boolean) {
  return {
    currency: PAID_LEAD_CURRENCY,
    enhanced_conversions_ready: enhancedConversionReady,
    event_category: "lead",
    form_id: params.formId,
    form_type: params.formType,
    lead_value_basis: "nominal_tracking_value_until_closed_loop_model",
    locale: params.locale,
    page_path: window.location.pathname,
    value: PAID_LEAD_VALUE,
  };
}

export async function pushLeadConversion(params: LeadConversionParams) {
  const enhancedConversionReady = await setEnhancedConversionUserData(params.fields);
  const eventParams = buildLeadEventParams(params, enhancedConversionReady);

  if (hasPaidAttribution(params.attribution)) {
    pushPaidAnalyticsEvent("generate_lead", params.attribution, eventParams);
    pushPaidAnalyticsEvent("paid_lead_submitted", params.attribution, eventParams);
    return;
  }

  pushAnalyticsEvent("generate_lead", eventParams);
}
