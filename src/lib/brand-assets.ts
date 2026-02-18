export type BrandLogo = {
  name: string;
  src: string;
  alt: string;
};

export const enterpriseLogos: BrandLogo[] = [
  { name: "ABB", src: "/images/home/logos/abb.png", alt: "ABB logo" },
  { name: "Adecco", src: "/images/home/logos/adecco.png", alt: "Adecco logo" },
  { name: "Apple", src: "/images/home/logos/apple.png", alt: "Apple logo" },
  { name: "BCF", src: "/images/home/logos/bcf.png", alt: "BCF logo" },
  { name: "BHP", src: "/images/home/logos/bhp.png", alt: "BHP logo" },
  { name: "DPD", src: "/images/home/logos/dpd.png", alt: "DPD logo" },
  { name: "Hublot", src: "/images/home/logos/hublot.png", alt: "Hublot logo" },
  { name: "Implenia", src: "/images/home/logos/implenia.png", alt: "Implenia logo" },
  {
    name: "LafargeHolcim",
    src: "/images/home/logos/lafargeholcim.png",
    alt: "LafargeHolcim logo",
  },
  {
    name: "Lombard Odier",
    src: "/images/home/logos/lombard-odier.png",
    alt: "Lombard Odier logo",
  },
  { name: "Longines", src: "/images/home/logos/longines.png", alt: "Longines logo" },
  { name: "Merck", src: "/images/home/logos/merck.png", alt: "Merck logo" },
];

export const caseStudyLogos: BrandLogo[] = [
  { name: "Square Co", src: "/images/home/brands/squareco.png", alt: "Square Co logo" },
  { name: "Saporo", src: "/images/home/brands/saporo.png", alt: "Saporo logo" },
  { name: "Many Ways", src: "/images/home/brands/many-ways.png", alt: "Many Ways logo" },
  { name: "Locky", src: "/images/home/brands/locky.png", alt: "Locky logo" },
  { name: "Lemanvisio", src: "/images/home/brands/lemanvisio.png", alt: "Lemanvisio logo" },
  { name: "HIAG", src: "/images/home/brands/hiag.png", alt: "HIAG logo" },
  { name: "Cegos", src: "/images/home/brands/cegos.png", alt: "Cegos logo" },
  { name: "CareerLunch", src: "/images/home/brands/careerlunch.png", alt: "CareerLunch logo" },
  { name: "Apidae", src: "/images/home/brands/apidae.png", alt: "Apidae logo" },
  { name: "Abacus", src: "/images/home/brands/abacus.png", alt: "Abacus logo" },
];

export const homeVisuals = {
  hero: "/images/home/academy/web-showcase.jpg",
  academyCover: "/images/home/academy/cover-mac.png",
  academyGif: "/images/home/academy/academy.gif",
  caseVideo: "/images/home/academy/careerlunch-banner.jpg",
  partnerBadge: "/images/home/academy/partner-badge.webp",
} as const;

const explicitCompanyByFileStem: Record<string, string> = {
  logo_abb: "ABB",
  logo_adecco: "Adecco",
  logo_apple: "Apple",
  logo_bcf: "BCF",
  logo_bhp: "BHP",
  logo_dpd: "DPD",
  logo_hublot: "Hublot",
  logo_implenia: "Implenia",
  logo_lafargeholcim: "LafargeHolcim",
  logo_lombard_odier: "Lombard Odier",
  logo_longines: "Longines",
  logo_merck: "Merck",
  "0000_squareco_logo": "Square Co",
  "0001_saporo-logo": "Saporo",
  "0002_many-ways_logo": "Many Ways",
  "0003_locky_logo": "Locky",
  "0004_lemanvisio_logo": "Lemanvisio",
  "0005_hiag_logo": "HIAG",
  "0006_cegos_logo": "Cegos",
  "0007_careerlunch_logo": "CareerLunch",
  "0008_apidae_logo_2": "Apidae",
  "0009_abacus_logo": "Abacus",
};

export function identifyCompanyFromAssetName(fileName: string): string | null {
  const stem = fileName
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^_+/, "");

  if (explicitCompanyByFileStem[stem]) {
    return explicitCompanyByFileStem[stem];
  }

  // Covers Asset_XX, logo-XX, etc. if the company is embedded in the file name.
  for (const [key, company] of Object.entries(explicitCompanyByFileStem)) {
    if (stem.includes(key) || key.includes(stem)) {
      return company;
    }
  }

  return null;
}
