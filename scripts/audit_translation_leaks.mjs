import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";

const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:4031";
const repoRoot = process.cwd();
const slugMapPath = path.join(repoRoot, "src/lib/i18n/slug-map.json");
const slugMap = JSON.parse(fs.readFileSync(slugMapPath, "utf8"));

const locales = ["en", "de", "nl"];

const commonVisibleMarkers = [
  "Stratégie complète",
  "Séquences email personnalisées",
  "Prospection LinkedIn",
  "Téléprospection externalisée",
  "Activation de signaux d'intention",
  "Data B2B multi-sources",
  "Lead gen + construction ICP",
  "SDR externalisé",
  "En savoir plus",
  "Voir toutes nos études de cas",
  "Cas client vérifié",
  "Cinq étapes, six leviers à configurer",
  "Deux études de cas liées",
  "Quatre questions fréquentes",
  "Suisse romande",
  "Fondateur",
  "Accueil",
  "Études de cas",
  "Consultation gratuite",
];

const localeVisibleMarkers = {
  en: [],
  de: ["Founder"],
  nl: ["Founder"],
};

const htmlMarkers = [
  "Lire la vidéo",
  "Fermer la vidéo",
  "5 étoiles",
  "Agence suisse spécialisée en prospection B2B",
  "Prospection commerciale B2B externalisée",
  "Génération de leads B2B et prise de rendez-vous qualifiés",
];

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function countMarkerHits(text, markers) {
  const hits = [];
  for (const marker of markers) {
    if (text.includes(marker)) {
      hits.push(marker);
    }
  }
  return hits;
}

async function fetchHtml(routePath) {
  const response = await fetch(`${baseUrl}${routePath}`, {
    signal: AbortSignal.timeout(15_000),
  });
  return {
    status: response.status,
    html: await response.text(),
  };
}

const routes = Object.values(slugMap)
  .flatMap((entry) => locales.map((locale) => entry[locale]).filter(Boolean))
  .filter((value, index, array) => array.indexOf(value) === index);

const results = [];

for (const [index, routePath] of routes.entries()) {
  const expectedLocale = routePath.startsWith("/en")
    ? "en"
    : routePath.startsWith("/de")
      ? "de"
      : "nl";

  const { status, html } = await fetchHtml(routePath);
  const $ = cheerio.load(html);
  $("script, style, noscript").remove();

  const lang = $("html").attr("lang") || "";
  const bodyText = normalizeWhitespace($("body").text());
  const visibleHits = countMarkerHits(bodyText, [
    ...commonVisibleMarkers,
    ...localeVisibleMarkers[expectedLocale],
  ]);
  const htmlHits = countMarkerHits(html, htmlMarkers);

  if (status !== 200 || lang !== expectedLocale || visibleHits.length || htmlHits.length) {
    results.push({
      routePath,
      status,
      lang,
      expectedLocale,
      visibleHits,
      htmlHits,
    });
  }

  if ((index + 1) % 40 === 0 || index + 1 === routes.length) {
    console.log(`progress ${index + 1}/${routes.length}`);
  }
}

if (!results.length) {
  console.log(`PASS ${routes.length} localized routes checked with no French leakage markers.`);
  process.exit(0);
}

console.log(`FAIL ${results.length} routes with translation issues out of ${routes.length} localized routes.`);
for (const result of results.slice(0, 60)) {
  console.log(
    JSON.stringify(
      {
        route: result.routePath,
        status: result.status,
        lang: result.lang,
        expectedLocale: result.expectedLocale,
        visibleHits: result.visibleHits,
        htmlHits: result.htmlHits,
      },
      null,
      2,
    ),
  );
}

process.exit(1);
