# Plan SEO Multilingue (i18n) — devlo.ch

**Statut :** Architecture préparée — traductions NON activées.
Ne pas publier de hreflang avant que les pages traduits existent.

---

## 1. Stratégie recommandée : sous-dossiers

### Pourquoi des sous-dossiers et non des sous-domaines ?

| Critère | Sous-dossiers (`devlo.ch/de/`) | Sous-domaines (`de.devlo.ch`) |
|---|---|---|
| Autorité de domaine | ✅ Partagée avec le domaine principal | ❌ Séparée — repart de zéro |
| Implémentation Next.js | ✅ Native (i18n routing) | ⚠️ Complexe |
| GSC vérification | ✅ Une seule propriété | ❌ Propriété par sous-domaine |
| **Recommandation Google** | ✅ Pour les petits sites | — |

**Décision : sous-dossiers.**

---

## 2. Structure d'URLs cible

```
https://devlo.ch/              → Français (langue principale, pas de préfixe)
https://devlo.ch/de/           → Allemand
https://devlo.ch/it/           → Italien
https://devlo.ch/en/           → Anglais
```

Ou avec préfixe FR explicite :

```
https://devlo.ch/fr/           → Français
https://devlo.ch/de/           → Allemand
https://devlo.ch/it/           → Italien
https://devlo.ch/en/           → Anglais
```

**Recommandation :** garder `/` sans préfixe pour le français (langue principale), car ça ne cassera pas les liens existants.

---

## 3. Implémentation Next.js App Router

### Option A : `next-intl` (recommandée)

```bash
npm install next-intl
```

Structure de fichiers :
```
src/
  app/
    [locale]/          ← wrapper dynamique
      layout.tsx
      page.tsx
      consultation/
        page.tsx
      ...
  i18n/
    messages/
      fr.json
      de.json
      it.json
      en.json
```

Configuration `middleware.ts` :
```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'de', 'it', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed', // → /fr devient /, /de reste /de/
});
```

### Option B : Next.js natif (plus simple, moins de features)

Configurer `i18n` dans `next.config.mjs` :
```js
const nextConfig = {
  i18n: {
    locales: ['fr', 'de', 'it', 'en'],
    defaultLocale: 'fr',
  },
};
```

---

## 4. hreflang — règles importantes

### Ne PAS publier de hreflang avant que les pages existent

```html
<!-- ❌ Mauvais — ne pas faire si /de/ n'existe pas -->
<link rel="alternate" hreflang="de" href="https://devlo.ch/de/" />

<!-- ✅ Correct — ajouter uniquement quand la page traduite existe -->
<link rel="alternate" hreflang="fr" href="https://devlo.ch/" />
<link rel="alternate" hreflang="de" href="https://devlo.ch/de/" />
<link rel="alternate" hreflang="x-default" href="https://devlo.ch/" />
```

### Implémentation dans Next.js App Router

Dans chaque `page.tsx` traduit :
```ts
export const metadata: Metadata = {
  alternates: {
    canonical: '/de/consultation',
    languages: {
      'fr': '/consultation',
      'de': '/de/consultation',
      'it': '/it/consultation',
      'en': '/en/consultation',
    },
  },
};
```

---

## 5. Contenu à traduire (priorité)

| Page | FR (actuel) | DE | IT | EN |
|---|---|---|---|---|
| `/` | ✅ | ❌ | ❌ | ❌ |
| `/consultation` | ✅ | ❌ | ❌ | ❌ |
| `/etudes-de-cas` | ✅ | ❌ | ❌ | ❌ |
| `/academy` | ✅ | ❌ | ❌ | ❌ |

**Ordre recommandé :** FR → DE (marché suisse alémanique le plus important) → EN → IT

---

## 6. Slugs par langue

Idéalement, les URLs sont traduites :

| FR | DE | IT | EN |
|---|---|---|---|
| `/consultation` | `/de/beratung` | `/it/consulenza` | `/en/consultation` |
| `/etudes-de-cas` | `/de/fallstudien` | `/it/casi-studio` | `/en/case-studies` |
| `/academy` | `/de/academy` | `/it/academy` | `/en/academy` |

Si la traduction des slugs est trop complexe dans un premier temps, utiliser le slug FR pour toutes les langues. Google comprend.

---

## 7. Checklist avant lancement multilingue

- [ ] Décider de la bibliothèque i18n (next-intl recommandé)
- [ ] Créer fichiers de traduction `i18n/messages/fr.json` (base)
- [ ] Migrer les contenus de `masterfile.fr.ts` vers le système de traduction
- [ ] Implémenter le middleware i18n
- [ ] Ajouter hreflang uniquement une fois les pages DE/IT/EN publiées
- [ ] Vérifier GSC pour chaque version de langue après publication
- [ ] Soumettre sitemap avec toutes les variantes de langue
