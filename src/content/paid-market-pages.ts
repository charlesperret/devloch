import type { SlugMapEntry, SupportedLocale } from "@/lib/i18n/slug-map";

type Reviewer = "Charles" | "Janis" | "Victor";
type ReviewStatus = "needs-review" | "approved-for-test";

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
  proofTitle: string;
  proofRows: [string, string][];
  fitTitle: string;
  fitIntro: string;
  fitItems: string[];
  methodTitle: string;
  methodIntro: string;
  methodSteps: { title: string; body: string }[];
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
  formId: "54090bd3-970d-4ad1-b3b3-1c81d54c291e",
  region: "na1",
} as const;

export const paidMarketHubspot = HUBSPOT;

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
      "B2B prospecting for Australian teams: ICP validation, target accounts, outbound sequences and qualified meeting generation.",
    eyebrow: "B2B prospecting for Australia",
    h1: "Open Australia with a narrow B2B outbound test",
    intro:
      "devlo helps B2B teams validate whether Australian accounts are worth pursuing before they scale outreach, headcount or media budget.",
    badges: ["AEST-compatible", "B2B only", "Narrow first test"],
    primaryCta: "Check the market fit",
    formTitle: "Get a concrete readout for Australia",
    formIntro:
      "Share your ICP, offer and target segment. We will review whether Australia has enough reachable accounts for a serious outbound test.",
    postForm: "After the form, we come back with the first market readout and next step.",
    proofTitle: "Why this page exists",
    proofRows: [
      ["Timezone", "Australia can be handled with a working window close to AEST during the test phase."],
      ["Discipline", "The first campaign should stay narrow: one ICP, one offer, one clear qualification path."],
      ["Execution", "Email, LinkedIn and phone qualification are used only when the data and message are clean enough."],
    ],
    fitTitle: "Best fit",
    fitIntro: "Australia is worth testing when the offer has enough deal value to justify a careful outbound setup.",
    fitItems: ["B2B SaaS and software", "Cybersecurity and IT services", "Professional services", "Industrial and technical services"],
    methodTitle: "How we avoid a broad test",
    methodIntro:
      "The goal is not to prove that Australia is a large market. The goal is to find the first segment where a qualified conversation is plausible.",
    methodSteps: [
      { title: "Segment the market", body: "We isolate industries, company size, roles and buying signals before any campaign opens." },
      { title: "Validate reachable buyers", body: "We check whether the target roles can be identified and contacted with clean data." },
      { title: "Test the message", body: "We keep the first angle specific enough to learn from the replies, not just from click volume." },
    ],
    riskTitle: "What we filter out",
    riskIntro: "These checks protect the test from spending time on audiences that look attractive but cannot convert.",
    riskRows: [
      ["Too broad", "Australia-wide targeting without a vertical or buyer role is not precise enough."],
      ["Weak proof", "Claims used in Europe should not be copied unless they are relevant to Australian buyers."],
      ["No reachable buyer", "If the decision-maker data is weak, the campaign should not scale."],
    ],
    deliverablesTitle: "What you receive",
    deliverables: ["Priority ICP for the first batch", "Recommended channels and sequence angle", "Risks to resolve before launch", "Clear next step for a paid-search or outbound test"],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Is devlo based in Australia?",
        answer:
          "No. devlo is a Swiss B2B outbound agency. Australia is treated as a test market, with a narrow setup and local message checks before scaling.",
      },
      {
        question: "Do you run campaigns only in English?",
        answer: "For Australia, the first test should run in English with simple, direct copy and clear B2B qualification criteria.",
      },
      {
        question: "When should we not launch Australia?",
        answer: "If the ICP is still vague, the deal value is too low, or the buyer data cannot be verified, we recommend fixing that before launch.",
      },
    ],
    relatedLinks: [
      { label: "Outbound services", href: "/en/services/outbound-multichannel" },
      { label: "Consultation", href: "/en/consultation" },
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
      "B2B prospecting for UK campaigns: narrow ICP, clean target accounts, direct outbound messaging and qualified meeting generation.",
    eyebrow: "B2B prospecting for the UK",
    h1: "Test UK outbound demand without opening a broad campaign",
    intro:
      "The UK is competitive and expensive when targeting is loose. devlo helps B2B teams isolate the segment where a first qualified conversation is realistic.",
    badges: ["Search-test ready", "Strict ICP", "Qualified meetings"],
    primaryCta: "Review the UK opportunity",
    formTitle: "Get a UK campaign readout",
    formIntro:
      "Send the offer, target buyer and current market assumptions. We will identify whether the first UK test is worth running and where it should start.",
    postForm: "We reply with a short assessment before recommending any broader campaign.",
    proofTitle: "Why UK needs a tighter page",
    proofRows: [
      ["Competition", "Generic UK demand is noisy. The page and campaign need a precise ICP match."],
      ["Buyer intent", "We separate people looking for lists, tools or agencies before budget is committed."],
      ["Execution", "The first test should be small enough to diagnose message, channel and buyer fit."],
    ],
    fitTitle: "Best fit",
    fitIntro: "UK prospecting makes sense when the target account profile is specific and the sales motion can absorb qualified conversations quickly.",
    fitItems: ["B2B SaaS", "Cybersecurity", "Consulting and professional services", "High-value services with clear buyer roles"],
    methodTitle: "How we tighten the test",
    methodIntro:
      "We reduce waste by narrowing the target before adding budget. That matters more in the UK than in lower-competition markets.",
    methodSteps: [
      { title: "Define the first segment", body: "We choose a specific buyer group, not the whole UK market." },
      { title: "Align ad and page message", body: "The promise on the page stays close to the ad and the service delivered." },
      { title: "Qualify manually", body: "Early replies and calls are reviewed to decide whether the segment deserves more budget." },
    ],
    riskTitle: "What we filter out",
    riskIntro: "The UK can burn budget quickly when the page promises too much or targets too widely.",
    riskRows: [
      ["Broad wording", "Lead generation, appointment setting and outsourced SDR intent should not be mixed blindly."],
      ["Low-value deals", "Small deals rarely justify a careful multichannel setup in a competitive market."],
      ["Message mismatch", "If the ad says UK and the page feels generic, conversion quality will suffer."],
    ],
    deliverablesTitle: "What you receive",
    deliverables: ["UK ICP fit check", "Keyword-to-page message recommendation", "First sequence angle", "Go/no-go view for the first test"],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Why not send UK traffic to the generic consultation page?",
        answer: "A generic page is useful as a fallback, but high-intent UK clicks need clearer market and buyer fit.",
      },
      {
        question: "Can devlo run UK outbound from Switzerland?",
        answer: "Yes, when the ICP, buyer roles and message are clear. The first test should stay small enough to validate quality.",
      },
      {
        question: "What happens if search volume is low?",
        answer: "We keep the campaign restrictive, review impression and search-term data, and only broaden if the signal is commercially useful.",
      },
    ],
    relatedLinks: [
      { label: "Outbound services", href: "/en/services/outbound-multichannel" },
      { label: "Consultation", href: "/en/consultation" },
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
    title: "Prospection commerciale B2B en France | devlo",
    description:
      "Prospection commerciale B2B en France : ICP, comptes cibles, séquences multicanales et rendez-vous qualifiés avec des décideurs.",
    eyebrow: "Prospection B2B en France",
    h1: "Générer des rendez-vous B2B en France sans campagne trop large",
    intro:
      "devlo aide les équipes B2B à tester le marché français avec un ciblage précis, des messages sobres et une logique de rendez-vous qualifiés.",
    badges: ["RGPD pris en compte", "ICP strict", "Rendez-vous qualifiés"],
    primaryCta: "Évaluer le potentiel",
    formTitle: "Recevez une lecture concrète du marché français",
    formIntro:
      "Décrivez votre offre, votre cible et vos régions prioritaires. Nous vérifions si un test France est suffisamment précis pour être lancé.",
    postForm: "Nous revenons avec les segments à prioriser et les risques à corriger avant lancement.",
    proofTitle: "Pourquoi une page dédiée France",
    proofRows: [
      ["Concurrence", "Le marché français est dense : une campagne trop large dilue vite le signal."],
      ["Conformité", "Le ciblage, les messages et les relances doivent rester compatibles avec le cadre RGPD B2B."],
      ["Exécution", "Email, LinkedIn et téléphone sont combinés seulement lorsque la donnée et le message sont prêts."],
    ],
    fitTitle: "Bon fit",
    fitIntro: "La France est pertinente lorsque l'offre vise des comptes B2B identifiables avec une valeur de deal suffisante.",
    fitItems: ["SaaS et logiciels B2B", "Cybersécurité et services IT", "Industrie et services techniques", "Conseil, formation et services professionnels"],
    methodTitle: "Comment cadrer le premier test",
    methodIntro:
      "Le bon test France ne cherche pas à couvrir tout le territoire. Il isole un segment où le message, le rôle décideur et la valeur sont clairs.",
    methodSteps: [
      { title: "Choisir le premier segment", body: "Nous séparons secteurs, tailles d'entreprise, régions et rôles avant d'ouvrir le budget." },
      { title: "Vérifier la donnée", body: "Les comptes et décideurs doivent être identifiables avant toute séquence." },
      { title: "Tester un angle commercial", body: "Le premier message doit permettre d'apprendre vite, pas seulement de générer des clics." },
    ],
    riskTitle: "Ce que nous filtrons",
    riskIntro: "Ces filtres évitent de lancer une campagne visible mais commercialement faible.",
    riskRows: [
      ["ICP trop large", "Une cible France entière sans vertical ni décideur prioritaire n'est pas assez exploitable."],
      ["Promesse générique", "La page doit parler du problème commercial réel, pas seulement de lead generation."],
      ["Qualification floue", "Sans critère de rendez-vous qualifié, le test ne permet pas de décider."],
    ],
    deliverablesTitle: "Ce que vous recevez",
    deliverables: ["Segments France à tester en premier", "Angles de séquence recommandés", "Risques RGPD et ciblage à vérifier", "Go/no-go pour une campagne paid search ou outbound"],
    faqTitle: "Questions",
    faqs: [
      {
        question: "Pourquoi ne pas utiliser uniquement la page France existante ?",
        answer:
          "La page France existante est utile pour l'organique. Une page paid doit être plus courte, plus directe et alignée sur une intention de campagne précise.",
      },
      {
        question: "Travaillez-vous uniquement en français ?",
        answer: "Pour la France, le premier test doit généralement être en français. L'anglais peut être ajouté pour des comptes internationaux ciblés.",
      },
      {
        question: "Quand faut-il éviter de lancer la France ?",
        answer: "Si l'ICP est trop large, si la valeur de deal est faible ou si la donnée décideur n'est pas fiable, il vaut mieux corriger avant de dépenser.",
      },
    ],
    relatedLinks: [
      { label: "Page France organique", href: "/prospection-commerciale-france" },
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
      "B2B-Leadgenerierung in der Deutschschweiz: ICP, Zielaccounts, Schweizer Hochdeutsch, Kaufsignale und qualifizierte Termine.",
    eyebrow: "B2B-Leadgenerierung in der Deutschschweiz",
    h1: "Qualifizierte B2B-Termine in der Deutschschweiz",
    intro:
      "devlo hilft B2B-Teams, die Deutschschweiz mit sauberer Segmentierung, Schweizer Hochdeutsch und einem messbaren Outbound-Test zu prüfen.",
    badges: ["Schweizer Markt", "Natürliches Deutsch", "Kein Massenversand"],
    primaryCta: "Potenzial prüfen",
    formTitle: "Erhalten Sie eine Einschätzung für die Deutschschweiz",
    formIntro:
      "Teilen Sie Angebot, Zielkunden und Region. Wir prüfen, ob Zürich, Basel, Bern, St. Gallen oder andere Segmente für einen ersten Test passen.",
    postForm: "Wir melden uns mit einer kurzen Einschätzung und den nächsten sinnvollen Schritten.",
    proofTitle: "Warum diese Seite anders ist",
    proofRows: [
      ["Sprache", "Schriftliche Kampagnen brauchen natürliches Schweizer Hochdeutsch, nicht eine direkte Übersetzung."],
      ["Marktlogik", "Die Deutschschweiz ist konzentrierter und präziser als ein breiter DACH-Test."],
      ["Umsetzung", "Daten, Botschaft und Qualifikation müssen stehen, bevor mehr Budget eingesetzt wird."],
    ],
    fitTitle: "Guter Fit",
    fitIntro: "Die Deutschschweiz passt, wenn das Angebot erklärungsbedürftig ist und klare Entscheiderrollen existieren.",
    fitItems: ["B2B-SaaS und Software", "Cybersecurity und IT-Services", "Industrie und technische Services", "Beratung, Training und Professional Services"],
    methodTitle: "Wie wir den ersten Test eingrenzen",
    methodIntro:
      "Der erste Test soll zeigen, ob ein bestimmtes Segment antwortet. Er soll nicht die ganze Deutschschweiz gleichzeitig abdecken.",
    methodSteps: [
      { title: "Region und ICP trennen", body: "Zürich, Basel, Bern und Ostschweiz werden nicht automatisch gleich behandelt." },
      { title: "Entscheider prüfen", body: "Rollen, Verantwortlichkeit und Erreichbarkeit werden vor der Sequenz geprüft." },
      { title: "Botschaft lokal machen", body: "Ton, Nutzenargument und Nachweise werden für Schweizer B2B-Entscheider angepasst." },
    ],
    riskTitle: "Was wir vermeiden",
    riskIntro: "Diese Risiken müssen vor einer Kampagne in der Deutschschweiz geklärt werden.",
    riskRows: [
      ["Deutscher Ton", "Deutschland-Copy wirkt in der Schweiz oft zu hart oder zu generisch."],
      ["Zu breite Region", "Ein DACH-Test darf die Deutschschweiz nicht mit Deutschland und Österreich vermischen."],
      ["Unklare Qualifikation", "Ohne klare Kriterien entstehen Gespräche, aber keine verwertbaren Opportunities."],
    ],
    deliverablesTitle: "Was Sie erhalten",
    deliverables: ["Priorisierte Region und ICP", "Erste Messaging-Hypothese", "Risiken für Daten, Ton und Qualifikation", "Empfehlung für den ersten Kampagnenbatch"],
    faqTitle: "Fragen",
    faqs: [
      {
        question: "Schreibt devlo auf Schweizerdeutsch?",
        answer:
          "Schriftliche B2B-Kampagnen laufen in natürlichem Schweizer Hochdeutsch. Sensible Formulierungen sollten vor Aktivierung nativ geprüft werden.",
      },
      {
        question: "Ist die Deutschschweiz dasselbe wie Deutschland?",
        answer: "Nein. Die Märkte teilen die Sprache, aber nicht die gleiche Geschäftskultur, Tonalität und Dichte.",
      },
      {
        question: "Wann sollte die Kampagne pausiert bleiben?",
        answer: "Wenn die deutsche Kopie nicht nativ geprüft ist oder der erste Zielmarkt noch zu breit ist.",
      },
    ],
    relatedLinks: [
      { label: "Deutschschweiz", href: "/de/b2b-prospecting-deutschschweiz" },
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
      "B2B-Leadgenerierung in Deutschland: ICP, Zielaccounts, Kaufsignale, Outbound-Sequenzen und qualifizierte Termine.",
    eyebrow: "B2B-Leadgenerierung in Deutschland",
    h1: "Deutschland testen, ohne DACH als einen Markt zu behandeln",
    intro:
      "devlo hilft B2B-Teams, Deutschland mit klarer Segmentierung, nativ geprüfter Copy und einem begrenzten ersten Outbound-Test zu prüfen.",
    badges: ["DACH getrennt", "Natürliches Deutsch", "Qualifizierte Termine"],
    primaryCta: "Deutschland prüfen",
    formTitle: "Erhalten Sie eine Einschätzung für Deutschland",
    formIntro:
      "Teilen Sie Zielkunden, Angebot und Wunschregion. Wir prüfen, ob der erste Test nach Stadt, Branche oder Buyer-Rolle eingegrenzt werden sollte.",
    postForm: "Wir melden uns mit einer Empfehlung für den ersten realistischen Kampagnenbatch.",
    proofTitle: "Warum Deutschland separat prüfen",
    proofRows: [
      ["Größe", "Deutschland ist groß genug, um Budget zu verlieren, wenn Segment und Region nicht getrennt werden."],
      ["Sprache", "Copy muss nativ und sachlich wirken, besonders bei erklärungsbedürftigen B2B-Angeboten."],
      ["DACH", "Deutschland, Österreich und Schweiz sollten nicht als ein einheitlicher Markt gestartet werden."],
    ],
    fitTitle: "Guter Fit",
    fitIntro: "Deutschland passt, wenn der Zielmarkt groß genug ist und die Buyer-Rolle klar identifiziert werden kann.",
    fitItems: ["B2B-SaaS", "Cybersecurity und IT", "Industrie und technische Lösungen", "Beratung und Professional Services"],
    methodTitle: "Wie wir den Test strukturieren",
    methodIntro:
      "Der erste Test wird nach Region, Branche oder Buyer-Rolle begrenzt. So bleibt das Ergebnis interpretierbar.",
    methodSteps: [
      { title: "Region wählen", body: "München, Berlin, Hamburg oder Frankfurt können je nach ICP sehr unterschiedliche Tests sein." },
      { title: "Buyer-Rolle festlegen", body: "Wir prüfen, wer tatsächlich Entscheidungsmacht oder Einfluss auf das Thema hat." },
      { title: "Sequenz testen", body: "Die erste Sequenz bleibt fokussiert, damit Antworten und Einwände verwertbar sind." },
    ],
    riskTitle: "Was wir vermeiden",
    riskIntro: "Deutschland lohnt sich nur, wenn der Test sauber begrenzt ist.",
    riskRows: [
      ["DACH-Vermischung", "Eine einzige Botschaft für Deutschland, Schweiz und Österreich ist meist zu ungenau."],
      ["Zu viel Volumen", "Mehr Reichweite hilft nicht, wenn Buyer-Rolle und Nutzenversprechen unklar sind."],
      ["Unbelegte Claims", "Ergebnisse und Referenzen dürfen nur genutzt werden, wenn sie belegbar und passend sind."],
    ],
    deliverablesTitle: "Was Sie erhalten",
    deliverables: ["Empfohlene erste Region oder Branche", "Buyer-Rollen und Qualifikationskriterien", "Messaging-Risiken", "Go/no-go für den ersten Test"],
    faqTitle: "Fragen",
    faqs: [
      {
        question: "Sollten Deutschland und Schweiz gemeinsam gestartet werden?",
        answer: "Nein, nicht im ersten Test. Die Märkte sollten getrennt werden, damit Ergebnisse und Einwände interpretierbar bleiben.",
      },
      {
        question: "Kann devlo in Deutschland prospecten?",
        answer: "Ja, mit nativ geprüfter deutscher Copy, sauberem ICP und klaren Kriterien für qualifizierte Termine.",
      },
      {
        question: "Wann ist Deutschland kein guter erster Markt?",
        answer: "Wenn das Angebot noch nicht klar positioniert ist oder die Zielgruppe zu breit definiert wurde.",
      },
    ],
    relatedLinks: [
      { label: "DACH-Seite", href: "/de/b2b-prospecting-dach" },
      { label: "Beratung", href: "/de/beratung" },
    ],
  },
  {
    key: "netherlands-nl",
    pageId: "paid-market:netherlands-nl",
    locale: "nl",
    path: "/nl/lp/b2b-prospectie-nederland",
    reviewer: "Victor",
    reviewStatus: "needs-review",
    market: "Nederland",
    marketLabel: "Nederland",
    title: "B2B prospectie Nederland | devlo",
    description:
      "B2B-prospectie in Nederland: ICP, doelaccounts, koopsignalen, outbound-sequenties en gekwalificeerde afspraken.",
    eyebrow: "B2B-prospectie in Nederland",
    h1: "B2B-afspraken in Nederland met een smalle outbound test",
    intro:
      "devlo helpt B2B-teams om Nederland sober te testen: duidelijke doelgroep, directe boodschap en alleen opschalen wanneer de eerste signalen kloppen.",
    badges: ["Directe toon", "Smalle test", "B2B only"],
    primaryCta: "Marktpotentieel bekijken",
    formTitle: "Ontvang een concrete inschatting voor Nederland",
    formIntro:
      "Deel uw aanbod, doelgroep en eerste marktkeuze. We bekijken of Nederland genoeg passende accounts heeft voor een serieuze test.",
    postForm: "We komen terug met een korte beoordeling en de meest logische volgende stap.",
    proofTitle: "Waarom Nederland apart behandelen",
    proofRows: [
      ["Toon", "Nederlandse B2B-copy moet direct, concreet en zonder overdreven claims zijn."],
      ["Markt", "Nederland kan snel reageren, maar alleen wanneer doelgroep en aanbod scherp zijn."],
      ["Uitvoering", "Data, bericht en kwalificatie worden eerst getest voordat het volume omhooggaat."],
    ],
    fitTitle: "Goede fit",
    fitIntro: "Nederland is interessant wanneer de propositie helder is en de beslisser goed te herkennen is.",
    fitItems: ["B2B SaaS en software", "IT- en cybersecuritydiensten", "Professionele diensten", "E-commerce, fintech en zakelijke services"],
    methodTitle: "Hoe we de eerste test beperken",
    methodIntro:
      "De eerste Nederlandse test moet genoeg focus hebben om te leren waarom prospects wel of niet reageren.",
    methodSteps: [
      { title: "Doelgroep afbakenen", body: "We kiezen eerst sector, bedrijfsgrootte en beslisserrol." },
      { title: "Boodschap verscherpen", body: "De copy blijft kort, concreet en buyer-facing." },
      { title: "Reacties kwalificeren", body: "Antwoorden en bezwaren bepalen of de campagne breder mag worden." },
    ],
    riskTitle: "Wat we vermijden",
    riskIntro: "Nederlandse kopers prikken snel door algemene of overdreven boodschappen heen.",
    riskRows: [
      ["Te Amerikaanse toon", "Superlatieven en vage beloftes verlagen vertrouwen."],
      ["Vage doelgroep", "Een brede Nederland-campagne zonder ICP levert weinig bruikbare signalen op."],
      ["Geen lokale toets", "De Nederlandse toon moet concreet en natuurlijk blijven voordat er budget op komt."],
    ],
    deliverablesTitle: "Wat u ontvangt",
    deliverables: ["Eerste Nederlandse ICP-keuze", "Aanbevolen bericht en kanaalmix", "Risico's voor toon en doelgroep", "Go/no-go voor een eerste test"],
    faqTitle: "Vragen",
    faqs: [
      {
        question: "Is deze pagina klaar om live advertenties op te krijgen?",
        answer: "De eerste versie moet nog inhoudelijk worden nagekeken voordat er budget wordt geactiveerd.",
      },
      {
        question: "Werkt devlo in het Nederlands?",
        answer: "devlo kan Nederlandstalige campagnes voorbereiden, maar de finale copy moet native worden gecontroleerd voor paid traffic.",
      },
      {
        question: "Wanneer moeten we Nederland niet starten?",
        answer: "Wanneer de doelgroep te breed is, de dealwaarde te laag is of de boodschap nog niet concreet genoeg is.",
      },
    ],
    relatedLinks: [
      { label: "Outbound diensten", href: "/nl/services/outbound-multichannel" },
      { label: "Consultatie", href: "/nl/adviesgesprek" },
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
