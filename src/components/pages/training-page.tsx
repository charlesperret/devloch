import Link from "next/link";
import Image from "next/image";

import { WaveDivider } from "@/components/ui/wave-divider";
import { homeVisuals } from "@/lib/brand-assets";

const phases = [
  "Planifier des demos et rendez-vous qualifies",
  "Outreach multicanal et suivi des leads",
  "Ciblage ICP et personnalisation des messages",
  "Boucle d'amelioration continue avec KPI",
];

const benefits = [
  { value: "81", label: "Campagnes lancees" },
  { value: "34", label: "Cycles actifs" },
  { value: "+500", label: "Comptes engages" },
];

export function TrainingPage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6c879a]">Agence B2B</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#153a54] md:text-5xl">
            Augmentez vos ventes B2B, formalisez votre processus commercial.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#294a62]/85 md:text-base">
            Une methode operationnelle pour mieux cibler, contacter et convertir vos comptes prioritaires.
          </p>
          <Link prefetch={false}
            href="/academy-notre-appel"
            className="mt-7 inline-flex h-11 items-center rounded-md bg-[#0a608e] px-6 text-sm font-semibold text-white"
          >
            Planifier votre audit
          </Link>
        </div>
        <div className="rounded-xl border border-stroke bg-white p-4 shadow-soft">
          <Image
            src={homeVisuals.academyGif}
            alt="Presentation de l'academie devlo"
            width={1920}
            height={1080}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <WaveDivider />

      <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
        <div className="rounded-xl border border-stroke bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-[#153a54]">Etapes de la methode</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {phases.map((item) => (
              <div key={item} className="rounded-md border border-stroke bg-[#f7fafc] p-4 text-sm text-[#2a4b62]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Image
              src={homeVisuals.academyRoadmap}
              alt="Roadmap de la methode outbound"
              width={1120}
              height={630}
              className="h-auto w-full rounded-lg border border-stroke object-cover"
            />
            <Image
              src={homeVisuals.academyMacbook}
              alt="Visual academy sur ordinateur portable"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg border border-stroke object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0c587f] py-14 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">Appliquez lacademie pour un outbound coherent.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-cyan-100/90">
            Vous passez dune prospection opportuniste a un systeme mesure, documente et reproductible.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.label} className="rounded-lg border border-cyan-200/25 bg-[#0a4e72] p-6 text-center">
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-cyan-100/85">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider tone="dark" />

      <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
        <div className="rounded-xl border border-stroke bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-[#153a54]">FAQ</h2>
          <div className="mt-4 divide-y divide-stroke rounded-md border border-stroke">
            {[
              "Combien de temps avant les premiers resultats?",
              "Peut-on integrer la methode dans notre CRM?",
              "Quels profils peuvent suivre cette academie?",
            ].map((item) => (
              <details key={item} className="px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold text-[#193d56]">{item}</summary>
                <p className="mt-2 text-sm text-[#2a4b62]/80">
                  Reponse: nous adaptons la cadence a votre capacite commerciale et a la maturite du marche.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
