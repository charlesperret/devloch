/**
 * crawl-seo.mjs — SEO crawler for devlo.ch
 *
 * Replaces Screaming Frog for the WordPress → Next.js migration audit.
 * Uses only native Node.js 20 + cheerio (already in devDependencies).
 *
 * Usage:
 *   node scripts/crawl-seo.mjs
 *
 * Output: seo-crawl-exports/ (6 files)
 *   sf-internal-html.csv               → All HTML pages (status, title, h1, canonical…)
 *   sf-3xx.csv                         → Redirects
 *   sf-4xx.csv                         → Client errors
 *   sf-canonicals.csv                  → Canonical tag analysis
 *   URL_MAPPING_DEVLO_MIGRATION_from_crawl.csv
 *   seo_crawl_summary.md
 */

import { writeFileSync, mkdirSync } from "fs";
import * as cheerio from "cheerio";

// ─── Config ──────────────────────────────────────────────────────────────────
const BASE_URL = "https://devlo.ch";
const OUTPUT_DIR = "seo-crawl-exports";
const USER_AGENT = "Devlo-Migration-Audit/1.0 (+https://devlo.ch)";
const DELAY_MS = 350;      // ms between requests — be polite
const TIMEOUT_MS = 15000;  // per-request timeout

// File extensions to skip (treat as non-HTML assets)
const ASSET_EXT = /\.(jpg|jpeg|png|gif|webp|avif|svg|ico|css|js|woff|woff2|ttf|eot|otf|pdf|zip|gz|mp4|mp3|mov|avi|xml|json|txt|csv|xlsx|docx)(\?.*)?$/i;

// URL schemes to skip
const SKIP_SCHEME = /^(mailto:|tel:|javascript:|#)/i;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeUrl(raw) {
  try {
    const u = new URL(raw);
    u.hash = "";
    // Remove common tracking params
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
      (p) => u.searchParams.delete(p),
    );
    return u.href;
  } catch {
    return raw;
  }
}

function isSameDomain(url) {
  try {
    return new URL(url).hostname === "devlo.ch";
  } catch {
    return false;
  }
}

function shouldSkip(url) {
  if (SKIP_SCHEME.test(url)) return true;
  if (ASSET_EXT.test(url)) return true;
  // Skip pagination params like ?et_blog, ?post_type=post
  try {
    const u = new URL(url);
    if (u.searchParams.has("post_type")) return true;
    if (u.searchParams.has("et_blog")) return true;
    if (u.searchParams.has("cx_tag_filter")) return true;
  } catch {}
  return false;
}

// ─── Fetch with manual redirect ───────────────────────────────────────────────

async function fetchUrl(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      redirect: "manual",
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "fr,en;q=0.5",
      },
    });

    clearTimeout(timeoutId);

    const statusCode = res.status;
    const contentType = res.headers.get("content-type") ?? "";
    const location = res.headers.get("location") ?? "";
    const isHtml = contentType.includes("text/html");

    let body = "";
    if (isHtml && statusCode === 200) {
      body = await res.text();
    } else {
      // Drain the body to avoid connection leaks
      await res.text().catch(() => {});
    }

    return { url, statusCode, contentType, redirectTarget: location, body, isHtml, error: null };
  } catch (err) {
    clearTimeout(timeoutId);
    const message = err.name === "AbortError" ? "timeout" : (err.message ?? "unknown error");
    return { url, statusCode: 0, contentType: "", redirectTarget: "", body: "", isHtml: false, error: message };
  }
}

// ─── HTML parsing ─────────────────────────────────────────────────────────────

function parseHtml(url, html) {
  const $ = cheerio.load(html);
  return {
    title: $("title").first().text().trim(),
    h1: $("h1").first().text().trim().replace(/\s+/g, " "),
    canonical: $('link[rel="canonical"]').attr("href")?.trim() ?? "",
    metaRobots: $('meta[name="robots"]').attr("content")?.trim() ?? "",
    description: $('meta[name="description"]').attr("content")?.trim() ?? "",
    ogTitle: $('meta[property="og:title"]').attr("content")?.trim() ?? "",
    lang: $("html").attr("lang")?.trim() ?? "",
  };
}

function extractLinks(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = new Set();

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    if (SKIP_SCHEME.test(href)) return;
    if (ASSET_EXT.test(href)) return;

    try {
      const resolved = new URL(href, baseUrl);
      resolved.hash = "";
      const clean = resolved.href;
      if (isSameDomain(clean) && !shouldSkip(clean)) {
        links.add(clean);
      }
    } catch {}
  });

  return [...links];
}

// ─── CSV helpers ──────────────────────────────────────────────────────────────

function csvEscape(v) {
  const s = String(v ?? "").replace(/\r?\n/g, " ");
  return `"${s.replace(/"/g, '""')}"`;
}

function toCsv(headers, rows) {
  const head = headers.join(",");
  const body = rows.map((row) => headers.map((h) => csvEscape(row[h] ?? "")).join(",")).join("\n");
  return body ? `${head}\n${body}` : head;
}

// ─── Classify canonical status ────────────────────────────────────────────────

function canonicalStatus(pageUrl, canonical) {
  if (!canonical) return "missing";
  try {
    const cu = new URL(canonical, pageUrl);
    const pu = new URL(pageUrl);
    if (cu.hostname !== pu.hostname) return "cross-domain";
    if (cu.pathname === pu.pathname) return "self";
    return "cross-page";
  } catch {
    return "invalid";
  }
}

// ─── Migration priority heuristic ────────────────────────────────────────────

function migrationPriority(path) {
  if (path === "/" || path === "/en/" || path === "/de/") return "HIGH";
  if (/\/(consultation|contact|rendez-vous|call)\/?/.test(path)) return "HIGH";
  if (/\/(resultats|casestudy|fallstudien|etudes-de-cas)\/[^/]+/.test(path)) return "HIGH";
  if (/\/(academy|formation|training|ausbildung|b2b-sales-training)/.test(path)) return "MEDIUM";
  if (/\/(blog|article|post)/.test(path)) return "MEDIUM";
  if (path.startsWith("/en/") || path.startsWith("/de/")) return "MEDIUM";
  return "LOW";
}

function migrationNote(url) {
  const path = new URL(url).pathname;
  if (path.startsWith("/en/")) return "EN page → redirect to FR equivalent";
  if (path.startsWith("/de/")) return "DE page → redirect to FR equivalent";
  if (/\/resultats\//.test(path)) return "Old FR case study URL → map to /etudes-de-cas/[slug]";
  if (/\/(category|tag|author|page)\//.test(path)) return "WP taxonomy/archive → redirect to /";
  return "";
}

// ─── Main crawl ───────────────────────────────────────────────────────────────

async function crawl() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const visited = new Map(); // normalized URL → result
  const queue = [BASE_URL + "/"];
  const inlinkCount = {};
  let crawlCount = 0;

  console.log(`\n🕷  Starting crawl: ${BASE_URL}\n`);

  while (queue.length > 0) {
    const url = queue.shift();
    const normalized = normalizeUrl(url);

    if (visited.has(normalized) || shouldSkip(url)) continue;
    visited.set(normalized, null); // Reserve slot immediately to avoid duplicates

    crawlCount++;
    process.stdout.write(`  [${crawlCount}] ${url.padEnd(80).slice(0, 80)}\r`);

    const result = await fetchUrl(url);
    let pageData = {};

    if (result.isHtml && result.statusCode === 200 && result.body) {
      pageData = parseHtml(url, result.body);
      const links = extractLinks(result.body, url);

      for (const link of links) {
        const normLink = normalizeUrl(link);
        inlinkCount[normLink] = (inlinkCount[normLink] ?? 0) + 1;
        if (!visited.has(normLink)) {
          queue.push(link);
        }
      }
    }

    const full = { ...result, ...pageData };
    full.inlinksCount = 0; // will be set after crawl
    visited.set(normalized, full);

    await sleep(DELAY_MS);
  }

  // Attach inlink counts
  const results = [...visited.values()].filter(Boolean);
  for (const r of results) {
    r.inlinksCount = inlinkCount[normalizeUrl(r.url)] ?? 0;
  }

  console.log(`\n\n✅ Crawled ${results.length} URLs\n`);

  return results;
}

// ─── Generate reports ────────────────────────────────────────────────────────

function generateReports(results) {
  const htmlPages = results.filter((r) => r.isHtml);
  const errors4xx = results.filter((r) => r.statusCode >= 400 && r.statusCode < 500);
  const redirects3xx = results.filter((r) => r.statusCode >= 300 && r.statusCode < 400);
  const errored = results.filter((r) => r.statusCode === 0 && r.error);

  // ── A. sf-internal-html.csv
  const htmlRows = htmlPages.map((r) => ({
    url: r.url,
    status_code: r.statusCode,
    content_type: r.contentType,
    lang: r.lang ?? "",
    title: r.title ?? "",
    h1: r.h1 ?? "",
    canonical: r.canonical ?? "",
    canonical_status: canonicalStatus(r.url, r.canonical ?? ""),
    meta_robots: r.metaRobots ?? "",
    description: r.description ?? "",
    og_title: r.ogTitle ?? "",
    inlinks_count: r.inlinksCount,
  }));
  writeFileSync(`${OUTPUT_DIR}/sf-internal-html.csv`, toCsv(
    ["url","status_code","content_type","lang","title","h1","canonical","canonical_status","meta_robots","description","og_title","inlinks_count"],
    htmlRows,
  ));

  // ── B. sf-4xx.csv
  const rows4xx = [...errors4xx, ...errored].map((r) => ({
    url: r.url,
    status_code: r.statusCode || "ERR",
    error: r.error ?? "",
    note: r.statusCode === 404 ? "404 — add redirect if previously indexed" : "",
  }));
  writeFileSync(`${OUTPUT_DIR}/sf-4xx.csv`, toCsv(["url","status_code","error","note"], rows4xx));

  // ── C. sf-3xx.csv
  const rows3xx = redirects3xx.map((r) => ({
    url: r.url,
    status_code: r.statusCode,
    redirect_target: r.redirectTarget,
    note: r.statusCode === 302 ? "302 — change to 301 if permanent" : "301 permanent",
  }));
  writeFileSync(`${OUTPUT_DIR}/sf-3xx.csv`, toCsv(["url","status_code","redirect_target","note"], rows3xx));

  // ── D. sf-canonicals.csv
  const canonicalRows = htmlPages.map((r) => ({
    url: r.url,
    canonical: r.canonical ?? "",
    canonical_status: canonicalStatus(r.url, r.canonical ?? ""),
    meta_robots: r.metaRobots ?? "",
    note: "",
  }));
  writeFileSync(`${OUTPUT_DIR}/sf-canonicals.csv`, toCsv(
    ["url","canonical","canonical_status","meta_robots","note"],
    canonicalRows,
  ));

  // ── E. URL_MAPPING_DEVLO_MIGRATION_from_crawl.csv
  const migrationRows = htmlPages.map((r) => {
    const path = new URL(r.url).pathname;
    return {
      old_url: r.url,
      new_url: "",
      status_code: r.statusCode,
      priority: migrationPriority(path),
      source: "crawl",
      title: r.title ?? "",
      note: migrationNote(r.url),
    };
  });
  writeFileSync(`${OUTPUT_DIR}/URL_MAPPING_DEVLO_MIGRATION_from_crawl.csv`, toCsv(
    ["old_url","new_url","status_code","priority","source","title","note"],
    migrationRows,
  ));

  // ── F. seo_crawl_summary.md
  const total = results.length;
  const ok200 = results.filter((r) => r.statusCode === 200).length;
  const r3xx = redirects3xx.length;
  const r4xx = errors4xx.length;
  const r5xx = results.filter((r) => r.statusCode >= 500).length;
  const noTitle = htmlPages.filter((r) => !r.title).length;
  const noH1 = htmlPages.filter((r) => !r.h1).length;
  const noCanonical = htmlPages.filter((r) => !r.canonical).length;
  const crossCanonical = canonicalRows.filter((r) => r.canonical_status === "cross-page").length;
  const noindex = htmlPages.filter((r) => r.metaRobots?.includes("noindex")).length;
  const enPages = htmlPages.filter((r) => new URL(r.url).pathname.startsWith("/en/")).length;
  const dePages = htmlPages.filter((r) => new URL(r.url).pathname.startsWith("/de/")).length;
  const resultatsPages = htmlPages.filter((r) => /\/resultats\/[^/]+/.test(new URL(r.url).pathname)).length;

  const summary = `# SEO Crawl Summary — devlo.ch

**Crawled:** ${new Date().toISOString().replace("T", " ").slice(0, 19)} UTC
**Crawler:** Devlo-Migration-Audit
**Base:** ${BASE_URL}

---

## Stats

| Metric | Count |
|---|---|
| Total URLs crawled | ${total} |
| HTML pages | ${htmlPages.length} |
| 200 OK | ${ok200} |
| 3xx Redirects | ${r3xx} |
| 4xx Errors | ${r4xx} |
| 5xx Errors | ${r5xx} |
| Network errors | ${errored.length} |

---

## SEO Issues

| Issue | Count | Action |
|---|---|---|
| Pages without \`<title>\` | ${noTitle} | Add title metadata |
| Pages without \`<h1>\` | ${noH1} | Add H1 to page |
| Pages without canonical | ${noCanonical} | Add \`alternates.canonical\` |
| Cross-page canonicals | ${crossCanonical} | Review consolidation |
| Pages with noindex | ${noindex} | Expected if internal pages |

---

## Migration Highlights

| Language | HTML pages | Action |
|---|---|---|
| FR (root) | ${htmlPages.length - enPages - dePages} | Preserve / map |
| EN (/en/) | ${enPages} | Redirect to FR equivalents |
| DE (/de/) | ${dePages} | Redirect to FR equivalents |
| FR case study (/resultats/*) | ${resultatsPages} | Map to /etudes-de-cas/[slug] |

---

## Key Recommendations

1. **EN/DE traffic** — ${enPages + dePages} pages need 301 redirects to FR equivalents in \`next.config.mjs\`
2. **/resultats/* case studies** — ${resultatsPages} pages use long WP slugs; add specific 301s (wildcard alone creates 404s)
3. **Missing canonicals** — ${noCanonical} pages without canonical tag; check the new Next.js site coverage
4. **4xx errors** — ${r4xx} URLs return errors; verify these are not indexed on devlo.ch

---

## Output Files

| File | Description |
|---|---|
| \`sf-internal-html.csv\` | ${htmlPages.length} HTML pages |
| \`sf-3xx.csv\` | ${r3xx} redirects |
| \`sf-4xx.csv\` | ${r4xx} errors |
| \`sf-canonicals.csv\` | ${htmlPages.length} canonical entries |
| \`URL_MAPPING_DEVLO_MIGRATION_from_crawl.csv\` | Migration mapping (fill in \`new_url\` column) |
`;

  writeFileSync(`${OUTPUT_DIR}/seo_crawl_summary.md`, summary);

  // Console summary
  console.log(`📁 Output: ${OUTPUT_DIR}/`);
  console.log(`   sf-internal-html.csv          ${htmlPages.length} HTML pages`);
  console.log(`   sf-3xx.csv                    ${r3xx} redirects`);
  console.log(`   sf-4xx.csv                    ${r4xx + errored.length} errors`);
  console.log(`   sf-canonicals.csv             ${htmlPages.length} canonical entries`);
  console.log(`   URL_MAPPING_DEVLO_MIGRATION…  ${htmlPages.length} rows (fill new_url)`);
  console.log(`   seo_crawl_summary.md\n`);
}

// ─── Run ─────────────────────────────────────────────────────────────────────

const results = await crawl();
generateReports(results);
