import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Thank-you / post-conversion pages
          "/merci",
          "/merci-prise-de-contact",
          // Booking / scheduling pages (no SEO value)
          "/notrerendez-vous",
          "/academy-notre-appel",
          "/telephone",
          // Internal / template pages
          "/modele",
          // Legacy / duplicate listing pages
          "/resultats-cas-etudes",
          "/blog-list",
        ],
      },
    ],
    sitemap: [`${siteConfig.url}/sitemap.xml`],
    host: siteConfig.url,
  };
}
