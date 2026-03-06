# Diagnostic Report — devlo.ch

Date: 2026-03-06

## A) Détection du Router Next.js

### Résultat
- **Router détecté: App Router**

### Preuves code
- Dossier `src/app/` présent avec de nombreux `page.tsx`.
- Aucun dossier `pages/` ou `src/pages/` trouvé.
- Fichier de routing dynamique clé qui gère locale + slugs:
  - `src/app/[locale]/[[...slug]]/page.tsx`
  - Preuve: `params: { locale: string; slug?: string[] }` + résolution de route via `findEntryByLocalePath` / `findEntryByFrPath`.

### Extraits
- `src/app/[locale]/[[...slug]]/page.tsx:28-33`
- `src/app/[locale]/[[...slug]]/page.tsx:82-109`
- `src/app/[locale]/[[...slug]]/page.tsx:111-123`

---

## B) Détection du pattern i18n Sanity

## 1) Champ `language` (string) dans les documents ?
- **NON détecté dans le repo** (aucun schéma Sanity versionné localement).
- Côté dataset, les documents interrogés (`_type in ["page","service","caseStudy"]`) n’exposent pas de champ `language`; ils utilisent `pageId` + champs localisés.

## 2) `@sanity/document-internationalization` installé ?
- **NON** (absent de `package.json`).
- Aucune config Studio (`sanity.config.ts`) trouvée dans le repo.

## 3) Champs traduits dans un seul document (objet `{fr,en,de,nl}`) ?
- **OUI**.
- Preuves:
  - `scripts/translate_missing_locales_deepl.mjs` patch des objets localisés `title/description/seoTitle/seoDescription/body/slug` avec clés `fr/en/de/nl`.
  - `src/lib/i18n/localized-seo.ts` lit ces champs comme objets localisés.
  - Réponse live Sanity montre `title`, `description`, `seoTitle`, `seoDescription`, `slug` au format objet par langue.

## 4) Structure exacte du champ `slug`
- **Schéma local non versionné** (définition schema absente).
- **Structure réelle observée en dataset Sanity**:

```json
"slug": {
  "fr": "/etudes-de-cas/audiovisuel-16-rendez-vous",
  "en": "/en/casestudy/audiovisual-16-meetings",
  "de": "/de/fallstudien/av-integration-16-termine",
  "nl": "/nl/casestudy/audiovisual-16-meetings"
}
```

---

## C) Rapport demandé

### 1) Router détecté + fichier de route clé
- **App Router**
- Route dynamique principale: `src/app/[locale]/[[...slug]]/page.tsx`

### 2) Pattern i18n Sanity détecté + preuve
- **Pattern détecté**: un document unique par `pageId` avec champs localisés `{fr,en,de,nl}`.
- Preuve query Sanity (`*[_type in ["page","service","caseStudy"] && defined(pageId)]`) + scripts de seed/translation.

### 3) Structure actuelle d’un slug (exemple réel dataset)
- Exemple réel (doc `_id: localizedPage.case-study_audiovisuel-16-rendez-vous`):

```json
{
  "fr": "/etudes-de-cas/audiovisuel-16-rendez-vous",
  "en": "/en/casestudy/audiovisual-16-meetings",
  "de": "/de/fallstudien/av-integration-16-termine",
  "nl": "/nl/casestudy/audiovisual-16-meetings"
}
```

### 4) Langues couvertes (routing + Sanity)
- **Routing**:
  - `src/lib/i18n/slug-map.ts:4` → `supportedLocales = ["fr", "en", "de", "nl"]`
  - `src/middleware.ts:4-8` → détection `fr/en/de/nl`
- **Sanity (dataset)**:
  - Compteurs docs avec slug par langue:
    - `fr: 84`
    - `en: 84`
    - `de: 84`
    - `nl: 84`
    - total docs `page/service/caseStudy`: `84`

### 5) Présence du néerlandais `/nl/`
- **PRÉSENT**
- Preuves:
  - `src/middleware.ts` gère `/nl`.
  - `src/lib/i18n/slug-map.ts` gère `nl`.
  - Sanity dataset contient `slug.nl` sur 84 documents.

---

## Notes de diagnostic
- Aucun dossier Studio Sanity (`sanity/`, `schemas/`, `sanity.config.ts`) n’est versionné dans ce repo. Le modèle de données a donc été déduit de:
  1) scripts de seed/translation,
  2) queries Sanity,
  3) réponses live de la dataset.
- Aucun changement applicatif n’a été appliqué à ce stade.
