import type { Metadata } from "next";

import { CaseStudiesGrid } from "@/components/pages/case-studies-grid";

export const metadata: Metadata = {
  title: "Resultats cas etudes",
  description: "Vue d'ensemble des etudes de cas clients et des performances obtenues.",
  alternates: {
    canonical: "/resultats",
  },
};

export default function Page() {
  return (
    <CaseStudiesGrid
      title="Resultats et etudes de cas"
      subtitle="Une vue complete des cas clients traites en outbound B2B par notre agence."
    />
  );
}
