export const aiSalesOpsContent = {
  metaTitle: "AI Sales Ops B2B en Suisse",
  metaDescription:
    "Systèmes AI Sales Ops pour équipes commerciales B2B : inbox, CRM, meeting prep et reporting. Diagnostic gratuit avec devlo, en Suisse.",

  hero: {
    badge: "AI Sales Ops pour équipes commerciales B2B",
    h1: "Vos commerciaux closent plus de deals sans recruter, grâce à l'IA",
    subtitle:
      "devlo conçoit et déploie des systèmes d'automatisation alimentés par l'IA qui libèrent vos commerciaux des tâches répétitives, accélèrent vos cycles de vente et transforment vos données en avantage concurrentiel.",
    ctaPrimary: "Réserver un diagnostic gratuit →",
    ctaSecondary: "Découvrir les 7 systèmes ↓",
    badge1: "7 ans de terrain commercial",
    badge2: "+1'000 campagnes exécutées",
    badge3: "Diagnostic gratuit, zéro engagement",
  },

  problemSection: {
    eyebrow: "Le problème",
    title: "Pourquoi vos commerciaux passent-ils plus de temps à administrer qu'à vendre ?",
    description:
      "Les équipes B2B performantes ne gagnent pas en ajoutant plus d'outils. Elles gagnent en supprimant le travail répétitif qui ralentit les deals.",
    body: [
      "Selon Salesforce, les commerciaux consacrent environ 60% de leur temps à des tâches non commerciales. Sur une équipe de 5 personnes, cela représente l'équivalent de 3 postes à temps plein absorbés par l'administration, la mise à jour CRM, la gestion inbox et la préparation des rendez-vous. L'enjeu n'est pas de remplacer vos commerciaux. L'enjeu est de leur rendre leur temps de vente.",
      "Les PME et ETI en Suisse romande font face à un double blocage. Le recrutement commercial coûte plus cher, l'onboarding prend plus de temps, et les cycles de vente se tendent. Si vos réponses arrivent tard, si le CRM est incomplet ou si les follow-ups partent mal, vous perdez déjà du terrain.",
      "devlo construit des systèmes de prospection B2B depuis 7 ans. Chaque workflow présenté ici a été testé en production, d'abord pour nos propres campagnes, puis pour des clients en Suisse, en France, en Belgique et en DACH.",
    ],
  },

  systemsSection: {
    eyebrow: "Les 7 systèmes",
    title: "Quels systèmes AI Sales Ops déployer pour votre équipe commerciale ?",
    description:
      "Chaque système se déploie en 2 à 4 semaines. Il est configuré pour votre entreprise, puis gardé sous contrôle humain à chaque étape clé.",
  },

  systems: [
    {
      number: "01",
      title: "Gestion intelligente des réponses commerciales",
      fit: "Équipes 2+ commerciaux",
      shortDescription:
        "L'IA prépare des réponses personnalisées pour vos prospects, sur email et LinkedIn, à partir de vos guidelines internes, de l'historique conversationnel et de votre playbook commercial. Un humain valide chaque message avant envoi.",
      longDescription:
        "Chaque message entrant est classifié par intention, puis enrichi avec vos SOP, vos conversations passées et les règles commerciales propres à votre entreprise. Le système propose une réponse prête à envoyer. Votre équipe corrige si nécessaire, puis cette correction alimente la boucle d'apprentissage. Vous gardez la qualité humaine, sans garder la charge opérationnelle.",
      result: "Jusqu'à 80% du temps inbox récupéré, sans perte de personnalisation.",
      stack: ["n8n", "Claude API", "HubSpot", "Lemlist"],
      links: [
        { label: "Outbound multicanal", href: "/services/outbound-multicanal" },
        { label: "CRM et délivrabilité", href: "/services/crm-delivrabilite" },
      ],
    },
    {
      number: "02",
      title: "Assistant IA pour vos équipes commerciales",
      fit: "Équipes 5 à 20 personnes",
      shortDescription:
        "Un agent IA dans Slack ou Teams répond instantanément aux questions de vos commerciaux, sur les objections, le produit, les process et les bonnes pratiques. Quand le système n'est pas certain, il escalade au manager.",
      longDescription:
        "Le Sales Knowledge Bot centralise vos playbooks, FAQ, SOP et documents produit dans un point d'accès unique. Il répond dans la langue de la question, puis capture les réponses du manager quand une escalade est nécessaire. La base de connaissances s'enrichit sans nouveau projet documentaire. Résultat, l'onboarding s'accélère et les réponses se standardisent.",
      result: "Onboarding commercial 3 fois plus rapide, avec 70% d'escalades en moins après quelques mois.",
      stack: ["Slack", "Teams", "n8n", "Claude API", "Google Docs"],
      links: [],
    },
    {
      number: "03",
      title: "Préparation automatique de rendez-vous et mise à jour CRM",
      fit: "Équipes 3+ commerciaux",
      shortDescription:
        "Avant chaque rendez-vous, l'IA génère un briefing complet. Après le call, elle transforme vos notes en compte-rendu structuré, met à jour le CRM et crée les follow-ups.",
      longDescription:
        "Quand un rendez-vous entre dans le calendrier, le système prépare un dossier prospect : actualités récentes, activité LinkedIn, historique CRM, objections déjà rencontrées, talking points recommandés. Après l'appel, le commercial dicte un mémo vocal ou colle ses notes. L'IA structure le compte-rendu, met à jour le pipeline, crée les tâches et évite les relances oubliées.",
      result: "Jusqu'à 4 heures récupérées par jour et par commercial, avec un CRM enfin à jour.",
      stack: ["n8n", "Claude API", "Google Calendar", "HubSpot", "Salesforce"],
      links: [
        { label: "Prise de rendez-vous", href: "/services/prise-de-rendez-vous" },
        { label: "CRM et délivrabilité", href: "/services/crm-delivrabilite" },
      ],
    },
    {
      number: "04",
      title: "Bibliothèque d'objections et battle cards en temps réel",
      fit: "Équipes 5+ commerciaux",
      shortDescription:
        "Les objections gagnantes et les réponses qui closent sont capturées automatiquement à partir de vos deals. Dès qu'un concurrent revient, une battle card est générée et diffusée à l'équipe.",
      longDescription:
        "Au lieu de laisser le savoir commercial dans la tête de deux seniors, le système collecte les objections remontées en call, les réponses qui ont marché et les signaux concurrentiels. Chaque nouvelle information renforce la bibliothèque. Les juniors accèdent aux meilleurs arguments en quelques secondes, directement dans leur environnement de travail.",
      result:
        "Le niveau d'argumentation des juniors converge vers celui des seniors, sans dépendre d'une seule personne.",
      stack: ["n8n", "Claude API", "Google Docs", "Slack", "Teams"],
      links: [],
    },
    {
      number: "05",
      title: "Rédaction automatique de propositions et follow-ups commerciaux",
      fit: "Équipes qui envoient 5+ propositions par semaine",
      shortDescription:
        "L'IA génère des drafts de propositions et de follow-ups à partir du contexte réel du deal. Le commercial ajuste quelques lignes et envoie.",
      longDescription:
        "Le système récupère les données CRM, les notes de meeting, le secteur du prospect, les objections soulevées et le ton de votre entreprise. Il produit ensuite un premier draft propre, structuré et cohérent. Vos équipes passent de plusieurs heures de rédaction à quelques minutes de revue, avec des follow-ups plus réguliers et mieux contextualisés.",
      result: "Des propositions prêtes à envoyer en 15 minutes au lieu de 2 ou 3 heures.",
      stack: ["n8n", "Claude API", "HubSpot", "Salesforce", "Google Docs"],
      links: [{ label: "Cold Email B2B", href: "/services/cold-email" }],
    },
    {
      number: "06",
      title: "Dashboard IA de performance commerciale",
      fit: "Managers de 5 à 15 personnes",
      shortDescription:
        "L'IA analyse les feedbacks quotidiens de votre équipe, détecte les patterns récurrents, met en évidence les progrès et propose des plans d'action concrets par commercial.",
      longDescription:
        "Le dashboard transforme des notes dispersées, des feedbacks de coaching et des observations terrain en une vue structurée, par personne et par équipe. Vous obtenez des tendances lisibles, des priorités de coaching, une vision claire des patterns résolus ou persistants, et une base plus objective pour vos décisions RH.",
      result:
        "Des décisions de management fondées sur des données, avec un onboarding plus propre et moins de turnover caché.",
      stack: ["Supabase", "n8n", "Claude API", "Lovable"],
      links: [],
    },
    {
      number: "07",
      title: "Portail client avec reporting en temps réel",
      fit: "Agences et directions commerciales",
      shortDescription:
        "Un portail sécurisé donne accès aux métriques de campagne, au ROI, au calendrier d'actions et à l'historique de performance, sans passer par des exports manuels.",
      longDescription:
        "Chaque client ou direction consulte ses propres données via un accès contrôlé. Le portail remplace les fichiers Excel et les échanges de reporting récurrents. Vous centralisez les métriques utiles, les tendances, les prochaines actions et un simulateur de ROI. Le reporting devient un produit, pas une charge.",
      result:
        "Jusqu'à 90% de demandes de reporting ad hoc en moins, avec plus de confiance côté client et direction.",
      stack: ["Lovable", "Supabase", "n8n", "RLS"],
      links: [{ label: "Étude de cas Monizze", href: "/etudes-de-cas/monizze-120-rendez-vous" }],
    },
  ],

  startSection: {
    eyebrow: "Par où commencer",
    title: "Commencez par le workflow qui fait déjà perdre du temps aujourd'hui",
    description:
      "Dans la majorité des cas, nous commençons par l'inbox, la préparation de rendez-vous ou le CRM. Ensuite, nous ajoutons les briques qui font monter la qualité de pilotage : knowledge bot, battle cards, reporting ou sales writer.",
  },

  processSection: {
    eyebrow: "Comment ça marche",
    title: "Comment déployer des systèmes AI Sales Ops en 3 semaines ?",
    description:
      "Un diagnostic franc, un déploiement encadré, puis une amélioration continue. Vous savez ce qui est branché, pourquoi, et avec quel impact attendu.",
  },

  processSteps: [
    {
      number: "01",
      title: "Diagnostic gratuit, 30 minutes",
      description:
        "Nous analysons votre CRM, vos outils de prospection, vos SOP et les points de friction réels de votre équipe. Vous repartez avec une recommandation claire, sans jargon ni audit de complaisance.",
    },
    {
      number: "02",
      title: "Déploiement personnalisé, 2 à 4 semaines",
      description:
        "Notre équipe configure les systèmes, connecte vos outils et calibre les prompts, les règles et les workflows avec vos données, votre ton et vos standards de qualité.",
    },
    {
      number: "03",
      title: "Optimisation continue",
      description:
        "Chaque validation humaine, chaque correction et chaque nouveau cas enrichissent le système. Nous monitorons les performances, puis nous ajustons mensuellement avec un interlocuteur dédié.",
    },
  ],

  proofSection: {
    eyebrow: "Preuves",
    title: "Quelles preuves montrent que ces systèmes fonctionnent ?",
    description:
      "devlo ne vend pas un concept IA. Nous déployons des systèmes bâtis sur des campagnes réelles, avec des clients qui veulent du pipeline, du suivi et du ROI.",
  },

  proofStats: [
    {
      value: "60%",
      label: "du temps commercial absorbé par des tâches hors vente",
      sourceLabel: "Salesforce, State of Sales",
      sourceHref: "https://www.salesforce.com/resources/research-reports/state-of-sales/",
    },
    {
      value: "2 h",
      label: "de vente active par jour pour un commercial moyen",
      sourceLabel: "HubSpot, Sales Trends Report",
      sourceHref: "https://www.hubspot.com/sales/statistics",
    },
    {
      value: "27%",
      label: "du temps commercial consacré à la vente effective selon Forrester",
      sourceLabel: "Forrester, B2B Sales Benchmark",
      sourceHref: "https://www.forrester.com/research/b2b-sales/",
    },
    {
      value: "1 jour",
      label: "par semaine peut être perdu à chercher de l'information",
      sourceLabel: "McKinsey, Economic potential of generative AI",
      sourceHref:
        "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
    },
  ],

  deliveryProof: [
    { value: "7 ans", label: "d'expérience opérationnelle en prospection B2B" },
    { value: "+1'000", label: "campagnes exécutées par devlo" },
    { value: "80%", label: "de temps inbox récupéré sur les workflows ciblés" },
    { value: "70%+", label: "de taux d'ouverture moyen sur nos campagnes" },
    { value: "3 à 5x", label: "de gain potentiel sur le taux de réponse avec les bons signaux" },
  ],

  personasSection: {
    eyebrow: "Pour qui",
    title: "Pour quelles entreprises ces systèmes sont-ils conçus ?",
    description:
      "Le bon système dépend moins de votre taille que du point de friction à éliminer : trop de reporting, trop de handoff manuel, trop de savoir tacite, ou pas assez de rigueur dans le follow-up.",
  },

  personas: [
    {
      icon: "📈",
      title: "Le directeur commercial qui veut scaler sans recruter",
      profile:
        "Il pilote 5 à 15 commerciaux, a des objectifs de croissance forts et ne veut pas transformer son budget en machine à embauche.",
      pain: "Mes commerciaux passent plus de temps à administrer qu'à vendre.",
      systemTags: ["Inbox Manager", "Meeting Prep", "Sales Writer"],
      result: "L'équivalent de 2 commerciaux supplémentaires, sans ouvrir 2 postes de plus.",
    },
    {
      icon: "🏗️",
      title: "Le CEO de PME qui veut structurer ses ventes",
      profile:
        "L'équipe commerciale existe, mais le process n'est pas encore formalisé. Le savoir est concentré sur quelques personnes clés.",
      pain: "Tout le savoir commercial est dans la tête de 2 personnes.",
      systemTags: ["Knowledge Bot", "Objection Library", "Team Performance"],
      result: "Vos juniors argumentent comme vos seniors en quelques mois, avec des process enfin documentés.",
    },
    {
      icon: "🧾",
      title: "L'agence B2B qui veut impressionner ses clients",
      profile:
        "Elle gère des campagnes pour ses clients, doit prouver sa valeur en continu et veut réduire le temps passé à produire du reporting.",
      pain: "Mes clients veulent de la visibilité en temps réel, avec des chiffres clairs.",
      systemTags: ["Reporting Portal", "Inbox Manager"],
      result: "Transparence totale, zéro reporting manuel et un argument commercial que peu d'agences peuvent montrer.",
    },
  ],

  comparisonSection: {
    eyebrow: "Comparaison",
    title: "Que se passe-t-il quand vous gardez le statu quo ?",
    description:
      "Pendant que vous hésitez, vos concurrents répondent plus vite, préparent mieux leurs rendez-vous et capitalisent déjà leur savoir commercial.",
  },

  comparisonRows: [
    {
      criterion: "Temps de réponse aux prospects",
      withoutDevlo: "2 à 24 heures, avec beaucoup de réponses rédigées à la main.",
      withDevlo: "Moins de 15 minutes, avec proposition IA et validation humaine.",
    },
    {
      criterion: "Mise à jour CRM après un call",
      withoutDevlo: "Souvent oubliée ou faite plusieurs heures plus tard.",
      withDevlo: "Automatique, structurée et poussée en temps réel.",
    },
    {
      criterion: "Préparation d'un rendez-vous",
      withoutDevlo: "30 minutes de recherche manuelle, parfois plus.",
      withDevlo: "Briefing généré automatiquement, prêt avant le call.",
    },
    {
      criterion: "Onboarding d'un nouveau commercial",
      withoutDevlo: "3 à 6 mois avant autonomie réelle.",
      withDevlo: "4 à 6 semaines avec bot de connaissance et battle cards.",
    },
    {
      criterion: "Propositions commerciales",
      withoutDevlo: "2 à 3 heures de rédaction par proposition.",
      withDevlo: "15 minutes avec draft IA, puis revue humaine.",
    },
    {
      criterion: "Visibilité pour la direction",
      withoutDevlo: "Reporting hebdomadaire sur Excel ou Slides.",
      withDevlo: "Dashboard live, consultable 24 heures sur 24.",
    },
    {
      criterion: "Savoir commercial quand un senior part",
      withoutDevlo: "Une partie du savoir part avec lui.",
      withDevlo: "Les objections, réponses et learnings sont capturés dans le système.",
    },
  ],

  differenceCard: {
    eyebrow: "La différence devlo",
    title:
      "Les agences IA généralistes automatisent vos opérations. devlo automatise votre machine commerciale.",
    description:
      "Nous ne partons pas d'un outil, ni d'un prompt. Nous partons du process commercial, des objections, des handoffs, du CRM, des follow-ups et du rythme réel de votre équipe. C'est cette lecture métier qui fait la différence entre une automatisation impressionnante en démo, et un système utile en production.",
  },

  faqSection: {
    title: "Questions fréquentes sur nos systèmes AI Sales Ops",
  },

  faqItems: [
    {
      question: "Combien coûtent les systèmes AI Sales Ops ?",
      answer:
        "Le pricing dépend du système choisi et de la taille de votre équipe. Le diagnostic initial est gratuit. Les systèmes individuels démarrent à CHF 2'000 par mois. La plupart de nos clients investissent entre CHF 3'000 et CHF 6'000 par mois pour un ou deux systèmes combinés.",
    },
    {
      question: "Faut-il changer de CRM ou d'outils pour utiliser vos systèmes ?",
      answer:
        "Non. Nos systèmes s'intègrent à vos outils existants : HubSpot, Salesforce, Pipedrive, Lemlist, LinkedIn Sales Navigator, Slack, Teams, et d'autres. Nous nous adaptons à votre stack, pas l'inverse.",
    },
    {
      question: "Est-ce que l'IA remplace mes commerciaux ?",
      answer:
        "Non. L'IA prend en charge les tâches répétitives (rédaction d'emails, mise à jour CRM, recherche de prospects, reporting) pour que vos commerciaux se concentrent sur la vente, la relation client et la négociation. Un humain reste dans la boucle à chaque étape critique.",
    },
    {
      question: "Combien de temps faut-il pour déployer un système ?",
      answer:
        "Entre 2 et 4 semaines selon la complexité. Le diagnostic prend 30 minutes. La configuration technique prend 1 à 2 semaines. La phase de calibration et de test prend 1 à 2 semaines supplémentaires.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui. Nous utilisons des infrastructures hébergées en Europe (notamment Supabase et n8n Cloud), conformes au RGPD et à la nLPD suisse. Vos données clients ne sont jamais partagées entre clients. Chaque système est isolé.",
    },
    {
      question: "Peut-on commencer par un seul système et en ajouter d'autres ensuite ?",
      answer:
        "Oui. C'est d'ailleurs la trajectoire la plus saine. La plupart de nos clients démarrent avec l'Inbox Manager ou le Meeting Prep, puis ajoutent d'autres briques quand le premier workflow est stabilisé.",
    },
    {
      question: "Quelle est la différence entre devlo et une agence IA généraliste ?",
      answer:
        "Les agences IA généralistes automatisent souvent des sujets administratifs (factures, support ou back-office). devlo se concentre uniquement sur les équipes commerciales B2B. Nous partons du process commercial, puis nous ajoutons l'IA là où elle crée un vrai gain de temps ou de taux de conversion.",
    },
    {
      question: "Proposez-vous ces systèmes en complément de vos services de prospection externalisée ?",
      answer:
        "Oui. Nos clients en prospection externalisée peuvent ajouter ces systèmes comme extension naturelle. Les systèmes AI Sales Ops existent aussi en standalone pour les équipes commerciales internes qui veulent accélérer sans recruter immédiatement.",
    },
  ],

  ctaSection: {
    eyebrow: "Diagnostic gratuit",
    title: "Prêt à libérer du temps pour vos commerciaux ?",
    description:
      "Réservez un diagnostic gratuit de 30 minutes. Nous analysons votre situation et vous recommandons les systèmes les plus pertinents pour votre équipe.",
    checklist: [
      "Quels workflows automatiser en priorité",
      "Quels systèmes déployer dans les 30 prochains jours",
      "Quel ROI attendre, avec quels garde-fous",
      "Zéro engagement, zéro jargon",
    ],
    formTitle: "Réserver un diagnostic gratuit",
    formSubtitle: "30 minutes, sans engagement.",
  },

  caseStudiesLink: "Voir toutes les études de cas →",
  startCta: {
    primary: "Réserver un diagnostic gratuit →",
    secondary: "Voir les services outbound",
  },
};

export type AiSalesOpsContent = typeof aiSalesOpsContent;
