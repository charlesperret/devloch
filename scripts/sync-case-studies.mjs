import fs from "node:fs/promises";
import path from "node:path";

import { load } from "cheerio";

const ROOT = "/Users/charlesperret/My Drive (charles@devlo.ch)/Onboarding/devlo-next";
const OUTPUT = path.join(ROOT, "src/lib/case-studies.data.json");
const HEROES_DIR = path.join(ROOT, "public/images/case-studies/heroes");
const LOGOS_DIR = path.join(ROOT, "public/images/case-studies/logos");

const EXISTING_CASES = [
  { slug: "logiciel-comptable-200k-ca", client: "Horus" },
  { slug: "hr-54-rendez-vous-dach", client: "CareerLunch" },
  { slug: "proprete-urbaine-71-rendez-vous", client: "Cortexia" },
  { slug: "biocarburants-52-rendez-vous", client: "Square Co" },
  { slug: "formation-14-rendez-vous", client: "Cegos" },
  { slug: "audiovisuel-16-rendez-vous", client: "Lemanvisio" },
  { slug: "cybersecurite-4500-entreprises", client: "Saporo" },
  { slug: "biodiversite-70-rendez-vous", client: "Apidae" },
  { slug: "mobilite-40-prospects", client: "Locky" },
  { slug: "merchandising-23-prospects", client: "Many Ways" },
  { slug: "immobilier-11-prospects", client: "HIAG" },
  { slug: "immobilier-30-prospects", client: "Abacus" },
];

function clean(value = "") {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[\u2000-\u200f\u202f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function parseHeroStats($) {
  const stats = [];
  const blocks = [
    [".desktopkeym .textkeym1", ".desktopkeym .textkeym2"],
    [".desktopkeym .textkeym21", ".desktopkeym .textkeym22"],
  ];

  for (const [valueSelector, labelSelector] of blocks) {
    const value = clean($(valueSelector).first().text());
    const label = clean($(labelSelector).first().text());
    if (value && label) {
      stats.push({ value, label });
    }
  }

  return stats;
}

function parseCampaignDetails($) {
  const details = [];

  $(".othdets > div").each((_, el) => {
    const label = clean($(el).find("h4").first().text());
    const value = clean($(el).find("p").first().text());
    if (label && value) {
      details.push({ label, value });
    }
  });

  return details;
}

function parseSections($) {
  const sections = [];

  $(".casestudybody .leftsec > div").each((_, el) => {
    const section = $(el);
    const heading = clean(section.find("h2").first().text());
    if (!heading) return;

    let paragraphs = section
      .children("p")
      .toArray()
      .map((p) => clean($(p).text()));

    if (!paragraphs.length) {
      paragraphs = section
        .find("p")
        .toArray()
        .map((p) => clean($(p).text()));
    }

    const bullets = section
      .find("li")
      .toArray()
      .map((li) => clean($(li).text()));

    sections.push({
      heading,
      paragraphs: unique(paragraphs),
      bullets: unique(bullets),
    });
  });

  return sections;
}

function deriveResultHighlights(sections, heroStats, campaignDetails) {
  const resultSection = sections.find((section) => /résultats|resultats/i.test(section.heading));

  if (resultSection) {
    const list = [...resultSection.bullets, ...resultSection.paragraphs].map(clean).filter(Boolean);
    if (list.length) return unique(list);
  }

  const fromHero = heroStats.map((item) => `${item.value} — ${item.label}`);
  if (fromHero.length) return fromHero;

  return campaignDetails.map((item) => `${item.label}: ${item.value}`);
}

function inferSector(campaignDetails) {
  const service = campaignDetails.find((item) => /services/i.test(item.label));
  return service?.value || "Prospection B2B";
}

async function downloadAsset(url, destinationDir, slug, type) {
  if (!url) return "";

  try {
    const urlObject = new URL(url);
    const extension = path.extname(urlObject.pathname) || ".png";
    const fileName = `${slug}-${type}${extension.toLowerCase()}`;
    const absoluteFilePath = path.join(destinationDir, fileName);
    const publicPath = `/images/case-studies/${type === "hero" ? "heroes" : "logos"}/${fileName}`;

    const response = await fetch(url);
    if (!response.ok) return url;

    const buffer = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(absoluteFilePath, buffer);

    return publicPath;
  } catch {
    return url;
  }
}

async function scrapeCase({ slug, client }) {
  const sourceUrl = `https://devlo.ch/resultats/${slug}/`;
  const response = await fetch(sourceUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${sourceUrl}`);
  }

  const html = await response.text();
  const $ = load(html);

  const title =
    clean($("meta[property='og:title']").attr("content")) || clean($("h1").first().text()) || `Étude de cas ${slug}`;

  const summary =
    clean($("meta[name='description']").attr("content")) ||
    clean($(".sub_title_contnet p").first().text()) ||
    "Étude de cas client.";

  const heroSubtitle = clean($(".sub_title_contnet p").first().text());
  const heroImageUrl = clean($("figure.mainimg img").attr("src") || "");
  const clientLogoUrl = clean($("figure.compimg.logoimg img").attr("src") || "");

  const heroStats = parseHeroStats($);
  const campaignDetails = parseCampaignDetails($);
  const sections = parseSections($);
  const resultHighlights = deriveResultHighlights(sections, heroStats, campaignDetails);
  const localHeroImage = await downloadAsset(heroImageUrl, HEROES_DIR, slug, "hero");
  const localClientLogo = await downloadAsset(clientLogoUrl, LOGOS_DIR, slug, "logo");

  return {
    slug,
    sourceUrl,
    title,
    summary,
    heroSubtitle,
    client,
    sector: inferSector(campaignDetails),
    heroImageUrl: localHeroImage,
    clientLogoUrl: localClientLogo,
    heroStats,
    campaignDetails,
    resultHighlights,
    sections,
  };
}

function monizzeCaseStudy() {
  return {
    slug: "monizze-120-rendez-vous",
    sourceUrl: "",
    title:
      "How devlo Booked 120 Qualified Meetings for Monizze by Targeting 7,000 HR, Finance, and Management Decision-Makers in Belgium",
    summary:
      "How devlo booked 120 qualified meetings for Monizze by targeting 7,000 HR, Finance, and Management decision-makers in Belgium.",
    heroSubtitle:
      "Back to Case Studies · 120 Meetings · Outbound campaign focused on HR, Finance, and management decision-makers in Belgium.",
    client: "Monizze",
    sector: "Employee benefits, meal vouchers",
    heroImageUrl: "",
    clientLogoUrl: "",
    heroStats: [
      { value: "120", label: "Meetings booked" },
      { value: "7,000", label: "Decision-makers targeted" },
      { value: "6,000+", label: "Leads contacted" },
    ],
    campaignDetails: [
      { label: "Services", value: "Employee benefits, meal vouchers" },
      {
        label: "Ideal Customer Profiles",
        value:
          "HR Managers and HR Directors, CFOs and Finance Directors, CEOs and Owners of smaller SMEs in Belgium.",
      },
      { label: "Contact person", value: "Anthony Crémer, Revenue Ops Analyst" },
    ],
    resultHighlights: [
      "6,000+ leads contacted",
      "120 meetings booked (1.6% meeting rate)",
      "Near-zero no-show rate thanks to inbox follow-ups",
      "152 people expressed clear interest",
      "96-99% email deliverability",
      "62.3% peaks of open rate on targeted batches",
    ],
    sections: [
      {
        heading: "About the Company",
        paragraphs: [
          "Monizze is a leading Belgian provider of digital employee benefits, including meal vouchers, eco vouchers, gift vouchers, and sports vouchers.",
        ],
        bullets: [],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Monizze previously relied only on cold calling through an external partner and had no internal outbound capabilities. They lacked the resources to run a structured outbound campaign targeting their full TAM.",
          "Their past partner delivered more meetings, but with lead quality issues and higher no-show rates.",
        ],
        bullets: [],
      },
      {
        heading: "The Strategy",
        paragraphs: [],
        bullets: [
          "Implemented a multichannel outbound approach using email + LinkedIn.",
          "Focused targeting on companies that are members of certain associations in Belgium.",
          "Prioritized Tier 1 decision makers: HR Managers, representing over 60% of all contacts reached.",
          "End-to-end inbox management with proactive and reactive responses, nurturing, and pre-qualification.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [],
        bullets: [
          "6,000+ leads contacted",
          "120 meetings booked (1.6% meeting rate)",
          "Near-zero no-show rate thanks to inbox follow-ups",
          "152 people expressed clear interest",
          "96-99% email deliverability",
          "62.3% peaks of open rate on targeted batches",
        ],
      },
      {
        heading: "Client Testimonial",
        paragraphs: [
          '"Working with devlo has been a real pleasure. Communication was very smooth and the team was always responsive when needed. Their personalized approach allowed us to combine volume and quality, even though the target audience was difficult to reach. There were virtually no no-shows, and appointments were always qualified and effective. The lessons learned from the campaigns are also instructive and very valuable."',
          "Anthony Crémer, Revenue Ops Analyst at Monizze",
        ],
        bullets: [],
      },
      {
        heading: "Key Takeaways",
        paragraphs: [],
        bullets: [
          "Timing and targeting mattered far more than heavy personalization.",
          "Choosing the right companies and decision makers drove most of the success.",
          "Inbox management was a critical success factor, contributing to the ultra-low no-show rate.",
          "Quality > Quantity: fewer meetings, but significantly more valuable outcomes.",
        ],
      },
    ],
  };
}

async function main() {
  await fs.mkdir(HEROES_DIR, { recursive: true });
  await fs.mkdir(LOGOS_DIR, { recursive: true });

  const scraped = [];
  for (const item of EXISTING_CASES) {
    scraped.push(await scrapeCase(item));
  }

  scraped.push(monizzeCaseStudy());

  await fs.writeFile(OUTPUT, JSON.stringify(scraped, null, 2) + "\n", "utf8");
  console.log(`Wrote ${scraped.length} case studies to ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
