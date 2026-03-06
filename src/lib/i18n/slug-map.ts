import slugMapJson from "@/lib/i18n/slug-map.json";
import { resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";

export const supportedLocales = ["fr", "en", "de", "nl"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export type SlugMapEntry = {
  fr: string | null;
  en: string | null;
  de: string | null;
  nl: string | null;
};

export type SlugMap = Record<string, SlugMapEntry>;

export const slugMap: SlugMap = slugMapJson;

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function splitLocalePath(pathname: string): { locale: SupportedLocale; path: string } {
  const normalized = normalizePath(pathname);
  if (normalized === "/en" || normalized.startsWith("/en/")) return { locale: "en", path: normalizePath(normalized.replace(/^\/en/, "")) };
  if (normalized === "/de" || normalized.startsWith("/de/")) return { locale: "de", path: normalizePath(normalized.replace(/^\/de/, "")) };
  if (normalized === "/nl" || normalized.startsWith("/nl/")) return { locale: "nl", path: normalizePath(normalized.replace(/^\/nl/, "")) };
  return { locale: "fr", path: normalized };
}

export function toLocalePath(locale: SupportedLocale, path: string): string {
  const normalized = normalizePath(path);
  if (locale === "fr") return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function entriesByPageId(): Array<[string, SlugMapEntry]> {
  return Object.entries(slugMap);
}

export function getEntryByPageId(pageId: string): SlugMapEntry | null {
  return slugMap[pageId] ?? null;
}

export function findEntryByFrPath(frPath: string): { pageId: string; entry: SlugMapEntry } | null {
  const normalized = normalizePath(frPath);
  for (const [pageId, entry] of entriesByPageId()) {
    if (entry.fr && normalizePath(entry.fr) === normalized) {
      return { pageId, entry };
    }
  }
  return null;
}

export function findEntryByLocalePath(locale: Exclude<SupportedLocale, "fr">, localePath: string): { pageId: string; entry: SlugMapEntry } | null {
  const normalized = normalizePath(localePath);
  for (const [pageId, entry] of entriesByPageId()) {
    const value = entry[locale];
    if (value && normalizePath(value) === normalized) {
      return { pageId, entry };
    }
  }
  return null;
}

export function buildLanguageAlternatesForFrPath(frPath: string): Record<string, string> {
  const normalizedFrPath = normalizePath(frPath);
  const entry = findEntryByFrPath(normalizedFrPath)?.entry;

  if (!entry) {
    return {
      fr: toLocalePath("fr", normalizedFrPath),
      en: toLocalePath("en", normalizedFrPath),
      de: toLocalePath("de", normalizedFrPath),
      nl: toLocalePath("nl", normalizedFrPath),
      "x-default": toLocalePath("fr", normalizedFrPath),
    };
  }

  return {
    fr: normalizePath(entry.fr ?? normalizedFrPath),
    en: normalizePath(entry.en ?? toLocalePath("en", normalizedFrPath)),
    de: normalizePath(entry.de ?? toLocalePath("de", normalizedFrPath)),
    nl: normalizePath(entry.nl ?? toLocalePath("nl", normalizedFrPath)),
    "x-default": normalizePath(entry.fr ?? normalizedFrPath),
  };
}

export function buildLanguageAlternatesForPageId(pageId: string): Record<string, string> | null {
  const entry = getEntryByPageId(pageId);
  if (!entry || !entry.fr) return null;
  const frPath = normalizePath(entry.fr);
  return buildLanguageAlternatesForFrPath(frPath);
}

export type LocaleSlugMatch = {
  locale: SupportedLocale;
  pageId: string;
  entry: SlugMapEntry;
};

export function findEntryByPathname(pathname: string): LocaleSlugMatch | null {
  const { locale, path } = splitLocalePath(pathname);

  if (locale === "fr") {
    const found = findEntryByFrPath(path);
    if (!found) return null;
    return {
      locale,
      pageId: found.pageId,
      entry: found.entry,
    };
  }

  const localePath = toLocalePath(locale, path);
  const found = findEntryByLocalePath(locale, localePath);
  if (!found) return null;
  return {
    locale,
    pageId: found.pageId,
    entry: found.entry,
  };
}

export function resolvePathForLocale(pathname: string, targetLocale: SupportedLocale): { path: string; found: boolean; pageId: string | null } {
  const directMatch = findEntryByPathname(pathname);
  if (directMatch) {
    const localizedPath = directMatch.entry[targetLocale];
    if (localizedPath) {
      return { path: normalizePath(localizedPath), found: true, pageId: directMatch.pageId };
    }
  }

  const { path: normalizedInputPath } = splitLocalePath(pathname);
  const caseStudyAliasPath =
    normalizedInputPath === "/etudes-de-cas"
      ? "/resultats-cas-etudes"
      : normalizedInputPath.startsWith("/etudes-de-cas/")
        ? `/resultats/${normalizedInputPath.slice("/etudes-de-cas/".length)}`
        : normalizedInputPath;
  const aliasMatch = findEntryByFrPath(caseStudyAliasPath);

  if (aliasMatch) {
    const localizedPath = aliasMatch.entry[targetLocale];
    if (localizedPath) {
      return { path: normalizePath(localizedPath), found: true, pageId: aliasMatch.pageId };
    }
  }

  const caseStudyPrefix = normalizedInputPath.startsWith("/resultats/") ? "/resultats/" : "/etudes-de-cas/";
  if (normalizedInputPath.startsWith(caseStudyPrefix)) {
    const incomingSlug = normalizedInputPath.slice(caseStudyPrefix.length);
    const canonicalSlug = resolveCaseStudyCanonicalSlug(incomingSlug);

    if (canonicalSlug !== incomingSlug) {
      const canonicalFrPath = `/resultats/${canonicalSlug}`;
      const canonicalMatch = findEntryByFrPath(canonicalFrPath)
        ?? findEntryByFrPath(`/etudes-de-cas/${canonicalSlug}`);

      if (canonicalMatch) {
        const localizedPath = canonicalMatch.entry[targetLocale];
        if (localizedPath) {
          return { path: normalizePath(localizedPath), found: true, pageId: canonicalMatch.pageId };
        }
      }
    }
  }

  const fallbackPath = toLocalePath(targetLocale, normalizedInputPath);
  return {
    path: normalizePath(fallbackPath),
    found: false,
    pageId: directMatch?.pageId ?? null,
  };
}
