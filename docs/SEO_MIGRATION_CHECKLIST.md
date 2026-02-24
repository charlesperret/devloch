# SEO Migration Checklist — devlo.ch (WordPress → Next.js)

**Objectif :** Basculer le domaine devlo.ch du site WordPress/HTML actuel vers le nouveau site Next.js sans perte de trafic organique.

---

## PHASE 0 — Pré-migration (avant tout changement DNS)

### Inventaire et sauvegarde
- [ ] Exporter la liste complète des URLs indexées depuis Google Search Console (GSC → Index → Couverture → Exporter)
- [ ] Crawler devlo.ch avec Screaming Frog (ou Ahrefs) → exporter toutes les URLs
- [ ] Compléter `docs/URL_MAPPING_DEVLO_MIGRATION.csv` avec les vraies URLs WordPress
- [ ] Sauvegarder les fichiers WordPress (backup complet)
- [ ] Sauvegarder la base de données WordPress
- [ ] Prendre note du positionnement GSC actuel (screenshots ou exports des rapports Performance)

### Vérifications techniques sur le site Next.js (staging)
- [ ] Vérifier que `https://devlo-agency.ch/sitemap.xml` retourne un XML valide
- [ ] Vérifier que `https://devlo-agency.ch/robots.txt` est correct (pas de `Disallow: /`)
- [ ] Vérifier les canonicals sur chaque page clé (View Source ou Google Rich Results Test)
- [ ] Vérifier le JSON-LD Organization avec [Schema Markup Validator](https://validator.schema.org/)
- [ ] Tester le formulaire de consultation HubSpot
- [ ] Tester tous les liens internes (pas de 404)
- [ ] Vérifier les redirections cas d'étude (ex: `/etudes-de-cas/hr-54-rendez-vous-dach` → `/etudes-de-cas/careerlunch-54-rendez-vous-dach`)
- [ ] Vérifier les Core Web Vitals (PageSpeed Insights ou Lighthouse)
- [ ] Vérifier que les pages `/merci`, `/notrerendez-vous` etc. sont bien en `Disallow` dans robots.txt

### Analytics et tracking
- [ ] Confirmer que GA4 (ou équivalent) est configuré sur le nouveau site
- [ ] Vérifier que le tracking HubSpot fonctionne sur le nouveau domaine
- [ ] Vérifier que Vercel Speed Insights est actif

---

## PHASE 1 — Go-live (jour J)

### DNS et déploiement
- [ ] Déployer la version finale sur Vercel (prod)
- [ ] Changer les DNS de devlo.ch pour pointer vers Vercel
- [ ] Attendre la propagation DNS (jusqu'à 24-48h, souvent rapide)
- [ ] Vérifier que `https://devlo.ch/` affiche bien le nouveau site
- [ ] Vérifier HTTPS actif sur devlo.ch (certificat Vercel automatique)

### Vérifications immédiates post-basculement (dans l'heure)
- [ ] `https://devlo.ch/` → 200 ✅
- [ ] `https://devlo.ch/consultation` → 200 ✅
- [ ] `https://devlo.ch/etudes-de-cas` → 200 ✅
- [ ] `https://devlo.ch/academy` → 200 ✅
- [ ] `https://devlo.ch/sitemap.xml` → XML valide ✅
- [ ] `https://devlo.ch/robots.txt` → Correct ✅
- [ ] Test d'une redirection WordPress → `https://devlo.ch/category/test` → 301 vers `/`
- [ ] Test formulaire consultation → soumission → email/HubSpot reçu
- [ ] Vérifier que les anciennes URLs WP connues retournent bien 301 (pas 404)

### Google Search Console
- [ ] Ajouter `https://devlo.ch` comme propriété dans GSC (si pas déjà fait)
- [ ] Vérifier la propriété via le fichier HTML ou le DNS TXT
- [ ] Soumettre `https://devlo.ch/sitemap.xml` dans GSC
- [ ] Utiliser l'outil "Inspection d'URL" pour les pages clés (demander l'indexation)

---

## PHASE 2 — Post-migration J+1

- [ ] Vérifier dans GSC : aucune erreur de couverture majeure
- [ ] Vérifier les crawl errors dans GSC (Coverage → Erreurs)
- [ ] Surveiller le taux de crawl de Googlebot (GSC → Paramètres → Statistiques)
- [ ] Vérifier que les anciennes URLs WP indexées retournent bien 301 et non 404
- [ ] Vérifier que les pages noindex ne remontent pas dans GSC

---

## PHASE 3 — Post-migration J+7

- [ ] Vérifier le rapport Performance GSC : impressions / clics stables ou en hausse
- [ ] Vérifier la couverture GSC : pages "Valides" en hausse, "Erreurs" à zéro
- [ ] Vérifier que le sitemap est bien indexé (GSC → Sitemaps)
- [ ] Vérifier les Core Web Vitals dans GSC (rapport "Expérience de page")
- [ ] Vérifier que les redirections 301 sont bien crawlées (Screaming Frog)
- [ ] Comparer le positionnement avant/après sur les mots-clés principaux

---

## PHASE 4 — Post-migration J+30

- [ ] Comparer le trafic organique J+30 vs J-30 dans GA4
- [ ] Comparer les positions GSC J+30 vs J-30
- [ ] Vérifier les backlinks (Ahrefs / Moz) : liens vers les anciennes URLs toujours résolus ?
- [ ] Identifier les URLs qui retournent encore 404 et ajouter les redirections manquantes
- [ ] Décider de désactiver le WordPress (garder ou supprimer le serveur)

---

## Points de vigilance spécifiques devlo.ch

1. **Formulaire HubSpot** — critique pour les leads : tester après chaque déploiement
2. **Vidéos Wistia** — vérifier que les embeds fonctionnent sur le nouveau domaine
3. **Redirections case studies** — 13 études de cas avec des slugs potentiellement différents du WP
4. **Domaine staging** — `devlo-agency.ch` doit avoir `robots: noindex` pour éviter le contenu dupliqué (vérifier que Vercel ne sert pas ce domaine en production sans noindex)
5. **DNS TTL** — baisser le TTL DNS 24-48h avant le switch pour accélérer la propagation

---

## Outils recommandés

| Outil | Usage |
|---|---|
| [Google Search Console](https://search.google.com/search-console) | Couverture, sitemaps, erreurs |
| [Screaming Frog](https://www.screamingfrog.co.uk/) | Crawl complet, redirections |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Core Web Vitals |
| [Schema Markup Validator](https://validator.schema.org/) | JSON-LD |
| [Redirect Checker](https://httpstatus.io/) | Vérification 301/302/404 |
| [Ahrefs / Semrush](https://ahrefs.com/) | Backlinks, positions |
