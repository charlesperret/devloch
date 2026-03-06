import type { Metadata } from "next";

import { AcademyMasterPage } from "@/components/pages/academy-master-page";
import { academySeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: academySeo.title.replace(/\s*\|\s*devlo$/i, ""),
  description: academySeo.description,
  path: "/formation-prospection-b2b",
});

export default function Page() {
  return <AcademyMasterPage />;
}
