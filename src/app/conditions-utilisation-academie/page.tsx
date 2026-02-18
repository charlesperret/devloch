import type { Metadata } from "next";

import { LegalPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Conditions utilisation academie",
  description: "Conditions d'utilisation de l'academie commerciale et de ses ressources.",
};

export default function Page() {
  return (
    <LegalPage
      title="Conditions dutilisation de lacademie"
      sections={[
        {
          heading: "1. Acces au programme",
          body: "L'acces aux contenus de l'academie est reserve aux participants inscrits et reste personnel, non cessible et non transferable.",
        },
        {
          heading: "2. Propriete intellectuelle",
          body: "Les supports pedagogiques, frameworks et templates sont proteges et ne peuvent pas etre redistribues sans autorisation ecrite.",
        },
        {
          heading: "3. Engagement participant",
          body: "Le participant sengage a utiliser les ressources de bonne foi et a respecter la confidentialite des informations partagees pendant les sessions.",
        },
        {
          heading: "4. Limitation",
          body: "Les resultats dependent de l'application operationnelle de la methode et de la maturite commerciale du participant.",
        },
      ]}
    />
  );
}
