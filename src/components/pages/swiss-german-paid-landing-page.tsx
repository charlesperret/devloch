import Link from "next/link";
import { ArrowRight, BarChart3, Check, ClipboardCheck, MousePointer2, ShieldCheck, Target, Users } from "lucide-react";

import { PaidAwareHubspotForm } from "@/components/shared/paid-aware-hubspot-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type PaidLandingContent = {
  locale: SupportedLocale;
  path: string;
  pageName: string;
  title: string;
  description: string;
  breadcrumbHome: string;
  eyebrow: string;
  h1: string;
  intro: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  formEyebrow: string;
  formTitle: string;
  formIntro: string;
  postForm: string;
  proofRows: [string, string][];
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  process: { icon: typeof Target; title: string; body: string }[];
  keywordEyebrow: string;
  keywordTitle: string;
  keywordIntro: string;
  keywordCaption: string;
  keywordHeaders: [string, string, string, string];
  keywordRows: [string, string, string, string][];
  fitEyebrow: string;
  fitTitle: string;
  fitIntro: string;
  fitItems: string[];
  deliverablesTitle: string;
  deliverablesIntro: string;
  deliverables: string[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  serviceName: string;
  serviceType: string;
  articleHeadline: string;
  articleDescription: string;
};

export const swissPaidLandingPaths: Record<SupportedLocale, string> = {
  fr: "/agence-lead-generation-suisse",
  en: "/en/lead-generation-agency-switzerland",
  de: "/de/leadgenerierung-agentur-schweiz",
  nl: "/nl/leadgeneratie-bureau-zwitserland",
};

export const swissPaidLandingAlternates = {
  fr: swissPaidLandingPaths.fr,
  en: swissPaidLandingPaths.en,
  de: swissPaidLandingPaths.de,
  nl: swissPaidLandingPaths.nl,
  "x-default": swissPaidLandingPaths.fr,
};

const keywordRows: Record<SupportedLocale, [string, string, string, string][]> = {
  fr: [
    ["leadgenerierung", "210", "US$3.46-13.19", "Bonne demande, mais trop large sans filtre B2B."],
    ["kundenakquise", "320", "US$3.18-12.74", "Volume fort; l'annonce doit clarifier B2B et rendez-vous qualifiés."],
    ["neukundengewinnung", "260", "US$3.20-10.60", "Intention utile pour les entreprises sous pression de croissance."],
    ["kaltakquise agentur", "10", "US$5.13-13.43", "Petit volume, mais très proche d'une intention d'externalisation."],
  ],
  en: [
    ["leadgenerierung", "210", "US$3.46-13.19", "Useful demand, but too broad without a B2B filter."],
    ["kundenakquise", "320", "US$3.18-12.74", "Strong volume; ads must make B2B and qualified meetings explicit."],
    ["neukundengewinnung", "260", "US$3.20-10.60", "Good intent for companies under growth pressure."],
    ["kaltakquise agentur", "10", "US$5.13-13.43", "Small volume, but close to outsourced acquisition intent."],
  ],
  de: [
    ["leadgenerierung", "210", "US$3.46-13.19", "Gut für Nachfrage, aber ohne B2B-Filter zu breit."],
    ["kundenakquise", "320", "US$3.18-12.74", "Volumen stark; Anzeigen müssen B2B und qualifizierte Termine klar machen."],
    ["neukundengewinnung", "260", "US$3.20-10.60", "Guter Suchintent für Firmen mit Wachstumsdruck."],
    ["kaltakquise agentur", "10", "US$5.13-13.43", "Kleines Volumen, aber sehr nah an Outsourcing-Intent."],
  ],
  nl: [
    ["leadgenerierung", "210", "US$3.46-13.19", "Goede vraag, maar te breed zonder B2B-filter."],
    ["kundenakquise", "320", "US$3.18-12.74", "Sterk volume; advertenties moeten B2B en gekwalificeerde afspraken duidelijk maken."],
    ["neukundengewinnung", "260", "US$3.20-10.60", "Goede intentie voor bedrijven met groeidruk."],
    ["kaltakquise agentur", "10", "US$5.13-13.43", "Laag volume, maar dicht bij outsourcing-intentie."],
  ],
};

export const swissPaidLandingContent: Record<SupportedLocale, PaidLandingContent> = {
  fr: {
    locale: "fr",
    path: swissPaidLandingPaths.fr,
    pageName: "Agence lead generation Suisse",
    title: "Agence lead generation Suisse",
    description:
      "Lead generation B2B pour la Suisse alémanique : ICP, comptes cibles, signaux d'achat et séquences. Readout gratuit par devlo.",
    breadcrumbHome: "Accueil",
    eyebrow: "Lead generation B2B en Suisse alémanique",
    h1: "Des rendez-vous B2B qualifiés en Suisse, sans listes de leads inutiles",
    intro:
      "devlo aide les équipes B2B suisses à valider le marché germanophone, prioriser les bons comptes et préparer une campagne outbound mesurable.",
    badges: ["Readout gratuit", "Réponse sous 24h", "Agence suisse"],
    primaryCta: "Évaluer le potentiel",
    secondaryCta: "Voir la page Suisse alémanique",
    secondaryHref: "/prospection-commerciale-suisse-alemanique",
    formEyebrow: "Estimation gratuite",
    formTitle: "Recevez un readout concret pour vos comptes cibles",
    formIntro:
      "Nous vérifions marché, ICP, régions, secteurs, décideurs et premiers angles de séquence avant un court échange.",
    postForm: "Après le formulaire, notre équipe revient vers vous sous 24h avec les prochaines étapes.",
    proofRows: [
      ["Expérience DACH", "54 rendez-vous qualifiés pour une campagne HR-Tech dans la région DACH."],
      ["Marché suisse", "Segmentation par région, langue, secteur, taille d'entreprise et décideurs joignables."],
      ["Multicanal", "Email, LinkedIn et téléphone ne sont combinés que lorsque données et message sont propres."],
    ],
    processEyebrow: "Méthode",
    processTitle: "Valider la qualité du marché avant de scaler",
    processIntro:
      "En Suisse alémanique, le volume de recherche est limité. L'enjeu n'est pas le nombre de clics, mais la probabilité que chaque clic mène à une conversation B2B utile.",
    process: [
      {
        icon: Target,
        title: "Cadrer l'ICP et le marché",
        body: "Nous vérifions quels segments à Zurich, Bâle, Berne, Saint-Gall, Zoug ou ailleurs en Suisse alémanique ont assez de potentiel.",
      },
      {
        icon: Users,
        title: "Identifier décideurs et signaux",
        body: "Nous priorisons les comptes selon rôle, timing, croissance, recrutements, stack et signaux d'achat plausibles.",
      },
      {
        icon: ClipboardCheck,
        title: "Tester les séquences avant lancement",
        body: "Objets, emails, angles LinkedIn, logique d'appel et critères de qualification sont validés avant le premier batch.",
      },
    ],
    keywordEyebrow: "Demande search",
    keywordTitle: "Quels mots-clés indiquent une demande en Suisse ?",
    keywordIntro:
      "Les premières données Keyword Planner montrent que les termes larges ont plus de volume. Les termes d'agence sont plus petits, mais plus proches de l'intention d'achat.",
    keywordCaption: "Potentiel keyword pour la lead generation B2B en Suisse",
    keywordHeaders: ["Mot-clé", "Recherches/mois", "Top-page bid", "Lecture"],
    keywordRows: keywordRows.fr,
    fitEyebrow: "Pour qui",
    fitTitle: "Adapté aux offres B2B avec une vraie valeur de deal",
    fitIntro:
      "Nous ne cherchons pas un maximum de contacts. Nous cherchons les comptes où un échange qualifié a du sens pour les deux parties.",
    fitItems: ["SaaS et logiciels", "Cybersécurité et IT services", "Industrie et services professionnels", "Conseil, formation et services B2B"],
    deliverablesTitle: "Ce que vous recevez après le formulaire",
    deliverablesIntro:
      "Un regard concret sur la question : est-ce qu'un test en Suisse alémanique vaut la peine, et quels segments doivent passer en premier ?",
    deliverables: [
      "Régions et secteurs prioritaires pour le premier batch",
      "Première lecture de l'intention search, du CPC et du volume outbound",
      "Angles email, LinkedIn et téléphone à tester",
      "Risques : ICP trop large, audience trop petite ou qualification floue",
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "devlo est-elle une agence de lead generation pour la Suisse ?",
        answer:
          "Oui. devlo est une agence B2B suisse pour la lead generation, la prospection et les rendez-vous qualifiés. Nous séparons les campagnes Suisse alémanique, Romandie et Allemagne.",
      },
      {
        question: "Travaillez-vous en allemand ou en suisse allemand ?",
        answer:
          "Les campagnes écrites utilisent un allemand standard suisse naturel. Pour les appels et les formulations sensibles, nous faisons relire les messages afin d'éviter l'effet traduction.",
      },
      {
        question: "Pour quelles entreprises est-ce rentable ?",
        answer:
          "C'est adapté aux entreprises B2B avec une offre claire, des décideurs identifiables et une valeur de deal suffisante pour rentabiliser des rendez-vous qualifiés.",
      },
      {
        question: "Quels canaux utilisez-vous ?",
        answer:
          "Selon le marché, nous combinons cold email, LinkedIn, téléphone, signaux d'achat, suivi CRM et qualification manuelle.",
      },
    ],
    serviceName: "Lead generation B2B en Suisse alémanique",
    serviceType: "B2B lead generation, outsourced SDR, prospection Suisse alémanique",
    articleHeadline: "Agence lead generation Suisse pour la Suisse alémanique",
    articleDescription:
      "devlo vérifie ICP, marché, signaux d'achat et séquences avant de lancer une campagne outbound B2B en Suisse alémanique.",
  },
  en: {
    locale: "en",
    path: swissPaidLandingPaths.en,
    pageName: "Lead generation agency Switzerland",
    title: "Lead Generation Agency Switzerland",
    description:
      "B2B lead generation in German-speaking Switzerland: ICP, target accounts, buying signals and sequences. Free readout by devlo.",
    breadcrumbHome: "Home",
    eyebrow: "B2B lead generation in German-speaking Switzerland",
    h1: "Qualified B2B meetings in Switzerland, without useless lead lists",
    intro:
      "devlo helps Swiss B2B teams validate the German-speaking market, prioritize target accounts and prepare a measurable outbound campaign.",
    badges: ["Free readout", "Reply within 24 hours", "Swiss agency"],
    primaryCta: "Check the potential",
    secondaryCta: "View German-speaking Switzerland page",
    secondaryHref: "/en/b2b-prospecting-german-speaking-switzerland",
    formEyebrow: "Free assessment",
    formTitle: "Get a concrete readout for your target accounts",
    formIntro:
      "We review market, ICP, regions, industries, decision-makers and first sequence angles before a short call.",
    postForm: "After the form, our team will get back to you within 24 hours with next steps.",
    proofRows: [
      ["DACH experience", "54 qualified meetings for an HR-Tech campaign across the DACH region."],
      ["Swiss market", "Segmentation by region, language, industry, headcount and reachable decision-makers."],
      ["Multichannel", "Email, LinkedIn and phone are combined only once data and messaging are clean."],
    ],
    processEyebrow: "Method",
    processTitle: "Check market quality before scaling the campaign",
    processIntro:
      "In German-speaking Switzerland, search volume is small. The point is not click volume, but whether each click can turn into a relevant B2B conversation.",
    process: [
      {
        icon: Target,
        title: "Narrow the ICP and market",
        body: "We check which segments in Zurich, Basel, Bern, St. Gallen, Zug or broader German-speaking Switzerland have enough potential.",
      },
      {
        icon: Users,
        title: "Find decision-makers and signals",
        body: "We prioritize accounts by role, timing, growth indicators, hiring, tech stack and plausible buying signals.",
      },
      {
        icon: ClipboardCheck,
        title: "Review sequences before launch",
        body: "Subject lines, email copy, LinkedIn angles, phone logic and qualification criteria are checked before the first batch.",
      },
    ],
    keywordEyebrow: "Search demand",
    keywordTitle: "Which keywords show demand in Switzerland?",
    keywordIntro:
      "Initial Keyword Planner data shows broader terms have more volume. Agency-specific terms are smaller, but closer to buying intent.",
    keywordCaption: "Keyword potential for B2B lead generation in Switzerland",
    keywordHeaders: ["Keyword", "Searches/month", "Top-page bid", "Reading"],
    keywordRows: keywordRows.en,
    fitEyebrow: "Fit",
    fitTitle: "Built for B2B offers with clear deal value",
    fitIntro:
      "We are not looking for as many contacts as possible. We look for accounts where a qualified conversation makes sense for both sides.",
    fitItems: ["SaaS and software", "Cybersecurity and IT services", "Industrial and professional services", "Consulting, training and B2B services"],
    deliverablesTitle: "What you receive after the form",
    deliverablesIntro:
      "A practical view on one question: is a German-speaking Switzerland test worth running, and which segments should come first?",
    deliverables: [
      "Priority regions and industries for the first batch",
      "First read on search intent, CPC and outbound volume",
      "Email, LinkedIn and phone angles to test",
      "Risks: ICP too broad, audience too small or qualification unclear",
    ],
    faqTitle: "Common questions",
    faqs: [
      {
        question: "Is devlo a lead generation agency for Switzerland?",
        answer:
          "Yes. devlo is a Swiss B2B agency for lead generation, new business acquisition and qualified meetings. We separate German-speaking Switzerland, Romandy and Germany campaigns.",
      },
      {
        question: "Do you work in German or Swiss German?",
        answer:
          "Written campaigns use natural Swiss Standard German. For calls and sensitive wording, we review phrasing with German-speaking people so it does not read like a literal translation.",
      },
      {
        question: "Which companies are a fit?",
        answer:
          "This fits B2B companies with a clear offer, reachable decision-makers and enough deal value to make qualified conversations economical.",
      },
      {
        question: "Which channels do you use?",
        answer:
          "Depending on the market, we combine cold email, LinkedIn, phone, buying signals, CRM tracking and manual qualification.",
      },
    ],
    serviceName: "B2B lead generation in German-speaking Switzerland",
    serviceType: "B2B lead generation, outsourced SDR, Swiss outbound",
    articleHeadline: "Lead generation agency Switzerland for German-speaking Switzerland",
    articleDescription:
      "devlo checks ICP, market, buying signals and sequences before launching a B2B outbound campaign in German-speaking Switzerland.",
  },
  de: {
    locale: "de",
    path: swissPaidLandingPaths.de,
    pageName: "Leadgenerierung Agentur Schweiz",
    title: "Leadgenerierung Agentur Schweiz",
    description:
      "B2B-Leadgenerierung in der Deutschschweiz: ICP, Zielaccounts, Kaufsignale und Sequenzen prüfen lassen. Kostenloser Readout von devlo.",
    breadcrumbHome: "Startseite",
    eyebrow: "B2B-Leadgenerierung in der Deutschschweiz",
    h1: "Qualifizierte B2B-Termine in der Schweiz, ohne unpassende Leadlisten",
    intro:
      "devlo hilft Schweizer B2B-Teams, den Markt in der Deutschschweiz zu prüfen, passende Zielaccounts zu priorisieren und eine messbare Outbound-Kampagne vorzubereiten.",
    badges: ["Kostenloser Readout", "Antwort innerhalb von 24 Stunden", "Schweizer Agentur"],
    primaryCta: "Potenzial prüfen lassen",
    secondaryCta: "Deutschschweiz-Seite ansehen",
    secondaryHref: "/de/b2b-akquise-deutschschweiz",
    formEyebrow: "Kostenlose Einschätzung",
    formTitle: "Erhalten Sie einen konkreten Readout für Ihre Zielkunden",
    formIntro:
      "Wir prüfen Markt, ICP, Regionen, Branchen, Entscheider und erste Sequenzwinkel vor einem kurzen Gespräch.",
    postForm: "Nach dem Formular meldet sich unser Team innerhalb von 24 Stunden mit den nächsten Schritten.",
    proofRows: [
      ["DACH-Erfahrung", "54 qualifizierte Termine für eine HR-Tech-Kampagne in der DACH-Region."],
      ["Schweizer Markt", "Segmentierung nach Region, Sprache, Branche, Headcount und erreichbaren Entscheidern."],
      ["Mehrkanalig", "E-Mail, LinkedIn und Telefon werden erst kombiniert, wenn Daten und Botschaft sauber sind."],
    ],
    processEyebrow: "Vorgehen",
    processTitle: "Erst Marktqualität prüfen, dann Kampagne skalieren",
    processIntro:
      "In der Deutschschweiz ist das Suchvolumen klein. Deshalb zählt nicht die Menge der Klicks, sondern ob jeder Klick zu einem passenden B2B-Gespräch führen kann.",
    process: [
      {
        icon: Target,
        title: "ICP und Markt eingrenzen",
        body: "Wir prüfen, welche Segmente in Zürich, Basel, Bern, St. Gallen, Zug oder der weiteren Deutschschweiz wirklich genügend Potenzial haben.",
      },
      {
        icon: Users,
        title: "Entscheider und Signale finden",
        body: "Wir priorisieren Accounts nach Rolle, Timing, Wachstumsindikatoren, Hiring, Tech Stack und plausiblen Kaufsignalen.",
      },
      {
        icon: ClipboardCheck,
        title: "Sequenzen vor dem Launch prüfen",
        body: "Betreffzeilen, E-Mail-Copy, LinkedIn-Winkel, Telefonlogik und Qualifikationskriterien werden vor dem ersten Batch validiert.",
      },
    ],
    keywordEyebrow: "Suchnachfrage",
    keywordTitle: "Welche Keywords zeigen Nachfrage in der Schweiz?",
    keywordIntro:
      "Die ersten Keyword-Planner-Daten zeigen: breite Begriffe wie Leadgenerierung und Kundenakquise haben mehr Volumen. Sehr genaue Agentur-Begriffe sind kleiner, aber näher am Kaufintent.",
    keywordCaption: "Keyword-Potenzial für B2B-Leadgenerierung in der Schweiz",
    keywordHeaders: ["Keyword", "Suchen/Monat", "Top-Page-Bid", "Einordnung"],
    keywordRows: keywordRows.de,
    fitEyebrow: "Für wen",
    fitTitle: "Geeignet für B2B-Angebote mit klarem Deal-Wert",
    fitIntro:
      "Wir suchen nicht möglichst viele Kontakte. Wir suchen Accounts, bei denen ein qualifiziertes Gespräch für beide Seiten Sinn ergibt.",
    fitItems: ["SaaS und Software", "Cybersecurity und IT-Services", "Industrie und professionelle Dienstleistungen", "Beratung, Training und B2B-Services"],
    deliverablesTitle: "Was Sie nach dem Formular erhalten",
    deliverablesIntro:
      "Ein kurzer, konkreter Blick auf die Frage: Lohnt sich ein Test in der Deutschschweiz, und welche Segmente sollten zuerst kommen?",
    deliverables: [
      "Priorisierte Regionen und Branchen für den ersten Batch",
      "Erste Einschätzung von Suchintent, CPC und Outbound-Volumen",
      "Vorschlag für E-Mail-, LinkedIn- und Telefonwinkel",
      "Risiken: zu breiter ICP, zu kleine Zielgruppe oder unklare Qualifikation",
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        question: "Ist devlo eine Leadgenerierung Agentur für die Schweiz?",
        answer:
          "Ja. devlo ist eine Schweizer B2B-Agentur für Leadgenerierung, Neukundenakquise und qualifizierte Termine. Für die Deutschschweiz trennen wir Targeting, Copy, Kanäle und Qualifikation von Romandie- oder Deutschland-Kampagnen.",
      },
      {
        question: "Arbeitet devlo auf Deutsch oder Schweizerdeutsch?",
        answer:
          "Geschriebene B2B-Kampagnen laufen in natürlichem Schweizer Standarddeutsch. Für Telefonie und Review prüfen wir die Formulierungen zusätzlich mit deutschsprachigen Personen.",
      },
      {
        question: "Für welche Firmen lohnt sich eine Kampagne?",
        answer:
          "Die Kampagne passt für B2B-Unternehmen mit klarem Angebot, erreichbaren Entscheidern und genügend Deal-Wert, um qualifizierte Gespräche wirtschaftlich zu machen.",
      },
      {
        question: "Welche Kanäle nutzt devlo in der Deutschschweiz?",
        answer:
          "Wir kombinieren je nach Markt Cold E-Mail, LinkedIn, Telefon, Kaufsignale, CRM-Tracking und manuelle Qualifikation.",
      },
    ],
    serviceName: "B2B-Leadgenerierung und Neukundenakquise in der Deutschschweiz",
    serviceType: "B2B lead generation, outsourced SDR, Neukundenakquise",
    articleHeadline: "Leadgenerierung Agentur Schweiz für die Deutschschweiz",
    articleDescription:
      "devlo prüft ICP, Markt, Kaufsignale und Sequenzen, bevor B2B-Unternehmen in der Deutschschweiz eine Outbound-Kampagne starten.",
  },
  nl: {
    locale: "nl",
    path: swissPaidLandingPaths.nl,
    pageName: "Leadgeneratie bureau Zwitserland",
    title: "Leadgeneratie Bureau Zwitserland",
    description:
      "B2B leadgeneratie in Duitstalig Zwitserland: ICP, target accounts, koopsignalen en sequenties. Gratis readout door devlo.",
    breadcrumbHome: "Home",
    eyebrow: "B2B-leadgeneratie in Duitstalig Zwitserland",
    h1: "Gekwalificeerde B2B-afspraken in Zwitserland, zonder nutteloze leadlijsten",
    intro:
      "devlo helpt Zwitserse B2B-teams de Duitstalige markt te valideren, doelaccounts te prioriteren en een meetbare outboundcampagne voor te bereiden.",
    badges: ["Gratis readout", "Antwoord binnen 24 uur", "Zwitsers bureau"],
    primaryCta: "Potentieel laten beoordelen",
    secondaryCta: "Bekijk Duitstalig Zwitserland",
    secondaryHref: "/nl/b2b-prospectie-duitstalig-zwitserland",
    formEyebrow: "Gratis inschatting",
    formTitle: "Ontvang een concrete readout voor je doelaccounts",
    formIntro:
      "We bekijken markt, ICP, regio's, sectoren, beslissers en eerste sequentiehoeken voor een kort gesprek.",
    postForm: "Na het formulier neemt ons team binnen 24 uur contact op met de volgende stappen.",
    proofRows: [
      ["DACH-ervaring", "54 gekwalificeerde afspraken voor een HR-Tech-campagne in de DACH-regio."],
      ["Zwitserse markt", "Segmentatie op regio, taal, sector, headcount en bereikbare beslissers."],
      ["Multichannel", "E-mail, LinkedIn en telefoon worden pas gecombineerd wanneer data en boodschap scherp zijn."],
    ],
    processEyebrow: "Aanpak",
    processTitle: "Controleer marktkwaliteit voordat je schaalt",
    processIntro:
      "In Duitstalig Zwitserland is het zoekvolume beperkt. Niet het aantal klikken telt, maar of elke klik kan leiden tot een relevante B2B-conversatie.",
    process: [
      {
        icon: Target,
        title: "ICP en markt afbakenen",
        body: "We controleren welke segmenten in Zürich, Basel, Bern, St. Gallen, Zug of breder Duitstalig Zwitserland genoeg potentieel hebben.",
      },
      {
        icon: Users,
        title: "Beslissers en signalen vinden",
        body: "We prioriteren accounts op rol, timing, groei-indicatoren, hiring, tech stack en plausibele koopsignalen.",
      },
      {
        icon: ClipboardCheck,
        title: "Sequenties voor lancering reviewen",
        body: "Onderwerpregels, e-mailcopy, LinkedIn-hoeken, belstructuur en kwalificatiecriteria worden voor de eerste batch gevalideerd.",
      },
    ],
    keywordEyebrow: "Zoekvraag",
    keywordTitle: "Welke zoekwoorden tonen vraag in Zwitserland?",
    keywordIntro:
      "De eerste Keyword Planner-data tonen dat brede termen meer volume hebben. Agency-termen zijn kleiner, maar dichter bij koopintentie.",
    keywordCaption: "Keywordpotentieel voor B2B-leadgeneratie in Zwitserland",
    keywordHeaders: ["Zoekwoord", "Zoeken/maand", "Top-page bid", "Interpretatie"],
    keywordRows: keywordRows.nl,
    fitEyebrow: "Voor wie",
    fitTitle: "Geschikt voor B2B-aanbiedingen met duidelijke dealwaarde",
    fitIntro:
      "We zoeken niet zoveel mogelijk contacten. We zoeken accounts waar een gekwalificeerd gesprek logisch is voor beide partijen.",
    fitItems: ["SaaS en software", "Cybersecurity en IT-services", "Industrie en professionele dienstverlening", "Consulting, training en B2B-services"],
    deliverablesTitle: "Wat je na het formulier ontvangt",
    deliverablesIntro:
      "Een concreet antwoord op de vraag: is een test in Duitstalig Zwitserland zinvol, en welke segmenten moeten eerst komen?",
    deliverables: [
      "Prioritaire regio's en sectoren voor de eerste batch",
      "Eerste inschatting van zoekintentie, CPC en outboundvolume",
      "E-mail-, LinkedIn- en telefoonhoeken om te testen",
      "Risico's: te breed ICP, te kleine doelgroep of onduidelijke kwalificatie",
    ],
    faqTitle: "Veelgestelde vragen",
    faqs: [
      {
        question: "Is devlo een leadgeneratiebureau voor Zwitserland?",
        answer:
          "Ja. devlo is een Zwitsers B2B-bureau voor leadgeneratie, new business en gekwalificeerde afspraken. We scheiden campagnes voor Duitstalig Zwitserland, Romandië en Duitsland.",
      },
      {
        question: "Werken jullie in Duits of Zwitsers-Duits?",
        answer:
          "Geschreven campagnes gebruiken natuurlijk Zwitsers Standaardduits. Voor telefonie en gevoelige formuleringen laten we copy extra reviewen.",
      },
      {
        question: "Voor welke bedrijven is dit rendabel?",
        answer:
          "Dit past bij B2B-bedrijven met een duidelijke propositie, bereikbare beslissers en genoeg dealwaarde om gekwalificeerde gesprekken rendabel te maken.",
      },
      {
        question: "Welke kanalen gebruiken jullie?",
        answer:
          "Afhankelijk van de markt combineren we cold e-mail, LinkedIn, telefoon, koopsignalen, CRM-tracking en handmatige kwalificatie.",
      },
    ],
    serviceName: "B2B-leadgeneratie in Duitstalig Zwitserland",
    serviceType: "B2B leadgeneratie, outsourced SDR, Zwitserse outbound",
    articleHeadline: "Leadgeneratie bureau Zwitserland voor Duitstalig Zwitserland",
    articleDescription:
      "devlo controleert ICP, markt, koopsignalen en sequenties voordat een B2B-outboundcampagne in Duitstalig Zwitserland start.",
  },
};

export function getSwissPaidLandingContent(locale: SupportedLocale) {
  return swissPaidLandingContent[locale];
}

export function SwissGermanPaidLandingPage({ locale = "de" }: { locale?: SupportedLocale }) {
  const content = getSwissPaidLandingContent(locale);

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: content.breadcrumbHome, path: locale === "fr" ? "/" : `/${locale}` },
            { name: content.pageName, path: content.path },
          ]),
          buildFaqPageSchema(content.faqs),
          buildArticleSchema({
            headline: content.articleHeadline,
            description: content.articleDescription,
            path: content.path,
            datePublished: "2026-05-19",
            dateModified: "2026-05-19",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret/",
          }),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: content.serviceName,
            provider: {
              "@type": "Organization",
              name: "devlo",
              url: "https://devlo.ch",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Deutschschweiz" },
              { "@type": "City", name: "Zürich" },
              { "@type": "City", name: "Basel" },
              { "@type": "City", name: "Bern" },
              { "@type": "City", name: "St. Gallen" },
            ],
            serviceType: content.serviceType,
          },
        ]}
      />

      <main className="bg-white">
        <section className="border-b border-neutral-200 bg-[#f7f9fb] pt-24 md:pt-30">
          <div className="mx-auto grid w-full max-w-screen-xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(360px,0.48fr)] lg:px-10 lg:py-16">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">{content.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-normal text-[#10283a] md:text-5xl">
                {content.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-650">{content.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {content.badges.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#274458]">
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#audit" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#0b668f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#095778]">
                  {content.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href={content.secondaryHref} className="inline-flex min-h-12 items-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-[#153a54] transition hover:border-[#0b668f]/50">
                  {content.secondaryCta}
                </Link>
              </div>
            </div>

            <div id="audit" className="scroll-mt-28 rounded-xl border border-neutral-200 bg-white p-5 shadow-soft md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">{content.formEyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-[#10283a]">{content.formTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{content.formIntro}</p>
              <div className="mt-6">
                <PaidAwareHubspotForm
                  portalId="8082524"
                  formId="54090bd3-970d-4ad1-b3b3-1c81d54c291e"
                  region="na2"
                  targetId={locale === "de" ? "hubspot-swiss-german-paid" : `hubspot-swiss-paid-${locale}`}
                  locale={locale}
                />
              </div>
              <p className="mt-4 text-center text-sm leading-6 text-neutral-500">{content.postForm}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-5 md:grid-cols-3">
              {content.proofRows.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <ShieldCheck className="h-5 w-5 text-[#0b668f]" aria-hidden="true" />
                  <h2 className="mt-3 text-lg font-bold text-[#10283a]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fb] py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">{content.processEyebrow}</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">{content.processTitle}</h2>
              <p className="mt-4 text-base leading-7 text-neutral-650">{content.processIntro}</p>
            </div>
            <div className="grid gap-4">
              {content.process.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f3f7] text-[#0b668f]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#10283a]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">{content.keywordEyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">{content.keywordTitle}</h2>
                <p className="mt-4 text-base leading-7 text-neutral-650">{content.keywordIntro}</p>
              </div>
              <div className="min-w-0 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <div className="hidden grid-cols-[minmax(120px,1.05fr)_94px_minmax(120px,1fr)_minmax(220px,1.55fr)] bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f] md:grid">
                  {content.keywordHeaders.map((header) => (
                    <div key={header} className="px-4 py-3">{header}</div>
                  ))}
                </div>
                <div className="divide-y divide-neutral-200" role="table" aria-label={content.keywordCaption}>
                  {content.keywordRows.map(([keyword, volume, bid, note]) => (
                    <div key={keyword} className="grid gap-3 p-4 text-sm text-neutral-700 md:grid-cols-[minmax(120px,1.05fr)_94px_minmax(120px,1fr)_minmax(220px,1.55fr)] md:gap-0 md:px-0 md:py-0">
                      <div className="md:px-4 md:py-4">
                        <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f] md:hidden">{content.keywordHeaders[0]}</span>
                        <span className="break-words font-semibold text-[#10283a]">{keyword}</span>
                      </div>
                      <div className="md:px-4 md:py-4">
                        <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f] md:hidden">{content.keywordHeaders[1]}</span>
                        {volume}
                      </div>
                      <div className="md:px-4 md:py-4">
                        <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f] md:hidden">{content.keywordHeaders[2]}</span>
                        {bid}
                      </div>
                      <div className="md:px-4 md:py-4">
                        <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f] md:hidden">{content.keywordHeaders[3]}</span>
                        {note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10283a] py-12 text-white md:py-16">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.48fr_0.52fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fd4ef]">{content.fitEyebrow}</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">{content.fitTitle}</h2>
              <p className="mt-4 text-base leading-7 text-white/75">{content.fitIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.fitItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4">
                  <MousePointer2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8fd4ef]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
              <div>
                <BarChart3 className="h-6 w-6 text-[#0b668f]" aria-hidden="true" />
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">{content.deliverablesTitle}</h2>
                <p className="mt-4 text-base leading-7 text-neutral-650">{content.deliverablesIntro}</p>
              </div>
              <ul className="grid gap-3">
                {content.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-neutral-200 bg-[#f7f9fb] p-4 text-sm leading-6 text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-[#f7f9fb] py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <h2 className="text-3xl font-extrabold leading-tight text-[#10283a]">{content.faqTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="font-bold text-[#10283a]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
