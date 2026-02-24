import type { MetadataRoute } from "next";

import { caseStudiesCards } from "@/content/masterfile.fr";
import { siteConfig } from "@/lib/site";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/etudes-de-cas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/consultation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/academy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/formation-prospection-b2b", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  const caseEntries: MetadataRoute.Sitemap = caseStudiesCards.map((study) => ({
    url: `${siteConfig.url}/etudes-de-cas/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticEntries, ...caseEntries];
}
