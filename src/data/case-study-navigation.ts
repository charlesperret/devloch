import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type CaseStudyNavigationDefinition = {
  slug: string;
  name: string;
  subtitles: Record<SupportedLocale, string>;
};

export type CaseStudyNavigationItem = CaseStudyNavigationDefinition & {
  href: string;
  subtitle: string;
};

export const caseStudyNavigationDefinitions: CaseStudyNavigationDefinition[] = [
  {
    slug: "hr-54-rendez-vous-dach",
    name: "CareerLunch",
    subtitles: {
      fr: "HR-Tech — DACH",
      en: "HR Tech — DACH",
      de: "HR-Tech — DACH",
      nl: "HR-Tech — DACH",
    },
  },
  {
    slug: "proprete-urbaine-71-rendez-vous",
    name: "Client confidentiel",
    subtitles: {
      fr: "Smart City / IA",
      en: "Smart City / AI",
      de: "Smart City / KI",
      nl: "Smart City / AI",
    },
  },
  {
    slug: "biocarburants-52-rendez-vous",
    name: "Square Co",
    subtitles: {
      fr: "Biocarburants",
      en: "Biofuels",
      de: "Biokraftstoffe",
      nl: "Biobrandstoffen",
    },
  },
  {
    slug: "formation-14-rendez-vous",
    name: "Cegos",
    subtitles: {
      fr: "Formation L&D",
      en: "L&D Training",
      de: "L&D-Training",
      nl: "L&D-Training",
    },
  },
  {
    slug: "audiovisuel-16-rendez-vous",
    name: "Lemanvisio",
    subtitles: {
      fr: "Audiovisuel",
      en: "Audiovisual",
      de: "Audiovisuell",
      nl: "Audiovisueel",
    },
  },
  {
    slug: "cybersecurite-4500-entreprises",
    name: "Saporo",
    subtitles: {
      fr: "Cybersécurité",
      en: "Cybersecurity",
      de: "Cybersicherheit",
      nl: "Cyberbeveiliging",
    },
  },
  {
    slug: "merchandising-23-prospects",
    name: "Many Ways",
    subtitles: {
      fr: "Merchandising",
      en: "Merchandising",
      de: "Merchandising",
      nl: "Merchandising",
    },
  },
  {
    slug: "biodiversite-70-rendez-vous",
    name: "Apidae",
    subtitles: {
      fr: "Biodiversité",
      en: "Biodiversity",
      de: "Biodiversität",
      nl: "Biodiversiteit",
    },
  },
  {
    slug: "logiciel-comptable-200k-ca",
    name: "Horus",
    subtitles: {
      fr: "Logiciel comptable — Belgique",
      en: "Accounting Software — Belgium",
      de: "Buchhaltungssoftware — Belgien",
      nl: "Boekhoudsoftware — België",
    },
  },
  {
    slug: "monizze-120-rendez-vous",
    name: "Monizze",
    subtitles: {
      fr: "Avantages extralégaux — Belgique",
      en: "Employee Benefits — Belgium",
      de: "Sozialleistungen — Belgien",
      nl: "Extralegale voordelen — België",
    },
  },
  {
    slug: "mobilite-40-prospects",
    name: "Locky",
    subtitles: {
      fr: "Mobilité — Belgique",
      en: "Mobility — Belgium",
      de: "Mobilität — Belgien",
      nl: "Mobiliteit — België",
    },
  },
  {
    slug: "immobilier-11-prospects",
    name: "HIAG",
    subtitles: {
      fr: "Immobilier commercial",
      en: "Commercial Real Estate",
      de: "Gewerbeimmobilien",
      nl: "Commercieel vastgoed",
    },
  },
  {
    slug: "immobilier-30-prospects",
    name: "Abacus",
    subtitles: {
      fr: "ERP immobilier — Suisse",
      en: "Real Estate ERP — Switzerland",
      de: "Immobilien-ERP — Schweiz",
      nl: "Vastgoed ERP — Zwitserland",
    },
  },
  {
    slug: "iddi-generation-leads-biotech-pharma",
    name: "IDDI",
    subtitles: {
      fr: "Pharma / Biotech",
      en: "Pharma / Biotech",
      de: "Pharma / Biotech",
      nl: "Pharma / Biotech",
    },
  },
];

export function getCaseStudyNavigationItems(locale: SupportedLocale): CaseStudyNavigationItem[] {
  return caseStudyNavigationDefinitions.map((study) => ({
    ...study,
    href: resolvePathForLocale(`/etudes-de-cas/${study.slug}`, locale).path,
    subtitle: study.subtitles[locale],
  }));
}
