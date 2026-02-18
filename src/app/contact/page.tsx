import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/common/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Page contact de base pour migration visuelle.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="Route prete pour la page Contact"
      description="La structure formulaire est deja disponible dans les composants, il reste a coller au screenshot cible."
    />
  );
}
