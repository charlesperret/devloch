import type { Metadata } from "next";

import { ConsultationMasterPage } from "@/components/pages/consultation-master-page";
import { consultationSeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: consultationSeo.title.replace(/\s*\|\s*devlo$/i, ""),
  description: consultationSeo.description,
  path: "/notrerendez-vous",
});

export default function Page() {
  return <ConsultationMasterPage />;
}
