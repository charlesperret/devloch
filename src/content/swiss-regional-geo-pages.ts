import type { GeoPageData } from "@/content/geo-pages";

const swissLocalBusiness: GeoPageData["localBusiness"] = {
  name: "devlo",
  telephone: "+41-79-758-64-03",
  email: "emea@devlo.ch",
  address: {
    streetAddress: "Lausanne",
    addressLocality: "Lausanne",
    postalCode: "1000",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
};

export const SWISS_REGIONAL_GEO_PAGES: Record<string, GeoPageData> = {
  "prospection-commerciale-suisse-romande": {
    country: "ch",
    slug: "prospection-commerciale-suisse-romande",
    metaTitle: "Prospection B2B Suisse romande | RDV qualifiés | devlo",
    metaDescription:
      "Agence de prospection B2B en Suisse romande pour cibler Genève, Lausanne, Vaud, Valais, Fribourg et Neuchâtel avec des campagnes FR.",
    h1: "Prospection B2B en Suisse romande pour générer des rendez-vous qualifiés",
    intro: [
      "La Suisse romande concentre des marchés B2B très différents : organisations internationales à Genève, PME industrielles de l'arc lémanique, prestataires vaudois, finance, immobilier, formation, santé et acteurs publics ou parapublics.",
      "devlo construit des campagnes francophones sobres, localisées par canton et cadrées sur des comptes ICP vérifiés. L'objectif n'est pas de promettre un volume artificiel, mais d'obtenir des conversations commerciales qualifiées avec les bons interlocuteurs.",
      "Nous utilisons les codes romands : approche factuelle, références suisses, respect du contexte LPD et relances multicanales adaptées au niveau de maturité commerciale de chaque segment.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "immobilier-30-prospects",
      "immobilier-11-prospects",
      "audiovisuel-16-rendez-vous",
    ],
    faqs: [
      {
        question: "Quels cantons couvrez-vous en Suisse romande ?",
        answer:
          "Nous couvrons Genève, Vaud, Valais, Fribourg, Neuchâtel et Jura. Les campagnes sont segmentées par canton lorsque le marché, la langue ou la densité ICP le justifie.",
      },
      {
        question: "La prospection en Suisse romande ressemble-t-elle a la France ?",
        answer:
          "Non. Les messages doivent être plus sobres, plus factuels et plus locaux qu'en France. Les références suisses, la précision du ciblage et la qualité du premier contact comptent davantage que le volume.",
      },
      {
        question: "Quels cas clients prouvent votre experience romande ?",
        answer:
          "Nous avons notamment généré 70 rendez-vous qualifiés pour APIDAE sur une cible biodiversité et plus de 30 prospects intéressés pour Abacus dans l'immobilier romand.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-suisse-alemanique": {
    country: "ch",
    slug: "prospection-commerciale-suisse-alemanique",
    metaTitle: "Prospection B2B Suisse alémanique | Deutschschweiz",
    metaDescription:
      "Campagnes de prospection B2B en Suisse alémanique : messages DE, ciblage Zurich, Bâle, Berne, St-Gall et approche DACH mesurée.",
    h1: "Prospection B2B en Suisse alémanique avec messages allemands natifs",
    intro: [
      "La Suisse alémanique demande une approche plus directe, plus factuelle et plus précise que la Romandie. Un message traduit depuis le français ne suffit pas : les dirigeants attendent une proposition claire, contextualisée et crédible.",
      "devlo sépare les campagnes Deutschschweiz des campagnes romandes : ciblage, copie allemande, preuves, objections et cadence sont adaptés avant l'envoi.",
      "Cette page s'adresse aux équipes qui veulent ouvrir Zurich, Bâle, Berne, Lucerne, St-Gall ou Winterthour sans confondre le marché suisse allemand avec l'Allemagne.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Prospectez-vous en allemand natif ?",
        answer:
          "Oui. Les campagnes pour la Suisse alémanique sont rédigées et adaptées en allemand, avec une logique DACH mais des preuves et formulations propres au marché suisse.",
      },
      {
        question: "Quelle différence entre Suisse alémanique et Allemagne ?",
        answer:
          "La Suisse alémanique est plus concentrée, plus relationnelle et plus sensible à la précision. Les séquences doivent éviter le ton trop agressif souvent toléré sur de plus grands marchés.",
      },
      {
        question: "Quels canaux fonctionnent en Suisse alémanique ?",
        answer:
          "Le cold email, LinkedIn et le calling fonctionnent si le ciblage est propre. Le téléphone reste pertinent pour qualifier rapidement les bons interlocuteurs.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-geneve": {
    country: "ch",
    slug: "prospection-commerciale-geneve",
    metaTitle: "Prospection B2B Genève | RDV qualifiés | devlo",
    metaDescription:
      "Agence de prospection B2B à Genève pour cibler finance, services, ONG, immobilier, cybersécurité et grands comptes avec campagnes FR/EN.",
    h1: "Prospection B2B à Genève pour cibler les bons décideurs",
    intro: [
      "Genève combine finance, négoce, organisations internationales, ONG, cabinets de conseil, immobilier, cybersécurité et grands comptes. La prospection y fonctionne quand le message est crédible et le ciblage irréprochable.",
      "devlo construit des campagnes Genève en français et en anglais, avec segmentation par secteur, taille d'entreprise, rôle décisionnaire et signal d'achat.",
      "Le but n'est pas d'envoyer une campagne genevoise générique, mais de distinguer les comptes locaux, les sièges internationaux et les filiales qui ont un vrai potentiel commercial.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "cybersecurite-4500-entreprises",
      "immobilier-30-prospects",
    ],
    faqs: [
      {
        question: "Quels secteurs ciblez-vous à Genève ?",
        answer:
          "Finance, immobilier, ONG, services professionnels, IT, cybersécurité, formation, santé et organisations internationales lorsque le cadre B2B est pertinent.",
      },
      {
        question: "Faut-il prospecter en français ou en anglais à Genève ?",
        answer:
          "Les deux peuvent être nécessaires. Nous segmentons par rôle, entreprise et contexte : dirigeants locaux en français, sièges internationaux ou fonctions régionales souvent en anglais.",
      },
      {
        question: "Genève est-elle adaptée à l'ABM ?",
        answer:
          "Oui. Pour les comptes à forte valeur, nous recommandons une approche ABM avec recherche compte, plusieurs décideurs, signaux d'achat et séquence multicanale.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-lausanne": {
    country: "ch",
    slug: "prospection-commerciale-lausanne",
    metaTitle: "Prospection B2B Lausanne | Agence outbound | devlo",
    metaDescription:
      "Prospection B2B à Lausanne et dans le canton de Vaud : génération de leads, cold email, LinkedIn, calling et rendez-vous qualifiés.",
    h1: "Prospection B2B à Lausanne et dans le canton de Vaud",
    intro: [
      "Lausanne et le canton de Vaud combinent PME, scale-ups, EPFL, medtech, éducation, prestations B2B, industrie et acteurs publics ou parapublics. La densité est forte, mais le marché reste relationnel.",
      "Depuis notre base vaudoise, devlo aide les entreprises B2B à transformer ce marché local en segments ICP, listes qualifiées et séquences de rendez-vous.",
      "La proximité locale permet d'utiliser des références plus crédibles, mais elle impose aussi plus de précision : un mauvais ciblage se remarque vite.",
    ],
    caseStudySlugs: [
      "audiovisuel-16-rendez-vous",
      "formation-14-rendez-vous",
      "immobilier-11-prospects",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "devlo est-elle basée près de Lausanne ?",
        answer:
          "Oui. devlo est basée dans le canton de Vaud, ce qui facilite la compréhension du tissu économique lausannois et romand.",
      },
      {
        question: "Quels secteurs fonctionnent à Lausanne ?",
        answer:
          "Prestations B2B, tech, medtech, éducation, industrie, immobilier, formation et fournisseurs qui ciblent PME ou grandes organisations vaudoises.",
      },
      {
        question: "Pouvez-vous cibler Vaud au lieu de toute la Suisse ?",
        answer:
          "Oui. Nous pouvons construire un TAM limité au canton de Vaud ou l'intégrer comme premier batch avant une extension Romandie/Suisse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-zurich": {
    country: "ch",
    slug: "prospection-commerciale-zurich",
    metaTitle: "B2B-Akquise Zurich | Leads & Termine | devlo",
    metaDescription:
      "Prospection B2B à Zurich pour cibler finance, tech, SaaS, industrie et grands comptes avec séquences allemandes et multicanales.",
    h1: "Prospection B2B à Zurich pour ouvrir le marché suisse alémanique",
    intro: [
      "Zurich est le marché B2B le plus dense de Suisse : finance, assurances, tech, SaaS, industrie, conseil et sièges régionaux. Il offre un fort potentiel, mais les décideurs y sont très sollicités.",
      "devlo prépare les campagnes Zurich avec messages allemands, preuves de marché, signaux d'achat et approche multicanale adaptée au niveau de maturité du compte.",
      "La page Zurich sert de point d'entrée pour les entreprises qui veulent commencer en Suisse alémanique par le bassin économique le plus actif.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "cybersecurite-4500-entreprises",
      "formation-14-rendez-vous",
    ],
    faqs: [
      {
        question: "Pourquoi commencer la Suisse alémanique par Zurich ?",
        answer:
          "Zurich concentre un grand nombre de sièges, décideurs financiers, tech et services. C'est souvent le meilleur premier batch lorsque l'ICP est suffisamment qualifié.",
      },
      {
        question: "Les messages Zurich doivent-ils être en allemand ?",
        answer:
          "Dans la plupart des cas, oui. L'anglais peut fonctionner pour les fonctions internationales, mais l'allemand reste plus crédible pour beaucoup de décideurs locaux.",
      },
      {
        question: "Pouvez-vous prospecter Zurich depuis une base romande ?",
        answer:
          "Oui, à condition de séparer la stratégie. Les campagnes Zurich sont traitées comme un marché distinct, avec copy DE, références adaptées et ciblage local.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-fribourg": {
    country: "ch",
    slug: "prospection-commerciale-fribourg",
    metaTitle: "Prospection B2B Fribourg | PME & industrie | devlo",
    metaDescription:
      "Prospection B2B à Fribourg pour cibler PME, industrie, agroalimentaire, formation, services et organisations bilingues avec campagnes FR/DE.",
    h1: "Prospection B2B à Fribourg pour marchés romands et bilingues",
    intro: [
      "Fribourg se trouve au croisement de la Suisse romande et de la Suisse alémanique. Pour la prospection B2B, cette position impose un ciblage précis par langue, secteur et bassin économique.",
      "devlo structure des campagnes pour les PME, acteurs industriels, prestataires de services, organisations de formation et entreprises liées à l'agroalimentaire ou aux chaînes d'approvisionnement régionales.",
      "L'enjeu n'est pas d'envoyer une campagne générique sur tout le canton, mais de distinguer les comptes francophones, bilingues et germanophones avant d'activer email, LinkedIn et calling.",
    ],
    caseStudySlugs: ["biodiversite-70-rendez-vous", "formation-14-rendez-vous", "immobilier-30-prospects"],
    faqs: [
      {
        question: "Faut-il prospecter Fribourg en français ou en allemand ?",
        answer:
          "Les deux peuvent être nécessaires. Nous séparons les comptes francophones, bilingues et germanophones avant d'écrire les messages.",
      },
      {
        question: "Quels secteurs cibler à Fribourg ?",
        answer:
          "PME, industrie, agroalimentaire, formation, services B2B, immobilier professionnel et organisations actives entre Romandie et Deutschschweiz.",
      },
      {
        question: "Fribourg est-il un bon test avant la Suisse alémanique ?",
        answer:
          "Oui, si l'ICP est suffisamment dense. Fribourg permet souvent de tester une approche bilingue avant d'étendre vers Berne, Bâle ou Zurich.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-neuchatel": {
    country: "ch",
    slug: "prospection-commerciale-neuchatel",
    metaTitle: "Prospection B2B Neuchâtel | Industrie & tech | devlo",
    metaDescription:
      "Prospection B2B à Neuchâtel pour cibler industrie, microtechnique, horlogerie, medtech, services et PME avec campagnes romandes.",
    h1: "Prospection B2B à Neuchâtel pour industrie, tech et PME",
    intro: [
      "Neuchâtel est un marché plus concentré que Genève ou Lausanne, mais très pertinent pour les entreprises qui ciblent industrie, microtechnique, horlogerie, medtech, services et PME spécialisées.",
      "devlo construit des campagnes neuchâteloises avec une approche sobre : comptes vérifiés, rôle décisionnaire clair, preuve sectorielle et relances mesurées.",
      "Le canton demande une prospection précise. Une liste trop large dilue vite les résultats; une segmentation par secteur et bassin économique donne de meilleurs signaux.",
    ],
    caseStudySlugs: ["cybersecurite-4500-entreprises", "biocarburants-52-rendez-vous", "formation-14-rendez-vous"],
    faqs: [
      {
        question: "Quels secteurs fonctionnent à Neuchâtel ?",
        answer:
          "Industrie, microtechnique, horlogerie, medtech, services B2B, formation et fournisseurs qui ciblent PME ou groupes industriels.",
      },
      {
        question: "Neuchâtel suffit-il pour une campagne complète ?",
        answer:
          "Parfois, mais nous recommandons souvent un batch Neuchâtel/Jura/Berne ou Neuchâtel/Vaud selon la densité ICP.",
      },
      {
        question: "Pouvez-vous adapter le message à des cibles industrielles ?",
        answer:
          "Oui. Nous utilisons des preuves factuelles, une proposition de valeur courte et des critères de qualification adaptés aux cycles industriels.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-valais": {
    country: "ch",
    slug: "prospection-commerciale-valais",
    metaTitle: "Prospection B2B Valais | PME & énergie | devlo",
    metaDescription:
      "Prospection B2B en Valais pour cibler PME, énergie, construction, tourisme B2B, santé, industrie et services avec campagnes locales.",
    h1: "Prospection B2B en Valais pour PME, énergie et services",
    intro: [
      "Le Valais combine PME locales, énergie, construction, tourisme B2B, santé, immobilier, industrie et prestataires régionaux. La prospection y fonctionne quand le message respecte le tissu économique local.",
      "devlo segmente les campagnes valaisannes par bassin, secteur, langue et niveau de maturité commerciale avant de lancer les séquences.",
      "L'objectif est de créer des conversations qualifiées sans forcer un volume artificiel sur un marché où la réputation et la pertinence du premier contact comptent beaucoup.",
    ],
    caseStudySlugs: ["biodiversite-70-rendez-vous", "biocarburants-52-rendez-vous", "immobilier-30-prospects"],
    faqs: [
      {
        question: "Quels secteurs cibler en Valais ?",
        answer:
          "Énergie, construction, tourisme B2B, santé, immobilier professionnel, industrie, services et PME régionales.",
      },
      {
        question: "Faut-il isoler le Valais du reste de la Romandie ?",
        answer:
          "Oui lorsque le message dépend du contexte local. Sinon, le Valais peut être intégré dans un batch Romandie avec reporting séparé.",
      },
      {
        question: "La prospection téléphonique fonctionne-t-elle en Valais ?",
        answer:
          "Elle peut fonctionner si le ciblage est propre et si l'appel sert à qualifier le bon interlocuteur plutôt qu'à pousser un discours générique.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-bale": {
    country: "ch",
    slug: "prospection-commerciale-bale",
    metaTitle: "Prospection B2B Bâle | Pharma & industrie | devlo",
    metaDescription:
      "Prospection B2B à Bâle pour cibler pharma, biotech, medtech, industrie, logistique et sièges internationaux avec campagnes DE/EN.",
    h1: "Prospection B2B à Bâle pour pharma, biotech et industrie",
    intro: [
      "Bâle est un marché B2B très spécifique : pharma, biotech, medtech, industrie, logistique, services professionnels et sièges internationaux.",
      "devlo traite Bâle comme un marché germanophone et international à part entière, avec copies DE/EN, comptes prioritaires et preuves adaptées aux secteurs techniques.",
      "La qualité de la donnée compte particulièrement : les fonctions régionales, les filiales et les groupes internationaux doivent être séparés avant l'activation commerciale.",
    ],
    caseStudySlugs: ["cybersecurite-4500-entreprises", "iddi-generation-leads-biotech-pharma", "hr-54-rendez-vous-dach"],
    faqs: [
      {
        question: "Faut-il prospecter Bâle en allemand ou en anglais ?",
        answer:
          "Les deux peuvent être nécessaires. L'allemand reste important pour les décideurs locaux; l'anglais fonctionne souvent pour les fonctions internationales.",
      },
      {
        question: "Quels secteurs cibler à Bâle ?",
        answer:
          "Pharma, biotech, medtech, industrie, logistique, services professionnels, cybersécurité et prestataires liés aux grands comptes.",
      },
      {
        question: "Bâle doit-il être séparé de Zurich ?",
        answer:
          "Oui dans la plupart des campagnes. Les secteurs, les signaux d'achat et les fonctions cibles ne sont pas les mêmes qu'à Zurich.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-berne": {
    country: "ch",
    slug: "prospection-commerciale-berne",
    metaTitle: "Prospection B2B Berne | Public, PME & santé | devlo",
    metaDescription:
      "Prospection B2B à Berne pour cibler PME, santé, associations, administration, services et industrie avec campagnes bilingues.",
    h1: "Prospection B2B à Berne pour comptes bilingues, publics et PME",
    intro: [
      "Berne combine administration, santé, associations, PME, industrie, services professionnels et organisations bilingues. Le marché exige une approche plus institutionnelle et factuelle que les grandes zones commerciales.",
      "devlo construit des campagnes bernoises en distinguant comptes publics, parapublics, PME privées et fonctions régionales.",
      "Le message doit être clair, prudent et crédible : à Berne, le contexte de décision et la conformité comptent autant que l'accroche commerciale.",
    ],
    caseStudySlugs: ["formation-14-rendez-vous", "biodiversite-70-rendez-vous", "hr-54-rendez-vous-dach"],
    faqs: [
      {
        question: "Berne se prospecte-t-elle en français ou en allemand ?",
        answer:
          "Cela dépend des comptes. Nous séparons les cibles francophones, germanophones et bilingues avant la rédaction.",
      },
      {
        question: "Quels secteurs cibler à Berne ?",
        answer:
          "Administration, santé, associations, formation, industrie, PME, services professionnels et fournisseurs de comptes publics ou parapublics.",
      },
      {
        question: "Peut-on prospecter les organisations publiques ?",
        answer:
          "Oui, avec prudence. Les messages doivent respecter le cadre institutionnel et viser un échange qualifié plutôt qu'une vente immédiate.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-st-gall": {
    country: "ch",
    slug: "prospection-commerciale-st-gall",
    metaTitle: "Prospection B2B St-Gall | Industrie & PME | devlo",
    metaDescription:
      "Prospection B2B à St-Gall et en Suisse orientale pour cibler industrie, PME, services, textile, tech et manufacturing avec campagnes DE.",
    h1: "Prospection B2B à St-Gall et en Suisse orientale",
    intro: [
      "St-Gall et la Suisse orientale forment un marché B2B industriel, PME et exportateur : manufacturing, services, textile, tech, formation et fournisseurs spécialisés.",
      "devlo prépare les campagnes St-Gall avec messages allemands, ciblage régional et preuves adaptées à un marché moins visible que Zurich mais souvent très qualifié.",
      "L'approche consiste à isoler les entreprises avec un vrai potentiel commercial, puis à tester une séquence sobre avant d'étendre vers Zurich, Winterthour ou le reste du DACH.",
    ],
    caseStudySlugs: ["hr-54-rendez-vous-dach", "cybersecurite-4500-entreprises", "biocarburants-52-rendez-vous"],
    faqs: [
      {
        question: "Pourquoi cibler St-Gall en prospection B2B ?",
        answer:
          "St-Gall donne accès à des PME industrielles, fournisseurs spécialisés et entreprises exportatrices souvent moins sollicitées que les comptes zurichois.",
      },
      {
        question: "Les messages doivent-ils être en allemand ?",
        answer:
          "Oui dans la plupart des cas. L'anglais peut être utilisé pour certaines fonctions internationales, mais l'allemand est le point de départ.",
      },
      {
        question: "St-Gall peut-il être un batch DACH ?",
        answer:
          "Oui. St-Gall peut servir de batch suisse oriental avant une extension Zurich, Allemagne du Sud ou Autriche.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-dach": {
    country: "ch",
    slug: "prospection-commerciale-dach",
    metaTitle: "Prospection B2B DACH | Allemagne Autriche Suisse | devlo",
    metaDescription:
      "Prospection B2B DACH pour cibler Allemagne, Autriche et Suisse alémanique avec messages allemands, signaux d'achat et RDV qualifiés.",
    h1: "Prospection B2B DACH pour développer Allemagne, Autriche et Suisse alémanique",
    intro: [
      "Le DACH n'est pas un seul marché uniforme. Allemagne, Autriche et Suisse alémanique partagent la langue allemande, mais pas les mêmes codes, cycles de décision ni niveaux de concurrence.",
      "devlo construit des campagnes DACH en distinguant les pays, les régions, les canaux, les preuves et les objections commerciales avant d'envoyer les séquences.",
      "Cette approche convient aux entreprises qui veulent passer d'un marché francophone à une exécution germanophone sans perdre en précision commerciale.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Quelle différence entre DACH et Suisse alémanique ?",
        answer:
          "La Suisse alémanique est une partie du DACH, mais elle doit rester séparée dans le ciblage et le messaging. Les références suisses ne remplacent pas les preuves allemandes ou autrichiennes.",
      },
      {
        question: "Avez-vous déjà obtenu des résultats en DACH ?",
        answer:
          "Oui. CareerLunch a généré 54 rendez-vous qualifiés sur le marché DACH avec une approche germanophone structurée.",
      },
      {
        question: "Faut-il lancer Allemagne, Autriche et Suisse ensemble ?",
        answer:
          "Pas toujours. Nous recommandons souvent un premier batch par pays ou sous-région pour isoler les signaux, les objections et les taux de réponse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
};
