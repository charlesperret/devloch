import type { Metadata } from "next";

import { HomePage } from "@/components/pages/home-page";
import { homeSeo } from "@/content/masterfile.fr";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeSeo.ogTitle,
    description: homeSeo.ogDescription,
    type: "website",
    locale: "fr_CH",
    url: "https://devlo.ch/",
  },
};

export default function Page() {
  return <HomePage />;
}
