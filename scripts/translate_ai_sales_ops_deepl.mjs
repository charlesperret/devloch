/**
 * Translates AI Sales Ops FR content to EN/DE/NL via DeepL.
 * Output: src/lib/i18n/ai-sales-ops-content.json
 *
 * Usage:
 *   DEEPL_API_KEY=xxx node scripts/translate_ai_sales_ops_deepl.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import ts from "typescript";

const deeplKey = process.env.DEEPL_API_KEY;
if (!deeplKey) throw new Error("Missing DEEPL_API_KEY");

const TARGETS = [
  { locale: "en", deepl: "EN-GB" },
  { locale: "de", deepl: "DE" },
  { locale: "nl", deepl: "NL" },
];

const ENDPOINTS = [
  "https://api.deepl.com/v2/translate",
  "https://api-free.deepl.com/v2/translate",
];

const SKIP_KEYS = new Set([
  "number",
  "stack",
  "value",
  "href",
  "sourceHref",
  "icon",
  "systemTags",
]);

async function importTsModule(filePath) {
  const absPath = resolve(process.cwd(), filePath);
  const source = readFileSync(absPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: absPath,
  }).outputText;

  const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString("base64")}`;
  return import(moduleUrl);
}

function shouldSkipString(value) {
  if (!value || typeof value !== "string") return true;
  const trimmed = value.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith("/")) return true;
  if (/^https?:\/\//i.test(trimmed)) return true;
  if (/\.(webp|png|jpg|jpeg|svg|gif|pdf|mp4|webm)$/i.test(trimmed)) return true;
  if (/^\+?[0-9\s()./-]{2,}$/.test(trimmed)) return true;
  if (/^[A-Za-z0-9_-]{2,}$/.test(trimmed) && !/[\s']/u.test(trimmed) && trimmed.length < 18) return true;
  return false;
}

function collectStrings(node, out, key = "") {
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, key);
    return;
  }

  if (!node || typeof node !== "object") {
    if (typeof node === "string" && !SKIP_KEYS.has(key) && !shouldSkipString(node)) {
      out.add(node);
    }
    return;
  }

  for (const [childKey, childValue] of Object.entries(node)) {
    if (SKIP_KEYS.has(childKey)) continue;
    collectStrings(childValue, out, childKey);
  }
}

function applyTranslations(node, map, key = "") {
  if (Array.isArray(node)) {
    return node.map((item) => applyTranslations(item, map, key));
  }

  if (!node || typeof node !== "object") {
    if (typeof node === "string" && !SKIP_KEYS.has(key) && !shouldSkipString(node)) {
      return map.get(node) ?? node;
    }
    return node;
  }

  const out = {};
  for (const [childKey, childValue] of Object.entries(node)) {
    if (SKIP_KEYS.has(childKey)) {
      out[childKey] = childValue;
      continue;
    }
    out[childKey] = applyTranslations(childValue, map, childKey);
  }
  return out;
}

async function sleep(ms) {
  return new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}

async function translateBatch(texts, targetLang, attempt = 0) {
  if (texts.length === 0) return [];

  let lastError = "";

  for (const endpoint of ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `DeepL-Auth-Key ${deeplKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: texts,
          source_lang: "FR",
          target_lang: targetLang,
          preserve_formatting: true,
        }),
      });

      const raw = await response.text();
      if (!response.ok) {
        lastError = `${response.status}:${raw.slice(0, 180)}`;
        continue;
      }

      const json = JSON.parse(raw);
      const rows = Array.isArray(json?.translations) ? json.translations : [];
      if (rows.length !== texts.length) {
        lastError = `invalid-count:${rows.length}/${texts.length}`;
        continue;
      }

      return rows.map((row) => row?.text || "");
    } catch (error) {
      lastError = String(error?.message || error);
    }
  }

  if (attempt < 4) {
    const delay = 1000 * Math.pow(2, attempt);
    console.warn(`retry ${attempt + 1}/4 in ${delay}ms for ${targetLang}...`);
    await sleep(delay);
    return translateBatch(texts, targetLang, attempt + 1);
  }

  throw new Error(`DeepL translate failed (${targetLang}) ${lastError}`);
}

async function buildTranslationMap(source) {
  const strings = new Set();
  collectStrings(source, strings);
  const allStrings = Array.from(strings);
  console.log(`AI Sales Ops: ${allStrings.length} strings to translate`);

  const maps = {};
  for (const target of TARGETS) {
    const map = new Map();
    const chunkSize = 35;

    for (let index = 0; index < allStrings.length; index += chunkSize) {
      const chunk = allStrings.slice(index, index + chunkSize);
      const translated = await translateBatch(chunk, target.deepl);
      chunk.forEach((sourceText, chunkIndex) => map.set(sourceText, translated[chunkIndex] || sourceText));
    }

    maps[target.locale] = map;
    console.log(`  translated ${target.locale}`);
  }

  return maps;
}

const contentModule = await importTsModule("src/content/ai-sales-ops.ts");
const source = contentModule.aiSalesOpsContent;

if (!source) {
  throw new Error("Unable to load aiSalesOpsContent from src/content/ai-sales-ops.ts");
}

const maps = await buildTranslationMap(source);
const bundle = { fr: source };

for (const target of TARGETS) {
  bundle[target.locale] = applyTranslations(source, maps[target.locale]);
}

const outPath = resolve(process.cwd(), "src/lib/i18n/ai-sales-ops-content.json");
writeFileSync(outPath, JSON.stringify(bundle, null, 2));

console.log(`written: ${outPath}`);
console.log("AI Sales Ops translations complete.");
