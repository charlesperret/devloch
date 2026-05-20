# Paid Market Landing Pages - 2026-05-20

These pages are prepared for paid-search tests only. They are not linked from
the main navigation, are excluded from the sitemap, and are served with
`noindex` metadata. `/lp/` routes also receive an `X-Robots-Tag: noindex,
nofollow` header.

## Reuse Audit

- `/en/consultation`, `/de/beratung`, `/nl/adviesgesprek`, `/consultation`:
  reused for the HubSpot form and paid attribution only. The page itself is too
  generic for market-specific ad groups.
- Geo pages such as `/prospection-commerciale-france` and Swiss regional pages:
  retained as supporting links. They are organic pages and should not be the
  primary paid destination.
- Programmatic city pages such as London, Amsterdam, Paris and German cities:
  not used for paid traffic. They contain organic page mechanics and broader
  local guide copy.
- Swiss German paid branch from 2026-05-19: not merged. It is treated as an
  idea source only because it includes large page copy and unrelated tracking or
  deployment changes.

## Prepared Pages

| Market | URL | Language | Reviewer | Status | Paid activation |
| --- | --- | --- | --- | --- | --- |
| Australia | `/en/lp/australia-b2b-prospecting` | English | Charles | Needs review | Hold until Charles validates copy and form tracking |
| United Kingdom | `/en/lp/uk-b2b-prospecting` | English | Charles | Needs review | Hold until Charles validates copy and UK campaign diagnosis is done |
| France | `/lp/prospection-commerciale-france` | French | Charles | Needs review | Hold until Charles validates copy |
| Deutschschweiz | `/de/lp/leadgenerierung-schweiz` | German | Janis | Needs review | Hold until Janis validates native German |
| Deutschland | `/de/lp/b2b-leadgenerierung-deutschland` | German | Janis | Needs review | Hold until Janis validates native German |
| Nederland | `/nl/lp/b2b-prospectie-nederland` | Dutch | Victor | Needs review | Hold until Victor validates Dutch |

## Conversion Guardrails

- One page per market and language, not a translated SEO network.
- No best, leading, number-one, or unsupported performance claims.
- No public keyword tables or SEO/GEO mechanics in visible copy.
- One clear conversion path: HubSpot consultation form with paid attribution.
- Market-specific objections are visible: broad ICP, weak proof, unclear buyer
  data, and local tone risk.
- DE/NL pages must not receive paid traffic until the named reviewer signs off.

## Back-Test Checklist

- Confirm each page returns `200`.
- Confirm each page has meta robots `noindex, nofollow`.
- Confirm `/lp/` routes return `X-Robots-Tag: noindex, nofollow`.
- Confirm pages are absent from `/sitemap.xml`.
- Confirm the HubSpot form renders on desktop and mobile.
- Submit a staging/test lead only after approval to verify HubSpot attribution.
- For UK, diagnose serving before increasing budget: search terms, impression
  share lost to rank, bid level, match type, and location settings.
