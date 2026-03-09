export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  relatedServiceSlug: string;
  author?: string;
  authorUrl?: string;
  body: string[];
};

const FOUNDER = {
  author: "Charles Perret",
  authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
};

export const articles: BlogArticle[] = [
  {
    slug: "cold-email-b2b-guide-complet",
    title: "Cold email B2B : le guide complet pour 2026",
    description:
      "Découvrez comment structurer, rédiger et déployer des campagnes de cold email B2B performantes. Méthode éprouvée sur 1000+ campagnes.",
    date: "2026-03-01",
    category: "Cold Email",
    relatedServiceSlug: "cold-email",
    ...FOUNDER,
    body: [
      "Le cold email reste en 2026 l'un des canaux les plus rentables pour la prospection B2B. Avec un coût par lead 5 à 10 fois inférieur au paid advertising, il offre un ROI difficilement égalable — à condition de maîtriser les fondamentaux.",

      "## 1. Construire une liste de prospects qualifiés",
      "Tout commence par la qualité de votre liste. Utilisez des outils comme Apollo, LinkedIn Sales Navigator ou Clay pour identifier des décideurs correspondant à votre ICP (Ideal Customer Profile). Chaque contact doit être vérifié : email valide, poste actuel, entreprise correspondant à vos critères.",

      "## 2. Rédiger des emails qui convertissent",
      "Un bon cold email fait moins de 120 mots. Il commence par une accroche personnalisée (pas \"Cher Monsieur\"), expose un problème que le prospect reconnaît, et propose une action simple (un appel de 15 minutes). Évitez les pièces jointes, les liens multiples et le jargon marketing.",

      "## 3. Séquencer intelligemment",
      "Une séquence optimale comporte 4 à 6 emails sur 14 à 21 jours. Le premier email est le plus important — c'est lui qui ouvre la conversation. Les relances doivent apporter de la valeur (étude de cas, statistique, insight) et non simplement \"relancer\".",

      "## 4. Optimiser la délivrabilité",
      "En 2026, la délivrabilité est devenue le facteur n°1 de succès. Configurez SPF, DKIM et DMARC sur vos domaines d'envoi. Utilisez des domaines dédiés (pas votre domaine principal). Chauffez vos boîtes pendant 2 à 3 semaines avant d'envoyer. Maintenez un volume d'envoi stable.",

      "## 5. Mesurer et itérer",
      "Les KPI à suivre : taux d'ouverture (objectif > 60 %), taux de réponse (objectif > 5 %), taux de rendez-vous (objectif > 2 %). Testez systématiquement vos objets, accroches et CTA. Une campagne performante se construit par itérations successives.",

      "## Conclusion",
      "Le cold email B2B n'est pas du spam — c'est une conversation initiée de manière professionnelle avec un décideur qui a un problème que vous pouvez résoudre. Chez devlo, nous avons déployé plus de 1000 campagnes avec cette méthodologie. Le résultat : des milliers de rendez-vous qualifiés pour nos clients en Suisse, Belgique, France et au-delà.",
    ],
  },
  {
    slug: "externaliser-prospection-commerciale",
    title: "Externaliser sa prospection commerciale : guide décisionnel",
    description:
      "Quand et comment externaliser sa prospection B2B ? Critères de décision, avantages, risques et méthode pour choisir le bon partenaire.",
    date: "2026-03-05",
    category: "Stratégie",
    relatedServiceSlug: "outbound-multicanal",
    ...FOUNDER,
    body: [
      "Externaliser sa prospection commerciale est une décision stratégique majeure. Bien exécutée, elle accélère votre pipeline de 3 à 6 mois. Mal gérée, elle brûle du budget sans résultat. Voici comment prendre la bonne décision.",

      "## Quand externaliser ?",
      "L'externalisation fait sens dans trois situations : (1) votre équipe commerciale est saturée et ne peut pas prospecter, (2) vous entrez sur un nouveau marché sans réseau local, (3) vous voulez tester un canal (cold email, LinkedIn, calling) avant d'investir en interne.",

      "## Les avantages concrets",
      "Une agence spécialisée apporte l'infrastructure (outils, domaines, données), l'expertise (copywriting, séquençage, délivrabilité) et le volume (capacité à contacter des centaines de décideurs par semaine). Le temps de mise en production est de 2 à 4 semaines, contre 3 à 6 mois pour monter une équipe interne.",

      "## Les risques à anticiper",
      "Le principal risque est le désalignement sur l'ICP et le messaging. Si l'agence ne comprend pas votre proposition de valeur, les rendez-vous seront de mauvaise qualité. Solution : investissez du temps dans le brief initial et validez les séquences avant envoi.",

      "## Comment choisir son partenaire",
      "Cinq critères essentiels : (1) expérience dans votre secteur ou marché, (2) transparence sur la méthodologie et les outils, (3) références vérifiables avec des résultats chiffrés, (4) modèle de pricing aligné sur la performance, (5) reporting régulier et accès aux données.",

      "## Le modèle devlo",
      "Chez devlo, nous combinons trois canaux (cold email, LinkedIn, cold calling) dans une approche multicanale coordonnée. Chaque campagne démarre par un workshop ICP, suivi d'un phase de test de 2 semaines, puis un déploiement à l'échelle. Plus de 1000 campagnes déployées depuis 2020 en Suisse, Belgique, France, DACH et Amérique du Nord.",

      "## Conclusion",
      "L'externalisation de la prospection est un accélérateur, pas un substitut à votre stratégie commerciale. Elle fonctionne mieux quand votre offre est claire, votre marché identifié, et votre équipe prête à convertir les rendez-vous en clients.",
    ],
  },
  {
    slug: "intent-data-prospects-prets-acheter",
    title: "Intent data : identifier les prospects prêts à acheter",
    description:
      "Comment utiliser les signaux d'intention d'achat pour cibler les bons prospects au bon moment. Guide pratique pour les équipes B2B.",
    date: "2026-03-08",
    category: "Intent Data",
    relatedServiceSlug: "intent-data",
    ...FOUNDER,
    body: [
      "En prospection B2B, le timing est aussi important que le ciblage. L'intent data — les signaux d'intention d'achat — permet d'identifier les entreprises qui recherchent activement des solutions comme la vôtre. Résultat : des taux de conversion 2 à 5 fois supérieurs.",

      "## Qu'est-ce que l'intent data ?",
      "L'intent data regroupe les signaux comportementaux indiquant qu'une entreprise ou un décideur s'intéresse à un sujet spécifique. Ces signaux proviennent de trois sources : la consommation de contenu en ligne (articles, webinaires, livres blancs), les recherches sur des sites de comparaison (G2, Capterra), et les changements organisationnels (recrutements, levées de fonds, changements de direction).",

      "## Les types de signaux à surveiller",
      "Signaux forts : visite répétée de pages produit/pricing, téléchargement de comparatifs, recherche de mots-clés transactionnels. Signaux modérés : consommation de contenu éducatif, participation à des webinaires sectoriels. Signaux contextuels : recrutement sur des postes liés à votre solution, levée de fonds récente, changement de CTO/CMO.",

      "## Comment intégrer l'intent data dans votre prospection",
      "Étape 1 : Définissez vos \"intent topics\" — les sujets que vos prospects recherchent avant d'acheter. Étape 2 : Connectez une source d'intent data (Bombora, G2, 6sense) à votre CRM. Étape 3 : Créez des scores de priorité combinant intent + ICP fit. Étape 4 : Déclenchez des séquences outbound personnalisées sur les comptes à score élevé.",

      "## L'intent data chez devlo",
      "Notre service Intent Data combine plusieurs sources de signaux pour créer des listes de prospection ultra-ciblées. Pour chaque campagne, nous identifions les entreprises qui montrent des signes d'intérêt actif pour votre catégorie de solution. Le résultat : des taux de réponse 2 à 3 fois supérieurs aux campagnes \"cold\" classiques.",

      "## Conclusion",
      "L'intent data transforme la prospection \"à froid\" en prospection \"tiède\". Au lieu de contacter des centaines de prospects au hasard, vous concentrez vos efforts sur les entreprises qui ont déjà commencé leur parcours d'achat. C'est la différence entre frapper à toutes les portes et ouvrir celles qui sont déjà entrouvertes.",
    ],
  },
  {
    slug: "prospection-b2b-suisse-guide-2026",
    title: "Prospection B2B en Suisse : guide complet 2026",
    description:
      "Comment prospecter efficacement sur le marché suisse B2B en 2026 ? Spécificités culturelles, multilingue, canaux et résultats concrets.",
    date: "2026-03-09",
    category: "Stratégie",
    relatedServiceSlug: "outbound-multicanal",
    ...FOUNDER,
    body: [
      "La Suisse est l'un des marchés B2B les plus exigeants — et les plus rentables — d'Europe. Avec trois régions linguistiques, une culture d'affaires distincte et des décideurs difficiles à joindre, la prospection y demande une approche sur mesure.",

      "## Les spécificités du marché suisse B2B",
      "La Suisse n'est pas un marché homogène. La Romandie (FR), la Suisse alémanique (DE) et le Tessin (IT) ont des codes culturels différents. Un email rédigé en français qui fonctionne à Paris devra être adapté pour Genève. Un message en allemand standard ne résonnera pas de la même manière à Zurich qu'à Berlin. La clé : des messages natifs, pas des traductions.",

      "## Les canaux qui fonctionnent en Suisse",
      "Contrairement à la France ou la Belgique, le cold calling reste très efficace en Suisse, notamment en Suisse alémanique. Les décideurs suisses apprécient la directness et le professionnalisme. LinkedIn est également très actif, avec un taux de pénétration parmi les plus élevés d'Europe. Le cold email fonctionne mieux avec une accroche locale et des références de clients suisses.",

      "## Résultats concrets sur le marché suisse",
      "Sur plus de 500 campagnes déployées en Suisse depuis 2020, devlo observe un taux de réponse moyen de 12 % sur les décideurs contactés. Nos meilleures campagnes : 54 rendez-vous qualifiés pour CareerLunch en DACH, 71 rendez-vous pour un acteur de la propreté urbaine, 40 prospects qualifiés dans la mobilité.",

      "## Les secteurs porteurs en Suisse",
      "IT/SaaS, finance, medtech, immobilier commercial, services professionnels, formation. La Suisse abrite plusieurs centres de décision pour des multinationales — une opportunité souvent sous-exploitée par les agences françaises.",

      "## Conclusion",
      "Prospecter en Suisse demande de la rigueur, une connaissance culturelle fine et la capacité à opérer en plusieurs langues. Chez devlo, c'est notre marché historique. Si vous voulez pénétrer le marché suisse ou y accélérer votre croissance, nous pouvons vous aider.",
    ],
  },
  {
    slug: "linkedin-outreach-b2b-methode-resultats",
    title: "LinkedIn outreach B2B : méthode et résultats 2026",
    description:
      "Comment utiliser LinkedIn pour générer des rendez-vous B2B qualifiés ? Séquences, personnalisation et résultats réels sur 1000+ campagnes.",
    date: "2026-03-09",
    category: "LinkedIn",
    relatedServiceSlug: "linkedin-outreach",
    ...FOUNDER,
    body: [
      "LinkedIn est devenu le canal outbound B2B le plus puissant de 2026 — à condition de l'utiliser correctement. Avec plus de 900 millions de membres et des décideurs directement accessibles, c'est une opportunité que peu d'entreprises exploitent vraiment.",

      "## Pourquoi LinkedIn outreach convertit mieux",
      "Un message LinkedIn arrive dans la boîte personnelle du décideur, pas dans un dossier spam. Le profil expéditeur est visible — il crée de la confiance immédiatement. Et contrairement au cold email, une connexion LinkedIn reste dans le réseau après la campagne. Le taux d'ouverture d'un InMail bien ciblé dépasse souvent 40 %.",

      "## La méthode devlo pour le LinkedIn outreach",
      "Notre approche en 4 étapes : (1) Optimisation du profil expéditeur — photo professionnelle, titre accrocheur, résumé orienté valeur client. (2) Ciblage précis via Sales Navigator — titre, secteur, taille d'entreprise, localisation, ancienneté. (3) Séquence de 3-4 messages sur 10-14 jours — connexion + message de valeur + relance + breakup. (4) Personnalisation à l'échelle — clay.com pour enrichir chaque profil avec des données contextuelles.",

      "## Résultats typiques",
      "Sur nos campagnes LinkedIn 2026 : taux d'acceptation des demandes de connexion de 25-40 % selon le secteur, taux de réponse sur les messages de 8-15 %, taux de rendez-vous de 2-5 %. Exemple concret : 52 prospects qualifiés pour Square Co dans les biocarburants, obtenus principalement via LinkedIn.",

      "## Les erreurs à éviter",
      "Envoyer un pitch commercial dès la connexion acceptée (le \"bait and switch\"). Utiliser des messages génériques sans personnalisation. Ne pas suivre les KPIs (taux de connexion, taux de réponse, taux de rdv). Utiliser un seul expéditeur pour des volumes importants — diversifiez.",

      "## Conclusion",
      "LinkedIn outreach est l'un des canaux B2B avec le meilleur ROI en 2026, mais il demande une infrastructure solide, une expertise en copywriting et une exécution rigoureuse. C'est exactement ce que nous faisons chez devlo pour nos clients en Suisse, Belgique, France et DACH.",
    ],
  },
  {
    slug: "cold-calling-b2b-2026-encore-efficace",
    title: "Cold calling B2B en 2026 : encore efficace ?",
    description:
      "Le cold calling est-il mort en 2026 ? Réponse chiffrée basée sur 1000+ campagnes outbound et les dernières tendances B2B.",
    date: "2026-03-09",
    category: "Cold Calling",
    relatedServiceSlug: "cold-calling",
    ...FOUNDER,
    body: [
      "\"Le cold calling est mort.\" Cette phrase circule depuis 2015. Et pourtant, en 2026, le téléphone reste l'un des canaux B2B avec les meilleurs taux de conversion — à condition de l'utiliser correctement.",

      "## Les chiffres qui contredisent les idées reçues",
      "Sur nos campagnes de cold calling 2026 : taux de joignabilité de 15-25 % selon le secteur, taux de conversion appel → rendez-vous de 8-15 %, délai moyen pour obtenir un premier rendez-vous : 3-5 jours. Comparé au cold email (2-3 semaines pour les premières réponses), le téléphone reste le canal le plus rapide.",

      "## Pourquoi le cold calling fonctionne encore",
      "Quatre raisons : (1) Il y a moins de concurrence — la majorité des équipes ont abandonné le calling. (2) Une vraie conversation permet de qualifier immédiatement et d'adapter le pitch en temps réel. (3) Le téléphone crée une connexion humaine que l'email ne peut pas reproduire. (4) En Suisse alémanique et en Allemagne, le calling reste culturellement bien accepté.",

      "## La méthode : scripts, objections, booking",
      "Un bon appel de cold calling dure 3-5 minutes. Structure : accroche (10 secondes), qualification (30 secondes), valeur proposition (60 secondes), booking (30 secondes). Les objections classiques (\"pas le bon moment\", \"on a déjà un prestataire\", \"envoyez un email\") se traitent avec des réponses préparées et testées. L'objectif n'est pas de vendre — c'est de décrocher un rendez-vous.",

      "## Cold calling + cold email = outbound multicanal",
      "Le calling seul convertit. Mais combiné au cold email et au LinkedIn outreach dans une séquence coordonnée, les résultats sont 2 à 3 fois supérieurs. Le modèle : cold email le lundi, LinkedIn mercredi, appel vendredi. Cette coordination multicanale est au coeur de notre service Outbound Multicanal.",

      "## Conclusion",
      "Le cold calling B2B en 2026 n'est pas mort — il est en voie de renaissance pour ceux qui savent l'utiliser. Avec les bons scripts, la bonne cible et la bonne cadence, c'est souvent le canal qui débloque les deals que l'email ne peut pas obtenir.",
    ],
  },
  {
    slug: "generation-leads-b2b-methode-complete",
    title: "Génération de leads B2B : méthode complète 2026",
    description:
      "Comment construire un pipeline de leads B2B qualifiés de manière systématique ? ICP, TAM, enrichissement, qualification — la méthode devlo.",
    date: "2026-03-09",
    category: "Lead Generation",
    relatedServiceSlug: "generation-leads",
    ...FOUNDER,
    body: [
      "La génération de leads B2B est la base de toute stratégie commerciale. Pourtant, la majorité des entreprises la pratiquent de manière désorganisée — avec des listes de mauvaise qualité, un ICP flou et aucune méthode de qualification. Voici la méthode systématique que nous appliquons chez devlo.",

      "## Étape 1 : Définir l'ICP avec précision",
      "L'Ideal Customer Profile (ICP) n'est pas un persona marketing. C'est la définition précise des entreprises et des décideurs qui ont le plus de probabilité d'acheter votre produit ou service. Variables clés : taille d'entreprise (nombre d'employés, chiffre d'affaires), secteur d'activité (codes NAF/NACE), localisation géographique, stack technologique, signaux comportementaux (levées de fonds, recrutements, etc.).",

      "## Étape 2 : Cartographier le TAM",
      "Le Total Addressable Market (TAM) est le nombre total d'entreprises correspondant à votre ICP. Calculez-le via LinkedIn Sales Navigator, Apollo ou des bases de données sectorielles. Un TAM bien cartographié vous donne une vision claire de votre potentiel de croissance et permet de prioriser vos efforts.",

      "## Étape 3 : Sourcer et enrichir les contacts",
      "Pour chaque compte cible, identifiez les bons décideurs (titre, ancienneté, responsabilités). Sourcez leurs coordonnées via Apollo, Hunter, Dropcontact ou Clay. Enrichissez avec des données contextuelles : actualités récentes, articles publiés, activité LinkedIn. Une liste enrichie génère 2 à 3 fois plus de réponses qu'une liste brute.",

      "## Étape 4 : Qualifier avant de prospecter",
      "Tous les leads ne méritent pas la même attention. Créez un scoring basé sur l'ICP fit (0-10) et les signaux d'intent (0-10). Les leads avec un score > 15/20 sont prioritaires. Les autres sont mis en \"nurturing\" ou exclus. Cette qualification manuelle est chronophage mais elle est la clé d'un pipeline de qualité.",

      "## Étape 5 : Maintenir la liste à jour",
      "Une liste de leads se dégrade rapidement — 30 % des données sont obsolètes au bout d'un an. Mettez en place une hygène de données : vérification des emails (NeverBounce, ZeroBounce), mise à jour des postes (LinkedIn), suppression des entreprises qui ne correspondent plus à l'ICP.",

      "## Résultats avec la méthode devlo",
      "Sur nos missions de lead generation, nous construisons en moyenne 300 à 500 contacts qualifiés par semaine pour nos clients. Taux de délivrabilité > 95 %, taux de qualification ICP > 85 %. Ces listes alimentent directement les campagnes outbound avec des résultats 2 à 3 fois supérieurs aux listes achetées.",

      "## Conclusion",
      "La génération de leads B2B de qualité est un processus rigoureux qui demande des outils, de l'expertise et du temps. Chez devlo, c'est une prestation à part entière, distincte de la prospection. Une bonne liste est le fondement de toute campagne performante.",
    ],
  },
  {
    slug: "prospection-multicanale-b2b-cold-email-linkedin-calling",
    title: "Prospection multicanale B2B : combiner cold email, LinkedIn et calling",
    description:
      "Comment coordonner cold email, LinkedIn outreach et cold calling pour maximiser les rendez-vous B2B ? Séquences, timing et résultats sur 14 cas clients.",
    date: "2026-03-09",
    category: "Outbound",
    relatedServiceSlug: "outbound-multicanal",
    ...FOUNDER,
    body: [
      "La prospection multicanale est la stratégie outbound la plus efficace en 2026. Plutôt que de parier sur un seul canal, elle combine cold email, LinkedIn outreach et cold calling dans une séquence coordonnée. Résultat : des taux de conversion 2 à 3 fois supérieurs au monocanal.",

      "## Pourquoi le multicanal surperforme",
      "Chaque canal a ses forces et ses limites. Le cold email est scalable et asynchrone. LinkedIn crée une présence dans le réseau du décideur. Le calling permet une qualification en temps réel. Combinés, ils créent plusieurs points de contact avec le même décideur — augmentant la mémorabilité et la probabilité de réponse.",

      "## La séquence multicanale devlo",
      "Notre modèle éprouvé sur 1000+ campagnes : Jour 1 — cold email personnalisé. Jour 3 — demande de connexion LinkedIn avec note. Jour 7 — relance email avec étude de cas. Jour 10 — message LinkedIn si connexion acceptée. Jour 14 — appel téléphonique (cold call). Jour 17 — email de breakup. Cette séquence génère en moyenne 3 à 4 points de contact avec le décideur sur 2-3 semaines.",

      "## L'importance de la coordination",
      "Le multicanal ne signifie pas \"envoyer la même chose partout\". Chaque canal doit avoir un message adapté et apporter une valeur différente. L'email éduque, LinkedIn crée la relation, le calling qualifie. La coordination est clé : si un prospect répond à l'email, il doit être retiré automatiquement des séquences LinkedIn et calling.",

      "## Résultats sur nos 14 cas clients",
      "Voici quelques exemples concrets : Monizze (Belgique) — 120 rendez-vous qualifiés en ciblant 7000 décideurs RH. Logiciel comptable — 80 rendez-vous et 200K€ de contrats signés. Propreté urbaine — 71 rendez-vous avec des décideurs de villes européennes. Biocarburants — 52 rendez-vous avec des industriels en 3 mois.",

      "## Les outils nécessaires",
      "Pour une campagne multicanale efficace : un outil de cold email (Lemlist, Instantly, Smartlead), LinkedIn Sales Navigator + un outil d'automatisation (Expandi, Waalaxy), un CRM pour centraliser les données (HubSpot, Pipedrive), Clay pour l'enrichissement et la personnalisation. L'infrastructure est aussi importante que le messaging.",

      "## Conclusion",
      "La prospection multicanale B2B n'est pas de la prospection \"agressive\" — c'est une approche professionnelle et coordonnée qui respecte le temps du décideur en lui proposant de la valeur à chaque point de contact. C'est au cœur de notre méthodologie chez devlo depuis 2020.",
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
