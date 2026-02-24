# SEO Technical Audit — devlo.ch (Next.js site)

**Date:** 2026-02-24
**Auditor:** AI audit (Claude Code)
**Codebase:** devlo-next / `src/`

---

## 1. Framework & Router

| Property | Value |
|---|---|
| Framework | Next.js 14.2.35 |
| Router | **App Router** (`src/app/`) |
| Pages | ~21 static routes + dynamic case studies (`/etudes-de-cas/[slug]`) |
| Deployment | Vercel |

---

## 2. Per-Page Metadata

### Root Layout (`src/app/layout.tsx`)

| Property | Status | Notes |
|---|---|---|
| `metadataBase` | ✅ | `https://devlo.ch` |
| Default title | ✅ | "devlo — Agence B2B de Prospection Commerciale en Suisse" |
| Default description | ✅ | Generic fallback |
| Open Graph (default) | ✅ | siteName, locale=fr_CH, type=website, image |
| Twitter card | ✅ | `summary_large_image` |
| Robots default | ✅ (fixed) | Added `index: true, follow: true` explicitly |
| JSON-LD / Schema | ✅ (fixed) | Organization schema added to layout |
| Canonical (global) | N/A | Correct — canonical must be per-page |

### Key Pages

| Page | Title | Description | OG | Canonical |
|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ | ✅ (fixed) |
| `/etudes-de-cas` | ✅ | ✅ | ✅ | ✅ (fixed) |
| `/academy` | ✅ | ✅ | ✅ | ✅ (fixed) |
| `/consultation` | ✅ | ✅ | ✅ | ✅ (fixed) |
| `/etudes-de-cas/[slug]` | ✅ dynamic | ✅ dynamic | ✅ | ✅ (OG url) |
| `/conditions` | ✅ | ✅ | ❌ | ❌ |
| `/blog` | — | — | — | Redirects → `/` |
| Other internal pages | Varies | Varies | ❌ | ❌ |

---

## 3. robots.txt (`src/app/robots.ts`)

| Property | Status |
|---|---|
| Format | Next.js `MetadataRoute.Robots` (dynamic) |
| `Allow: /` | ✅ |
| Disallowed paths | `/modele`, `/merci`, `/merci-prise-de-contact`, `/telephone`, `/notrerendez-vous`, `/academy-notre-appel`, `/resultats-cas-etudes`, `/blog-list` |
| Sitemap reference | ✅ `https://devlo.ch/sitemap.xml` |
| Host directive | ✅ `https://devlo.ch` |

---

## 4. Sitemap (`src/app/sitemap.ts`)

| Property | Status |
|---|---|
| Format | Next.js `MetadataRoute.Sitemap` (generates `/sitemap.xml`) |
| Static routes | `/`, `/etudes-de-cas`, `/academy`, `/consultation`, `/conditions`, `/formation-prospection-b2b`, `/contact` |
| Dynamic routes | All case study slugs from `caseStudiesCards` (13 entries) |
| Priority / changeFreq | ✅ Properly set |
| Timestamps | ✅ Dynamic (`new Date()`) |

---

## 5. Canonicals

| Property | Status |
|---|---|
| `metadataBase` | ✅ `https://devlo.ch` |
| `alternates.canonical` on key pages | ✅ (fixed) — added to `/`, `/etudes-de-cas`, `/academy`, `/consultation` |
| Case study pages | OG `url` set; `alternates.canonical` handled via redirect (slug dedup) |

---

## 6. JSON-LD / Structured Data

| Schema Type | Status |
|---|---|
| Organization | ✅ (added to layout.tsx) |
| LocalBusiness | Merged into Organization schema |
| Service | TODO — add to `/consultation` page |
| FAQPage | TODO — FAQ content exists on home, not yet in JSON-LD |
| BreadcrumbList | TODO — useful for case study pages |

---

## 7. Security & Technical

| Property | Status |
|---|---|
| HTTPS | ✅ (Vercel) |
| Security headers | ✅ Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, COOP, CORP |
| `poweredByHeader: false` | ✅ |
| React Strict Mode | ✅ |
| Image optimization | ✅ AVIF + WebP formats |
| Font | ✅ Plus Jakarta Sans, `display: swap`, preloaded via next/font |
| Static asset cache | ✅ `max-age=31536000, immutable` for `/images/*` |
| Speed Insights | ✅ @vercel/speed-insights |

---

## 8. Redirects

| Type | Status |
|---|---|
| Case study legacy slugs | ✅ `next.config.mjs` via `caseStudySlugRedirects` |
| WordPress legacy URLs | ✅ (added) `/category/*`, `/tag/*`, `/wp-admin`, `/wp-content/*`, etc. |
| Possible old devlo.ch page URLs | ✅ (added best guesses) — verify with WP crawl |
| `/resultats/[slug]` → `/etudes-de-cas/[slug]` | ✅ |

---

## 9. Open Graph Image

| Property | Status |
|---|---|
| Current OG image | ⚠️ Logo file (`devlo_Logo_Name.webp`) — not a proper editorial OG image |
| Dimensions declared | 1200×630 (but actual image may differ) |
| **Action required** | Design and export a real 1200×630 OG image to `/public/images/og-devlo.jpg` |

---

## 10. i18n

| Property | Status |
|---|---|
| Current language | FR only (`<html lang="fr">`) |
| i18n structure | None |
| hreflang | None (correct — no translated pages yet) |
| Future-ready architecture | See `docs/I18N_SEO_PLAN.md` |

---

## 11. Issues Fixed by This Audit

1. ✅ Added `alternates.canonical` to `/`, `/etudes-de-cas`, `/academy`, `/consultation`
2. ✅ Added Organization JSON-LD to root layout
3. ✅ Created `src/lib/seo/site-config.ts` — centralized SEO/schema constants
4. ✅ Created `src/components/seo/json-ld.tsx` — reusable JSON-LD component
5. ✅ Extended `robots.ts` disallow list (4 internal pages added)
6. ✅ Extended `sitemap.ts` with missing routes
7. ✅ Added WordPress legacy 301 redirects to `next.config.mjs`
8. ✅ Consultation page restructured for CRO
9. ✅ Explicit `robots: { index: true, follow: true }` in root layout

---

## 12. Remaining TODOs (pre-launch)

- [ ] Design real 1200×630 OG image → `/public/images/og-devlo.jpg`
- [ ] Crawl existing devlo.ch (WordPress) to get complete URL inventory → update `URL_MAPPING_DEVLO_MIGRATION.csv`
- [ ] Confirm legal entity name (Sàrl vs SA vs GmbH) → update `site-config.ts`
- [ ] Add FAQPage JSON-LD to homepage (content already exists)
- [ ] Add BreadcrumbList JSON-LD to case study pages
- [ ] Add Service JSON-LD to `/consultation` page
- [ ] Verify `/formation-prospection-b2b` is indexable and content is ready
- [ ] Set up Google Search Console for devlo.ch before migration
- [ ] Export GSC coverage report before DNS switch
