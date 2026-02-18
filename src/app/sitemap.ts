import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "/",
  "/formation-prospection-b2b",
  "/academy-notre-appel",
  "/resultats",
  "/resultats-cas-etudes",
  "/blog",
  "/blog-list",
  "/politique-confidentialite",
  "/conditions-utilisation-academie",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/resultats") ? 0.9 : 0.8,
  }));

  const caseEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteConfig.url}/resultats/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticEntries, ...caseEntries];
}
