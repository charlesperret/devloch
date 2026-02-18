import type { Metadata } from "next";

import { LeadFormPage } from "@/components/pages/lead-form-page";

export const metadata: Metadata = {
  title: "Telephone",
  description: "Formulaire de cadrage avant echange telephonique.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <LeadFormPage
      title="Definissons les attributs du profil de votre client ideal"
      intro={
        <>
          <p>
            Cette etape permet de gagner du temps sur notre appel et de construire une strategie adaptee a
            vos objectifs B2B.
          </p>
          <p>Merci de completer les informations principales avant notre prise de contact.</p>
        </>
      }
    />
  );
}
