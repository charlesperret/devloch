import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { localizeGeoTermsInString } from "@/lib/i18n/geo-terms";

const localeReplacements: Record<SupportedLocale, Array<[RegExp, string]>> = {
  fr: [],
  en: [
    [/\bAccueil\b/g, "Home"],
    [/\bEn savoir plus\b/gi, "Learn more"],
    [/\bVoir toutes nos études de cas\b/gi, "View all case studies"],
    [/\bNos études de cas\b/gi, "Our case studies"],
    [/\bCas client vérifié\b/gi, "Verified client case"],
    [/\bSuisse romande\b/gi, "French-speaking Switzerland"],
    [/\bSuisse alémanique\b/gi, "German-speaking Switzerland"],
    [/\bMulti-pays\b/gi, "Multi-country"],
    [/\bFondateur\b/g, "Founder"],
    [/\bDirecteur Général\b/g, "Managing Director"],
    [/\bDirecteur commercial\b/gi, "Sales Director"],
    [/\bDirecteur\b/g, "Director"],
  ],
  de: [
    [/\bAccueil\b/g, "Startseite"],
    [/\bEn savoir plus\b/gi, "Mehr erfahren"],
    [/\bVoir toutes nos études de cas\b/gi, "Alle Fallstudien ansehen"],
    [/\bNos études de cas\b/gi, "Unsere Fallstudien"],
    [/\bCas client vérifié\b/gi, "Verifizierter Kundenfall"],
    [/\bMulti-pays\b/gi, "Mehrere Länder"],
    [/\bRevenue Ops Analyst\b/g, "Revenue-Ops-Analyst"],
    [/\bHead of Business Development & Marketing\b/g, "Leiter Business Development & Marketing"],
    [/\bBusiness Development Manager\b/g, "Business-Development-Manager"],
    [/\bManaging Director\b/g, "Geschäftsführer"],
    [/\bSales Director\b/g, "Vertriebsleiter"],
    [/\bFounder\b/g, "Gründer"],
    [/\bFondateur\b/g, "Gründer"],
    [/\bDirecteur Général\b/g, "Geschäftsführer"],
    [/\bDirecteur commercial\b/gi, "Vertriebsleiter"],
    [/\bDirecteur\b/g, "Direktor"],
  ],
  nl: [
    [/\bAccueil\b/g, "Home"],
    [/\bEn savoir plus\b/gi, "Meer informatie"],
    [/\bVoir toutes nos études de cas\b/gi, "Bekijk alle praktijkvoorbeelden"],
    [/\bNos études de cas\b/gi, "Onze praktijkvoorbeelden"],
    [/\bCas client vérifié\b/gi, "Geverifieerde klantcase"],
    [/\bMulti-pays\b/gi, "Meerdere landen"],
    [/\bRevenue Ops Analyst\b/g, "Revenue Ops-analist"],
    [/\bHead of Business Development & Marketing\b/g, "Hoofd bedrijfsontwikkeling en marketing"],
    [/\bBusiness Development Manager\b/g, "Manager bedrijfsontwikkeling"],
    [/\bManaging Director\b/g, "Algemeen directeur"],
    [/\bSales Director\b/g, "Verkoopdirecteur"],
    [/\bFounder\b/g, "Oprichter"],
    [/\bFondateur\b/g, "Oprichter"],
    [/\bDirecteur Général\b/g, "Algemeen directeur"],
    [/\bDirecteur commercial\b/gi, "Commercieel directeur"],
  ],
};

const NON_COPY_KEYS = new Set([
  "href",
  "path",
  "url",
  "src",
  "slug",
  "canonical",
  "pageUrl",
  "pageUri",
  "localePath",
]);

function normalizeSeparators(value: string): string {
  return value
    .replace(/[\u00A0\s]-[\u00A0\s]\+/g, " · +")
    .replace(/[\u00A0\s]-[\u00A0\s]/g, " · ");
}

export function normalizeLocalizedCopyString(value: string, locale: SupportedLocale): string {
  if (locale === "fr") return value;

  let next = normalizeSeparators(value);
  next = localizeGeoTermsInString(next, locale);

  for (const [pattern, replacement] of localeReplacements[locale]) {
    next = next.replace(pattern, replacement);
  }

  return next;
}

export function normalizeLocalizedCopyDeep<T>(value: T, locale: SupportedLocale, key = ""): T {
  if (typeof value === "string") {
    if (locale === "fr" || NON_COPY_KEYS.has(key)) return value;
    return normalizeLocalizedCopyString(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeLocalizedCopyDeep(item, locale, key)) as T;
  }

  if (value && typeof value === "object") {
    const transformedEntries = Object.entries(value as Record<string, unknown>).map(([childKey, childValue]) => [
      childKey,
      normalizeLocalizedCopyDeep(childValue, locale, childKey),
    ]);
    return Object.fromEntries(transformedEntries) as T;
  }

  return value;
}
