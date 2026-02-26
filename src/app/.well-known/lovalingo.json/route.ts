import { NextResponse } from "next/server";

import { caseStudiesCards } from "@/content/masterfile.fr";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_4lsv3rhzupizsd64v86j2p8w38aeli92";

// Keep this list updated when adding/removing canonical static pages.
const staticRoutes = [
  "/",
  "/academy",
  "/consultation",
  "/conditions",
  "/etudes-de-cas",
] as const;

export function GET() {
  const pages = caseStudiesCards.map((study) => `/etudes-de-cas/${study.slug}`);

  return NextResponse.json(
    {
      publicAnonKey: LOVALINGO_PUBLIC_ANON_KEY,
      version: 1,
      generatedAt: new Date().toISOString(),
      framework: "next",
      defaultLocale: "fr",
      locales: ["fr", "en"],
      routing: "path",
      pathNormalizationRules: [
        {
          pattern: "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}",
          replacement: ":id",
        },
      ],
      routes: [
        ...staticRoutes.map((path) => ({ path, kind: "static" as const })),
        { path: "/etudes-de-cas/[slug]", kind: "dynamic" as const, params: ["slug"] },
      ],
      pages,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    },
  );
}
