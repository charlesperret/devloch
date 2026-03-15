/**
 * geo-translate-json.mjs
 *
 * Translates new GEO fields (FR → EN/DE/NL) in a JSON i18n file using the DeepL API.
 *
 * Usage:
 *   node scripts/geo-translate-json.mjs \
 *     --file src/lib/i18n/agency-content.json \
 *     --root agency \
 *     --fields editorialTitle,editorialParagraphs,summaryTitle,summaryPoints
 *
 * Environment:
 *   DEEPL_API_KEY — required
 *
 * The script reads the "fr" locale for each field under --root,
 * translates strings to EN-GB / DE / NL via DeepL, and writes
 * the result back into the same file for the "en", "de", "nl" locales.
 * datePublished / dateModified are never translated (identical across locales).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const DEEPL_ENDPOINTS = [
  "https://api.deepl.com/v2/translate",
  "https://api-free.deepl.com/v2/translate",
];

const TARGETS = [
  { locale: "en", deepl: "EN-GB" },
  { locale: "de", deepl: "DE" },
  { locale: "nl", deepl: "NL" },
];

const SKIP_FIELDS = new Set(["datePublished", "dateModified"]);

const deeplKey = process.env.DEEPL_API_KEY;
if (!deeplKey) {
  console.error("ERROR: DEEPL_API_KEY not set");
  process.exit(1);
}

// ── CLI args ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { file: null, root: null, fields: null, rootArray: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--file") result.file = args[++i];
    else if (args[i] === "--root") result.root = args[++i];
    else if (args[i] === "--fields") result.fields = args[++i].split(",").map((s) => s.trim());
    else if (args[i] === "--root-array") result.rootArray = true; // for arrays like case-studies-content.json
    else if (args[i] === "--root-key") result.rootKey = args[++i]; // for arrays: key to find page by
    else if (args[i] === "--root-value") result.rootValue = args[++i]; // for arrays: value to match
  }
  if (!result.file || !result.fields) {
    console.error("Usage: --file <path> --fields <f1,f2,...> [--root <key>]");
    process.exit(1);
  }
  return result;
}

// ── DeepL ─────────────────────────────────────────────────────────────────────

const translationCache = new Map();
let totalChars = 0;

async function translateMany(texts, targetLang) {
  const unique = [...new Set(texts.map((t) => t.trim()).filter(Boolean))];
  const results = {};
  const missing = [];

  for (const text of unique) {
    const key = `${targetLang}::${text}`;
    if (translationCache.has(key)) results[text] = translationCache.get(key);
    else missing.push(text);
  }

  if (missing.length === 0) return results;

  for (const endpoint of DEEPL_ENDPOINTS) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${deeplKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: missing,
        source_lang: "FR",
        target_lang: targetLang,
        preserve_formatting: true,
      }),
    });

    if (!res.ok) continue;

    const payload = await res.json();
    const rows = payload?.translations ?? [];
    if (rows.length !== missing.length) continue;

    for (let i = 0; i < missing.length; i++) {
      const translated = rows[i]?.text;
      if (!translated) continue;
      translationCache.set(`${targetLang}::${missing[i]}`, translated);
      results[missing[i]] = translated;
      totalChars += missing[i].length;
    }
    break;
  }

  for (const text of missing) {
    if (!results[text]) {
      console.warn(`  ⚠ Translation failed (${targetLang}): "${text.slice(0, 60)}..."`);
    }
  }

  return results;
}

// ── Value helpers ─────────────────────────────────────────────────────────────

function collectStrings(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  return [];
}

async function translateValue(value, targetLang) {
  if (typeof value === "string") {
    const map = await translateMany([value], targetLang);
    return map[value] ?? value;
  }
  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => translateValue(item, targetLang)));
  }
  return value;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const { file, root, fields, rootArray, rootKey, rootValue } = parseArgs();
  const filePath = resolve(process.cwd(), file);

  const json = JSON.parse(readFileSync(filePath, "utf8"));

  // Resolve source object and locale objects
  let frSource, localeObjects;

  if (root && !rootArray) {
    // Simple key: json[root].fr
    frSource = json[root]?.fr;
    localeObjects = {
      fr: json[root].fr,
      en: (json[root].en = json[root].en ?? {}),
      de: (json[root].de = json[root].de ?? {}),
      nl: (json[root].nl = json[root].nl ?? {}),
    };
  } else if (rootArray && rootKey && rootValue) {
    // Array root: json[root] is an array, find by rootKey=rootValue
    const arr = json[root];
    const entry = arr.find((item) => item[rootKey] === rootValue);
    if (!entry) {
      console.error(`Entry with ${rootKey}=${rootValue} not found in ${root}`);
      process.exit(1);
    }
    frSource = entry.fr;
    localeObjects = {
      fr: entry.fr,
      en: (entry.en = entry.en ?? {}),
      de: (entry.de = entry.de ?? {}),
      nl: (entry.nl = entry.nl ?? {}),
    };
  } else if (!root) {
    // Top-level: json.fr
    frSource = json.fr;
    localeObjects = {
      fr: json.fr,
      en: (json.en = json.en ?? {}),
      de: (json.de = json.de ?? {}),
      nl: (json.nl = json.nl ?? {}),
    };
  } else {
    frSource = json[root]?.fr;
    localeObjects = {
      fr: json[root]?.fr ?? {},
      en: (json[root].en = json[root].en ?? {}),
      de: (json[root].de = json[root].de ?? {}),
      nl: (json[root].nl = json[root].nl ?? {}),
    };
  }

  if (!frSource) {
    console.error(`Could not find FR source at ${root ? root + ".fr" : "fr"}`);
    process.exit(1);
  }

  console.log(`\nTranslating fields: ${fields.join(", ")}`);
  console.log(`File: ${file}`);
  console.log(`Root: ${root ?? "(top-level)"}\n`);

  for (const field of fields) {
    if (SKIP_FIELDS.has(field)) {
      console.log(`  ⏭  ${field} — skipped (date field, copying FR value to all locales)`);
      for (const target of TARGETS) {
        localeObjects[target.locale][field] = frSource[field];
      }
      continue;
    }

    const frValue = frSource[field];
    if (frValue === undefined || frValue === null) {
      console.log(`  ⚠  ${field} — not found in FR source, skipping`);
      continue;
    }

    console.log(`  → ${field}`);

    for (const target of TARGETS) {
      const translated = await translateValue(frValue, target.deepl);
      localeObjects[target.locale][field] = translated;
      console.log(`     ${target.locale}: done`);
    }
  }

  writeFileSync(filePath, JSON.stringify(json, null, 2) + "\n", "utf8");
  console.log(`\n✓ Written to ${file} (${totalChars} chars translated)\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
