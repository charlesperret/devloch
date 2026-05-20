"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { pushAnalyticsEvent } from "@/lib/analytics";

type HubspotFormApi = {
  setFieldValue?: (fieldName: string, value: string) => void;
};

type HubspotCreateConfig = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
  locale?: string;
  properties?: Record<string, string>;
  translations?: Record<
    string,
    {
      fieldLabels?: Record<string, string>;
      required?: string;
      submitText?: string;
      submissionErrors?: Record<string, string>;
    }
  >;
  onFormReady?: (form: unknown) => void;
  onBeforeFormSubmit?: (submissionValues: unknown, form: unknown) => void;
  onFormSubmit?: (form: unknown) => void;
  onFormSubmitted?: () => void;
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: HubspotCreateConfig) => HubspotFormApi;
      };
    };
  }
}

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
  locale?: SupportedLocale;
  hiddenFields?: Record<string, string>;
  analyticsContext?: Record<string, string | number | boolean | null | undefined>;
  onFormSubmitCapture?: (fields: Record<string, string | string[]>) => void;
  onSubmitted?: () => void;
};

type HubSpotSubmittedField = {
  name?: unknown;
  value?: unknown;
};

const copyByLocale: Record<
  SupportedLocale,
  {
    loading: string;
    loadError: string;
    submissionError: string;
    successMessage: string;
  }
> = {
  fr: {
    loading: "Chargement du formulaire…",
    loadError: "Impossible de charger le formulaire.",
    submissionError: "La soumission HubSpot a échoué. Merci de vérifier les champs requis.",
    successMessage: "Merci pour votre prise de contact. Nous reviendrons vers vous sous 24 heures.",
  },
  en: {
    loading: "Loading form…",
    loadError: "Unable to load the form.",
    submissionError: "HubSpot submission failed. Please verify the required fields.",
    successMessage: "Thank you for reaching out. We will get back to you within 24 hours.",
  },
  de: {
    loading: "Formular wird geladen…",
    loadError: "Das Formular konnte nicht geladen werden.",
    submissionError: "Die HubSpot-Übermittlung ist fehlgeschlagen. Bitte prüfen Sie die Pflichtfelder.",
    successMessage: "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  },
  nl: {
    loading: "Formulier wordt geladen…",
    loadError: "Het formulier kon niet worden geladen.",
    submissionError: "HubSpot-verzending is mislukt. Controleer de verplichte velden.",
    successMessage: "Bedankt voor je aanvraag. We nemen binnen 24 uur contact met je op.",
  },
};

const RESERVED_FORM_HEIGHT_CLASS = "min-h-[560px] md:min-h-[640px]";

const hubspotFormCopy: Record<
  SupportedLocale,
  {
    submitText: string;
    required: string;
    labels: Record<string, string>;
    descriptions: Record<string, string>;
    placeholders: Record<string, string>;
  }
> = {
  fr: {
    submitText: "Envoyer",
    required: "Ce champ est obligatoire.",
    labels: {
      clients: "Quels sont vos meilleurs clients ?",
      parmi_ces_clients_qui_sont_les_decideurs_: "Qui sont les décideurs chez ces clients ?",
      pays: "Quels pays ou régions ciblez-vous ?",
      industry: "Quels secteurs vous intéressent le plus ?",
      employee_headcount: "Quelle taille d'entreprise ciblez-vous ?",
      firstname: "Prénom",
      lastname: "Nom",
      email: "Email professionnel",
      mobilephone: "Téléphone professionnel",
      company: "Nom de l'entreprise",
      website: "Site web",
    },
    descriptions: {
      pays: "Pays, régions, cantons, États, etc.",
      industry:
        "Liste des secteurs disponibles : https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes",
    },
    placeholders: {
      clients: "Apple, Sony, UBS, Tesla, etc.",
      parmi_ces_clients_qui_sont_les_decideurs_: "CEO, directeur commercial, DRH, etc.",
      pays: "Suisse, DACH, Royaume-Uni, EMEA, etc.",
      industry: "Automobile, pharma, banque, etc.",
    },
  },
  en: {
    submitText: "Submit",
    required: "This field is required.",
    labels: {
      clients: "Who are your best clients?",
      parmi_ces_clients_qui_sont_les_decideurs_: "Who are the decision-makers among these clients?",
      pays: "What are the targeted countries or regions?",
      industry: "What are your favourite industries?",
      employee_headcount: "What is the targeted company headcount range?",
      firstname: "First name",
      lastname: "Last name",
      email: "Professional email",
      mobilephone: "Professional telephone number",
      company: "Company name",
      website: "Website",
    },
    descriptions: {
      pays: "Countries, states, regions, etc.",
      industry:
        "List of available industries and sectors: https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes",
    },
    placeholders: {
      clients: "Apple, Sony, UBS, Tesla, etc.",
      parmi_ces_clients_qui_sont_les_decideurs_: "CXO, Sales Director, Head of HR, etc.",
      pays: "USA, EMEA, Switzerland, DACH, etc.",
      industry: "Automotive, pharma, banking, etc.",
    },
  },
  de: {
    submitText: "Absenden",
    required: "Dieses Feld ist erforderlich.",
    labels: {
      clients: "Wer sind Ihre besten Kunden?",
      parmi_ces_clients_qui_sont_les_decideurs_: "Wer sind die Entscheider bei diesen Kunden?",
      pays: "Welche Länder oder Regionen möchten Sie ansprechen?",
      industry: "Welche Branchen sind für Sie am wichtigsten?",
      employee_headcount: "Welche Unternehmensgröße möchten Sie ansprechen?",
      firstname: "Vorname",
      lastname: "Nachname",
      email: "Geschäftliche E-Mail",
      mobilephone: "Geschäftliche Telefonnummer",
      company: "Unternehmensname",
      website: "Website",
    },
    descriptions: {
      pays: "Länder, Kantone, Regionen, Bundesländer usw.",
      industry:
        "Liste der verfügbaren Branchen: https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes",
    },
    placeholders: {
      clients: "Apple, Sony, UBS, Tesla usw.",
      parmi_ces_clients_qui_sont_les_decideurs_: "CXO, Vertriebsleiter, HR-Leitung usw.",
      pays: "Schweiz, DACH, EMEA, Deutschland usw.",
      industry: "Automotive, Pharma, Banking usw.",
    },
  },
  nl: {
    submitText: "Versturen",
    required: "Dit veld is verplicht.",
    labels: {
      clients: "Wie zijn je beste klanten?",
      parmi_ces_clients_qui_sont_les_decideurs_: "Wie zijn de beslissers bij deze klanten?",
      pays: "Welke landen of regio's wil je targeten?",
      industry: "Welke sectoren zijn het belangrijkst voor jou?",
      employee_headcount: "Welke bedrijfsgrootte wil je targeten?",
      firstname: "Voornaam",
      lastname: "Achternaam",
      email: "Zakelijk e-mailadres",
      mobilephone: "Zakelijk telefoonnummer",
      company: "Bedrijfsnaam",
      website: "Website",
    },
    descriptions: {
      pays: "Landen, regio's, provincies, kantons, enz.",
      industry:
        "Lijst met beschikbare sectoren: https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes",
    },
    placeholders: {
      clients: "Apple, Sony, UBS, Tesla, enz.",
      parmi_ces_clients_qui_sont_les_decideurs_: "CXO, sales director, HR-directeur, enz.",
      pays: "Zwitserland, DACH, Verenigd Koninkrijk, EMEA, enz.",
      industry: "Automotive, farma, banking, enz.",
    },
  },
};

function buildHubspotTranslations(locale: SupportedLocale): HubspotCreateConfig["translations"] {
  const formCopy = hubspotFormCopy[locale];
  return {
    [locale]: {
      fieldLabels: formCopy.labels,
      required: formCopy.required,
      submitText: formCopy.submitText,
      submissionErrors: {
        MISSING_REQUIRED_FIELDS: formCopy.required,
      },
    },
  };
}

let hubspotScriptPromise: Promise<void> | null = null;

function loadHubspotScript(): Promise<void> {
  if (typeof window === "undefined" || window.hbspt) {
    return Promise.resolve();
  }

  if (hubspotScriptPromise) {
    return hubspotScriptPromise;
  }

  hubspotScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-hubspot-forms="true"]');
    if (existingScript) {
      if (window.hbspt) {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("HubSpot script failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.dataset.hubspotForms = "true";
    script.onload = () => resolve();
    script.onerror = () => {
      hubspotScriptPromise = null;
      reject(new Error("HubSpot script failed to load"));
    };

    document.body.appendChild(script);
  });

  return hubspotScriptPromise;
}

function resolveFormElement(formRef: unknown, targetId: string): HTMLFormElement | null {
  if (formRef instanceof HTMLFormElement) return formRef;
  if (Array.isArray(formRef) && formRef[0] instanceof HTMLFormElement) return formRef[0];

  if (typeof formRef === "object" && formRef && "get" in formRef) {
    const get = (formRef as { get?: (index: number) => unknown }).get;
    const maybe = typeof get === "function" ? get(0) : null;
    if (maybe instanceof HTMLFormElement) return maybe;
  }

  const container = document.getElementById(targetId);
  return container?.querySelector("form") ?? null;
}

function dispatchValueChange(element: HTMLInputElement | HTMLTextAreaElement) {
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function syncHiddenFields(form: HTMLFormElement, hiddenFields?: Record<string, string>) {
  if (!hiddenFields) return;

  Object.entries(hiddenFields).forEach(([name, value]) => {
    const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
    if (input) {
      input.value = value;
      dispatchValueChange(input);
      return;
    }

    const textarea = form.querySelector<HTMLTextAreaElement>(`textarea[name="${name}"]`);
    if (textarea) {
      textarea.value = value;
      dispatchValueChange(textarea);
      return;
    }

    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = name;
    hidden.value = value;
    form.appendChild(hidden);
  });
}

function syncFormInstanceValues(formInstance: HubspotFormApi | null, hiddenFields?: Record<string, string>) {
  if (!formInstance || typeof formInstance.setFieldValue !== "function" || !hiddenFields) return;

  Object.entries(hiddenFields).forEach(([name, value]) => {
    try {
      formInstance.setFieldValue?.(name, value);
    } catch {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[HubSpot] Unable to set field value for "${name}"`);
      }
    }
  });
}

function localizeHubspotForm(form: HTMLFormElement, locale: SupportedLocale) {
  const formCopy = hubspotFormCopy[locale];

  Object.entries(formCopy.placeholders).forEach(([name, value]) => {
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${name}"]`);
    field?.setAttribute("placeholder", value);
  });

  Object.entries(formCopy.labels).forEach(([name, value]) => {
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
    const container = field?.closest(".hs-form-field") ?? form.querySelector(`.hs_${name}`);
    const labelText = container?.querySelector("label span:first-child");
    if (labelText) labelText.textContent = value;
  });

  Object.entries(formCopy.descriptions).forEach(([name, value]) => {
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
    const container = field?.closest(".hs-form-field") ?? form.querySelector(`.hs_${name}`);
    const description = container?.querySelector<HTMLElement>(".hs-field-desc");
    if (description) description.textContent = value;
  });

  const submit = form.querySelector<HTMLInputElement | HTMLButtonElement>('input[type="submit"], button[type="submit"]');
  if (submit instanceof HTMLInputElement) {
    submit.value = formCopy.submitText;
  } else if (submit) {
    submit.textContent = formCopy.submitText;
  }
}

function serializeFormFields(form: HTMLFormElement) {
  const fields: Record<string, string | string[]> = {};
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    if (typeof value !== "string" || name === "hs_context") return;

    const existing = fields[name];
    if (Array.isArray(existing)) {
      existing.push(value);
      return;
    }

    if (typeof existing === "string") {
      fields[name] = [existing, value];
      return;
    }

    fields[name] = value;
  });

  return fields;
}

function serializeHubSpotSubmittedFields(data: unknown) {
  if (!Array.isArray(data)) return null;

  const fields: Record<string, string | string[]> = {};
  data.forEach((field: HubSpotSubmittedField) => {
    if (!field || typeof field.name !== "string" || field.name === "hs_context") return;

    if (typeof field.value === "string") {
      fields[field.name] = field.value;
      return;
    }

    if (Array.isArray(field.value)) {
      const values = field.value.filter((value): value is string => typeof value === "string");
      if (values.length === 1) {
        fields[field.name] = values[0];
      } else if (values.length > 1) {
        fields[field.name] = values;
      }
    }
  });

  return Object.keys(fields).length > 0 ? fields : null;
}

function compactAnalyticsParams(params: Record<string, string | number | boolean | null | undefined>) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
}

export function HubspotForm({
  portalId,
  formId,
  region,
  targetId,
  locale = "fr",
  hiddenFields,
  analyticsContext,
  onFormSubmitCapture,
  onSubmitted,
}: HubspotFormProps) {
  const copy = copyByLocale[locale];
  const initialized = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const submittedBackupRef = useRef(false);
  const startedAnalyticsRef = useRef(false);
  const formInstanceRef = useRef<HubspotFormApi | null>(null);
  const hiddenFieldsRef = useRef<Record<string, string> | undefined>(hiddenFields);
  const [loaded, setLoaded] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  useEffect(() => {
    hiddenFieldsRef.current = hiddenFields;
  }, [hiddenFields]);

  useEffect(() => {
    initialized.current = false;
    submittedBackupRef.current = false;
    startedAnalyticsRef.current = false;
    formInstanceRef.current = null;
    setLoaded(false);
    setSubmitted(false);
    setLoadError(false);
    setSubmissionError(null);
  }, [formId, portalId, region, targetId]);

  const buildAnalyticsParams = useCallback(() =>
    compactAnalyticsParams({
      form_id: formId,
      form_target: targetId,
      form_type: "hubspot",
      locale,
      page_path: window.location.pathname,
      ...analyticsContext,
    }), [analyticsContext, formId, locale, targetId]);

  const trackFormStart = () => {
    if (startedAnalyticsRef.current) return;
    startedAnalyticsRef.current = true;
    pushAnalyticsEvent("form_start", buildAnalyticsParams());
  };

  useEffect(() => {
    if (isNearViewport) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isNearViewport]);

  useEffect(() => {
    if (!isNearViewport) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || !window.hbspt || initialized.current) return;
      initialized.current = true;
      const instance = window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
        locale,
        properties: hiddenFieldsRef.current,
        translations: buildHubspotTranslations(locale),
        onFormReady: (formRef: unknown) => {
          const form = resolveFormElement(formRef, targetId);
          if (form) {
            localizeHubspotForm(form, locale);
            syncHiddenFields(form, hiddenFieldsRef.current);
          }
          syncFormInstanceValues(formInstanceRef.current, hiddenFieldsRef.current);
        },
        onBeforeFormSubmit: (_submissionValues: unknown, formRef: unknown) => {
          const form = resolveFormElement(formRef, targetId);
          if (form) {
            syncHiddenFields(form, hiddenFieldsRef.current);
            onFormSubmitCapture?.(serializeFormFields(form));
          }
          syncFormInstanceValues(formInstanceRef.current, hiddenFieldsRef.current);
        },
        onFormSubmit: (formRef: unknown) => {
          const form = resolveFormElement(formRef, targetId);
          if (form) {
            syncHiddenFields(form, hiddenFieldsRef.current);
            onFormSubmitCapture?.(serializeFormFields(form));
          }
          syncFormInstanceValues(formInstanceRef.current, hiddenFieldsRef.current);
          setSubmissionError(null);
        },
        onFormSubmitted: () => {
          setSubmitted(true);
          const params = buildAnalyticsParams();
          pushAnalyticsEvent("form_submit", params);
          pushAnalyticsEvent("generate_lead", params);
          onSubmitted?.();
        },
      });
      formInstanceRef.current = instance;
      syncFormInstanceValues(formInstanceRef.current, hiddenFieldsRef.current);
      setLoaded(true);
      setLoadError(false);
    };

    if (window.hbspt) {
      render();
      return;
    }

    loadHubspotScript()
      .then(render)
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [buildAnalyticsParams, formId, isNearViewport, locale, onFormSubmitCapture, onSubmitted, portalId, region, targetId]);

  useEffect(() => {
    if (!loaded || submitted) return;

    const container = document.getElementById(targetId);
    const form = container?.querySelector("form");
    if (form instanceof HTMLFormElement) {
      localizeHubspotForm(form, locale);
      syncHiddenFields(form, hiddenFields);
    }
    syncFormInstanceValues(formInstanceRef.current, hiddenFields);
  }, [hiddenFields, loaded, locale, submitted, targetId]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "object" || !event.data) return;

      const payload = event.data as { id?: string; type?: string; eventName?: string; data?: unknown };
      if (payload.type !== "hsFormCallback") return;
      if (payload.id && payload.id !== formId) return;

      if (
        !submittedBackupRef.current &&
        (payload.eventName === "onFormSubmit" || payload.eventName === "onBeforeFormSubmit")
      ) {
        const fields = serializeHubSpotSubmittedFields(payload.data);
        if (fields) {
          submittedBackupRef.current = true;
          onFormSubmitCapture?.(fields);
        }
      }

      if (payload.eventName === "onFormSubmitFailed" || payload.eventName === "onFormError") {
        if (process.env.NODE_ENV !== "production") {
          console.error("[HubSpot] Form submission failed", payload.data);
        }
        setSubmissionError(copy.submissionError);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [copy.submissionError, formId, onFormSubmitCapture]);

  return (
    <div ref={containerRef} className="relative" onClickCapture={trackFormStart} onFocusCapture={trackFormStart}>
      {!loaded && !submitted && (
        <div className={`flex ${RESERVED_FORM_HEIGHT_CLASS} items-center justify-center rounded-xl bg-neutral-50`}>
          <div className="flex flex-col items-center gap-3 text-neutral-400">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-devlo-600" />
            <span className="text-sm">{loadError ? copy.loadError : copy.loading}</span>
          </div>
        </div>
      )}
      <div id={targetId} className={loaded && !submitted ? RESERVED_FORM_HEIGHT_CLASS : "hidden"} />
      {submissionError ? (
        <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{submissionError}</p>
      ) : null}
      <div className={submitted ? "" : "hidden"}>
        <div className={`flex ${RESERVED_FORM_HEIGHT_CLASS} items-center rounded-xl border border-emerald-200 bg-emerald-50 p-6`}>
          <p className="text-sm font-medium leading-6 text-emerald-900">
            {copy.successMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
