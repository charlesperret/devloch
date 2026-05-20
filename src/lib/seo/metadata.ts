import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { hadoseoMetadataByRoute } from "@/content/hadoseo-metadata";
import { buildLanguageAlternatesForFrPath, normalizePath as normalizeLocalizedPath } from "@/lib/i18n/slug-map";
import { siteConfig } from "@/lib/site";

export const defaultOgImagePath = "/images/devlo_OG_Banner.webp";
const defaultOgImageAlt = "devlo - GTM engineering agency and B2B outbound partner";
export type SeoMetadataLocale = "fr" | "en" | "de" | "nl";

const titleSuffixByLocale: Record<SeoMetadataLocale, string> = {
  fr: " | Prospection B2B",
  en: " | B2B prospecting agency",
  de: " | B2B-Akquise Agentur",
  nl: " | B2B prospectie bureau",
};

const descriptionSuffixByLocale: Record<SeoMetadataLocale, string> = {
  fr: " devlo structure vos campagnes pour générer des rendez-vous qualifiés.",
  en: " devlo builds outbound campaigns that generate qualified B2B meetings.",
  de: " devlo baut Outbound-Kampagnen fuer qualifizierte B2B-Termine.",
  nl: " devlo bouwt outbound campagnes voor gekwalificeerde B2B-afspraken.",
};

export function normalizeRoute(path: string): string {
  if (!path || path === "/") return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function stripDevloSuffix(title: string): string {
  return title.replace(/\s*(?:\|\s*devlo|[-—]\s*devlo)\s*$/i, "").trim();
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function clipAtWord(value: string, maxLength: number): string {
  const normalized = normalizeWhitespace(value);
  if (normalized.length <= maxLength) return normalized;

  const clipped = normalized.slice(0, maxLength + 1);
  const lastSpace = clipped.lastIndexOf(" ");
  const candidate = (lastSpace > 40 ? clipped.slice(0, lastSpace) : normalized.slice(0, maxLength))
    .replace(/[|,;:–—-]\s*$/g, "")
    .trim();

  if (candidate.endsWith(".")) return candidate;
  const withPeriod = `${candidate}.`;
  return withPeriod.length <= maxLength ? withPeriod : candidate.slice(0, maxLength).trim();
}

export function normalizeSeoTitle(title: string, locale: SeoMetadataLocale = "fr"): string {
  const base = normalizeWhitespace(stripDevloSuffix(title));
  const maxTitleBeforeTemplate = 57; // Root layout appends " | devlo".
  if (base.length < 35) {
    const withSuffix = `${base}${titleSuffixByLocale[locale]}`;
    return withSuffix.length <= maxTitleBeforeTemplate ? withSuffix : clipAtWord(withSuffix, maxTitleBeforeTemplate);
  }

  return clipAtWord(base, maxTitleBeforeTemplate);
}

export function normalizeSeoDescription(description: string, locale: SeoMetadataLocale = "fr"): string {
  const base = normalizeWhitespace(description);
  if (base.length < 120) {
    return clipAtWord(`${base}${descriptionSuffixByLocale[locale]}`, 160);
  }

  return clipAtWord(base, 160);
}

export function buildLanguageAlternates(path: string): NonNullable<Metadata["alternates"]>["languages"] {
  return buildLanguageAlternatesForFrPath(path) as NonNullable<Metadata["alternates"]>["languages"];
}

export function toAbsoluteUrl(path: string): string {
  return `${siteConfig.url}${normalizeLocalizedPath(path)}`;
}

export function getHadoSeoMetadataOverride(path: string) {
  const canonicalRoute = normalizeRoute(path);
  return hadoseoMetadataByRoute[canonicalRoute];
}

export function resolveOgImagePath(candidate?: string): string {
  if (!candidate) return defaultOgImagePath;
  if (!candidate.startsWith("/images/")) return defaultOgImagePath;
  if (candidate.slice("/images/".length).includes("/")) return defaultOgImagePath;

  const filePath = join(process.cwd(), "public", candidate.replace(/^\//, ""));
  return existsSync(filePath) ? candidate : defaultOgImagePath;
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  imagePath?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  imagePath,
  datePublished,
  dateModified,
  author,
}: BuildPageMetadataInput): Metadata {
  const canonicalPath = normalizeRoute(path);
  const override = getHadoSeoMetadataOverride(canonicalPath);
  const resolvedTitle = normalizeSeoTitle(override ? stripDevloSuffix(override.title) : title);
  const resolvedDescription = normalizeSeoDescription(override?.description ?? description);
  const ogImage = resolveOgImagePath(override?.ogImage ?? imagePath);
  const ogImageAbsoluteUrl = toAbsoluteUrl(ogImage);
  const ogTitle = resolvedTitle.toLowerCase().includes("devlo") ? resolvedTitle : `${resolvedTitle} | devlo`;

  const other: Record<string, string> = {};
  if (datePublished) other["article:published_time"] = datePublished;
  if (dateModified) other["article:modified_time"] = dateModified;
  if (author || datePublished) other["article:author"] = author ?? "Charles Perret";

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates(canonicalPath),
    },
    openGraph: {
      title: ogTitle,
      description: resolvedDescription,
      siteName: siteConfig.name,
      type,
      locale: "fr_CH",
      url: toAbsoluteUrl(canonicalPath),
      images: [
        {
          url: ogImageAbsoluteUrl,
          width: 1200,
          height: 630,
          alt: defaultOgImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImageAbsoluteUrl],
    },
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}
