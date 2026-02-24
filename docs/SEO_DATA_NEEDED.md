# SEO — Données manquantes à confirmer avant production

Toutes les données ci-dessous sont nécessaires pour finaliser l'implémentation SEO technique et le schema JSON-LD.

---

## 1. Identité légale

| Info | Valeur actuelle | À confirmer |
|---|---|---|
| Nom légal de l'entité | "devlo" | Sàrl ? SA ? GmbH ? autre ? |
| Numéro IDE / UID suisse | — | TODO |
| Date de création officielle | "2020" | Année exacte ? |

---

## 2. Image Open Graph

| Info | Statut |
|---|---|
| Image OG par défaut (1200×630 px) | ❌ Manquante — le logo actuel n'est PAS une image OG correcte |
| **Action** | Créer une image éditoriale 1200×630 px et la placer dans `/public/images/og-devlo.jpg` |
| Contenu suggéré | Logo devlo + tagline + fond coloré (bleu devlo) |

---

## 3. Profils sociaux

| Réseau | URL | Statut |
|---|---|---|
| LinkedIn | `https://www.linkedin.com/company/devlo-connects-you-with-more-prospects/` | ✅ Confirmé |
| X (Twitter) | — | TODO — existe ? |
| YouTube | — | TODO — existe ? |
| Instagram | — | TODO — existe ? |

---

## 4. Informations de contact (schema)

| Info | Valeur actuelle | À confirmer |
|---|---|---|
| Téléphone EMEA (format E.164) | `+41797586403` | ✅ |
| Email EMEA | `emea@devlo.ch` | ✅ |
| Téléphone US (format E.164) | `+12342018019` | ✅ |
| Email US | `americas@devlo.ch` | ✅ |
| Adresse CH (rue) | Ruelle des Dolles 1, 1071 Rivaz | ✅ |
| Adresse US | 500 4TH ST NW SUITE 102 #1591, Albuquerque NM 87102 | ✅ |

---

## 5. Inventaire des URLs WordPress existantes

C'est la donnée la plus critique pour la migration SEO.

**À faire :**
1. Exporter la liste complète des URLs indexées sur devlo.ch depuis Google Search Console (GSC)
   - GSC → Index → Couverture → Exporter
2. Crawler devlo.ch avec Screaming Frog ou Ahrefs pour lister toutes les URLs
3. Renseigner `docs/URL_MAPPING_DEVLO_MIGRATION.csv` avec la correspondance old_url → new_url

**URLs WordPress à confirmer en priorité :**
- Page consultation : est-ce `/consultation-gratuite` ou `/consultation` ou autre ?
- Page études de cas : est-ce `/etudes-de-cas`, `/cas-clients`, `/resultats`, ou autre ?
- Page academy : est-ce `/outbound-academy`, `/academy`, `/formation`, ou autre ?
- Page contact : existe-t-elle ? Quelle URL ?
- Articles de blog : quels slugs sont indexés ?
- Autres pages produit / service existantes ?

---

## 6. Google Search Console

| Tâche | Statut |
|---|---|
| GSC configuré pour devlo.ch | À vérifier |
| Export des URLs indexées fait | ❌ TODO — faire avant DNS switch |
| Sitemap soumis | ❌ TODO — soumettre `https://devlo.ch/sitemap.xml` après go-live |

---

## 7. Suivi et analytics

| Outil | Statut |
|---|---|
| Google Analytics / GA4 | ? — existe sur le WordPress ? |
| Tag Manager | ? |
| HubSpot analytics | Formulaire HubSpot en place ✅ |
| Vercel Speed Insights | ✅ Intégré |

---

## 8. Contenu pages clés

| Page | Question |
|---|---|
| `/formation-prospection-b2b` | Cette page est-elle prête pour l'indexation ? Contenu finalisé ? |
| `/contact` | Cette page est-elle prête ? Existe-t-elle dans le WP actuel ? |
| `/resultats` | Que doit afficher cette page dans la version Next.js ? |
| `/blog` | Le blog est-il actif ? Redirige vers `/` en l'état — intentionnel ? |
