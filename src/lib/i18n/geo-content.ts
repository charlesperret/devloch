import type { SupportedLocale } from "@/lib/i18n/slug-map";
import geoContentJson from "@/lib/i18n/geo-content.json";

type GeoTranslatableContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  faqs: { question: string; answer: string }[];
  // GEO fields (optional, progressive enhancement)
  editorialTitle?: string;
  editorialParagraphs?: string[];
  summaryTitle?: string;
  summaryPoints?: string[];
  datePublished?: string;
  dateModified?: string;
};

export function getLocalizedGeoContent(slug: string, locale: SupportedLocale): GeoTranslatableContent | null {
  const key = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
  const entry = (geoContentJson as Record<string, Record<string, GeoTranslatableContent>>)[slug];
  if (!entry) return null;
  return entry[key] ?? entry.fr;
}
