import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getSwissPaidLandingContent,
  SwissGermanPaidLandingPage,
  swissPaidLandingAlternates,
} from "@/components/pages/swiss-german-paid-landing-page";
import { buildPageMetadata, toAbsoluteUrl } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const content = getSwissPaidLandingContent("en");
  const base = buildPageMetadata({
    title: content.title,
    description: content.description,
    path: content.path,
    type: "website",
  });

  return {
    ...base,
    title: content.title,
    description: content.description,
    alternates: {
      canonical: content.path,
      languages: swissPaidLandingAlternates,
    },
    openGraph: {
      ...base.openGraph,
      title: `${content.title} | devlo`,
      description: content.description,
      locale: "en_GB",
      url: toAbsoluteUrl(content.path),
    },
    twitter: {
      ...base.twitter,
      title: content.title,
      description: content.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  return <SwissGermanPaidLandingPage locale="en" />;
}
