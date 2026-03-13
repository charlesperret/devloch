import type { Metadata } from "next";

import { AiSalesOpsMasterPage } from "@/components/pages/ai-sales-ops-master-page";
import { aiSalesOpsContent } from "@/content/ai-sales-ops";
import { buildLanguageAlternatesForFrPath } from "@/lib/i18n/slug-map";
import { toAbsoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

const pagePath = "/ai-sales-ops";
const socialTitle = `${aiSalesOpsContent.metaTitle} | devlo`;
const ogImagePath = "/images/devlo_OG_Banner.webp";

export const metadata: Metadata = {
  title: aiSalesOpsContent.metaTitle,
  description: aiSalesOpsContent.metaDescription,
  keywords: [
    "AI Sales Ops",
    "automatisation IA équipe commerciale",
    "automatisation prospection B2B",
    "infrastructure IA commerciale",
    "assistant IA sales",
    "automatisation CRM B2B",
    "gestion inbox IA",
    "meeting prep IA",
    "dashboard performance commerciale",
    "agence IA vente Suisse",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: pagePath,
    languages: buildLanguageAlternatesForFrPath(pagePath),
  },
  openGraph: {
    title: socialTitle,
    description: aiSalesOpsContent.metaDescription,
    url: toAbsoluteUrl(pagePath),
    siteName: siteConfig.name,
    type: "website",
    locale: "fr_CH",
    images: [
      {
        url: toAbsoluteUrl(ogImagePath),
        width: 1200,
        height: 630,
        alt: "AI Sales Ops par devlo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: aiSalesOpsContent.metaDescription,
    images: [toAbsoluteUrl(ogImagePath)],
  },
};

export default function AiSalesOpsPage() {
  return <AiSalesOpsMasterPage locale="fr" />;
}
