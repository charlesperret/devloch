import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyBadge } from "@/components/shared/case-study-badge";
import { CaseStudyGrid } from "@/components/shared/case-study-grid";
import { CTASection } from "@/components/shared/cta-section";
import { FAQSection } from "@/components/shared/faq-section";
import { RelatedServices } from "@/components/shared/related-services";
import { ServiceBenefits } from "@/components/shared/service-benefits";
import { ServiceHero } from "@/components/shared/service-hero";
import { ServiceLeadPanel } from "@/components/shared/service-lead-panel";
import { ServiceProcess } from "@/components/shared/service-process";
import { ServiceSwitcher } from "@/components/shared/service-switcher";
import { ServicesSectionHeader, ServicesSurfaceCard, TrustedLogosRow } from "@/components/services/services-ui";
import { TRUSTED_LOGOS_STRIP } from "@/content/service-brand-assets";
import { ALL_CASE_STUDIES, type ServicePageData } from "@/content/services";
import { toAbsoluteUrl } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";

function buildServiceSchema(service: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navTitle,
    description: service.metadataDescription,
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: "https://devlo.ch",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CH",
      },
    },
    areaServed: ["CH", "BE", "FR", "DE", "AT", "NL"],
    url: toAbsoluteUrl(service.path),
  };
}

function resolveCaseStudyHref(client: string): string | undefined {
  const clientLower = client.toLowerCase();
  const match = ALL_CASE_STUDIES.find((item) => {
    const current = item.client.toLowerCase();
    return current.includes(clientLower) || clientLower.includes(current);
  });

  return match?.href;
}

type ServicePageProps = {
  service: ServicePageData;
};

export function ServicePageTemplate({ service }: ServicePageProps) {
  const caseStudiesForService = ALL_CASE_STUDIES.filter((study) => study.tags.includes(service.caseStudyTag));
  const quickFacts = [
    `${service.processSteps.length} étapes`,
    `${service.configuratorFields.length} leviers à configurer`,
    `${caseStudiesForService.length} études de cas liées`,
    `${service.faqItems.length} questions fréquentes`,
  ];

  const schemas = [
    buildServiceSchema(service),
    buildFaqPageSchema(service.faqItems),
    buildBreadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.navTitle, path: service.path },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <main>
        <ServiceHero
          title={service.pageTitle}
          subtitle={service.pageSubtitle}
          breadcrumbLabel={service.navTitle}
          paragraphs={service.heroParagraphs}
          quickFacts={quickFacts}
        />

        <section className="border-b border-neutral-200 bg-white py-4">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
            <div className="max-w-md">
              <ServiceSwitcher currentSlug={service.slug} />
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 md:px-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start lg:gap-10">
            <div className="space-y-6">
              <div id="ce-que-couvre" className="scroll-mt-32">
                <ServiceBenefits title={service.coverageTitle} items={service.coverageItems} />
              </div>
              <div id="processus" className="scroll-mt-32">
                <ServiceProcess title={service.processTitle} steps={service.processSteps} />
              </div>

              <ServicesSurfaceCard className="p-6 md:p-8">
                <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-devlo-900 md:text-4xl">{service.editorialTitle}</h2>
                <div className="mt-5 space-y-4 text-neutral-600">
                  {service.editorialParagraphs.map((paragraph, index) => (
                    <p key={`${service.slug}-editorial-${index}`} className="text-base leading-8 md:text-lg md:leading-9">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ServicesSurfaceCard>

              <ServicesSurfaceCard id="resultats" className="scroll-mt-32 p-6 md:p-8">
                <ServicesSectionHeader title={service.socialProofTitle} />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {service.socialProofItems.map((item) => (
                    <CaseStudyBadge
                      key={`${service.slug}-${item.client}`}
                      client={item.client}
                      result={item.result}
                      details={item.details}
                      href={resolveCaseStudyHref(item.client)}
                    />
                  ))}
                </div>
              </ServicesSurfaceCard>
            </div>

            <ServiceLeadPanel service={service} />
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-devlo-50 py-14 md:py-16">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
            <div className="space-y-8">
              <TrustedLogosRow logos={TRUSTED_LOGOS_STRIP} />
              <ServicesSectionHeader
                eyebrow="Études de cas"
                title="Preuves terrain sur ce service"
                description="Découvrez des campagnes réelles menées par devlo en Suisse, Belgique, France et DACH. Chaque étude de cas montre les résultats obtenus, la méthode utilisée et les enseignements opérationnels."
              />
              <CaseStudyGrid filterTag={service.caseStudyTag} />
            </div>
          </div>
        </section>

        <FAQSection id="faq" title={service.faqTitle} items={service.faqItems} />
        <RelatedServices currentSlug={service.slug} relatedSlugs={service.relatedServices} />
        <CTASection title={service.ctaTitle} subtitle={service.ctaSubtitle} />
      </main>
    </>
  );
}
