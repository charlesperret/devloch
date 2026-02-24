# Image Reference Audit — src/ codebase

Generated 2026-02-24. Covers all `/images/` references in `.ts`, `.tsx`, `.json`, `.css`, `.mjs` files.

## Status key

| Status | Meaning |
|---|---|
| **OK** | Flat `/images/FILENAME` path, file exists at root |
| **BROKEN** | File does not exist anywhere in the repo |
| **SUBFOLDER_WORKS** | Old subfolder path, file still exists in that subfolder |
| **MIGRATED** | Updated this session from old path to flat root path |

---

## Summary

| Status | Count |
|---|---|
| OK | 75 |
| MIGRATED | 29 |
| SUBFOLDER_WORKS | 68 |
| BROKEN | 1 |

**The only truly broken reference** is `og-devlo.jpg` in `site-config.ts` — the field is declared but not consumed by any component yet, so it does not affect runtime.

---

## BROKEN references

| File | Line | Path | Notes |
|---|---|---|---|
| `src/lib/seo/site-config.ts` | 21 | `/images/og-devlo.jpg` | File missing everywhere. `defaultOgImage` field not yet consumed by any component. TODO: add a 1200×630 px OG image. |

---

## MIGRATED references (changed this session)

### brand-assets.ts — enterpriseLogos (12 entries)

| File | Lines | Old path | New path |
|---|---|---|---|
| `src/lib/brand-assets.ts` | 15–26 | `home/logos/abb.png` … `home/logos/merck.png` | `Logo_ABB.webp` … `Logo_Merck.webp` |

### brand-assets.ts — testimonialProfiles (4 entries)

| File | Line | Old path | New path |
|---|---|---|---|
| `src/lib/brand-assets.ts` | 58 | `home/testimonials/fabio-oliva.jpg` | `/images/Fabio_Oliva.webp` |
| `src/lib/brand-assets.ts` | 64 | `home/testimonials/jurica-karlo.jpg` | `/images/Jurica.webp` |
| `src/lib/brand-assets.ts` | 70 | `home/testimonials/maxime-dumont.jpg` | `/images/Maxime_Dumont.webp` |
| `src/lib/brand-assets.ts` | 76 | `home/testimonials/tanguy-coustaline.jpg` | `/images/Tanguy-Coustaline.webp` |

### home.fr.ts — enterpriseLogos (11 entries)

| File | Lines | Old path | New path |
|---|---|---|---|
| `src/content/home.fr.ts` | 265–275 | `home/logos/lafargeholcim.png` … `home/logos/implenia.png` | `Logo_LafargeHolcim.webp` … `Logo_Implenia.webp` |

### home.fr.ts — testimonials (4 entries)

| File | Line | Old path | New path |
|---|---|---|---|
| `src/content/home.fr.ts` | 282 | `home/testimonials/contact-1633100946280.jpg` | `/images/Olivier-Eyries.webp` |
| `src/content/home.fr.ts` | 288 | `home/testimonials/tanguy-coustaline.jpg` | `/images/Tanguy-Coustaline.webp` |
| `src/content/home.fr.ts` | 294 | `home/testimonials/contact-1517028435372.jpeg` | `/images/Raphael-haut.webp` |
| `src/content/home.fr.ts` | 301 | `home/testimonials/contact-1674375368600.jpeg` | `/images/Xavier_Leuthold.webp` |

### masterfile.fr.ts — writtenTestimonials (2 entries)

| File | Line | Old path | New path |
|---|---|---|---|
| `src/content/masterfile.fr.ts` | 319 | `/images/Olivier-Eyries.jpg` | `/images/Olivier-Eyries.webp` |
| `src/content/masterfile.fr.ts` | 351 | `/images/Raphael-haut.jpg` | `/images/Raphael-haut.webp` |

### masterfile.fr.ts — clientsLogos (6 entries removed)

Removed 6 entries pointing to non-existent files:
`home/brands/StrongNetwork_logo.webp`, `home/brands/Swiss_Digital_Network_logo.webp`,
`home/brands/Tune_Insight_logo.webp`, `home/brands/Undu_du_logo.webp`,
`home/brands/Urbantz_logo.webp`, `home/brands/Webforce_logo.webp`.
Replaced with TODO comment.

---

## OK references (flat root, file confirmed)

### masterfile.fr.ts

| Line | Path | File at root |
|---|---|---|
| 46 | `/images/devlo_Logo_Name.webp` | ✓ |
| 77, 166, 487 | `/images/Cegos_banner.webp` | ✓ |
| 91 | `/images/Logo_ABB.webp` | ✓ |
| 92 | `/images/Logo_Adecco.webp` | ✓ |
| 93 | `/images/Logo_Apple.webp` | ✓ |
| 94 | `/images/Logo_BCF.webp` | ✓ |
| 95 | `/images/Logo_BHP.webp` | ✓ |
| 96 | `/images/Logo_DPD.webp` | ✓ |
| 97 | `/images/Logo_Hublot.webp` | ✓ |
| 98 | `/images/Logo_Implenia.webp` | ✓ |
| 99 | `/images/Logo_LafargeHolcim.webp` | ✓ |
| 100 | `/images/Logo_Lombard_Odier.webp` | ✓ |
| 101 | `/images/Logo_Longines.webp` | ✓ |
| 102 | `/images/Logo_Merck.webp` | ✓ |
| 104–158 | 53× `rendezVousLogos` flat `.webp` files | ✓ all |
| 170 | `/images/Etienne_Auvillain.webp` | ✓ |
| 178, 574 | `/images/Abacus_banner.webp` | ✓ |
| 182, 335 | `/images/Stephan_Nuzzolo-2.webp` | ✓ |
| 190, 527 | `/images/APIDAE_banner.webp` | ✓ |
| 194, 327 | `/images/Tanguy-Coustaline.webp` | ✓ |
| 311 | `/images/Anthony_CREMER.jpg` | ✓ (legacy .jpg, .webp also exists) |
| 319 | `/images/Olivier-Eyries.webp` | ✓ (migrated) |
| 343 | `/images/Jerome_Tailleur.webp` | ✓ |
| 351 | `/images/Raphael-haut.webp` | ✓ (migrated) |
| 359 | `/images/Xavier_Leuthold.jpg` | ✓ (legacy .jpg, .webp also exists) |
| 457 | `/images/CareerLunch_banner1.webp` | ✓ |
| 477 | `/images/LEMANVISIO_banner.webp` | ✓ (masterfile line 497 uses flat root) |
| 497 | `/images/LEMANVISIO_banner.webp` | ✓ |
| 507 | `/images/Saporo_Banner.webp` | ✓ |
| 517 | `/images/Many-Ways_banner.webp` | ✓ |
| 537 | `/images/Locky_banner.webp` | ✓ |
| 546 | `/images/HIAG_banner.webp` | ✓ |
| 556 | `/images/IDDI_banner.jpg` | ✓ (legacy .jpg, .webp also exists) |
| 564 | `/images/Horus_banner.webp` | ✓ |
| 584 | `/images/Monizze_banner.webp` | ✓ |
| 585 | `/images/Monizze.png` | ✓ |
| 627 | `/images/Jurica.jpg` | ✓ (legacy .jpg, .webp also exists) |
| 635 | `/images/Maxime_Dumont.jpeg` | ✓ (legacy .jpeg, .webp also exists) |
| 643 | `/images/Fabio_Oliva.jpeg` | ✓ (legacy .jpeg, .webp also exists) |
| 827 | `/images/service_badge_lemlist-1024x443.webp` | ✓ |

### home.fr.ts (post-migration)

| Lines | Path | Status |
|---|---|---|
| 265–275 | `Logo_LafargeHolcim.webp` … `Logo_Implenia.webp` | ✓ (migrated) |
| 282–301 | 4× flat testimonial `.webp` | ✓ (migrated) |

### brand-assets.ts (post-migration)

| Lines | Path | Status |
|---|---|---|
| 15–26 | 12× `Logo_*.webp` | ✓ (migrated) |
| 58–76 | 4× flat testimonial `.webp` | ✓ (migrated) |

### case-studies.data.json (flat root)

| Line | Path | Status |
|---|---|---|
| 125 | `/images/Jerome_Tailleur.webp` | ✓ |
| 213 | `/images/Raphael-haut.webp` | ✓ |
| 224 | `/images/Olivier-Eyries.webp` | ✓ |
| 238, 1483 | `/images/Stephan_Nuzzolo.webp` | ✓ |
| 241, 1009 | `/images/Tanguy_Coustaline.webp` | ✓ (underscore variant) |
| 641 | `/images/Etienne_Auvillain.webp` | ✓ |
| 1243 | `/images/Xavier_Leuthold.webp` | ✓ |
| 1504 | `/images/Monizze_banner.webp` | ✓ |
| 1505 | `/images/Monizze.png` | ✓ |
| 1506 | `/images/Anthony_CREMER.webp` | ✓ |

### layout.tsx + site-config.ts + site-footer.tsx

| File | Line | Path | Status |
|---|---|---|---|
| `src/app/layout.tsx` | 37, 46 | `/images/devlo_Logo_Name.webp` | ✓ |
| `src/lib/seo/site-config.ts` | 28 | `https://devlo.ch/images/devlo_Logo_Name.webp` | ✓ |
| `src/components/layout/site-footer.tsx` | 30 | `/images/devlo_Logo_Name.webp` | ✓ |

---

## SUBFOLDER_WORKS references

These paths use old subfolder structure. Files still exist in subfolders so nothing is broken today.
**Migration deferred** until files are physically moved to `public/images/` root.

### home/brands/ (case study client logos)

Used in: `brand-assets.ts:30–39`, `home.fr.ts:105–114`, `masterfile.fr.ts:clientsLogos`

| Path | File exists? |
|---|---|
| `/images/home/brands/squareco.png` | ✓ |
| `/images/home/brands/saporo.png` | ✓ |
| `/images/home/brands/many-ways.png` | ✓ |
| `/images/home/brands/locky.png` | ✓ |
| `/images/home/brands/lemanvisio.png` | ✓ |
| `/images/home/brands/hiag.png` | ✓ |
| `/images/home/brands/cegos.png` | ✓ |
| `/images/home/brands/careerlunch.png` | ✓ |
| `/images/home/brands/apidae.png` | ✓ |
| `/images/home/brands/abacus.png` | ✓ |
| `/images/home/brands/saporo.webp` | ✓ (masterfile.fr.ts:508 — .webp variant) |

### home/process/ (process step icons)

Used in: `home.fr.ts:188–223`

All 6 files exist: `1-target.png`, `2-profile.png`, `3-write.png`, `4-lens.png`, `5-email.png`, `6-meeting.png` ✓

### home/academy/ (academy / LMS visuals)

Used in: `brand-assets.ts:43–51`, `testimonials-carousel.tsx:16`, `hero-section-v2.tsx:57`

Files exist: `web-showcase.jpg`, `cover-mac.png`, `academy.gif`, `academy-macbook.gif`, `academy-roadmap.webp`, `tasks.png`, `careerlunch-banner.jpg`, `partner-badge.webp` ✓

### home/social/

Used in: `brand-assets.ts:50`

`positive-replies.gif` ✓ (also exists flat as `Positivereplies.gif` — different capitalisation/name)

### case-studies/heroes/ (14 files)

Used in: `home.fr.ts:316–414`, `masterfile.fr.ts:467`, `case-studies.data.json:10,143,214,326,440,549,659,766,926,1027,1147,1261,1375`

All 14 hero images exist in `case-studies/heroes/` ✓

### case-studies/logos/ (12 .webp files)

Used in: `masterfile.fr.ts:458,478,488,498,518,528,538,547,565,575`, `case-studies.data.json:11,144,216,219,222,226,229,232,235,238`

All 12 logo files exist in `case-studies/logos/` ✓

### case-studies/testimonials/

Used in: `case-studies.data.json:1029`

`mobilite-40-prospects-testimonial.webp` ✓

### placeholders/

Used in: `src/components/sections/hero-section.tsx:38`

`hero.svg` ✓

### blog/

Used in: `src/components/pages/blog-list-page.tsx:20–69`

All 9 blog images exist: `cold-outreach.png`, `getty.png`, `screenshot-2021.png`, `dominos.png`, `fishing.jpeg`, `spearfishing.jpg`, `kpi.png`, `mike-pregler.png`, `team.png` ✓

---

## Dynamic image refs (not classified)

| File | Line | Pattern |
|---|---|---|
| `src/components/pages/home-page.tsx` | 81 | `` `/images/${name}` `` — driven by `clientsLogos` array in masterfile.fr.ts |
| `src/components/pages/academy-master-page.tsx` | 21 | `` `/images/${name}` `` — driven by calling code |
