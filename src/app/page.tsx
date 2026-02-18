import type { Metadata } from "next";

import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Agence de prospection B2B orientee acquisition et rendez-vous qualifies.",
};

export default function Page() {
  return <HomePage />;
}
