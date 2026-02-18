import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/modele", "/merci", "/merci-prise-de-contact", "/telephone"],
      },
    ],
    sitemap: [`${siteConfig.url}/sitemap.xml`],
    host: siteConfig.url,
  };
}
