# Image Reconciliation TODOs

Generated 2026-02-24. Tracks outstanding image asset work after the flat migration pass.

---

## Priority 1 — BROKEN reference (1 item)

### OG image missing

| Field | Value |
|---|---|
| File | `src/lib/seo/site-config.ts:21` |
| Current value | `/images/og-devlo.jpg` |
| Status | File does not exist anywhere in the repo |
| Impact | None currently (field not consumed by any component), but will matter when connected to page metadata |
| Action | Create a 1200×630 px OG image, place it at `public/images/og-devlo.jpg` (or any name, then update the ref) |

---

## Priority 2 — SUBFOLDER_WORKS refs to migrate when ready

These paths still use the old subfolder structure. Files exist so nothing is currently broken. When the files are moved to `public/images/` root, update the refs listed here.

### home/brands/ — case study client logos

10 PNG logos + 1 WebP. No flat equivalents exist at root today.

| Subfolder path | Used in |
|---|---|
| `home/brands/squareco.png` | `brand-assets.ts:30`, `home.fr.ts:109`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/saporo.png` | `brand-assets.ts:31`, `home.fr.ts:114`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/saporo.webp` | `masterfile.fr.ts:508` (case study logo for Saporo card) |
| `home/brands/many-ways.png` | `brand-assets.ts:32`, `home.fr.ts:108`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/locky.png` | `brand-assets.ts:33`, `home.fr.ts:110`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/lemanvisio.png` | `brand-assets.ts:34`, `home.fr.ts:111`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/hiag.png` | `brand-assets.ts:35`, `home.fr.ts:113`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/cegos.png` | `brand-assets.ts:36`, `home.fr.ts:106`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/careerlunch.png` | `brand-assets.ts:37`, `home.fr.ts:105`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/apidae.png` | `brand-assets.ts:38`, `home.fr.ts:112`, `masterfile.fr.ts:clientsLogos` |
| `home/brands/abacus.png` | `brand-assets.ts:39`, `home.fr.ts:107`, `masterfile.fr.ts:clientsLogos` |

**Migration action when files are moved:** Copy/rename each file to `public/images/<name>.webp`, then update all three files.

### home/process/ — process step icons

6 PNG icons. Used only in `home.fr.ts`. No flat equivalents.

Files: `1-target.png`, `2-profile.png`, `3-write.png`, `4-lens.png`, `5-email.png`, `6-meeting.png`

### home/academy/ — academy / LMS visuals

Used in `brand-assets.ts:43–51`, `testimonials-carousel.tsx:16`, `hero-section-v2.tsx:57`. No flat equivalents.

Files: `web-showcase.jpg`, `cover-mac.png`, `academy.gif`, `academy-macbook.gif`, `academy-roadmap.webp`, `tasks.png`, `careerlunch-banner.jpg`, `partner-badge.webp`

### home/social/ — animated GIF

`home/social/positive-replies.gif` — used in `brand-assets.ts:50`.
Note: `Positivereplies.gif` exists at flat root with different capitalisation/name. Once confirmed same content, update ref to `/images/Positivereplies.gif`.

### case-studies/heroes/ and case-studies/logos/

All 14 hero images and 12 logo images still live in subfolders. They are used by both `home.fr.ts` (case study slides) and `case-studies.data.json` (case study detail pages). Files are large-ish; migrate when the full asset pipeline is updated.

### case-studies/testimonials/

`mobilite-40-prospects-testimonial.webp` — used in `case-studies.data.json:1029`. No flat equivalent.

### placeholders/

`placeholders/hero.svg` — used in `hero-section.tsx:38`. No flat equivalent.

### blog/

9 blog post images live in `blog/`. Used only by `blog-list-page.tsx`. No flat equivalents.

---

## Priority 3 — clientsLogos missing files (10 companies)

These companies were requested for the `clientsLogos` rail but their logo files do not exist in the repo. Once the files are obtained, place them at `public/images/FILENAME.webp` and add the entry to `masterfile.fr.ts:clientsLogos`.

| Company | Expected flat filename |
|---|---|
| Strong Network | `StrongNetwork_logo.webp` |
| Swiss Digital Network | `Swiss_Digital_Network_logo.webp` |
| Tune Insight | `Tune_Insight_logo.webp` |
| Und du | `Undu_du_logo.webp` |
| Urbantz | `Urbantz_logo.webp` |
| Webforce | `Webforce_logo.webp` |
| FusionOne | `FusionOne_logo.webp` |
| Lane | `Lane_logo.webp` |
| Redguard | `Redguard_logo.webp` |
| Referwell | `Referwell_logo.webp` |

---

## Priority 4 — Legacy .jpg/.jpeg refs at flat root

These flat-root references are OK (files exist) but use legacy `.jpg`/`.jpeg` when a `.webp` counterpart also exists. Low priority — migrate when convenient.

| File | Line | Current | Available webp |
|---|---|---|---|
| `masterfile.fr.ts` | 311 | `/images/Anthony_CREMER.jpg` | `Anthony_CREMER.webp` ✓ |
| `masterfile.fr.ts` | 359 | `/images/Xavier_Leuthold.jpg` | `Xavier_Leuthold.webp` ✓ |
| `masterfile.fr.ts` | 556 | `/images/IDDI_banner.jpg` | `IDDI_banner.webp` ✓ |
| `masterfile.fr.ts` | 627 | `/images/Jurica.jpg` | `Jurica.webp` ✓ |
| `masterfile.fr.ts` | 635 | `/images/Maxime_Dumont.jpeg` | `Maxime_Dumont.webp` ✓ |
| `masterfile.fr.ts` | 643 | `/images/Fabio_Oliva.jpeg` | `Fabio_Oliva.webp` ✓ |

---

## Flat root files with no known code reference

The following files exist at `public/images/` root but are not referenced in any source file. They may be used in legacy pages, future use, or are safe to archive.

- `Biosensors_International_Group,_Ltd.webp`
- `Caisse_de_prévoyance_de_l'Etat_de_Genève_(CPEG).webp`
- `Groupe_hôtelier_Sandoz_Foundation_Hotels.webp`
- `MKS_PAMP_GROUP_B.V..webp`
- `Piguet_Galland_&_Cie_SA.webp`
- `Unisanté.webp`
- `ADM.webp`, `Swatch_Group.webp` (in rendezVousLogos ✓ — included in flat root rail)
- All 52 `Asset-*.webp` and `Asset_*.webp` files (legacy, see IMAGE_INVENTORY.md)
- `Positivereplies.gif` (flat root) vs `home/social/positive-replies.gif` (subfolder) — verify same content

---

## Belgian logos — not currently referenced

The 21 Belgian client logos at flat root (acurity_belgie, aktual, avient, etc.) are not referenced in any component. Add to a Belgian clients rail when the page is ready.
