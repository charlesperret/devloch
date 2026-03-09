import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { HomePage } from "@/components/pages/home-page";
import { homeContent, homeSeo } from "@/content/masterfile.fr";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema, buildVideoObjectSchema } from "@/lib/seo/schema-builders";

const homeTitle = homeSeo.title;

export const metadata: Metadata = buildPageMetadata({
  title: homeTitle,
  description: homeSeo.description,
  path: "/",
  imagePath: "/images/devlo_OG_Banner.webp",
});

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildFaqPageSchema(homeContent.faqs),
          buildVideoObjectSchema({
            name: "Témoignage client devlo — Stephan Nuzzolo, Abacus",
            description:
              "Découvrez comment devlo a généré 30 prospects qualifiés pour Abacus grâce à une campagne outbound multicanale en Suisse.",
            thumbnailUrl: "/images/video-thumb-abacus.webp",
            uploadDate: "2024-01-01",
            embedUrl: "https://fast.wistia.net/embed/iframe/cr7dgltkvu",
            duration: "PT2M",
          }),
          buildVideoObjectSchema({
            name: "Témoignage Cegos — 45% taux de réponse avec devlo",
            description:
              "Etienne Auvillain (DG Cegos) explique comment devlo a généré 14 rendez-vous qualifiés avec des décideurs R&D suisses.",
            thumbnailUrl: "/images/Cegos_banner.webp",
            uploadDate: "2024-01-01",
            embedUrl: "https://fast.wistia.net/embed/iframe/knadmb8za5",
            duration: "PT2M",
          }),
          buildVideoObjectSchema({
            name: "Témoignage Apidae — 70 rendez-vous qualifiés avec devlo",
            description:
              "Tanguy Coustaline (Président Apidae) présente comment devlo a obtenu 70 rendez-vous qualifiés avec des marques prestigieuses.",
            thumbnailUrl: "/images/APIDAE_banner.webp",
            uploadDate: "2024-01-01",
            embedUrl: "https://fast.wistia.net/embed/iframe/w9ews1v05q",
            duration: "PT2M",
          }),
        ]}
      />
      <HomePage />
    </>
  );
}
