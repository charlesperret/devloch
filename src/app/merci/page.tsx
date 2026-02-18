import type { Metadata } from "next";

import { ThankYouPage } from "@/components/pages/thank-you-page";

export const metadata: Metadata = {
  title: "Merci",
  description: "Confirmation de reception et acces aux etudes de cas clients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <ThankYouPage
      title="Merci"
      message="Les attributs de votre ICP sont bien recus. Pendant ce temps, decouvrez quelques exemples de campagnes outbound executees pour nos clients."
    />
  );
}
