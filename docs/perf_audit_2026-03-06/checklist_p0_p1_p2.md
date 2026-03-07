# CWV / PageSpeed Checklist — 2026-03-06

## Baseline live (devlo.ch)
- Home: mobile 88, desktop 100
- Services: mobile 93, desktop 100
- Consultation: mobile 92, desktop 93 (CLS desktop = 0.158)
- Case study (Horus): mobile 93, desktop 100

Source: `docs/perf_audit_2026-03-06/raw/lighthouse/*.json`

## Fixes appliqués
1. `src/components/ui/fade-in-on-scroll.tsx`
- Suppression de la dépendance runtime `framer-motion` pour ce composant.
- Remplacement par animation CSS-only.

2. `src/app/globals.css`
- Ajout des keyframes/utilitaires `animate-fade-in-*`.
- Animation réduite à l'opacité (sans translation) pour éviter les shifts visuels.

3. `src/components/ui/hubspot-form.tsx`
- Réservation de hauteur stable du bloc formulaire HubSpot (`min-h-[560px] md:min-h-[640px]`).
- Suppression du saut de layout lors du chargement/form submit.

## Validation locale (build + lighthouse)
- Build: ✅ `npm run build`
- Lighthouse local (http://localhost:4020):
  - Consultation desktop: perf 99, CLS 0
  - Services desktop: perf 99, CLS 0
  - Home desktop: perf 99, CLS 0

Source: `docs/perf_audit_2026-03-06/raw/lighthouse_local_after/*.json`

## Priorisation restante
### P0 (immédiat)
- Déployer les fixes ci-dessus pour supprimer le CLS desktop consultation en production.

### P1
- Réduire JS non utilisé global (encore ~100–280 KiB selon page), surtout header/menu/video stack.

### P2
- Rationaliser les libs client non critiques et différer les composants lourds sous la ligne de flottaison.
