import type { Metadata } from "next";

import { CaseStudiesMasterPage } from "@/components/pages/case-studies-master-page";
import { caseStudiesSeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: caseStudiesSeo.title.replace(/\s*\|\s*devlo$/i, ""),
    description: caseStudiesSeo.description,
    path: "/resultats-cas-etudes",
  });
}

export default function Page() {
  return <CaseStudiesMasterPage />;
}
