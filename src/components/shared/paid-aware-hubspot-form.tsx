"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { HubspotForm } from "@/components/ui/hubspot-form";
import { pushAnalyticsEvent } from "@/lib/analytics";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import {
  buildPaidAttributionSnapshot,
  buildPaidStrategySelections,
  compactPaidAttribution,
  hasPaidAttribution,
  isPaidHostname,
  PAID_ATTRIBUTION_STORAGE_KEY,
  pushPaidAnalyticsEvent,
  readPaidAttributionFromSearch,
  type PaidAttribution,
} from "@/lib/paid-attribution";

type PaidAwareHubspotFormProps = {
  formId: string;
  locale?: SupportedLocale;
  portalId: string;
  region: string;
  targetId: string;
};

const localizedAgencyFormIds: Partial<Record<string, Record<SupportedLocale, string>>> = {
  "54090bd3-970d-4ad1-b3b3-1c81d54c291e": {
    fr: "af94dc91-a61a-4f0c-b328-39b1ade12da5",
    en: "54090bd3-970d-4ad1-b3b3-1c81d54c291e",
    de: "74cb5247-082f-4e6d-9b70-aa128ffa118c",
    nl: "4877d8ff-1eb5-489c-b94b-e7fec2c95622",
  },
};

function readStoredAttribution() {
  try {
    const stored = window.sessionStorage.getItem(PAID_ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as PaidAttribution) : {};
  } catch {
    return {};
  }
}

function resolveAttribution() {
  const paidHost = isPaidHostname(window.location.hostname);
  return buildPaidAttributionSnapshot({
    currentAttribution: readPaidAttributionFromSearch(new URLSearchParams(window.location.search)),
    currentUrl: window.location.href,
    paidHost,
    referrer: document.referrer,
    storedAttribution: readStoredAttribution(),
  });
}

function buildPaidHiddenFields(attribution: PaidAttribution) {
  const compact = compactPaidAttribution(attribution);

  return {
    strategy_selections: buildPaidStrategySelections(attribution),
    ...(compact.utm_campaign ? { campaign: compact.utm_campaign } : {}),
    lead_generator: compact.utm_source === "google" && compact.utm_medium === "cpc" ? "Google Ads" : "Paid acquisition",
    ...(compact.paid_host ? { paid_host: compact.paid_host } : {}),
    ...(compact.utm_source ? { paid_utm_source: compact.utm_source } : {}),
    ...(compact.utm_medium ? { paid_utm_medium: compact.utm_medium } : {}),
    ...(compact.utm_campaign ? { paid_utm_campaign: compact.utm_campaign } : {}),
    ...(compact.utm_content ? { paid_utm_content: compact.utm_content } : {}),
    ...(compact.utm_term ? { paid_utm_term: compact.utm_term } : {}),
    ...(compact.gclid ? { paid_gclid: compact.gclid } : {}),
    ...(compact.wbraid ? { paid_wbraid: compact.wbraid } : {}),
    ...(compact.gbraid ? { paid_gbraid: compact.gbraid } : {}),
    ...(compact.landing_page_url ? { paid_landing_page_url: compact.landing_page_url } : {}),
    ...(compact.current_page_url ? { paid_current_page_url: compact.current_page_url } : {}),
    ...(compact.referrer ? { paid_referrer: compact.referrer } : {}),
    ...(compact.paid_session_id ? { paid_session_id: compact.paid_session_id } : {}),
    ...(compact.paid_first_seen_at ? { paid_first_seen_at: compact.paid_first_seen_at } : {}),
    paid_qualification_status: "submitted_pending_review",
    paid_demo_status: "not_booked",
  };
}

function sendPaidSubmissionBackup(fields: Record<string, string | string[]>) {
  const email = fields.email;
  const hasEmail = typeof email === "string" && email.includes("@");
  const hasPaidSignal =
    fields.paid_host === "true" ||
    typeof fields.paid_gclid === "string" ||
    typeof fields.paid_utm_source === "string";

  if (!hasEmail || !hasPaidSignal) return;

  fetch("/api/paid-form-backup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({ fields }),
  }).catch(() => {
    // HubSpot's native form submission remains the primary path.
  });
}

function serializeHubSpotMessageFields(data: unknown) {
  if (!Array.isArray(data)) return null;

  const fields: Record<string, string | string[]> = {};
  data.forEach((field) => {
    if (!field || typeof field !== "object") return;

    const entry = field as { name?: unknown; value?: unknown };
    if (typeof entry.name !== "string" || entry.name === "hs_context") return;

    if (typeof entry.value === "string") {
      fields[entry.name] = entry.value;
      return;
    }

    if (Array.isArray(entry.value)) {
      const values = entry.value.filter((value): value is string => typeof value === "string");
      if (values.length === 1) {
        fields[entry.name] = values[0];
      } else if (values.length > 1) {
        fields[entry.name] = values;
      }
    }
  });

  return Object.keys(fields).length > 0 ? fields : null;
}

export function PaidAwareHubspotForm({
  formId,
  locale = "fr",
  portalId,
  region,
  targetId,
}: PaidAwareHubspotFormProps) {
  const [attribution, setAttribution] = useState<PaidAttribution>({});
  const trackedFormStart = useRef(false);
  const trackedLeadSubmitted = useRef(false);
  const backedUpSubmission = useRef(false);
  const localizedFormId = localizedAgencyFormIds[formId]?.[locale] ?? formId;

  useEffect(() => {
    setAttribution(resolveAttribution());
  }, []);

  const hiddenFields = useMemo(() => {
    if (!hasPaidAttribution(attribution)) return undefined;

    return buildPaidHiddenFields(attribution);
  }, [attribution]);

  const trackFormStart = useCallback(() => {
    if (trackedFormStart.current || !hasPaidAttribution(attribution)) return;
    trackedFormStart.current = true;
    pushPaidAnalyticsEvent("paid_form_start", attribution);
  }, [attribution]);

  const trackLeadSubmitted = useCallback(() => {
    if (trackedLeadSubmitted.current || !hasPaidAttribution(attribution)) return;
    trackedLeadSubmitted.current = true;
    trackFormStart();
    pushPaidAnalyticsEvent("paid_lead_submitted", attribution);
  }, [attribution, trackFormStart]);

  const handleFormSubmitCapture = useCallback((fields: Record<string, string | string[]>) => {
    if (backedUpSubmission.current) return;
    backedUpSubmission.current = true;
    trackLeadSubmitted();
    sendPaidSubmissionBackup(fields);
  }, [trackLeadSubmitted]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (backedUpSubmission.current || typeof event.data !== "object" || !event.data) return;

      const payload = event.data as { id?: string; type?: string; eventName?: string; data?: unknown };
      if (payload.type !== "hsFormCallback" || payload.id !== localizedFormId) return;
      if (payload.eventName !== "onFormSubmit" && payload.eventName !== "onBeforeFormSubmit") return;

      const fields = serializeHubSpotMessageFields(payload.data);
      if (!fields) return;

      backedUpSubmission.current = true;
      trackLeadSubmitted();
      sendPaidSubmissionBackup(fields);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [localizedFormId, trackLeadSubmitted]);

  return (
    <div onClickCapture={trackFormStart} onFocusCapture={trackFormStart}>
      <HubspotForm
        portalId={portalId}
        formId={localizedFormId}
        region={region}
        targetId={targetId}
        locale={locale}
        hiddenFields={hiddenFields}
        analyticsContext={{
          form_type: "consultation",
          form_location: "consultation_page",
        }}
        onFormSubmitCapture={handleFormSubmitCapture}
        onSubmitted={() => {
          pushAnalyticsEvent("demo_requested", {
            form_id: localizedFormId,
            form_type: "consultation",
            locale,
            page_path: window.location.pathname,
          });
          trackLeadSubmitted();
        }}
      />
    </div>
  );
}
