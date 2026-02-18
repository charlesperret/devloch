import type { Metadata } from "next";

import { AcademyCallPage } from "@/components/pages/academy-call-page";

export const metadata: Metadata = {
  title: "Academie notre appel",
  description: "Prenez rendez-vous pour cadrer vos objectifs de prospection et votre plan daction.",
};

export default function Page() {
  return <AcademyCallPage />;
}
