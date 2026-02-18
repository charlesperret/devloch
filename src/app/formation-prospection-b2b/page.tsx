import type { Metadata } from "next";

import { TrainingPage } from "@/components/pages/training-page";

export const metadata: Metadata = {
  title: "Formation prospection B2B",
  description: "Programme pour structurer la prospection commerciale et accelerer les rendez-vous qualifies.",
};

export default function Page() {
  return <TrainingPage />;
}
