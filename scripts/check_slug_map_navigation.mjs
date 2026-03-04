#!/usr/bin/env node

import { readFileSync } from "node:fs";

const slugMapPath = process.argv[2] ?? "src/lib/i18n/slug-map.json";
const slugMap = JSON.parse(readFileSync(slugMapPath, "utf8"));

const locales = ["fr", "en", "de", "nl"];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.replace(/\/+$/, "");
}

function homeForLocale(locale) {
  return locale === "fr" ? "/" : `/${locale}`;
}

const reverse = {
  fr: new Map(),
  en: new Map(),
  de: new Map(),
  nl: new Map(),
};

let duplicateCount = 0;
for (const [pageId, entry] of Object.entries(slugMap)) {
  for (const locale of locales) {
    const value = entry[locale];
    if (!value) continue;
    const normalized = normalizePath(value);
    if (reverse[locale].has(normalized)) {
      duplicateCount += 1;
      console.error(`DUPLICATE: ${locale} ${normalized} => ${reverse[locale].get(normalized)} / ${pageId}`);
      continue;
    }
    reverse[locale].set(normalized, pageId);
  }
}

let invalidCount = 0;
for (const [pageId, entry] of Object.entries(slugMap)) {
  for (const sourceLocale of locales) {
    const sourcePath = entry[sourceLocale];
    if (!sourcePath) continue;

    for (const targetLocale of locales) {
      const expected = entry[targetLocale] ? normalizePath(entry[targetLocale]) : homeForLocale(targetLocale);
      if (!expected.startsWith("/")) {
        invalidCount += 1;
        console.error(`INVALID TARGET: ${pageId} ${sourceLocale}->${targetLocale} expected=${expected}`);
      }
    }
  }
}

if (duplicateCount > 0 || invalidCount > 0) {
  console.error(`slug-map navigation check failed (duplicates=${duplicateCount}, invalid=${invalidCount})`);
  process.exit(1);
}

console.log(`slug-map navigation check passed (${Object.keys(slugMap).length} entries)`);
