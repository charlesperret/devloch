import type { Metadata } from "next";

import { LegalPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Informations sur la collecte et le traitement des donnees personnelles.",
};

export default function Page() {
  return (
    <LegalPage
      title="Politique de confidentialite"
      sections={[
        {
          heading: "1. Donnees collecte",
          body: "Nous collectons les informations strictement necessaires pour traiter les demandes, planifier les rendez-vous et assurer le suivi commercial.",
        },
        {
          heading: "2. Finalites du traitement",
          body: "Les donnees sont utilisees pour qualifier les besoins B2B, personnaliser les echanges et ameliorer la performance des campagnes de prospection.",
        },
        {
          heading: "3. Conservation",
          body: "Les informations sont conservees pendant une duree proportionnee aux finalites contractuelles et legales puis supprimees ou anonymisees.",
        },
        {
          heading: "4. Partage",
          body: "Les donnees peuvent etre partagees avec des sous-traitants techniques de confiance agissant uniquement sur instruction et dans un cadre securise.",
        },
        {
          heading: "5. Vos droits",
          body: "Vous pouvez demander l'acces, la rectification ou la suppression de vos donnees en ecrivant a contact@devlo.ch.",
        },
      ]}
    />
  );
}
