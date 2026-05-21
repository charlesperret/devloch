import type { SlugMapEntry, SupportedLocale } from "@/lib/i18n/slug-map";

type Reviewer = "Charles" | "Janis" | "Viktor";
type ReviewStatus = "needs-review" | "approved-for-test";

type LogoProof = {
  src: string;
  alt: string;
};

type CaseStudyProof = {
  client: string;
  sector: string;
  title: string;
  metrics: string[];
  logo?: string;
  href?: string;
};

type TestimonialProof = {
  quote: string;
  author: string;
  role: string;
  company: string;
  photo: string;
  photoAlt: string;
  note?: string;
};

export type PaidMarketPage = {
  key: string;
  pageId: string;
  locale: SupportedLocale;
  path: string;
  reviewer: Reviewer;
  reviewStatus: ReviewStatus;
  market: string;
  marketLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  badges: string[];
  primaryCta: string;
  formTitle: string;
  formIntro: string;
  postForm: string;
  logosTitle: string;
  logos: LogoProof[];
  proofTitle: string;
  proofRows: [string, string][];
  fitTitle: string;
  fitIntro: string;
  fitItems: string[];
  methodTitle: string;
  methodIntro: string;
  methodSteps: { title: string; body: string; artifact: string }[];
  caseStudiesTitle: string;
  caseStudiesIntro: string;
  caseStudies: CaseStudyProof[];
  testimonialsTitle: string;
  testimonials: TestimonialProof[];
  riskTitle: string;
  riskIntro: string;
  riskRows: [string, string][];
  deliverablesTitle: string;
  deliverables: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
};

export type PaidMarketRouteEntry = {
  pageId: string;
  entry: SlugMapEntry;
};

const HUBSPOT = {
  portalId: "8082524",
  formIds: {
    en: "e483f870-da8e-4e90-8017-7cdff873ed22",
    fr: "c9fbd96c-6782-4053-a5a1-759d6a395238",
    de: "9f8e7adf-523e-4907-a180-db813331fa50",
    nl: "e2fa3a83-114f-46ea-838f-9326f2d89b5c",
  },
  region: "na1",
} as const;

export const paidMarketHubspot = HUBSPOT;

const LOGOS = {
  monizze: { src: "/images/Monizze_Logo.webp", alt: "Monizze logo" },
  horus: { src: "/images/Horus_logo.webp", alt: "Horus Software logo" },
  careerlunch: { src: "/images/CareerLunch_logo.webp", alt: "CareerLunch logo" },
  saporo: { src: "/images/Saporo_logo.webp", alt: "Saporo logo" },
  cegos: { src: "/images/Cegos_Logo.webp", alt: "Cegos logo" },
  abacus: { src: "/images/Abacus_logo.webp", alt: "Abacus logo" },
  apidae: { src: "/images/Apidae_log.webp", alt: "APIDAE logo" },
  iddi: { src: "/images/IDDI_logo.webp", alt: "IDDI logo" },
  locky: { src: "/images/Locky_Logo.webp", alt: "Locky logo" },
  hiag: { src: "/images/HIAG_logo.webp", alt: "HIAG logo" },
  lemanvisio: { src: "/images/Lemanvisio_Logo.webp", alt: "Lemanvisio logo" },
  manyWays: { src: "/images/Many_ways_logo.webp", alt: "Many Ways logo" },
  lafargeHolcim: { src: "/images/Logo_LafargeHolcim.webp", alt: "LafargeHolcim logo" },
  abb: { src: "/images/Logo_ABB.webp", alt: "ABB logo" },
  hublot: { src: "/images/Logo_Hublot.webp", alt: "Hublot logo" },
  longines: { src: "/images/Logo_Longines.webp", alt: "Longines logo" },
  lombardOdier: { src: "/images/Logo_Lombard_Odier.webp", alt: "Lombard Odier logo" },
  bhp: { src: "/images/Logo_BHP.webp", alt: "BHP logo" },
  adecco: { src: "/images/Logo_Adecco.webp", alt: "Adecco logo" },
  bcf: { src: "/images/Logo_BCF.webp", alt: "Banque Cantonale de Fribourg logo" },
  merck: { src: "/images/Logo_Merck.webp", alt: "Merck logo" },
  apple: { src: "/images/Logo_Apple.webp", alt: "Apple logo" },
  implenia: { src: "/images/Logo_Implenia.webp", alt: "Implenia logo" },
} as const;

const ALL_CLIENT_LOGOS: LogoProof[] = [
  LOGOS.monizze,
  LOGOS.horus,
  LOGOS.careerlunch,
  LOGOS.saporo,
  LOGOS.cegos,
  LOGOS.abacus,
  LOGOS.apidae,
  LOGOS.iddi,
  LOGOS.locky,
  LOGOS.hiag,
  LOGOS.lemanvisio,
  LOGOS.manyWays,
  LOGOS.lafargeHolcim,
  LOGOS.abb,
  LOGOS.hublot,
  LOGOS.longines,
  LOGOS.lombardOdier,
  LOGOS.bhp,
  LOGOS.adecco,
  LOGOS.bcf,
  LOGOS.merck,
  LOGOS.apple,
  LOGOS.implenia,
];

const pages: PaidMarketPage[] = [
  {
    key: "australia-en",
    pageId: "paid-market:australia-en",
    locale: "en",
    path: "/en/lp/australia-b2b-prospecting",
    reviewer: "Charles",
    reviewStatus: "needs-review",
    market: "Australia",
    marketLabel: "Australia",
    title: "B2B Prospecting Agency Australia | devlo",
    description:
      "B2B prospecting for Australian teams that want cleaner target accounts, buying-signal prioritisation and qualified customer acquisition conversations.",
    eyebrow: "B2B prospecting for Australian teams",
    h1: "Grow qualified B2B pipeline for Australian teams with signal-led outbound",
    intro:
      "devlo helps B2B teams turn a broad addressable market into a focused list of accounts, prioritised by buying signals, then contacted with proof-led email, LinkedIn and phone outreach.",
    badges: ["TAM mapping", "Buying signals", "Proof-led outreach"],
    primaryCta: "Review my acquisition plan",
    formTitle: "Get a concrete acquisition readout",
    formIntro:
      "Share your offer, target buyers and current sales motion. We will review the first account segment, signal logic and proof angle before any budget is scaled.",
    postForm: "After the form, we come back with the first segment and the risks to fix before launch.",
    logosTitle: "Selected teams and case studies behind the method",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Why this matters for paid search",
    proofRows: [
      ["Pipeline, not geography", "Most buyers are not looking to 'open Australia'. They want more qualified opportunities from the accounts that matter."],
      ["Signal discipline", "Before outreach, we isolate events, roles and account changes that make a conversation more plausible."],
      ["Credible proof", "The outreach angle is built around verifiable value proof, not generic appointment-setting copy."],
    ],
    fitTitle: "Best fit",
    fitIntro: "This suits B2B teams whose deal size justifies careful account research and multichannel qualification.",
    fitItems: ["B2B SaaS and software", "Cybersecurity and IT services", "Professional services", "Industrial and technical services"],
    methodTitle: "The devlo methodology",
    methodIntro:
      "This is a simple operating system for improving B2B customer acquisition with clearer account selection, timing and proof.",
    methodSteps: [
      {
        title: "Map the total addressable market",
        body: "We structure the companies, roles, regions and segments that could realistically buy from you.",
        artifact: "Output: a prioritised account universe instead of a loose lead list.",
      },
      {
        title: "Prioritise buying signals",
        body: "We rank accounts using signals such as hiring, technology changes, expansion, regulation, new leadership or budget pressure.",
        artifact: "Output: the first batch of accounts most likely to justify outreach now.",
      },
      {
        title: "Prospect with value proof",
        body: "We translate the signal into a short business hypothesis and back it with relevant proof before email, LinkedIn or phone contact.",
        artifact: "Output: conversations anchored in a reason to engage, not a generic sales pitch.",
      },
    ],
    caseStudiesTitle: "Case studies behind the method",
    caseStudiesIntro:
      "Australia needs honest proof. We use international B2B results to show the operating method, without claiming local Australian case-study coverage.",
    caseStudies: [
      {
        client: "Monizze",
        sector: "HR / Finance",
        title: "120 qualified meetings after targeting 7,000 HR, finance and leadership decision-makers.",
        metrics: ["120 qualified meetings", "7,000 decision-makers"],
        logo: LOGOS.monizze.src,
        href: "/en/casestudy/monizze-120-appointments",
      },
      {
        client: "CareerLunch",
        sector: "HR-tech",
        title: "54 commercial meetings in DACH where many target companies had already been contacted.",
        metrics: ["54 meetings", "DACH campaign"],
        logo: LOGOS.careerlunch.src,
        href: "/en/casestudy/hr-54-meetings-dach",
      },
      {
        client: "Saporo",
        sector: "Cybersecurity",
        title: "Cybersecurity campaign built around complex buyer education and qualified interest.",
        metrics: ["81% open rate", "54% reply rate", "16% meeting interest"],
        logo: LOGOS.saporo.src,
        href: "/en/casestudy/cybersecurity-4500-companies",
      },
    ],
    testimonialsTitle: "What clients recognised",
    testimonials: [
      {
        quote: "devlo helped us build hyper-personalised sales campaigns and generate qualified commercial meetings.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing at CareerLunch",
        note: "Translated from French testimonial",
      },
      {
        quote: "A very efficient collaboration, especially in a complex sector like cybersecurity.",
        author: "Olivier Eyries",
        role: "CEO",
        company: "Saporo",
        photo: "/images/Olivier-Eyries.webp",
        photoAlt: "Olivier Eyries, CEO of Saporo",
        note: "Translated from French testimonial",
      },
    ],
    riskTitle: "What we filter out",
    riskIntro: "These checks protect the campaign from spending budget on audiences that look attractive but cannot convert.",
    riskRows: [
      ["Weak ICP", "If the buyer role and account type are vague, the campaign should not scale."],
      ["Unclear proof", "European proof is useful only when it supports the buyer problem being addressed."],
      ["No qualification rule", "A meeting must be defined by fit, need and next step, not by calendar volume alone."],
    ],
    deliverablesTitle: "What you receive",
    deliverables: ["TAM and first segment recommendation", "Buying-signal shortlist", "Proof-led sequence angles", "Paid-search and outbound gaps to address before scaling spend"],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Is devlo based in Australia?",
        answer:
          "No. devlo is a Swiss B2B outbound agency. The page does not claim local Australian case studies; it explains the method and proof used to build serious campaigns.",
      },
      {
        question: "We already sell in Australia — does this still apply?",
        answer: "Yes. The goal is to improve customer acquisition, whether you sell within Australia or from Australia into other B2B markets.",
      },
      {
        question: "When should we not launch?",
        answer: "If the ICP, value proof or decision-maker data is still weak, we recommend fixing that before paid traffic or outbound volume increases.",
      },
    ],
    relatedLinks: [
      { label: "Outbound services", href: "/en/services/outbound-multichannel" },
      { label: "Case studies", href: "/en/case-studies" },
    ],
  },
  {
    key: "uk-en",
    pageId: "paid-market:uk-en",
    locale: "en",
    path: "/en/lp/uk-b2b-prospecting",
    reviewer: "Charles",
    reviewStatus: "needs-review",
    market: "United Kingdom",
    marketLabel: "UK",
    title: "B2B Prospecting Agency UK | devlo",
    description:
      "B2B prospecting for UK teams that need sharper target accounts, buying signals, proof-led outreach and qualified sales conversations.",
    eyebrow: "B2B prospecting for UK teams",
    h1: "Turn your UK addressable market into qualified B2B conversations",
    intro:
      "devlo helps B2B sales and growth teams map the right accounts, prioritise them with buying signals and open conversations with proof instead of generic appointment-setting scripts.",
    badges: ["Account mapping", "Signal prioritisation", "Qualified meetings"],
    primaryCta: "Review my UK pipeline plan",
    formTitle: "Get a UK acquisition readout",
    formIntro:
      "Share your offer, buyer roles and current acquisition challenge. We will identify the first segment, the likely signals and the proof angle to use.",
    postForm: "We reply with the first segment, risks and recommended next step before budget is scaled.",
    logosTitle: "Selected proof from B2B outbound campaigns",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Why the UK page must be specific",
    proofRows: [
      ["Competitive demand", "UK clicks are expensive when the page sounds like a generic lead-generation agency."],
      ["Buyer clarity", "Lead generation, SDR outsourcing and outbound strategy intent need to be separated before spend increases."],
      ["Proof-led execution", "The first message should explain why the account is being approached now and why devlo can help."],
    ],
    fitTitle: "Best fit",
    fitIntro: "This works best when the target account profile is specific and the sales motion can absorb qualified conversations quickly.",
    fitItems: ["B2B SaaS", "Cybersecurity", "Consulting and professional services", "High-value services with clear buyer roles"],
    methodTitle: "The devlo methodology",
    methodIntro:
      "We reduce waste by building the campaign around account quality, buying signals and value proof before channel volume.",
    methodSteps: [
      {
        title: "Map the total addressable market",
        body: "We define the companies, buyer roles and segments that can realistically become customers.",
        artifact: "Output: a TAM map that separates attractive accounts from reachable accounts.",
      },
      {
        title: "Prioritise buying signals",
        body: "We identify triggers that suggest timing: hiring, new leadership, technology change, expansion or regulatory pressure.",
        artifact: "Output: a ranked first batch, not a generic UK-wide target list.",
      },
      {
        title: "Prospect with value proof",
        body: "Each outreach angle connects the signal to a business hypothesis and a relevant result or case example.",
        artifact: "Output: sales conversations with context, not cold volume for its own sake.",
      },
    ],
    caseStudiesTitle: "Selected proof",
    caseStudiesIntro: "Enough evidence to make the method credible, without turning into a sales deck.",
    caseStudies: [
      {
        client: "Saporo",
        sector: "Cybersecurity",
        title: "Cybersecurity outbound with strong reply and meeting-interest rates in a complex category.",
        metrics: ["81% open rate", "54% reply rate", "16% meeting interest"],
        logo: LOGOS.saporo.src,
        href: "/en/casestudy/cybersecurity-4500-companies",
      },
      {
        client: "Monizze",
        sector: "HR / Finance",
        title: "Large account universe translated into qualified meetings across HR, finance and leadership buyers.",
        metrics: ["120 qualified meetings", "7,000 decision-makers"],
        logo: LOGOS.monizze.src,
        href: "/en/casestudy/monizze-120-appointments",
      },
      {
        client: "IDDI",
        sector: "Biotech / Pharma",
        title: "Lead-generation work for a technical B2B service with specialist buyer audiences.",
        metrics: ["52.7% open rate", "12.9% reply rate", "First meetings in 3 weeks"],
        logo: LOGOS.iddi.src,
        href: "/en/casestudy/iddi-lead-generation-biotech-pharma",
      },
    ],
    testimonialsTitle: "Client signal",
    testimonials: [
      {
        quote: "devlo helped us structure campaigns, reach hundreds of prospects and generate qualified sales meetings.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing at CareerLunch",
        note: "Translated from French testimonial",
      },
      {
        quote: "The process from lead generation to campaign structure and booked meetings was professional and efficient.",
        author: "Olivier Eyries",
        role: "CEO",
        company: "Saporo",
        photo: "/images/Olivier-Eyries.webp",
        photoAlt: "Olivier Eyries, CEO of Saporo",
        note: "Translated from French testimonial",
      },
    ],
    riskTitle: "What we filter out",
    riskIntro: "UK paid budget is burned quickly when the landing page promises too much or the targeting is too wide.",
    riskRows: [
      ["Broad wording", "Lead generation, appointment setting and outsourced SDR intent should not be mixed blindly."],
      ["Low-value deals", "Small deals rarely justify a careful multichannel setup in a competitive market."],
      ["Message mismatch", "If the ad promises UK B2B prospecting, the page must explain the UK acquisition problem directly."],
    ],
    deliverablesTitle: "What you receive",
    deliverables: ["UK ICP and TAM readout", "Buying-signal shortlist", "Proof-led messaging angles", "Go/no-go view for the first paid-search and outbound batch"],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Why is this page separate from your general consultation page?",
        answer: "High-intent UK clicks need a page focused on acquisition, account selection and proof-led outbound, not a generic intro.",
      },
      {
        question: "Can devlo run UK outbound remotely?",
        answer: "Yes, when the ICP, buyer roles, message and proof are clear. The campaign stays tight enough to measure quality early.",
      },
      {
        question: "What happens if search volume is low?",
        answer: "We keep the campaign restrictive, review search-term quality and broaden only when the added traffic has commercial intent.",
      },
    ],
    relatedLinks: [
      { label: "Outbound services", href: "/en/services/outbound-multichannel" },
      { label: "Case studies", href: "/en/case-studies" },
    ],
  },
  {
    key: "france-fr",
    pageId: "paid-market:france-fr",
    locale: "fr",
    path: "/lp/prospection-commerciale-france",
    reviewer: "Charles",
    reviewStatus: "needs-review",
    market: "France",
    marketLabel: "France",
    title: "Prospection B2B France et international : rendez-vous qualifiés | devlo",
    description:
      "Prospection commerciale B2B pour générer des rendez-vous qualifiés en France, en Europe ou sur vos marchés prioritaires grâce au TAM, aux signaux d'achat et à la preuve.",
    eyebrow: "Acquisition B2B — France et international",
    h1: "Générez plus de rendez-vous B2B qualifiés en France et à l'étranger",
    intro:
      "devlo aide les équipes B2B à identifier les bons comptes, à prioriser les entreprises qui montrent des signaux d'achat et à ouvrir des conversations avec une raison business crédible.",
    badges: ["TAM exploitable", "Signaux d'achat", "Rendez-vous qualifiés"],
    primaryCta: "Obtenir un diagnostic d'acquisition",
    formTitle: "Recevez une analyse concrète de votre acquisition B2B",
    formIntro:
      "Décrivez votre offre, vos décideurs cibles et votre situation commerciale. Nous identifions les segments à prioriser, les signaux d'achat à surveiller et les preuves à utiliser dans la première approche.",
    postForm: "Nous revenons avec les segments à prioriser, les signaux utiles et les risques à corriger avant lancement.",
    logosTitle: "Ces entreprises nous font confiance",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Méthode avant exécution",
    proofRows: [
      ["TAM exploitable", "Nous transformons votre marché cible en liste de comptes priorisables, avec secteurs, tailles, zones et exclusions claires."],
      ["Signaux d'achat", "Nous cherchons les changements qui rendent une approche pertinente maintenant : croissance, recrutement, nouvelle direction, outil remplacé, pression métier."],
      ["Approche prouvée", "Chaque message relie le signal à une hypothèse business et à une preuve concrète : résultat client, cas comparable ou angle sectoriel."],
    ],
    fitTitle: "Industries et offres où la méthode devlo s'applique",
    fitIntro: "Nous intervenons lorsque la croissance ne dépend pas d'un simple formulaire entrant, mais d'une sélection rigoureuse des comptes, des décideurs et du bon moment de contact.",
    fitItems: ["SaaS et logiciels B2B", "Cybersécurité et services IT", "Industrie et services techniques", "Conseil, formation et services professionnels"],
    methodTitle: "La méthode devlo",
    methodIntro:
      "Nous ne partons pas d'un volume de leads à contacter. Nous construisons d'abord le TAM, nous identifions les décideurs, puis nous sélectionnons les comptes où le signal rend l'approche défendable.",
    methodSteps: [
      {
        title: "Cartographier le TAM et exclure le hors-cible",
        body: "Nous identifions les entreprises qui correspondent réellement à votre offre, en France, en Europe ou sur les zones prioritaires définies ensemble.",
        artifact: "Livrable : une base de comptes cibles structurée avec segments, zones, exclusions et règles de qualification.",
      },
      {
        title: "Prioriser les comptes sur signaux d'achat actifs",
        body: "Nous sélectionnons les entreprises à contacter en premier grâce aux signaux d'achat : croissance, recrutement, changement d'outil, nouvelle direction, pression réglementaire ou besoin métier visible.",
        artifact: "Livrable : une matrice de priorité qui explique pourquoi tel compte mérite d'être approché maintenant.",
      },
      {
        title: "Prospecter avec raison business et preuve",
        body: "Nous transformons le signal en angle de contact court, spécifique et défendable, puis nous l'exécutons par email, LinkedIn et téléphone selon le plan validé.",
        artifact: "Livrable : des conversations contextualisées avec les bons décideurs, pas une séquence générique envoyée à froid.",
      },
    ],
    caseStudiesTitle: "Résultats clients",
    caseStudiesIntro: "Quelques campagnes où la sélection des comptes, le timing et la preuve ont compté davantage que le volume brut.",
    caseStudies: [
      {
        client: "APIDAE",
        sector: "Biodiversité / Non-profit",
        title: "Externalisation de l'acquisition client avec des rendez-vous qualifiés auprès d'entreprises comme UEFA, TAG Heuer et Rothschild.",
        metrics: ["70 rendez-vous qualifiés", "40% de réponses", "13% d'intérêt"],
        logo: LOGOS.apidae.src,
        href: "/resultats/biodiversite-70-rendez-vous",
      },
      {
        client: "Cegos",
        sector: "Formation / L&D",
        title: "Prospection auprès de responsables Learning & Development avec un angle précis et mesurable.",
        metrics: ["73% d'ouverture", "45% de réponse", "14 rendez-vous qualifiés"],
        logo: LOGOS.cegos.src,
        href: "/resultats/formation-14-rendez-vous",
      },
      {
        client: "Saporo",
        sector: "Cybersécurité",
        title: "Prospection dans un secteur complexe où la preuve et la pédagogie comptent plus que le volume.",
        metrics: ["81% d'ouverture", "54% de réponse", "16% d'intérêt rendez-vous"],
        logo: LOGOS.saporo.src,
        href: "/resultats/cybersecurite-4500-entreprises",
      },
    ],
    testimonialsTitle: "Ce que les clients reconnaissent",
    testimonials: [
      {
        quote: "devlo nous a aidés à mettre en place des campagnes de vente hyper-personnalisées et à obtenir des rendez-vous commerciaux qualifiés.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing chez CareerLunch",
      },
      {
        quote: "Le processus, de la génération de prospects à l'obtention de rendez-vous, a été professionnel, agréable et efficace.",
        author: "Olivier Eyries",
        role: "CEO",
        company: "Saporo",
        photo: "/images/Olivier-Eyries.webp",
        photoAlt: "Olivier Eyries, CEO de Saporo",
      },
    ],
    riskTitle: "Ce que nous filtrons avant d'augmenter le volume",
    riskIntro: "Une campagne performante ne commence pas par plus d'envois. Elle commence par moins de comptes hors ICP, moins de signaux faibles et moins de décideurs mal ciblés.",
    riskRows: [
      ["Comptes hors ICP", "Nous écartons les entreprises qui ressemblent à votre marché mais n'ont pas le bon cas d'usage, la bonne taille ou le bon contexte d'achat."],
      ["Timing faible", "Nous évitons d'approcher un compte simplement parce qu'il existe dans une base. Il faut un signal ou une hypothèse commerciale défendable."],
      ["Message sans preuve", "Un message sans résultat, cas client ou preuve sectorielle ressemble à toutes les autres agences de prospection."],
    ],
    deliverablesTitle: "Ce que vous recevez",
    deliverables: [
      "Stratégie : portail de pilotage, ICP, zones prioritaires et exclusions",
      "Données : liste TAM structurée, comptes cibles et décideurs à contacter",
      "Priorisation : matrice de signaux d'achat et premier batch à approcher",
      "Exécution : angles de messages, email, LinkedIn et téléphone selon le plan validé",
      "Pilotage : gestion des réponses, qualification, reporting hebdomadaire et recommandations de scaling",
    ],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Est-ce limité au marché français ?",
        answer:
          "Non. Cette page répond à une recherche France, mais la méthode s'applique aussi à d'autres zones : Europe, DACH, Benelux, Royaume-Uni ou marchés export prioritaires.",
      },
      {
        question: "Que testez-vous avant d'augmenter le volume ?",
        answer: "Nous testons le segment, les décideurs, les signaux d'achat et l'angle de preuve. Si un de ces éléments est faible, augmenter le volume ne fera qu'augmenter le bruit.",
      },
      {
        question: "Que reçoit votre équipe commerciale chaque semaine ?",
        answer: "Des comptes priorisés, des décideurs identifiés, des messages contextualisés, des réponses qualifiées et une lecture claire des segments à renforcer ou à arrêter.",
      },
    ],
    relatedLinks: [
      { label: "Études de cas", href: "/etudes-de-cas" },
      { label: "Services outbound", href: "/services/outbound-multicanal" },
    ],
  },
  {
    key: "switzerland-de",
    pageId: "paid-market:switzerland-de",
    locale: "de",
    path: "/de/lp/leadgenerierung-schweiz",
    reviewer: "Janis",
    reviewStatus: "needs-review",
    market: "Deutschschweiz",
    marketLabel: "Deutschschweiz",
    title: "Leadgenerierung Schweiz | devlo",
    description:
      "B2B-Leadgenerierung in der Deutschschweiz: Zielmarkt kartieren, Kaufsignale priorisieren und qualifizierte Termine mit Wertnachweis gewinnen.",
    eyebrow: "B2B-Leadgenerierung in der Deutschschweiz",
    h1: "Mehr qualifizierte B2B-Gespräche in der Deutschschweiz",
    intro:
      "devlo hilft B2B-Teams, ihren adressierbaren Markt sauber zu kartieren, Accounts nach Kaufsignalen zu priorisieren und Gespräche mit konkretem Wertnachweis zu eröffnen.",
    badges: ["Adressierbarer Markt", "Kaufsignale", "Qualifizierte Termine"],
    primaryCta: "Akquise-Plan anfordern",
    formTitle: "Einschätzung zu Ihrer B2B-Akquise anfordern",
    formIntro:
      "Teilen Sie Angebot, Zielkunden und aktuelle Vertriebssituation. Wir prüfen Segment, Kaufsignale und Wertnachweis-Ansatz für die erste Kampagnengruppe.",
    postForm: "Wir melden uns mit einer kurzen Einschätzung und den nächsten sinnvollen Schritten.",
    logosTitle: "Ausgewählte B2B-Nachweise aus bestehenden Kampagnen",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Warum diese Seite anders sein muss",
    proofRows: [
      ["B2B-Akquise", "Viele Schweizer Käufer wollen ihre bestehende Kundengewinnung strukturierter und messbarer verbessern."],
      ["Lokale Präzision", "Die Deutschschweiz braucht saubere Segmentierung, natürliche Sprache und klare Qualifikationskriterien."],
      ["Nachweis vor Volumen", "Die Kampagne muss zeigen, warum ein Account jetzt angesprochen wird und welche Relevanz devlo belegen kann."],
    ],
    fitTitle: "Wann es passt",
    fitIntro: "Die Methode passt, wenn Ihr Angebot erklärungsbedürftig ist und klare Entscheiderrollen in identifizierbaren B2B-Accounts existieren.",
    fitItems: ["B2B-SaaS und Software", "Cybersecurity und IT-Services", "Industrie und technische Services", "Beratung, Training und Professional Services"],
    methodTitle: "Die devlo-Methode",
    methodIntro:
      "Wir starten nicht mit einer grossen Leadliste. Wir strukturieren zuerst den Markt, priorisieren Timing-Signale und bauen dann eine begründete Ansprache.",
    methodSteps: [
      {
        title: "Adressierbaren Markt kartieren",
        body: "Wir strukturieren Unternehmen, Regionen, Segmente und Entscheiderrollen, die realistisch zu Ihrem Angebot passen.",
        artifact: "Ergebnis: ein priorisierbares Account-Universum statt einer rohen Kontaktliste.",
      },
      {
        title: "Kaufsignale priorisieren",
        body: "Wir gewichten Accounts nach konkreten Signalen wie Wachstum, Führungswechsel, Tool-Wechsel, Personalaufbau oder regulatorischem Druck.",
        artifact: "Ergebnis: die erste Auswahl von Accounts, bei denen ein Gespräch plausibler ist.",
      },
      {
        title: "Mit Wertnachweis ansprechen",
        body: "Die Ansprache verbindet Signal, Business-Hypothese und relevanten Nachweis, bevor E-Mail, LinkedIn oder Telefon eingesetzt werden.",
        artifact: "Ergebnis: Gespräche mit Kontext statt generischer Kaltakquise.",
      },
    ],
    caseStudiesTitle: "Ausgewählte Nachweise",
    caseStudiesIntro: "Die Seite zeigt wenige relevante Belege, damit Vertrauen entsteht, ohne die Verkaufsunterlagen zu kopieren.",
    caseStudies: [
      {
        client: "Abacus",
        sector: "Immobilien / Software",
        title: "Telefonakquise und Leadgenerierung für qualifizierte Gespräche mit Immobilienagenturen in der Romandie.",
        metrics: ["+30 interessierte Interessenten"],
        logo: LOGOS.abacus.src,
        href: "/de/fallstudien/immobilien-30-interessenten",
      },
      {
        client: "HIAG",
        sector: "Gewerbeimmobilien",
        title: "Qualifizierte Mieterchancen für ein Gewerbeimmobilienprojekt in Winterthur.",
        metrics: ["87% Öffnungsrate", "73% Antwortquote", "11 qualifizierte Opportunities"],
        logo: LOGOS.hiag.src,
        href: "/de/fallstudien/gewerbeimmobilien-11-interessenten",
      },
      {
        client: "Saporo",
        sector: "Cybersecurity",
        title: "B2B-Outbound in einer komplexen Kategorie mit starkem Antwort- und Interessenssignal.",
        metrics: ["81% Öffnungsrate", "54% Antwortquote", "16% Termininteresse"],
        logo: LOGOS.saporo.src,
        href: "/de/fallstudien/cybersicherheit-4500-unternehmen",
      },
    ],
    testimonialsTitle: "Kundenstimmen",
    testimonials: [
      {
        quote: "devlo hat uns geholfen, hyperpersonalisierte Vertriebskampagnen aufzubauen und qualifizierte Verkaufstermine zu erhalten.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing bei CareerLunch",
        note: "Aus dem Französischen übertragen",
      },
      {
        quote: "Wir schätzten die Sorgfalt, klare Kommunikation und das Engagement von devlo.",
        author: "Xavier Leuthold",
        role: "Founder",
        company: "Many Ways SA",
        photo: "/images/Xavier_Leuthold_Many_Ways.webp",
        photoAlt: "Xavier Leuthold, Founder bei Many Ways SA",
        note: "Aus dem Französischen übertragen",
      },
    ],
    riskTitle: "Was wir vermeiden",
    riskIntro: "Diese Risiken müssen vor einer Kampagne in der Deutschschweiz geklärt werden.",
    riskRows: [
      ["Deutschland-Ton", "Deutschland-Copy wirkt in der Schweiz oft zu hart oder zu generisch."],
      ["Zu breite Zielgruppe", "Ein Schweizer Markt ohne Segment, Entscheiderrolle und Qualifikationsregel bleibt zu unscharf."],
      ["Unbelegte Claims", "Referenzen müssen relevant bleiben und dürfen keine lokale Wirkung vortäuschen."],
    ],
    deliverablesTitle: "Was Sie erhalten",
    deliverables: ["Karte des priorisierten Zielmarkts", "Kaufsignale für die erste Auswahl", "Messaging-Hypothesen mit Wertnachweis", "Empfehlung für Suchanzeigen und Direktansprache"],
    faqTitle: "Fragen",
    faqs: [
      {
        question: "Ist das relevant, wenn wir bereits in der Schweiz verkaufen?",
        answer:
          "Ja. Die Seite richtet sich an Teams, die ihre B2B-Kundengewinnung in der Schweiz strukturierter verbessern wollen.",
      },
      {
        question: "Schreibt devlo auf Schweizerdeutsch?",
        answer: "Schriftliche B2B-Kampagnen laufen in natürlichem Schweizer Hochdeutsch, nicht in Mundart. Die finale Fassung wird vor bezahltem Traffic nativ geprüft.",
      },
      {
        question: "Wann sollte die Kampagne pausiert bleiben?",
        answer: "Wenn ICP, Wertnachweis oder Entscheiderdaten noch unklar sind, sollte zuerst die Grundlage verbessert werden.",
      },
    ],
    relatedLinks: [
      { label: "Fallstudien", href: "/de/fallstudien" },
      { label: "Beratung", href: "/de/beratung" },
    ],
  },
  {
    key: "germany-de",
    pageId: "paid-market:germany-de",
    locale: "de",
    path: "/de/lp/b2b-leadgenerierung-deutschland",
    reviewer: "Janis",
    reviewStatus: "needs-review",
    market: "Deutschland",
    marketLabel: "Deutschland",
    title: "B2B-Leadgenerierung Deutschland | devlo",
    description:
      "B2B-Leadgenerierung in Deutschland: Zielaccounts kartieren, Kaufsignale priorisieren und qualifizierte Termine mit Wertnachweis gewinnen.",
    eyebrow: "B2B-Leadgenerierung in Deutschland",
    h1: "Mehr qualifizierte B2B-Gespräche in Deutschland gewinnen",
    intro:
      "devlo hilft B2B-Teams, den deutschen Zielmarkt in klare Account-Segmente zu übersetzen, Kaufsignale zu priorisieren und Entscheider mit belegbarer Relevanz anzusprechen.",
    badges: ["Account-Mapping", "Kaufsignale", "Wertnachweis"],
    primaryCta: "Akquise-Plan prüfen",
    formTitle: "Einschätzung für Deutschland anfordern",
    formIntro:
      "Teilen Sie Zielkunden, Angebot und Vertriebssituation. Wir prüfen, welche Account-Gruppe, welche Signale und welcher Wertnachweis für den Start sinnvoll sind.",
    postForm: "Wir melden uns mit einer Empfehlung für die erste realistische Kampagnengruppe.",
    logosTitle: "Ausgewählte Nachweise aus B2B-Outbound-Kampagnen",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Warum Deutschland präzise bearbeitet werden muss",
    proofRows: [
      ["Großer Markt", "Deutschland ist groß genug, um Budget zu verlieren, wenn Segment, Region und Entscheiderrolle nicht getrennt werden."],
      ["B2B-Logik", "Die Seite muss erklären, wie Kundengewinnung über Accounts, Timing-Signale und Nachweise verbessert wird."],
      ["Relevanz", "Entscheider reagieren eher, wenn Signal, Problem und Nachweis sauber zusammenpassen."],
    ],
    fitTitle: "Gute Passung",
    fitIntro: "Deutschland passt, wenn der Zielmarkt groß genug ist und die Entscheiderrolle klar identifiziert werden kann.",
    fitItems: ["B2B-SaaS", "Cybersecurity und IT", "Industrie und technische Lösungen", "Beratung und Professional Services"],
    methodTitle: "Die devlo-Methode",
    methodIntro:
      "Wir behandeln Deutschland nicht als ein Volumenproblem. Wir kartieren das Potenzial, priorisieren Timing-Signale und bauen dann die Ansprache mit Nachweis.",
    methodSteps: [
      {
        title: "Adressierbaren Markt kartieren",
        body: "Wir strukturieren passende Unternehmen, Regionen, Branchen und Entscheiderrollen, bevor Kontakte selektiert werden.",
        artifact: "Ergebnis: eine priorisierte Account-Karte statt einer allgemeinen Deutschland-Liste.",
      },
      {
        title: "Kaufsignale priorisieren",
        body: "Wir bewerten Accounts nach Signalen wie Wachstum, Führungswechsel, neuen Projekten, Tool-Wechseln oder Budgetdruck.",
        artifact: "Ergebnis: eine erste Welle mit besserem Timing und klarer Begründung.",
      },
      {
        title: "Mit Wertnachweis ansprechen",
        body: "Die Sequenz verbindet das beobachtete Signal mit einer konkreten Hypothese und einem passenden Referenznachweis.",
        artifact: "Ergebnis: qualifizierte Gespräche statt generischer Reichweite.",
      },
    ],
    caseStudiesTitle: "Ausgewählte Referenzen",
    caseStudiesIntro: "Für Deutschland zeigen wir DACH-relevante und komplexe B2B-Kampagnen, ohne lokale Wirkung zu übertreiben.",
    caseStudies: [
      {
        client: "CareerLunch",
        sector: "HR-tech",
        title: "54 qualifizierte Termine in der DACH-Region, obwohl viele Zielunternehmen bereits kontaktiert worden waren.",
        metrics: ["54 Termine", "71% Öffnungsrate", "19% Antwortquote"],
        logo: LOGOS.careerlunch.src,
        href: "/de/fallstudien/hr-54-termine-dach",
      },
      {
        client: "Saporo",
        sector: "Cybersecurity",
        title: "Cybersecurity-Outbound mit starkem Antwort- und Interessenssignal in einer erklärungsbedürftigen Kategorie.",
        metrics: ["81% Öffnungsrate", "54% Antwortquote", "16% Termininteresse"],
        logo: LOGOS.saporo.src,
        href: "/de/fallstudien/cybersicherheit-4500-unternehmen",
      },
      {
        client: "IDDI",
        sector: "Biotech / Pharma",
        title: "Leadgenerierung für einen technischen B2B-Service mit spezialisierten Entscheidergremien.",
        metrics: ["52,7% Öffnungsrate", "12,9% Antwortquote", "Erste Termine nach 3 Wochen"],
        logo: LOGOS.iddi.src,
        href: "/de/fallstudien/iddi-leadgenerierung-biotech-pharma",
      },
    ],
    testimonialsTitle: "Kundenstimmen",
    testimonials: [
      {
        quote: "devlo hat uns geholfen, hyperpersonalisierte Vertriebskampagnen aufzubauen und qualifizierte Verkaufstermine zu erhalten.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing bei CareerLunch",
        note: "Aus dem Französischen übertragen",
      },
      {
        quote: "Der Prozess von Leadgenerierung über Kampagnenstruktur bis zu Terminen war professionell und effizient.",
        author: "Olivier Eyries",
        role: "CEO",
        company: "Saporo",
        photo: "/images/Olivier-Eyries.webp",
        photoAlt: "Olivier Eyries, CEO von Saporo",
        note: "Aus dem Französischen übertragen",
      },
    ],
    riskTitle: "Was wir vermeiden",
    riskIntro: "Deutschland lohnt sich nur, wenn Zielgruppe, Begründung und Wertnachweis sauber eingegrenzt sind.",
    riskRows: [
      ["DACH-Vermischung", "Eine einzige Botschaft für Deutschland, Schweiz und Österreich ist meist zu ungenau."],
      ["Zu viel Volumen", "Mehr Reichweite hilft nicht, wenn Buyer-Rolle und Nutzenversprechen unklar sind."],
      ["Unbelegte Claims", "Ergebnisse und Referenzen dürfen nur genutzt werden, wenn sie belegbar und passend sind."],
    ],
    deliverablesTitle: "Was Sie erhalten",
    deliverables: ["Priorisierte Account-Karte", "Kaufsignal-Shortlist", "Messaging mit Wertnachweis für die erste Welle", "Go/no-go für Paid Search und Outbound"],
    faqTitle: "Fragen",
    faqs: [
      {
        question: "Ist das relevant, wenn wir bereits in Deutschland aktiv sind?",
        answer: "Ja. Die Seite richtet sich an Teams, die ihre B2B-Kundengewinnung in Deutschland verbessern wollen.",
      },
      {
        question: "Sollten Deutschland und Schweiz gemeinsam gestartet werden?",
        answer: "Nein, nicht im ersten Kampagnenlauf. Die Märkte sollten getrennt bleiben, damit Ergebnisse und Einwände interpretierbar sind.",
      },
      {
        question: "Wann ist Deutschland kein guter Start?",
        answer: "Wenn das Angebot noch nicht klar positioniert ist oder die Zielgruppe zu breit definiert ist.",
      },
    ],
    relatedLinks: [
      { label: "Fallstudien", href: "/de/fallstudien" },
      { label: "Beratung", href: "/de/beratung" },
    ],
  },
  {
    key: "netherlands-nl",
    pageId: "paid-market:netherlands-nl",
    locale: "nl",
    path: "/nl/lp/b2b-prospectie-nederland",
    reviewer: "Viktor",
    reviewStatus: "needs-review",
    market: "Nederland",
    marketLabel: "Nederland",
    title: "B2B-leadgeneratie in Nederland | devlo",
    description:
      "B2B-leadgeneratie in Nederland: je doelgroep aanscherpen, koopsignalen prioriteren en gekwalificeerde afspraken plannen.",
    eyebrow: "B2B-leadgeneratie in Nederland",
    h1: "Meer gekwalificeerde B2B-afspraken in Nederland",
    intro:
      "We helpen je B2B-team de doelgroep terug te brengen tot de juiste accounts, koopsignalen te herkennen en gesprekken te openen met een concrete businesscase.",
    badges: ["Accountselectie", "Koopsignalen", "Gekwalificeerde afspraken"],
    primaryCta: "Laat mijn acquisitieplan beoordelen",
    formTitle: "Ontvang een concrete inschatting van je B2B-acquisitiepotentieel",
    formIntro:
      "Vertel ons over je aanbod, doelgroep en huidige salesaanpak. Wij bekijken welk marktsegment, welke koopsignalen en welk type bewijs het meest kansrijk zijn voor je eerste campagne.",
    postForm: "We komen terug met een korte beoordeling en de meest logische volgende stap.",
    logosTitle: "Afspraken geboekt bij onder andere:",
    logos: ALL_CLIENT_LOGOS,
    proofTitle: "Voor wie dit werkt",
    proofRows: [
      ["Acquisitie met concrete afspraken", "Concrete afspraken in je agenda, niet alleen funnels of brand awareness."],
      ["Directe relevantie", "Maak meteen duidelijk waarom je deze prospect nú benadert."],
      ["Kwaliteit, geen massa", "Nederlandse B2B-kopers prikken snel door algemene claims heen; bewijs en timing moeten kloppen."],
    ],
    fitTitle: "Past dit bij jou?",
    fitIntro:
      "Deze aanpak werkt het best als je B2B-aanbod een duidelijke doelgroep heeft, je weet wie de beslissers zijn en je dealwaarde groot genoeg is om gerichte outreach te rechtvaardigen.",
    fitItems: ["B2B SaaS en software", "IT- en cybersecuritydiensten", "Professionele diensten", "E-commerce, fintech en zakelijke services"],
    methodTitle: "De devlo-methode",
    methodIntro:
      "We beginnen niet bij volume. Eerst scherpen we doelgroep en accountcriteria aan, dan prioriteren we accounts op koopsignalen, en pas daarna openen we het gesprek, onderbouwd en relevant.",
    methodSteps: [
      {
        title: "Scherp je accountselectie aan",
        body: "We segmenteren bedrijven, sectoren, regio's en beslissers die echt bij je aanbod en salescapaciteit passen.",
        artifact: "Resultaat: een lijst met prioriteitsaccounts in plaats van een generieke leadlijst.",
      },
      {
        title: "Prioriteer op koopsignalen",
        body: "We rangschikken accounts op koopsignalen: groei, management changes, openstaande vacatures, nieuwe software of zichtbare groeipijn.",
        artifact: "Resultaat: de accounts waar je nú het meeste kans maakt.",
      },
      {
        title: "Benader met bewijs",
        body: "Elke outreach koppelt het koopsignaal aan een concreet idee over hun situatie, met bewijs uit vergelijkbare klantcases.",
        artifact: "Resultaat: gesprekken met context, geen algemene pitch.",
      },
    ],
    caseStudiesTitle: "Voorbeelden uit de praktijk",
    caseStudiesIntro: "Selectie van B2B-campagnes waar accountkeuze, timing en proof belangrijker waren dan massale outreach.",
    caseStudies: [
      {
        client: "Monizze",
        sector: "HR / Finance",
        title: "120 gekwalificeerde afspraken door 7.000 HR-, finance- en directiebeslissers gericht te benaderen.",
        metrics: ["120 gekwalificeerde afspraken", "7.000 beslissers"],
        logo: LOGOS.monizze.src,
        href: "/nl/casestudy/monizze-120-afspraken",
      },
      {
        client: "Horus",
        sector: "Boekhoudsoftware",
        title: "Een multichannel-acquisitieaanpak die commerciële pipeline creëerde in België.",
        metrics: ["€200k aan getekende contracten"],
        logo: LOGOS.horus.src,
        href: "/nl/casestudy/boekhouding-200k-omzet",
      },
      {
        client: "CareerLunch",
        sector: "HR-tech",
        title: "54 afspraken in DACH met sterk gepersonaliseerde campagnes voor een complexe doelgroep.",
        metrics: ["54 afspraken", "71% openratio", "19% antwoordratio"],
        logo: LOGOS.careerlunch.src,
        href: "/nl/casestudy/hr-54-afspraken-dach",
      },
    ],
    testimonialsTitle: "Wat klanten benoemen",
    testimonials: [
      {
        quote: "devlo hielp ons sterk gepersonaliseerde salescampagnes op te zetten en gekwalificeerde afspraken te genereren.",
        author: "Raphael",
        role: "Head of Business Development & Marketing",
        company: "CareerLunch",
        photo: "/images/Raphael-haut.webp",
        photoAlt: "Raphael Haut, Head of Business Development and Marketing bij CareerLunch",
      },
      {
        quote: "We waardeerden de zorgvuldigheid, heldere communicatie en toewijding van devlo.",
        author: "Xavier Leuthold",
        role: "Founder",
        company: "Many Ways SA",
        photo: "/images/Xavier_Leuthold_Many_Ways.webp",
        photoAlt: "Xavier Leuthold, Founder bij Many Ways SA",
      },
    ],
    riskTitle: "Wat we vermijden",
    riskIntro: "Nederlandse kopers reageren terughoudend op algemene of overdreven boodschappen.",
    riskRows: [
      ["Te Amerikaanse toon", "Superlatieven en loze beloftes wekken in Nederland geen vertrouwen."],
      ["Vage doelgroep", "Een campagne zonder duidelijke ICP, beslissers en kwalificatiecriteria levert weinig bruikbare signalen op."],
      ["Te vroeg opschalen", "We testen eerst segment, signaal en boodschap voordat er budget naar volume gaat."],
    ],
    deliverablesTitle: "Wat je krijgt",
    deliverables: ["Lijst met prioriteitsaccounts", "Koopsignalen per account", "Pitch met bewijs per account", "Go/no-go op uitgaande acquisitie per segment"],
    faqTitle: "Vragen",
    faqs: [
      {
        question: "Voor welke Nederlandse B2B-teams is dit relevant?",
        answer: "Voor teams met een duidelijke doelgroep, voldoende dealwaarde en behoefte aan betere accountselectie voordat sales tijd investeert.",
      },
      {
        question: "Hoe bepalen jullie welke accounts prioriteit krijgen?",
        answer: "We combineren ICP, beslisserrollen, koopsignalen en bewijs uit vergelijkbare cases. Zo krijgt sales eerst de accounts met de beste timing en relevantie.",
      },
      {
        question: "Wat maakt dit anders dan een generieke leadlijst?",
        answer: "De selectie begint bij accounts, koopsignalen en bewijs. Daardoor krijgt sales minder ruis en betere redenen om contact op te nemen.",
      },
    ],
    relatedLinks: [
      { label: "Praktijkcases", href: "/nl/case-studies" },
      { label: "Adviesgesprek", href: "/nl/adviesgesprek" },
    ],
  },
];

export const PAID_MARKET_PAGES = pages;

export const PAID_MARKET_ROUTE_ENTRIES: PaidMarketRouteEntry[] = pages.map((page) => ({
  pageId: page.pageId,
  entry: {
    fr: page.locale === "fr" ? page.path : null,
    en: page.locale === "en" ? page.path : null,
    de: page.locale === "de" ? page.path : null,
    nl: page.locale === "nl" ? page.path : null,
  },
}));

function normalizePaidPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export function getPaidMarketPageByLocalePath(locale: SupportedLocale, path: string): PaidMarketPage | null {
  const normalized = normalizePaidPath(path);
  return pages.find((page) => page.locale === locale && normalizePaidPath(page.path) === normalized) ?? null;
}

export function findPaidMarketRouteByLocalePath(locale: SupportedLocale, path: string): PaidMarketRouteEntry | null {
  const normalized = normalizePaidPath(path);
  return PAID_MARKET_ROUTE_ENTRIES.find((route) => {
    const routePath = route.entry[locale];
    return routePath ? normalizePaidPath(routePath) === normalized : false;
  }) ?? null;
}

export function buildPaidMarketAlternates(page: PaidMarketPage): Record<string, string> {
  return {
    [page.locale]: page.path,
    "x-default": page.path,
  };
}
