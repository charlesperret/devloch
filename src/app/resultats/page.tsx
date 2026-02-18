import type { Metadata } from "next";

import { CaseStudiesGrid } from "@/components/pages/case-studies-grid";

export const metadata: Metadata = {
  title: "Resultats",
  description: "Resultats et etudes de cas clients en prospection commerciale B2B.",
};

export default function Page() {
  return (
    <CaseStudiesGrid
      title="Resultats et etudes de cas"
      subtitle="Decouvrez des missions de prospection commerciale avec des resultats concrets sur plusieurs secteurs."
    />
  );
}
