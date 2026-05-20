import type { Metadata } from "next";

import {
  getSwissPaidLandingContent,
  SwissGermanPaidLandingPage,
  swissPaidLandingAlternates,
} from "@/components/pages/swiss-german-paid-landing-page";
import { buildPageMetadata, toAbsoluteUrl } from "@/lib/seo/metadata";

const content = getSwissPaidLandingContent("fr");
const base = buildPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
  type: "website",
});

export const metadata: Metadata = {
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
    locale: "fr_CH",
    url: toAbsoluteUrl(content.path),
  },
};

export default function Page() {
  return <SwissGermanPaidLandingPage locale="fr" />;
}
