import type { SlugMapEntry, SupportedLocale } from "@/lib/i18n/slug-map";
import { homeContent } from "@/content/masterfile.fr";

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
  appointmentLogosTitle?: string;
  appointmentLogos?: LogoProof[];
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

function logoFromFileName(fileName: string): LogoProof {
  const label = fileName
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[_-]logo$/i, "")
    .replace(/[_-]/g, " ")
    .trim();

  return {
    src: `/images/${fileName}`,
    alt: `${label} logo`,
  };
}

const CLIENT_LOGOS: LogoProof[] = homeContent.clientsLogos.map(logoFromFileName);

const APPOINTMENT_LOGOS: LogoProof[] = homeContent.rendezVousLogos.map(({ src, alt }) => ({
  src,
  alt,
}));

const SHARED_CASE_STUDIES: Record<SupportedLocale, CaseStudyProof[]> = {
  fr: [
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
  en: [
    {
      client: "APIDAE",
      sector: "Biodiversity / Non-profit",
      title: "Outsourced customer acquisition with qualified meetings at companies such as UEFA, TAG Heuer and Rothschild.",
      metrics: ["70 qualified meetings", "40% reply rate", "13% interest"],
      logo: LOGOS.apidae.src,
      href: "/en/casestudy/biodiversity-70-meetings",
    },
    {
      client: "Cegos",
      sector: "Training / L&D",
      title: "Prospecting to Learning & Development leaders with a precise, measurable angle.",
      metrics: ["73% open rate", "45% reply rate", "14 qualified meetings"],
      logo: LOGOS.cegos.src,
      href: "/en/casestudy/training-14-meetings",
    },
    {
      client: "Saporo",
      sector: "Cybersecurity",
      title: "Prospecting in a complex category where proof and education matter more than volume.",
      metrics: ["81% open rate", "54% reply rate", "16% meeting interest"],
      logo: LOGOS.saporo.src,
      href: "/en/casestudy/cybersecurity-4500-companies",
    },
  ],
  de: [
    {
      client: "APIDAE",
      sector: "Biodiversität / Non-profit",
      title: "Ausgelagerte Kundengewinnung mit qualifizierten Terminen bei Unternehmen wie UEFA, TAG Heuer und Rothschild.",
      metrics: ["70 qualifizierte Termine", "40% Antwortquote", "13% Interesse"],
      logo: LOGOS.apidae.src,
      href: "/de/fallstudien/biodiversitaet-70-termine",
    },
    {
      client: "Cegos",
      sector: "Training / L&D",
      title: "Prospecting bei Learning-&-Development-Verantwortlichen mit einem präzisen, messbaren Ansatz.",
      metrics: ["73% Öffnungsrate", "45% Antwortquote", "14 qualifizierte Termine"],
      logo: LOGOS.cegos.src,
      href: "/de/fallstudien/training-14-termine",
    },
    {
      client: "Saporo",
      sector: "Cybersecurity",
      title: "Prospecting in einer komplexen Kategorie, in der Nachweis und Erklärung wichtiger sind als Volumen.",
      metrics: ["81% Öffnungsrate", "54% Antwortquote", "16% Termininteresse"],
      logo: LOGOS.saporo.src,
      href: "/de/fallstudien/cybersicherheit-4500-unternehmen",
    },
  ],
  nl: [
    {
      client: "APIDAE",
      sector: "Biodiversiteit / Non-profit",
      title: "Uitbestede klantenwerving met gekwalificeerde afspraken bij bedrijven zoals UEFA, TAG Heuer en Rothschild.",
      metrics: ["70 gekwalificeerde afspraken", "40% antwoordratio", "13% interesse"],
      logo: LOGOS.apidae.src,
      href: "/nl/casestudy/biodiversiteit-70-afspraken",
    },
    {
      client: "Cegos",
      sector: "Training / L&D",
      title: "Prospecting richting Learning & Development-verantwoordelijken met een precieze, meetbare invalshoek.",
      metrics: ["73% openratio", "45% antwoordratio", "14 gekwalificeerde afspraken"],
      logo: LOGOS.cegos.src,
      href: "/nl/casestudy/training-14-afspraken",
    },
    {
      client: "Saporo",
      sector: "Cybersecurity",
      title: "Prospecting in een complexe categorie waar bewijs en uitleg belangrijker zijn dan volume.",
      metrics: ["81% openratio", "54% antwoordratio", "16% afspraakinteresse"],
      logo: LOGOS.saporo.src,
      href: "/nl/casestudy/cybersecurity-4500-bedrijven",
    },
  ],
};

const SHARED_TESTIMONIALS: Record<SupportedLocale, TestimonialProof[]> = {
  fr: [
    {
      quote: "Les connaissances et l'expérience de devlo en développement des ventes nous ont permis d'avancer rapidement et de rencontrer des prospects qualifiés.",
      author: "Tanguy Coustaline",
      role: "Président",
      company: "APIDAE",
      photo: "/images/Tanguy_Coustaline.webp",
      photoAlt: "Tanguy Coustaline, président d'APIDAE",
    },
    {
      quote: "Nous avons apprécié l'assiduité, la clarté de communication et le dévouement de devlo pour affiner notre ciblage et notre approche.",
      author: "Xavier Leuthold",
      role: "Fondateur",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, fondateur de Many Ways SA",
    },
  ],
  en: [
    {
      quote: "devlo's sales development knowledge and experience helped us move quickly and meet qualified prospects.",
      author: "Tanguy Coustaline",
      role: "President",
      company: "APIDAE",
      photo: "/images/Tanguy_Coustaline.webp",
      photoAlt: "Tanguy Coustaline, President of APIDAE",
      note: "Translated from French testimonial",
    },
    {
      quote: "We appreciated devlo's diligence, clear communication and dedication to refining our targeting and approach.",
      author: "Xavier Leuthold",
      role: "Founder",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Founder of Many Ways SA",
      note: "Translated from French testimonial",
    },
  ],
  de: [
    {
      quote: "devlos Wissen und Erfahrung im Sales Development haben uns geholfen, schnell voranzukommen und qualifizierte Prospects zu treffen.",
      author: "Tanguy Coustaline",
      role: "Präsident",
      company: "APIDAE",
      photo: "/images/Tanguy_Coustaline.webp",
      photoAlt: "Tanguy Coustaline, Präsident von APIDAE",
      note: "Aus dem Französischen übertragen",
    },
    {
      quote: "Wir schätzten devlos Sorgfalt, klare Kommunikation und Engagement bei der Verfeinerung unseres Targetings und unserer Ansprache.",
      author: "Xavier Leuthold",
      role: "Gründer",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Gründer von Many Ways SA",
      note: "Aus dem Französischen übertragen",
    },
  ],
  nl: [
    {
      quote: "devlo's kennis en ervaring in sales development hielpen ons snel vooruit en brachten ons in contact met gekwalificeerde prospects.",
      author: "Tanguy Coustaline",
      role: "Voorzitter",
      company: "APIDAE",
      photo: "/images/Tanguy_Coustaline.webp",
      photoAlt: "Tanguy Coustaline, voorzitter van APIDAE",
      note: "Vertaald uit Franse testimonial",
    },
    {
      quote: "We waardeerden devlo's zorgvuldigheid, heldere communicatie en toewijding om onze targeting en aanpak aan te scherpen.",
      author: "Xavier Leuthold",
      role: "Founder",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Founder van Many Ways SA",
      note: "Vertaald uit Franse testimonial",
    },
  ],
};

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
    appointmentLogosTitle: "Sales meetings booked with",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Our clients",
    logos: CLIENT_LOGOS,
    proofTitle: "Method before execution",
    proofRows: [
      ["Pipeline, not geography", "Most buyers want more qualified opportunities from the accounts that matter, whether the priority is domestic growth or outbound to another B2B market."],
      ["Signal discipline", "Before outreach, we isolate events, roles and account changes that make a conversation more plausible."],
      ["Credible proof", "The outreach angle is built around verifiable value proof, not generic appointment-setting copy."],
    ],
    fitTitle: "Industries and offers where the devlo method applies",
    fitIntro: "We help when growth does not depend on a simple inbound form, but on rigorous selection of accounts, decision-makers and the right moment to engage.",
    fitItems: ["B2B SaaS and software", "Cybersecurity and IT services", "Professional services", "Industrial and technical services", "Healthcare, biotech and medtech", "Real estate, facilities and field operations"],
    methodTitle: "Outbound prioritisation system",
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
    caseStudiesTitle: "Client results",
    caseStudiesIntro:
      "A few campaigns where account selection, timing and proof mattered more than raw volume.",
    caseStudies: SHARED_CASE_STUDIES.en,
    testimonialsTitle: "What clients recognised",
    testimonials: SHARED_TESTIMONIALS.en,
    riskTitle: "What we filter before increasing volume",
    riskIntro: "A strong campaign does not start with more sends. It starts with fewer out-of-ICP companies, fewer weak signals and fewer poorly targeted decision-makers.",
    riskRows: [
      ["Weak ICP", "If the buyer role and account type are vague, the campaign should not scale."],
      ["Unclear proof", "European proof is useful only when it supports the buyer problem being addressed."],
      ["No qualification rule", "A meeting must be defined by fit, need and next step, not by calendar volume alone."],
    ],
    deliverablesTitle: "What you actually get",
    deliverables: [
      "Operating portal: ICP, TAM, exclusions, campaigns, metrics and learnings centralised",
      "Data: structured TAM list, target accounts, decision-makers to contact and accounts to exclude",
      "Prioritisation: buying-signal matrix, scoring and first batch of the most qualified accounts",
      "Proof: messaging angles, comparable client cases, value pages and business hypotheses by segment",
      "Execution: email, LinkedIn and phone according to the validated plan, with response qualification",
      "Management: HubSpot sync, weekly reporting and recommendations to scale or stop",
    ],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Is devlo based in Australia?",
        answer:
          "devlo is a Swiss B2B outbound agency. The page explains the method, the proof and the operating system used to build serious acquisition campaigns.",
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
    appointmentLogosTitle: "Sales meetings booked with",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Our clients",
    logos: CLIENT_LOGOS,
    proofTitle: "Method before execution",
    proofRows: [
      ["Competitive demand", "UK clicks are expensive when the page sounds like a generic lead-generation agency."],
      ["Buyer clarity", "Lead generation, SDR outsourcing and outbound strategy intent need to be separated before spend increases."],
      ["Proof-led execution", "The first message should explain why the account is being approached now and why devlo can help."],
    ],
    fitTitle: "Industries and offers where the devlo method applies",
    fitIntro: "We help when growth does not depend on a simple inbound form, but on rigorous selection of accounts, decision-makers and the right moment to engage.",
    fitItems: ["B2B SaaS", "Cybersecurity", "Consulting and professional services", "High-value services with clear buyer roles", "Healthcare, biotech and medtech", "Real estate, facilities and field operations"],
    methodTitle: "Outbound prioritisation system",
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
    caseStudiesTitle: "Client results",
    caseStudiesIntro: "A few campaigns where account selection, timing and proof mattered more than raw volume.",
    caseStudies: SHARED_CASE_STUDIES.en,
    testimonialsTitle: "What clients recognised",
    testimonials: SHARED_TESTIMONIALS.en,
    riskTitle: "What we filter before increasing volume",
    riskIntro: "A strong campaign does not start with more sends. It starts with fewer out-of-ICP companies, fewer weak signals and fewer poorly targeted decision-makers.",
    riskRows: [
      ["Broad wording", "Lead generation, appointment setting and outsourced SDR intent should not be mixed blindly."],
      ["Low-value deals", "Small deals rarely justify a careful multichannel setup in a competitive market."],
      ["Message mismatch", "If the ad promises UK B2B prospecting, the page must explain the UK acquisition problem directly."],
    ],
    deliverablesTitle: "What you actually get",
    deliverables: [
      "Operating portal: ICP, TAM, exclusions, campaigns, metrics and learnings centralised",
      "Data: structured TAM list, target accounts, decision-makers to contact and accounts to exclude",
      "Prioritisation: buying-signal matrix, scoring and first batch of the most qualified accounts",
      "Proof: messaging angles, comparable client cases, value pages and business hypotheses by segment",
      "Execution: email, LinkedIn and phone according to the validated plan, with response qualification",
      "Management: HubSpot sync, weekly reporting and recommendations to scale or stop",
    ],
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
      "devlo aide les équipes B2B à identifier les entreprises les plus qualifiées, à prioriser le démarchage multicanal grâce aux signaux d'achat et à ouvrir des conversations avec une raison business crédible.",
    badges: ["TAM exploitable", "Signaux d'achat", "Rendez-vous qualifiés"],
    primaryCta: "Obtenir un diagnostic d'acquisition",
    formTitle: "Recevez une analyse concrète de votre acquisition B2B",
    formIntro:
      "Décrivez votre offre, vos décideurs cibles et votre situation commerciale. Nous identifions les segments à prioriser, les signaux d'achat à surveiller et les preuves à utiliser dans la première approche.",
    postForm: "Nous revenons avec les segments à prioriser, les signaux utiles et les risques à corriger avant lancement.",
    appointmentLogosTitle: "Rendez-vous commerciaux obtenus avec",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Nos clients",
    logos: CLIENT_LOGOS,
    proofTitle: "Méthode avant exécution",
    proofRows: [
      ["TAM exploitable", "Nous transformons votre marché cible en liste d'entreprises priorisables, avec secteurs, tailles, zones et exclusions claires."],
      ["Signaux d'achat", "Nous cherchons les changements qui rendent une approche pertinente maintenant : croissance, recrutement, nouvelle direction, outil remplacé, pression métier."],
      ["Approche prouvée", "Chaque message relie le signal à une hypothèse business et à une preuve concrète : résultat client, cas comparable ou angle sectoriel."],
    ],
    fitTitle: "Industries et offres où la méthode devlo s'applique",
    fitIntro: "Nous intervenons lorsque la croissance ne dépend pas d'un simple formulaire entrant, mais d'une sélection rigoureuse des entreprises, des décideurs et du bon moment de contact.",
    fitItems: ["SaaS et logiciels B2B", "Cybersécurité et services IT", "Industrie et services techniques", "Conseil, formation et services professionnels", "Santé, biotech et medtech", "Immobilier, facility management et opérations terrain"],
    methodTitle: "Système de priorisation outbound",
    methodIntro:
      "Nous ne partons pas d'un volume de leads à contacter. Nous construisons d'abord le TAM, nous identifions les décideurs, puis nous sélectionnons les entreprises où le signal rend l'approche défendable.",
    methodSteps: [
      {
        title: "Cartographier le TAM et exclure le hors-cible",
        body: "Nous identifions les entreprises qui correspondent réellement à votre offre, en France, en Europe ou sur les zones prioritaires définies ensemble.",
        artifact: "Livrable : une base d'entreprises cibles structurée avec segments, zones, exclusions et règles de qualification.",
      },
      {
        title: "Prioriser les entreprises sur signaux d'achat actifs",
        body: "Nous sélectionnons les entreprises à contacter en premier grâce aux signaux d'achat : croissance, recrutement, changement d'outil, nouvelle direction, pression réglementaire ou besoin métier visible.",
        artifact: "Livrable : une matrice de priorité qui explique pourquoi telle entreprise mérite d'être approchée maintenant.",
      },
      {
        title: "Prospecter avec raison business et preuve",
        body: "Nous transformons le signal en angle de contact court, spécifique et défendable, puis nous l'exécutons par email, LinkedIn et téléphone selon le plan validé.",
        artifact: "Livrable : des conversations contextualisées avec les bons décideurs, pas une séquence générique envoyée à froid.",
      },
    ],
    caseStudiesTitle: "Résultats clients",
    caseStudiesIntro: "Quelques campagnes où la sélection des entreprises, le timing et la preuve ont compté davantage que le volume brut.",
    caseStudies: SHARED_CASE_STUDIES.fr,
    testimonialsTitle: "Ce que les clients reconnaissent",
    testimonials: SHARED_TESTIMONIALS.fr,
    riskTitle: "Ce que nous filtrons avant d'augmenter le volume",
    riskIntro: "Une campagne performante ne commence pas par plus d'envois. Elle commence par moins d'entreprises hors ICP, moins de signaux faibles et moins de décideurs mal ciblés.",
    riskRows: [
      ["Entreprises hors ICP", "Nous écartons les entreprises qui ressemblent à votre marché mais n'ont pas le bon cas d'usage, la bonne taille ou le bon contexte d'achat."],
      ["Timing faible", "Nous évitons d'approcher une entreprise simplement parce qu'elle existe dans une base. Il faut un signal ou une hypothèse commerciale défendable."],
      ["Message sans preuve", "Un message sans résultat, cas client ou preuve sectorielle ressemble à toutes les autres agences de prospection."],
    ],
    deliverablesTitle: "Ce que vous recevez concrètement",
    deliverables: [
      "Portail de pilotage : ICP, TAM, exclusions, campagnes, métriques et apprentissages centralisés",
      "Données : liste TAM structurée, entreprises cibles, décideurs à contacter et comptes à exclure",
      "Priorisation : matrice de signaux d'achat, scoring et premier batch des entreprises les plus qualifiées",
      "Preuve : angles de messages, cas clients comparables, pages de valeur et hypothèses business par segment",
      "Exécution : email, LinkedIn et téléphone selon le plan validé, avec qualification des réponses",
      "Pilotage : synchronisation HubSpot, reporting hebdomadaire et recommandations de scaling ou d'arrêt",
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
    appointmentLogosTitle: "Vertriebstermine gebucht mit",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Unsere Kunden",
    logos: CLIENT_LOGOS,
    proofTitle: "Methode vor Umsetzung",
    proofRows: [
      ["B2B-Akquise", "Viele Schweizer Käufer wollen ihre bestehende Kundengewinnung strukturierter und messbarer verbessern."],
      ["Lokale Präzision", "Die Deutschschweiz braucht saubere Segmentierung, natürliche Sprache und klare Qualifikationskriterien."],
      ["Nachweis vor Volumen", "Die Kampagne muss zeigen, warum ein Account jetzt angesprochen wird und welche Relevanz devlo belegen kann."],
    ],
    fitTitle: "Branchen und Angebote, für die die devlo-Methode geeignet ist",
    fitIntro: "Wir unterstützen dort, wo Wachstum nicht von einem einfachen Inbound-Formular abhängt, sondern von einer sorgfältigen Auswahl der Unternehmen, Entscheider und des richtigen Kontaktzeitpunkts.",
    fitItems: ["B2B-SaaS und Software", "Cybersecurity und IT-Services", "Industrie und technische Services", "Beratung, Training und Professional Services", "Healthcare, Biotech und Medtech", "Immobilien, Facility Management und operative Services"],
    methodTitle: "Outbound-Priorisierungssystem",
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
    caseStudiesTitle: "Kundenergebnisse",
    caseStudiesIntro: "Einige Kampagnen, bei denen Account-Auswahl, Timing und Nachweis wichtiger waren als reines Volumen.",
    caseStudies: SHARED_CASE_STUDIES.de,
    testimonialsTitle: "Was Kunden hervorheben",
    testimonials: SHARED_TESTIMONIALS.de,
    riskTitle: "Was wir filtern, bevor wir das Volumen erhöhen",
    riskIntro: "Eine starke Kampagne beginnt nicht mit mehr Versand. Sie beginnt mit weniger Unternehmen ausserhalb des ICP, weniger schwachen Signalen und weniger falsch ausgewählten Entscheidern.",
    riskRows: [
      ["Deutschland-Ton", "Deutschland-Copy wirkt in der Schweiz oft zu hart oder zu generisch."],
      ["Zu breite Zielgruppe", "Ein Schweizer Markt ohne Segment, Entscheiderrolle und Qualifikationsregel bleibt zu unscharf."],
      ["Unbelegte Claims", "Referenzen müssen relevant bleiben und dürfen keine lokale Wirkung vortäuschen."],
    ],
    deliverablesTitle: "Was Sie konkret erhalten",
    deliverables: [
      "Steuerungsportal: ICP, TAM, Ausschlüsse, Kampagnen, Metriken und Learnings zentralisiert",
      "Daten: strukturierte TAM-Liste, Zielunternehmen, zu kontaktierende Entscheider und auszuschliessende Accounts",
      "Priorisierung: Kaufsignal-Matrix, Scoring und erste Auswahl der qualifiziertesten Unternehmen",
      "Nachweis: Messaging-Winkel, vergleichbare Kundenfälle, Value Pages und Business-Hypothesen pro Segment",
      "Ausführung: E-Mail, LinkedIn und Telefon gemäss validiertem Plan, mit Qualifizierung der Antworten",
      "Steuerung: HubSpot-Synchronisierung, wöchentliches Reporting und Empfehlungen zum Skalieren oder Stoppen",
    ],
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
    appointmentLogosTitle: "Vertriebstermine gebucht mit",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Unsere Kunden",
    logos: CLIENT_LOGOS,
    proofTitle: "Methode vor Umsetzung",
    proofRows: [
      ["Großer Markt", "Deutschland ist groß genug, um Budget zu verlieren, wenn Segment, Region und Entscheiderrolle nicht getrennt werden."],
      ["B2B-Logik", "Die Seite muss erklären, wie Kundengewinnung über Accounts, Timing-Signale und Nachweise verbessert wird."],
      ["Relevanz", "Entscheider reagieren eher, wenn Signal, Problem und Nachweis sauber zusammenpassen."],
    ],
    fitTitle: "Branchen und Angebote, für die die devlo-Methode geeignet ist",
    fitIntro: "Wir unterstützen dort, wo Wachstum nicht von einem einfachen Inbound-Formular abhängt, sondern von einer sorgfältigen Auswahl der Unternehmen, Entscheider und des richtigen Kontaktzeitpunkts.",
    fitItems: ["B2B-SaaS", "Cybersecurity und IT", "Industrie und technische Lösungen", "Beratung und Professional Services", "Healthcare, Biotech und Medtech", "Immobilien, Facility Management und operative Services"],
    methodTitle: "Outbound-Priorisierungssystem",
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
    caseStudiesTitle: "Kundenergebnisse",
    caseStudiesIntro: "Einige Kampagnen, bei denen Account-Auswahl, Timing und Nachweis wichtiger waren als reines Volumen.",
    caseStudies: SHARED_CASE_STUDIES.de,
    testimonialsTitle: "Was Kunden hervorheben",
    testimonials: SHARED_TESTIMONIALS.de,
    riskTitle: "Was wir filtern, bevor wir das Volumen erhöhen",
    riskIntro: "Eine starke Kampagne beginnt nicht mit mehr Versand. Sie beginnt mit weniger Unternehmen ausserhalb des ICP, weniger schwachen Signalen und weniger falsch ausgewählten Entscheidern.",
    riskRows: [
      ["DACH-Vermischung", "Eine einzige Botschaft für Deutschland, Schweiz und Österreich ist meist zu ungenau."],
      ["Zu viel Volumen", "Mehr Reichweite hilft nicht, wenn Buyer-Rolle und Nutzenversprechen unklar sind."],
      ["Unbelegte Claims", "Ergebnisse und Referenzen dürfen nur genutzt werden, wenn sie belegbar und passend sind."],
    ],
    deliverablesTitle: "Was Sie konkret erhalten",
    deliverables: [
      "Steuerungsportal: ICP, TAM, Ausschlüsse, Kampagnen, Metriken und Learnings zentralisiert",
      "Daten: strukturierte TAM-Liste, Zielunternehmen, zu kontaktierende Entscheider und auszuschliessende Accounts",
      "Priorisierung: Kaufsignal-Matrix, Scoring und erste Auswahl der qualifiziertesten Unternehmen",
      "Nachweis: Messaging-Winkel, vergleichbare Kundenfälle, Value Pages und Business-Hypothesen pro Segment",
      "Ausführung: E-Mail, LinkedIn und Telefon gemäss validiertem Plan, mit Qualifizierung der Antworten",
      "Steuerung: HubSpot-Synchronisierung, wöchentliches Reporting und Empfehlungen zum Skalieren oder Stoppen",
    ],
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
    appointmentLogosTitle: "Salesafspraken geboekt bij",
    appointmentLogos: APPOINTMENT_LOGOS,
    logosTitle: "Onze klanten",
    logos: CLIENT_LOGOS,
    proofTitle: "Eerst methode, dan uitvoering",
    proofRows: [
      ["Acquisitie met concrete afspraken", "Concrete afspraken in je agenda, niet alleen funnels of brand awareness."],
      ["Directe relevantie", "Maak meteen duidelijk waarom je deze prospect nú benadert."],
      ["Kwaliteit, geen massa", "Nederlandse B2B-kopers prikken snel door algemene claims heen; bewijs en timing moeten kloppen."],
    ],
    fitTitle: "Sectoren en proposities waarvoor de devlo-methode werkt",
    fitIntro:
      "We helpen wanneer groei niet afhangt van een simpel inboundformulier, maar van een zorgvuldige selectie van bedrijven, beslissers en het juiste contactmoment.",
    fitItems: ["B2B SaaS en software", "IT- en cybersecuritydiensten", "Professionele diensten", "E-commerce, fintech en zakelijke services", "Healthcare, biotech en medtech", "Vastgoed, facility management en field operations"],
    methodTitle: "Outbound-prioriteitssysteem",
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
    caseStudiesTitle: "Klantresultaten",
    caseStudiesIntro: "Een paar campagnes waarin accountselectie, timing en bewijs belangrijker waren dan puur volume.",
    caseStudies: SHARED_CASE_STUDIES.nl,
    testimonialsTitle: "Wat klanten benadrukken",
    testimonials: SHARED_TESTIMONIALS.nl,
    riskTitle: "Wat we filteren voordat we volume verhogen",
    riskIntro: "Een sterke campagne begint niet met meer verzending. Ze begint met minder bedrijven buiten je ICP, minder zwakke signalen en minder verkeerd gekozen beslissers.",
    riskRows: [
      ["Te Amerikaanse toon", "Superlatieven en loze beloftes wekken in Nederland geen vertrouwen."],
      ["Vage doelgroep", "Een campagne zonder duidelijke ICP, beslissers en kwalificatiecriteria levert weinig bruikbare signalen op."],
      ["Te vroeg opschalen", "We testen eerst segment, signaal en boodschap voordat er budget naar volume gaat."],
    ],
    deliverablesTitle: "Wat je concreet krijgt",
    deliverables: [
      "Stuurportaal: ICP, TAM, uitsluitingen, campagnes, metrics en learnings centraal",
      "Data: gestructureerde TAM-lijst, doelaccounts, beslissers om te benaderen en accounts om uit te sluiten",
      "Prioritering: matrix met koopsignalen, scoring en eerste batch van de meest gekwalificeerde accounts",
      "Bewijs: messaging-hoeken, vergelijkbare klantcases, value pages en businesshypotheses per segment",
      "Uitvoering: e-mail, LinkedIn en telefoon volgens het gevalideerde plan, met kwalificatie van antwoorden",
      "Sturing: HubSpot-synchronisatie, wekelijkse rapportage en aanbevelingen om op te schalen of te stoppen",
    ],
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
