import type { Metadata } from "next";

import { LeadFormPage } from "@/components/pages/lead-form-page";

export const metadata: Metadata = {
  title: "Notre rendez-vous",
  description: "Formulaire de qualification pour preparer une strategie de prospection personnalisee.",
};

export default function Page() {
  return (
    <LeadFormPage
      title="Definissons les attributs du profil de votre client ideal"
      intro={
        <>
          <p>
            En amont de notre rencontre, nous preparons plusieurs strategies de prospection personnalisees
            en fonction de votre profil de client ideal.
          </p>
          <p>
            Nous revenons vers vous tres rapidement pour explorer vos pistes lors de notre rendez-vous.
          </p>
        </>
      }
    />
  );
}
