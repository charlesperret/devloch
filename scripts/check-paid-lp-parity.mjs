import fs from "node:fs";

const paidPages = fs.readFileSync("src/content/paid-market-pages.ts", "utf8");
const caseGrid = fs.readFileSync("src/components/pages/paid-market-case-study-grid.tsx", "utf8");

const expectedSharedBindings = [
  ["australia-en", "en"],
  ["uk-en", "en"],
  ["france-fr", "fr"],
  ["switzerland-de", "de"],
  ["germany-de", "de"],
  ["netherlands-nl", "nl"],
];

const expectedSharedProof = {
  fr: [
    ["APIDAE", "Externalisation de l'acquisition client", "70 rendez-vous qualifiés"],
    ["Cegos", "Prospection auprès de responsables Learning & Development", "14 rendez-vous qualifiés"],
    ["Saporo", "Prospection dans un secteur complexe", "16% d'intérêt rendez-vous"],
  ],
  en: [
    ["APIDAE", "Outsourced customer acquisition", "70 qualified meetings"],
    ["Cegos", "Prospecting to Learning & Development leaders", "14 qualified meetings"],
    ["Saporo", "Prospecting in a complex category", "16% meeting interest"],
  ],
  de: [
    ["APIDAE", "Ausgelagerte Kundengewinnung", "70 qualifizierte Termine"],
    ["Cegos", "Prospecting bei Learning-&-Development-Verantwortlichen", "14 qualifizierte Termine"],
    ["Saporo", "Prospecting in einer komplexen Kategorie", "16% Termininteresse"],
  ],
  nl: [
    ["APIDAE", "Uitbestede klantenwerving", "70 gekwalificeerde afspraken"],
    ["Cegos", "Prospecting richting Learning & Development-verantwoordelijken", "14 gekwalificeerde afspraken"],
    ["Saporo", "Prospecting in een complexe categorie", "16% afspraakinteresse"],
  ],
};

const failures = [];

for (const [key, locale] of expectedSharedBindings) {
  const pagePattern = new RegExp(`key:\\s*"${key}"[\\s\\S]*?caseStudies:\\s*SHARED_CASE_STUDIES\\.${locale},[\\s\\S]*?testimonials:\\s*SHARED_TESTIMONIALS\\.${locale},`);
  if (!pagePattern.test(paidPages)) {
    failures.push(`${key} does not use shared ${locale} case studies and testimonials`);
  }
}

for (const [locale, expectedCaseStudies] of Object.entries(expectedSharedProof)) {
  const sharedBlockMatch = paidPages.match(new RegExp(`const SHARED_CASE_STUDIES:[\\s\\S]*?${locale}: \\[([\\s\\S]*?)\\n  \\],`));
  const sharedBlock = sharedBlockMatch?.[1] ?? "";
  const positions = expectedCaseStudies.map(([client]) => sharedBlock.indexOf(`client: "${client}"`));

  if (positions.some((position) => position < 0) || !positions.every((position, index) => index === 0 || position > positions[index - 1])) {
    failures.push(`${locale} shared case studies are not ordered APIDAE, Cegos, Saporo`);
  }

  for (const [client, titleFragment, metricFragment] of expectedCaseStudies) {
    if (!sharedBlock.includes(titleFragment) || !sharedBlock.includes(metricFragment)) {
      failures.push(`${locale} ${client} shared proof does not contain the expected canonical title/metric fragments`);
    }
  }
}

const forbiddenPatterns = [
  /caseStudies:\s*\[/,
  /testimonials:\s*\[/,
  /open Australia/i,
  /market opening/i,
  /marktopening/i,
  /Proof we can show/i,
  /local case-study coverage/i,
  /Case studies behind the method/i,
  /behind the method/i,
  /Australia needs honest proof/i,
  /local Australian case-study/i,
  /Commercial meetings booked/i,
  /Commerciële afspraken/i,
  /Methode vor Ausführung/i,
  /aanbiedingen waarvoor de devlo-methode/i,
  /Outbound-prioriteringssysteem/i,
];

for (const pattern of forbiddenPatterns) {
  if (pattern.test(paidPages)) {
    failures.push(`forbidden paid-page text still present: ${pattern}`);
  }
}

if (!caseGrid.includes("const featured = caseStudies") || !caseGrid.includes("title: study.title") || !caseGrid.includes("metrics: study.metrics")) {
  failures.push("case-study grid no longer renders the paid-LP case-study text as the source of truth");
}

if (!caseGrid.includes("const ordered = [...featured, ...remaining];")) {
  failures.push("case-study grid no longer preserves the paid-LP featured order before remaining cards");
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exit(1);
}

console.log("PASS paid LP parity guard");
