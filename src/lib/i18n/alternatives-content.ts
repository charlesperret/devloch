import type { SupportedLocale } from "@/lib/i18n/slug-map";
import altsContentJson from "@/lib/i18n/alternatives-content.json";

type AltsTranslatableContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  comparisonTable: { feature: string; devlo: string; competitor: string }[];
  whyDevlo: string[];
  faqs: { question: string; answer: string }[];
  // GEO fields (optional, progressive enhancement)
  editorialTitle?: string;
  editorialParagraphs?: string[];
  summaryTitle?: string;
  summaryPoints?: string[];
  datePublished?: string;
  dateModified?: string;
};

export function getLocalizedAlternativeContent(slug: string, locale: SupportedLocale): AltsTranslatableContent | null {
  const key = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
  const entry = (altsContentJson as Record<string, Record<string, AltsTranslatableContent>>)[slug];
  if (!entry) return null;
  return entry[key] ?? entry.fr;
}
