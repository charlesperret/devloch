import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, MapPin, Quote, ShieldCheck, Target, Users } from "lucide-react";

import { PaidAwareHubspotForm } from "@/components/shared/paid-aware-hubspot-form";
import { InfiniteLogoRail } from "@/components/shared/logo-rail";
import { paidMarketHubspot, type PaidMarketPage } from "@/content/paid-market-pages";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PaidMarketCaseStudyCarousel } from "@/components/pages/paid-market-case-study-carousel";

const homeLabel = {
  fr: "Accueil",
  en: "Home",
  de: "Startseite",
  nl: "Home",
} as const;

const pageLabel = {
  fr: "Page campagne",
  en: "Campaign page",
  de: "Kampagnenseite",
  nl: "Campagnepagina",
} as const;

const proofIcons = [MapPin, ShieldCheck, Users] as const;
const stepIcons = [Target, ClipboardCheck, CheckCircle2] as const;

export function PaidMarketLandingPage({ page }: { page: PaidMarketPage }) {
  const homePath = page.locale === "fr" ? "/" : `/${page.locale}`;
  const breadcrumbItems = [
    { name: homeLabel[page.locale], path: homePath },
    { name: pageLabel[page.locale], path: page.path },
  ];

  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-[#08384d] pb-12 pt-2 text-white md:pb-16">
        <Breadcrumb items={breadcrumbItems} variant="dark" />
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 pt-8 lg:grid-cols-[1fr_0.78fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">
              {page.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {page.badges.map((badge) => (
                <span key={badge} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                  {badge}
                </span>
              ))}
            </div>
            <a
              href="#paid-market-form"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#08384d] transition hover:bg-white/90"
            >
              {page.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div id="paid-market-form" className="rounded-lg border border-white/15 bg-white p-5 text-neutral-900 shadow-xl md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0b6c8f]">
              {page.marketLabel}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#153a54]">
              {page.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {page.formIntro}
            </p>
            <div className="mt-5">
              <PaidAwareHubspotForm
                portalId={paidMarketHubspot.portalId}
                formId={paidMarketHubspot.formId}
                region={paidMarketHubspot.region}
                targetId={`hubspot-${page.key}`}
                locale={page.locale}
              />
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">
              {page.postForm}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-7">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-neutral-500">
            {page.logosTitle}
          </p>
          <InfiniteLogoRail logos={page.logos} duration="slow" pauseOnHover />
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-10">
        <div className="mx-auto grid w-full max-w-screen-xl gap-4 px-6 md:grid-cols-3 lg:px-10">
          {page.proofRows.map(([label, detail], index) => {
            const Icon = proofIcons[index % proofIcons.length];
            return (
              <div key={label} className="rounded-lg border border-neutral-200 bg-white p-5">
                <Icon className="h-5 w-5 text-[#0b6c8f]" aria-hidden="true" />
                <h2 className="mt-4 text-base font-extrabold text-[#153a54]">{label}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0b6c8f]">
              {page.proofTitle}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#153a54]">
              {page.fitTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">
              {page.fitIntro}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.fitItems.map((item) => (
              <div key={item} className="flex min-h-16 items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#0b6c8f]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-12 md:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.methodTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.methodIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.methodSteps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              return (
                <div key={step.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-[#0b6c8f]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-extrabold text-[#153a54]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{step.body}</p>
                  <p className="mt-4 rounded-md border border-[#0b6c8f]/15 bg-[#e8f4f7] px-3 py-3 text-xs font-semibold leading-5 text-[#153a54]">
                    {step.artifact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.caseStudiesTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.caseStudiesIntro}</p>
          </div>

          <div className="mt-8">
            <PaidMarketCaseStudyCarousel
              locale={page.locale}
              featuredClients={page.caseStudies.map((study) => study.client)}
            />
          </div>

          <h2 className="mt-10 text-2xl font-extrabold text-[#153a54]">{page.testimonialsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.testimonials.map((testimonial) => (
              <figure key={`${testimonial.author}-${testimonial.company}`} className="rounded-lg border border-neutral-200 bg-[#08384d] p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.photoAlt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <Quote className="h-5 w-5 text-white/70" aria-hidden="true" />
                </div>
                <blockquote className="mt-4 text-sm leading-6 text-white/88">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-white/15 pt-4 text-sm">
                  <p className="font-extrabold">{testimonial.author}</p>
                  <p className="mt-1 text-white/72">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  {testimonial.note ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
                      {testimonial.note}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.riskTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.riskIntro}</p>
            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {page.riskRows.map(([label, detail]) => (
                    <tr key={label} className="border-b border-neutral-200 last:border-0">
                      <th className="w-[34%] bg-neutral-50 px-4 py-4 font-semibold text-[#153a54]">{label}</th>
                      <td className="px-4 py-4 leading-6 text-neutral-700">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-[#08384d] p-6 text-white md:p-8">
            <BarChart3 className="h-6 w-6 text-white" aria-hidden="true" />
            <h2 className="text-2xl font-extrabold">{page.deliverablesTitle}</h2>
            <ul className="mt-5 space-y-4">
              {page.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/86">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[1fr_0.7fr] lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.faqTitle}</h2>
            <div className="mt-6 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="p-5">
                  <h3 className="text-base font-extrabold text-[#153a54]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-[#153a54]">{page.marketLabel}</h2>
            <div className="mt-5 space-y-3">
              {page.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3 text-sm font-semibold text-[#153a54] transition hover:border-[#0b6c8f] hover:text-[#0b6c8f]">
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
