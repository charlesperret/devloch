# Vercel Preview Workflow

## Goal
Deploy and validate the Next.js site on a Vercel preview URL first, then switch `devlo.ch` only after approval.

## 1. Authenticate once
- Run: `npx vercel login`

## 2. Link project
- Run: `npm run vercel:link`

## 3. Deploy preview
- Run: `npm run vercel:preview`
- Save the generated `*.vercel.app` URL for review.

## 4. QA on preview
- Check pages:
  - `/`
  - `/formation-prospection-b2b`
  - `/resultats`
  - `/resultats/logiciel-comptable-200k-ca`
- Check technical URLs:
  - `/sitemap.xml`
  - `/robots.txt`

## 5. Production cutover (later)
- Run: `npm run vercel:prod`
- Attach `devlo.ch` + `www.devlo.ch` in Vercel Domains.
- Update DNS only after final approval.
