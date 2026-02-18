# Vercel Launch Checklist

## 1. Pre-deploy checks (local)
- Run: `npm ci`
- Run: `npm run lint`
- Run: `npm run build`
- Optional: verify Lighthouse reports in `reports/lighthouse/`

## 2. Vercel project setup
- Import the Git repository in Vercel.
- Framework preset: `Next.js`.
- Build command: `npm run build`.
- Install command: `npm ci`.
- Node.js version: `20.x`.

## 3. Environment variables
- No runtime env vars are required right now.
- If analytics or APIs are added later, configure them in Vercel Project Settings.

## 4. Domain & DNS (devlo.ch)
- Add domain `devlo.ch` and `www.devlo.ch` in Vercel.
- Recommended records:
  - Apex (`@`) A record -> `76.76.21.21`
  - `www` CNAME -> `cname.vercel-dns.com`
- Wait for DNS propagation, then validate in Vercel.

## 5. SEO checks before go-live
- Confirm `https://devlo.ch/sitemap.xml` is available.
- Confirm `https://devlo.ch/robots.txt` is available.
- Verify pages intended for indexing return `200`.
- Verify private/utility routes are excluded (`/modele`, `/merci`, `/telephone`).

## 6. Post go-live checks
- Submit sitemap in Google Search Console.
- Check Core Web Vitals status in Search Console.
- Monitor crawl/index coverage for 7-14 days.
- Re-run Lighthouse on priority pages after DNS cutover.

## 7. Rollback
- Keep previous WordPress site accessible on a backup subdomain during first week.
- If critical regression occurs, temporarily switch DNS back to prior origin.
