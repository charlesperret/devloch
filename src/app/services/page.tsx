import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { ServicesSectionHeader, ServicesSurfaceCard, TrustedLogosRow } from "@/components/services/services-ui";
import { CaseStudyGrid } from "@/components/shared/case-study-grid";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buttonClassName } from "@/components/ui/button";
import { TRUSTED_LOGOS_STRIP } from "@/content/service-brand-assets";
import { SERVICE_HUB_CARDS } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Services de prospection B2B : cold email, LinkedIn, calling",
    description:
      "devlo est une agence de prospection B2B basée en Suisse : génération de leads, cold email, LinkedIn outreach, cold calling, intent data et enrichissement Clay.",
    path: "/services",
  }),
  keywords: [
    "services prospection B2B",
    "agence outbound Suisse",
    "cold email LinkedIn calling",
    "intent data",
    "enrichissement Clay",
  ],
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-devlo-50/70 via-white to-white pt-24 md:pt-30">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-devlo-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-devlo-100/35 blur-3xl" />

          <SectionWrapper background="white" className="relative !bg-transparent !pb-12 !pt-0 md:!pb-14">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
              <div>
                <ServicesSectionHeader
                  eyebrow="DEVLO.CH — AGENCE B2B SUISSE"
                  title="Services de prospection et génération de leads B2B"
                  description="devlo aide startups, PMEs et scale-ups européennes à générer des rendez-vous qualifiés via des campagnes outbound multicanales, l'activation des signaux d'intention et une data commerciale exploitable."
                />

                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500">
                  Chaque service ci-dessous inclut un configurateur et un formulaire pour cadrer votre stratégie avant votre call.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/consultation" className={buttonClassName("primary", "px-7 py-3.5 text-sm")}>
                    Planifier votre consultation gratuite →
                  </Link>
                  <Link href="/etudes-de-cas" className={buttonClassName("secondary", "px-7 py-3.5 text-sm")}>
                    Voir nos résultats →
                  </Link>
                </div>
              </div>

              <ServicesSurfaceCard className="p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.09em] text-devlo-700">Aperçu des leviers</p>
                <div className="mt-4 grid gap-2.5">
                  {SERVICE_HUB_CARDS.slice(0, 6).map((service) => (
                    <Link
                      key={`hero-${service.href}`}
                      href={service.href}
                      className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm transition hover:border-devlo-600/35 hover:bg-devlo-50/45"
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-semibold text-devlo-900">{service.title}</span>
                        <span className="block truncate text-xs text-neutral-500">{service.subtitle}</span>
                      </span>
                      <span className="ml-3 text-devlo-700">→</span>
                    </Link>
                  ))}
                </div>
              </ServicesSurfaceCard>
            </div>

            <div className="mt-8">
              <TrustedLogosRow logos={TRUSTED_LOGOS_STRIP} />
            </div>
          </SectionWrapper>
        </section>

        <SectionWrapper background="white" className="pt-4 md:pt-6">
          <div className="flex items-center justify-between gap-4">
            <ServicesSectionHeader
              title="Nos services"
              description="10 offres complémentaires pour couvrir l'ensemble du cycle outbound."
            />
          </div>
        </SectionWrapper>

        <SectionWrapper background="white" className="pt-4 md:pt-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_HUB_CARDS.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <ServicesSurfaceCard className="h-full p-6 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-devlo-600/35 group-hover:shadow-panel">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden>
                      {service.icon}
                    </span>
                    <span className="text-sm font-semibold text-devlo-700 transition group-hover:translate-x-0.5">→</span>
                  </div>

                  <h2 className="mt-4 font-service-display text-2xl font-bold leading-tight text-devlo-900">{service.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">{service.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>

                  <div className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold text-devlo-700">✓ {service.kpi}</p>
                  </div>
                </ServicesSurfaceCard>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper background="light" className="border-t border-neutral-200">
          <div className="space-y-8">
            <ServicesSectionHeader
              title="Ils nous ont fait confiance"
              description="Résultats obtenus en Suisse, Belgique, France et DACH sur des environnements B2B exigeants."
            />

            <CaseStudyGrid />
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
