import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { resolvePathForLocale } from "@/lib/i18n/slug-map";
import { academySupplementContent } from "@/lib/i18n/academy-supplement-content";
import { normalizeLocalizedCopyDeep } from "@/lib/i18n/text-normalization";
import masterfileContentJson from "@/lib/i18n/masterfile-content.json";

type MasterfileBundle = {
  mainNav: unknown;
  homeSeo: unknown;
  homeContent: unknown;
  consultationSeo: unknown;
  consultationContent: unknown;
  academySeo: unknown;
  academyContent: unknown;
  caseStudiesSeo: unknown;
  caseStudiesCards: unknown;
  conditionsSeo: unknown;
  conditionsContent: unknown;
  footerContent: unknown;
};

type MasterfileLocalizedContent = {
  fr: MasterfileBundle;
  en: MasterfileBundle;
  de: MasterfileBundle;
  nl: MasterfileBundle;
};

const bundle = masterfileContentJson as MasterfileLocalizedContent;

function normalizeLocale(locale: SupportedLocale): SupportedLocale {
  if (locale === "en" || locale === "de" || locale === "nl") return locale;
  return "fr";
}

function shouldLocalizeHref(value: string): boolean {
  if (!value.startsWith("/")) return false;
  if (value.startsWith("/images/")) return false;
  if (value.startsWith("/fonts/")) return false;
  if (value.startsWith("/api/")) return false;
  if (value.startsWith("/_next/")) return false;
  if (value === "/favicon.ico" || value === "/robots.txt" || value === "/sitemap.xml") return false;
  return true;
}

function localizeHrefsDeep<T>(node: T, locale: SupportedLocale, key = ""): T {
  if (Array.isArray(node)) {
    return node.map((item) => localizeHrefsDeep(item, locale, key)) as T;
  }
  if (!node || typeof node !== "object") {
    if (typeof node === "string" && (key === "href" || key === "path") && locale !== "fr" && shouldLocalizeHref(node)) {
      return resolvePathForLocale(node, locale).path as T;
    }
    return node;
  }

  const out: Record<string, unknown> = {};
  for (const [childKey, childValue] of Object.entries(node as Record<string, unknown>)) {
    out[childKey] = localizeHrefsDeep(childValue, locale, childKey);
  }
  return out as T;
}

export function getLocalizedMasterfileContent(locale: SupportedLocale): MasterfileBundle {
  const key = normalizeLocale(locale);
  const data = bundle[key] ?? bundle.fr;
  const merged = {
    ...data,
    academyContent: {
      ...(data.academyContent as Record<string, unknown>),
      ...academySupplementContent[key],
    },
  };
  const localizedHrefs = localizeHrefsDeep(merged, key);
  return normalizeLocalizedCopyDeep(localizedHrefs, key);
}
