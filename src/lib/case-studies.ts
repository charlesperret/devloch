import data from "@/lib/case-studies.data.json";

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyDetail = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
};

export type CaseStudy = {
  slug: string;
  sourceUrl: string;
  sourceSlug?: string;
  legacySlugs?: string[];
  title: string;
  summary: string;
  heroSubtitle: string;
  client: string;
  sector: string;
  heroImageUrl: string;
  clientLogoUrl: string;
  testimonialPhotoUrl?: string;
  testimonialPhotoAlt?: string;
  testimonialVideo?: {
    wistiaMediaId: string;
    previewSrc: string;
    previewAlt: string;
    title?: string;
  };
  assetAudit?: {
    hero: "webp" | "legacy";
    logo: "webp" | "legacy";
    testimonialPhoto?: "webp" | "legacy";
  };
  migrationStatus?: "raw" | "premium" | "blocked";
  validationStatus?: "unknown" | "pass" | "warn" | "fail";
  serviceSlug?: string[];
  heroStats: CaseStudyStat[];
  campaignDetails: CaseStudyDetail[];
  resultHighlights: string[];
  editorialTitle?: string;
  summaryPoints?: string[];
  datePublished?: string;
  dateModified?: string;
  objectives?: string[];
  outcomes?: string[];
  sections: CaseStudySection[];
};

const serviceSlugMap: Record<string, string[]> = {
  "logiciel-comptable-200k-ca": ["outbound-multicanal", "cold-email", "linkedin-outreach"],
  "hr-54-rendez-vous-dach": ["outbound-multicanal", "cold-email", "prise-de-rendez-vous"],
  "proprete-urbaine-71-rendez-vous": ["outbound-multicanal", "cold-calling", "cold-email"],
  "biocarburants-52-rendez-vous": ["cold-email", "linkedin-outreach"],
  "formation-14-rendez-vous": ["cold-email", "prise-de-rendez-vous"],
  "audiovisuel-16-rendez-vous": ["cold-email", "cold-calling"],
  "cybersecurite-4500-entreprises": ["generation-leads", "cold-email", "linkedin-outreach"],
  "biodiversite-70-rendez-vous": ["outbound-multicanal", "cold-email"],
  "mobilite-40-prospects": ["cold-email", "linkedin-outreach"],
  "merchandising-23-prospects": ["cold-email", "prise-de-rendez-vous"],
  "immobilier-11-prospects": ["cold-email", "qualification-leads"],
  "immobilier-30-prospects": ["cold-email", "linkedin-outreach"],
  "monizze-120-rendez-vous": ["outbound-multicanal", "cold-calling", "cold-email"],
  "iddi-generation-leads-biotech-pharma": ["generation-leads", "cold-email", "linkedin-outreach"],
};

const rawStudies = data as CaseStudy[];

export const caseStudies: CaseStudy[] = rawStudies.map((study) => ({
  ...study,
  serviceSlug: serviceSlugMap[study.slug] ?? [],
}));

export const caseStudyBySlug = Object.fromEntries(caseStudies.map((item) => [item.slug, item])) as Record<string, CaseStudy>;
