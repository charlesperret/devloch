import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { InfiniteLogoRail } from "@/components/shared/logo-rail";
import { ServicesSectionHeader, ServicesSurfaceCard } from "@/components/services/services-ui";
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
        <section className="relative overflow-hidden bg-white pt-12 md:pt-14">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-devlo-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-devlo-100/35 blur-3xl" />

          <SectionWrapper background="white" className="relative !bg-transparent !pb-4 !pt-0 md:!pb-5">
            <div className="max-w-4xl">
              <ServicesSectionHeader
                eyebrow="DEVLO.CH — AGENCE B2B SUISSE"
                title="Services de prospection et génération de leads B2B"
                description="devlo aide startups, PMEs et scale-ups à générer des rendez-vous qualifiés via des campagnes outbound multicanales, l'activation des signaux d'intention et une data commerciale exploitable."
              />

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500">
                Chaque service ci-dessous inclut un configurateur et un formulaire pour cadrer votre stratégie avant votre call.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#nos-services" className={buttonClassName("secondary", "px-7 py-3.5 text-sm")}>
                  Découvrir les services ↓
                </a>
                <Link href="/consultation" className={buttonClassName("primary", "px-7 py-3.5 text-sm")}>
                  Planifier votre consultation gratuite →
                </Link>
                <Link href="/etudes-de-cas" className={buttonClassName("secondary", "px-7 py-3.5 text-sm")}>
                  Voir nos résultats →
                </Link>
              </div>
            </div>

            <div className="relative my-[2cm] -mx-6 overflow-hidden md:-mx-12 lg:-mx-16">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
              <InfiniteLogoRail logos={TRUSTED_LOGOS_STRIP} duration="slow" pauseOnHover />
            </div>
          </SectionWrapper>
        </section>

        <SectionWrapper id="nos-services" background="white" className="!pt-0">
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

                  <h2 className="mt-4 text-2xl font-bold leading-tight text-devlo-900">{service.title}</h2>
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

        <SectionWrapper background="white" className="border-t border-neutral-200">
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
