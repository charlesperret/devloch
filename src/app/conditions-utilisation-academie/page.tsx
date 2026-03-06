import type { Metadata } from "next";

import { ConditionsMasterPage } from "@/components/pages/conditions-master-page";
import { conditionsSeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: conditionsSeo.title.replace(/\s*\|\s*devlo$/i, ""),
  description: conditionsSeo.description,
  path: "/conditions-utilisation-academie",
});

export default function Page() {
  return <ConditionsMasterPage />;
}
