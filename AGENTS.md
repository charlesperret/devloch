# devlo.ch — Codex Startup Guide

This repo owns the public devlo.ch marketing website.

Before changing pages, SEO/GEO content, routes, navigation, or deployment
behavior, read:

- `CLAUDE.md`
- `docs/seo-geo-guide.md`
- `~/alldevlo/devlo-aios/core/constitution/repo-registry.md`
- `~/alldevlo/devlo-aios/core/workflow/how-we-git.md`
- `~/alldevlo/devlo-aios/core/constitution/operational-rules.md`

## Vercel Plugin Context

Codex has the Vercel Plugin installed at user scope. For any task that touches
the public website, Next.js behavior, Vercel deployment, domains, environment
variables, analytics, performance, or production troubleshooting, take the
Vercel Plugin guidance into account once the Codex session has loaded it.

The plugin may expose commands for deploys, environment variables, marketplace
integrations, project status, and other state-changing Vercel operations. Treat
those as operational-risk actions: read `operational-rules.md`, apply the CFO
tool gate where usage-based spend or provider configuration can change, and do
not run deploy/promote/rollback/domain/env/marketplace actions unless the task
explicitly requires them and the branch/PR/deploy flow is clear.

For public website work, Codex must apply the human-first website gate in
`docs/seo-geo-guide.md`: visible pages are written for B2B buyers first,
localized public copy must be native-quality in every shipped language, page
placement must match the user journey, and LLM/GEO mechanics belong in
metadata, schema, `llms.txt`, or internal docs, not in buyer-facing copy.

For multilingual edits, apply a comment raised in one locale to every locale
that shares the same page or component. French must keep accents, German must
use proper umlauts/orthography in visible copy, and Dutch must not expose rough
English placeholders where a natural Dutch phrase exists. Run
`npm run check:public-copy-quality` before build/deploy.

Use a branch and PR. Do not push directly to `main`.
