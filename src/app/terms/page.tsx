import type { Metadata } from "next";

import { LegalPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Conditions generales d'utilisation et cadre contractuel des services.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        {
          heading: "1. Terms",
          body: "By accessing this website and related services, you agree to the current terms and applicable laws in force.",
        },
        {
          heading: "2. Use license",
          body: "Permission is granted to temporarily view materials for personal business review only. Reproduction and redistribution are restricted.",
        },
        {
          heading: "3. Disclaimer",
          body: "Materials are provided as-is without warranties of any kind. Performance outcomes may vary depending on market and execution factors.",
        },
        {
          heading: "4. Limitations",
          body: "In no event shall the company be liable for indirect damages arising from use, inability to use, or business interruption.",
        },
        {
          heading: "5. Governing law",
          body: "These terms are governed by Swiss law and competent courts of the canton of Vaud where applicable.",
        },
      ]}
    />
  );
}
