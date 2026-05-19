import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SwissGermanPaidLandingPage } from "@/components/pages/swiss-german-paid-landing-page";
import { buildPageMetadata, toAbsoluteUrl } from "@/lib/seo/metadata";

const pagePath = "/de/leadgenerierung-agentur-schweiz";
const title = "Leadgenerierung Agentur Schweiz";
const description =
  "B2B-Leadgenerierung in der Deutschschweiz: ICP, Zielaccounts, Kaufsignale und Sequenzen prüfen lassen. Kostenloser Readout von devlo.";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};

  const base = buildPageMetadata({
    title,
    description,
    path: pagePath,
    type: "website",
  });

  return {
    ...base,
    title,
    description,
    alternates: {
      canonical: pagePath,
      languages: {
        de: pagePath,
        "x-default": pagePath,
      },
    },
    openGraph: {
      ...base.openGraph,
      title: `${title} | devlo`,
      description,
      locale: "de_CH",
      url: toAbsoluteUrl(pagePath),
    },
    twitter: {
      ...base.twitter,
      title,
      description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return <SwissGermanPaidLandingPage />;
}
