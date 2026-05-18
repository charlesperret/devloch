# devlo.ch -- Next.js Website

**Stack:** Next.js 16 (App Router) / TypeScript / Tailwind CSS / Vercel
**Domain:** https://devlo.ch
**Languages:** fr (default), en, de, nl

## This repo does NOT own
| If you need... | Go to |
|----------------|-------|
| Client ICP, voice, strategy | devlo-aios → `context/clients/{slug}/` |
| SOPs, playbooks, guidelines | devlo-aios → `data/sources/`, `context/`, `core/constitution/` |
| Email/LinkedIn automation | devlo-inbox |
| Prospection, Clay signals | devlo-outbound → `clay-signals/` |
| Client portals and internal dashboards | devlo-internal |
| Content creation (LinkedIn, YouTube) | devlo-internal → `content-creation/` |
| Expert brains | expert-brains |
| Architecture decisions, conventions | devlo-aios → `core/constitution/`, `core/decisions/adr/` |
| Credentials inventory, never secret values | devlo-aios → `context/infrastructure/access.md` |

Canonical collaboration guardrails live in devlo-aios:
- `CLAUDE.md` for the start-here map.
- `core/constitution/repo-registry.md` for repo placement.
- `core/constitution/save-rules.md` for file placement and no-loss rules.
- `core/workflow/how-we-git.md` for branch, PR, and merge protocol.

**If not in this table:** `grep -r "keyword" ~/alldevlo/*/CLAUDE.md`

---

## Mandatory pre-deploy validation

Before deploying any new page or significant content change to production, follow the checklist in:

**[docs/seo-geo-guide.md](docs/seo-geo-guide.md)** -- SEO & GEO Guide

This guide covers:
- Page creation checklist (metadata, structured data, content structure, performance, GEO)
- Metadata requirements and the `buildPageMetadata()` API
- GEO (Generative Engine Optimization) requirements for AI search citation
- Core Web Vitals targets and known issues
- Multilingual / hreflang rules
- Internal linking rules
- Image requirements
- Structured data templates (JSON-LD)
- llms.txt maintenance
- Validation tools and commands

**Every new page must pass the full checklist before merge.**

---

## Key directories

| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages and layouts |
| `src/components/seo/` | JSON-LD component |
| `src/lib/seo/` | Metadata builder, schema builders, site config |
| `src/lib/i18n/` | Slug map, localized SEO, geo content |
| `src/content/` | HadoSEO metadata overrides, geo pages data |
| `public/llms.txt` | LLM-optimized site map (update when adding pages) |
| `scripts/` | SEO crawler, metadata verification |
| `docs/` | Audits, migration checklists, guides |

---

## SEO infrastructure

| Component | File |
|-----------|------|
| Metadata builder | `src/lib/seo/metadata.ts` |
| Schema builders | `src/lib/seo/schema-builders.ts` |
| Site constants | `src/lib/seo/site-config.ts` |
| robots.txt | `src/app/robots.ts` |
| sitemap.xml | `src/app/sitemap.ts` |
| JSON-LD renderer | `src/components/seo/json-ld.tsx` |
| Metadata overrides | `src/content/hadoseo-metadata.ts` |

---

## MCP servers (project-level)

| Server | Purpose |
|--------|---------|
| `chatseo` | AI SEO scoring (GEO readiness audit) |
| `gsc-server` | Google Search Console data |

---

## Rules

- NEVER remove or modify `favicon.ico`, `icon.png`, or `apple-icon.png`
- NEVER hardcode API keys or secrets
- NEVER deploy without checking the SEO/GEO guide checklist
- NEVER add hreflang tags for locales where the page does not exist
- NEVER set more than 2 images per page as `priority`
- Always use `buildPageMetadata()` for page metadata (do not manually construct Metadata objects)
- Always add new pages to `sitemap.ts` and `llms.txt`
- Always include JSON-LD structured data appropriate to the page type
