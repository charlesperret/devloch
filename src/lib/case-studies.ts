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
  title: string;
  summary: string;
  heroSubtitle: string;
  client: string;
  sector: string;
  heroImageUrl: string;
  clientLogoUrl: string;
  heroStats: CaseStudyStat[];
  campaignDetails: CaseStudyDetail[];
  resultHighlights: string[];
  sections: CaseStudySection[];
};

export const caseStudies = data as CaseStudy[];

export const caseStudyBySlug = Object.fromEntries(caseStudies.map((item) => [item.slug, item])) as Record<string, CaseStudy>;
