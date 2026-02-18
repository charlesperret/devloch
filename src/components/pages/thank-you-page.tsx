import Link from "next/link";

import { CaseStudiesGrid } from "@/components/pages/case-studies-grid";

type ThankYouPageProps = {
  title: string;
  message: string;
};

export function ThankYouPage({ title, message }: ThankYouPageProps) {
  return (
    <>
      <section className="mx-auto w-full max-w-screen-xl px-6 pt-10 lg:px-10">
        <div className="rounded-xl border border-stroke bg-white p-8 text-center shadow-soft">
          <h1 className="text-3xl font-semibold text-[#173a54] md:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#2a4b62]/80 md:text-base">{message}</p>
          <Link prefetch={false}
            href="/notrerendez-vous"
            className="mt-6 inline-flex h-10 items-center rounded-md bg-[#0a608e] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          >
            Planifier un appel
          </Link>
        </div>
      </section>

      <CaseStudiesGrid
        compact
        title="Decouvrez leurs resultats et nos etudes de cas"
        subtitle="Nous partageons une selection de missions representant differents secteurs B2B."
      />

      <section className="mx-auto w-full max-w-screen-xl px-6 pb-14 lg:px-10">
        <div className="rounded-xl border border-stroke bg-[#eef3f7] p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-[#173a54]">Contactez-nous pour booster vos ventes</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#2a4b62]/80">
            Une strategie claire, un suivi operationnel et une execution continue pour convertir vos
            cibles en rendez-vous qualifies.
          </p>
        </div>
      </section>
    </>
  );
}
