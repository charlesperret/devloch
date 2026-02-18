import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/pages/case-study-page";
import { caseStudies, caseStudyBySlug } from "@/lib/case-studies";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudyBySlug[params.slug];
  if (!study) {
    return {
      title: "Etude de cas",
      description: "Detail d'une mission de prospection commerciale B2B.",
    };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default function Page({ params }: Params) {
  return <CaseStudyPage slug={params.slug} />;
}
