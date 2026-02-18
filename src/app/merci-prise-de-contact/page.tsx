import type { Metadata } from "next";

import { ThankYouPage } from "@/components/pages/thank-you-page";

export const metadata: Metadata = {
  title: "Merci prise de contact",
  description: "Confirmation de prise de contact et ressources complementaires.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <ThankYouPage
      title="Merci"
      message="Votre prise de contact est bien enregistree. Nous revenons vers vous rapidement avec une proposition adaptee."
    />
  );
}
