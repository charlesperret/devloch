"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import { HubspotForm } from "@/components/ui/hubspot-form";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { pushLeadConversion } from "@/lib/enhanced-conversions";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import {
  buildPaidAttributionSnapshot,
  buildPaidStrategySelections,
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

type PaidAwareHubspotFormProps = {
  formId: string;
  locale?: SupportedLocale;
  mode?: "hubspot" | "native";
  portalId: string;
  region: string;
  reservedHeightClass?: string;
  targetId: string;
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
    storedAttribution: {
      ...readPaidAttributionFromCookie(),
      ...readStoredAttribution(),
    },
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

function sendPaidSubmissionBackup(fields: Record<string, string | string[]>, formId: string) {
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
    body: JSON.stringify({ fields, formId }),
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

const nativeFormCopy: Record<
  SupportedLocale,
  {
    fields: {
      clients: string;
      company: string;
      email: string;
      firstname: string;
      lastname: string;
      mobilephone: string;
      website: string;
    };
    optional: string;
    placeholders: { clients: string };
    submit: string;
    submitting: string;
    success: string;
    error: string;
  }
> = {
  fr: {
    fields: {
      firstname: "Prénom",
      lastname: "Nom",
      email: "Email professionnel",
      company: "Entreprise",
      mobilephone: "Téléphone",
      website: "Site web",
      clients: "Que voulez-vous faire grandir ?",
    },
    optional: "optionnel",
    placeholders: { clients: "Plus de rendez-vous qualifiés, un nouvel ICP, du pipeline outbound..." },
    submit: "Faire analyser mon acquisition",
    submitting: "Envoi en cours...",
    success: "Merci. Nous analysons votre contexte d'acquisition et revenons vers vous sous 24 heures.",
    error: "Impossible d'envoyer le formulaire. Merci de réessayer ou de nous écrire directement.",
  },
  en: {
    fields: {
      firstname: "First name",
      lastname: "Last name",
      email: "Professional email",
      company: "Company",
      mobilephone: "Phone number",
      website: "Website",
      clients: "What should we help you grow?",
    },
    optional: "optional",
    placeholders: { clients: "More qualified meetings, a new ICP, outbound pipeline..." },
    submit: "Review my acquisition plan",
    submitting: "Sending...",
    success: "Thank you. We will review your acquisition context and come back within 24 hours.",
    error: "The form could not be sent. Please try again or email us directly.",
  },
  de: {
    fields: {
      firstname: "Vorname",
      lastname: "Nachname",
      email: "Geschäftliche E-Mail",
      company: "Unternehmen",
      mobilephone: "Telefonnummer",
      website: "Website",
      clients: "Was möchten Sie ausbauen?",
    },
    optional: "optional",
    placeholders: { clients: "Mehr qualifizierte Termine, ein neues ICP, Outbound-Pipeline..." },
    submit: "Akquiseplan prüfen lassen",
    submitting: "Wird gesendet...",
    success: "Vielen Dank. Wir prüfen Ihren Akquisekontext und melden uns innerhalb von 24 Stunden.",
    error: "Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
  },
  nl: {
    fields: {
      firstname: "Voornaam",
      lastname: "Achternaam",
      email: "Zakelijk e-mailadres",
      company: "Bedrijf",
      mobilephone: "Telefoonnummer",
      website: "Website",
      clients: "Wat wil je laten groeien?",
    },
    optional: "optioneel",
    placeholders: { clients: "Meer gekwalificeerde afspraken, een nieuwe ICP, outbound pipeline..." },
    submit: "Laat mijn acquisitieplan beoordelen",
    submitting: "Verzenden...",
    success: "Bedankt. We bekijken je acquisitiecontext en komen binnen 24 uur terug.",
    error: "Het formulier kon niet worden verzonden. Probeer het opnieuw of mail ons direct.",
  },
};

function readNativeFormFields(form: HTMLFormElement) {
  const fields: Record<string, string> = {};
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    if (typeof value !== "string") return;
    const trimmed = value.trim();
    if (trimmed) fields[name] = trimmed;
  });

  return fields;
}

export function PaidAwareHubspotForm({
  formId,
  locale = "fr",
  mode = "hubspot",
  portalId,
  region,
  reservedHeightClass,
  targetId,
}: PaidAwareHubspotFormProps) {
  const [attribution, setAttribution] = useState<PaidAttribution>({});
  const [nativeStatus, setNativeStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const trackedFormStart = useRef(false);
  const trackedLeadSubmitted = useRef(false);
  const backedUpSubmission = useRef(false);
  const lastSubmissionFields = useRef<Record<string, string | string[]> | null>(null);

  useEffect(() => {
    const nextAttribution = resolveAttribution();
    setAttribution(nextAttribution);
    writePaidAttributionCookie(nextAttribution);
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

  const trackLeadSubmitted = useCallback((fields?: Record<string, string | string[]> | null) => {
    if (trackedLeadSubmitted.current) return;
    trackedLeadSubmitted.current = true;
    trackFormStart();
    void pushLeadConversion({
      attribution,
      fields: fields ?? lastSubmissionFields.current,
      formId,
      formType: mode === "native" ? "paid_native" : "consultation",
      locale,
    });
  }, [attribution, formId, locale, mode, trackFormStart]);

  const handleFormSubmitCapture = useCallback((fields: Record<string, string | string[]>) => {
    lastSubmissionFields.current = fields;
    if (backedUpSubmission.current) return;
    backedUpSubmission.current = true;
    trackLeadSubmitted(fields);
    sendPaidSubmissionBackup(fields, formId);
  }, [formId, trackLeadSubmitted]);

  const submitNativeForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = {
      ...buildPaidHiddenFields(attribution),
      ...readNativeFormFields(event.currentTarget),
    };
    lastSubmissionFields.current = fields;

    setNativeStatus("submitting");
    trackFormStart();

    const response = await fetch("/api/paid-form-backup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, formId }),
    });

    if (!response.ok) {
      setNativeStatus("error");
      return;
    }

    trackLeadSubmitted(fields);
    pushAnalyticsEvent("demo_requested", {
      form_id: formId,
      form_type: "paid_native",
      locale,
      page_path: window.location.pathname,
    });
    setNativeStatus("success");
  }, [attribution, formId, locale, trackFormStart, trackLeadSubmitted]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (backedUpSubmission.current || typeof event.data !== "object" || !event.data) return;

      const payload = event.data as { id?: string; type?: string; eventName?: string; data?: unknown };
      if (payload.type !== "hsFormCallback" || payload.id !== formId) return;
      if (payload.eventName !== "onFormSubmit" && payload.eventName !== "onBeforeFormSubmit") return;

      const fields = serializeHubSpotMessageFields(payload.data);
      if (!fields) return;

      lastSubmissionFields.current = fields;
      backedUpSubmission.current = true;
      trackLeadSubmitted(fields);
      sendPaidSubmissionBackup(fields, formId);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formId, trackLeadSubmitted]);

  if (mode === "native") {
    const copy = nativeFormCopy[locale];
    const inputClass = "mt-1 h-10 w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 text-sm text-[#153a54] outline-none transition focus:border-[#0b6c8f] focus:bg-white";
    const labelClass = "text-sm font-semibold text-[#153a54]";

    if (nativeStatus === "success") {
      return (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-sm font-medium leading-6 text-emerald-900">
          {copy.success}
        </div>
      );
    }

    return (
      <form className="space-y-4" onSubmit={submitNativeForm} onFocusCapture={trackFormStart}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            {copy.fields.firstname}<span className="text-red-500">*</span>
            <input className={inputClass} name="firstname" autoComplete="given-name" required />
          </label>
          <label className={labelClass}>
            {copy.fields.lastname}<span className="text-red-500">*</span>
            <input className={inputClass} name="lastname" autoComplete="family-name" required />
          </label>
          <label className={labelClass}>
            {copy.fields.email}<span className="text-red-500">*</span>
            <input className={inputClass} name="email" type="email" autoComplete="email" required />
          </label>
          <label className={labelClass}>
            {copy.fields.company}<span className="text-red-500">*</span>
            <input className={inputClass} name="company" autoComplete="organization" required />
          </label>
          <label className={labelClass}>
            {copy.fields.mobilephone} <span className="font-normal text-neutral-500">({copy.optional})</span>
            <input className={inputClass} name="mobilephone" type="tel" autoComplete="tel" />
          </label>
          <label className={labelClass}>
            {copy.fields.website} <span className="font-normal text-neutral-500">({copy.optional})</span>
            <input className={inputClass} name="website" autoComplete="url" />
          </label>
        </div>
        <label className={labelClass}>
          {copy.fields.clients} <span className="font-normal text-neutral-500">({copy.optional})</span>
          <textarea
            className="mt-1 min-h-20 w-full resize-y rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-[#153a54] outline-none transition focus:border-[#0b6c8f] focus:bg-white"
            name="clients"
            placeholder={copy.placeholders.clients}
          />
        </label>
        {nativeStatus === "error" ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            {copy.error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={nativeStatus === "submitting"}
          className="inline-flex h-12 items-center justify-center rounded-md bg-[#f47b5f] px-6 text-sm font-extrabold text-[#0f2b3c] transition hover:bg-[#e3654d] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {nativeStatus === "submitting" ? copy.submitting : copy.submit}
        </button>
      </form>
    );
  }

  return (
    <div onClickCapture={trackFormStart} onFocusCapture={trackFormStart}>
      <HubspotForm
        portalId={portalId}
        formId={formId}
        region={region}
        targetId={targetId}
        locale={locale}
        reservedHeightClass={reservedHeightClass}
        hiddenFields={hiddenFields}
        analyticsContext={{
          form_type: "consultation",
          form_location: "consultation_page",
        }}
        onFormSubmitCapture={handleFormSubmitCapture}
        suppressGenerateLeadEvent
        onSubmitted={() => {
          pushAnalyticsEvent("demo_requested", {
            form_id: formId,
            form_type: "consultation",
            locale,
            page_path: window.location.pathname,
          });
          trackLeadSubmitted(lastSubmissionFields.current);
        }}
      />
    </div>
  );
}
