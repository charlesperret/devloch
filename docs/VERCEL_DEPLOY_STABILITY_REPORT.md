# Vercel Deploy Stability Report (2026-03-02)

## Context
- Symptom: deployment failed after successful build at `Deploying outputs...` with `Error: We encountered an internal error. Please try again.`
- Scope: Next.js 14.2.35 app router, production domain `https://devlo.ch`.

## A) Diagnostic checks

### Output size / large files
- `.next`: `216M`
- `public`: `8.1M`
- `find public -maxdepth 3 -type f -size +20M`: none
- `find .next -type f -size +50M`: none

### Sitemap / prebuild
- `public/sitemap.xml`: ~16 KB, 84 URLs.
- Prebuild script (`scripts/fetch-lovalingo-sitemap.mjs`) downloads Lovalingo XML and writes it to `public/sitemap.xml`.
- No oversized generated artifact found.

### Node / engine
- `.nvmrc`: `20`
- `package.json` engines: `20.x`
- Removed `lighthouse` dev dependency to eliminate Node>=22 engine warning on Vercel.

### Deploy input hygiene
- Added `.vercelignore` to exclude local-only/unnecessary files from upload.

## B) Changes applied

### 1) Build determinism: local fonts
- Replaced runtime reliance on Google Fonts fetches.
- Added local WOFF2 files under `public/fonts/`.
- Updated `src/app/layout.tsx` and `src/app/globals.css` to use local font loading.

### 2) Engine warning removal
- Removed `lighthouse` from `devDependencies`.

### 3) Deploy stability workaround during Vercel incident
- Identified active Vercel incident: degraded Builds/Edge Middleware/Edge Functions.
- `src/middleware.ts` (Edge middleware) was removed.
- Equivalent locale path behavior moved to `next.config.mjs` rewrites:
  - `/:locale(fr|en|de|nl)` -> `/`
  - `/:locale(fr|en|de|nl)/:path*` -> `/:path*`
- Also removed legacy redirect `"/services" -> "/"` so `/services` pages remain reachable.

## C) Deployment results

### Preview deployment
- Success URL: `https://devlo-next-4fknvx01c-charles-8969s-projects.vercel.app`

### Production deployment
- Success URL: `https://devlo.ch`
- Deployment inspect: `https://vercel.com/charles-8969s-projects/devlo-next/BATJUPJ6SDLz933qYJyxr6yjv98R`

## D) Verification
- `npm run build`: PASS.
- HTTP checks on production:
  - `GET /services` -> 200
  - `GET /services/outbound-multicanal` -> 200
  - `GET /services/crm-delivrabilite` -> 200

## Root cause (most probable)
1. Primary: Vercel platform incident affecting deployments when Middleware/Edge Functions are involved.
2. Secondary hardening done: removed non-deterministic font network fetch and engine mismatch warning source.

## Notes
- Preview URL returned 401 from anonymous `curl` due Vercel preview protection policy in this team; deployment itself is successful.
