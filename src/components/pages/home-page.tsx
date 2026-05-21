import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  CalendarCheck,
  Database,
  Gauge,
  Globe,
  Handshake,
  Languages,
  LayoutTemplate,
  PenTool,
  PiggyBank,
  RefreshCw,
  Rocket,
  Send,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

import { WrittenTestimonialsCarousel } from "@/components/home/written-testimonials-carousel";
import { AuthorByline } from "@/components/shared/author-byline";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { FAQSection } from "@/components/shared/faq-section";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SummarySection } from "@/components/shared/summary-section";
import { InfiniteLogoRail, namesToLogoItems } from "@/components/shared/logo-rail";
import { RichParagraph } from "@/lib/utils/rich-text";
import { buttonClassName } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll";
import { WaveDivider } from "@/components/ui/wave-divider";
import { WistiaThumbnailTrigger } from "@/components/ui/wistia-thumbnail-trigger";
import { caseStudiesCards, homeContent } from "@/content/masterfile.fr";
import type { CaseStudyCard as MasterCaseStudyCard } from "@/content/masterfile.fr";
import { SERVICE_HUB_CARDS, type ServiceHubCard } from "@/content/services";
import { FeedbackLoopDiagram } from "@/components/home/feedback-loop-diagram";

const noRecruitIcons = [Target, PiggyBank, Rocket] as const;
const whyIcons = [
  LayoutTemplate,
  Zap,
  Gauge,
  PiggyBank,
  Rocket,
  Handshake,
  Languages,
  ShieldCheck,
] as const;
const nativeSwissIcons = [Languages, Globe, Handshake] as const;
const methodIconMap = {
  Target,
  PenTool,
  LayoutTemplate,
  Database,
  Send,
  CalendarCheck,
} as const;

const DeferredCaseStudiesCarousel = dynamic(
  () => import("@/components/home/case-studies-carousel").then((module) => module.CaseStudiesCarousel),
  {
    loading: () => <div className="mt-10 h-[360px] rounded-2xl border border-neutral-200 bg-white/70" />,
  },
);

const DeferredServicesCarousel = dynamic(
  () => import("@/components/home/services-carousel").then((module) => module.ServicesCarousel),
  {
    loading: () => <div className="mt-10 h-[320px] rounded-2xl border border-neutral-200 bg-white/70" />,
  },
);

 
function ClientsRailRow({ names, reverse = false }: { names: string[]; reverse?: boolean }) {
  return <InfiniteLogoRail logos={namesToLogoItems(names)} pauseOnHover reverse={reverse} duration="slow" />;
}

type HomeContentData = typeof homeContent & {
  homeSummaryTitle?: string;
  homeSummaryPoints?: string[];
  homeComparisonTable?: { caption: string; headers: string[]; rows: Array<{ criterion: string; colA: string; colB: string }> };
  homeAuthor?: { datePublished: string; dateModified: string };
  qualifiedLeadSection?: {
    eyebrow: string;
    title: string;
    answer: string;
    description: string;
    tableCaption: string;
    headers: string[];
    rows: Array<{ criterion: string; signal: string; qualification: string }>;
    cta: { label: string; href: string };
  };
  nativeSwissSection?: {
    eyebrow: string;
    title: string;
    answer: string;
    cards: Array<{ title: string; text: string }>;
    proof: string;
  };
};

type HomeContentProps = {
  content?: HomeContentData;
  studies?: MasterCaseStudyCard[];
  serviceCards?: ServiceHubCard[];
  locale?: "fr" | "en" | "de" | "nl";
};

const caseStudiesTitleByLocale = {
  fr: "Nos études de cas",
  en: "Our case studies",
  de: "Unsere Fallstudien",
  nl: "Onze praktijkvoorbeelden",
} as const;

const servicesTitleByLocale = {
  fr: "Nos services",
  en: "Our services",
  de: "Unsere Leistungen",
  nl: "Onze diensten",
} as const;

function normalizeMetricSeparator(value: string): string {
  return value.replace(/\s-\s\+/g, " · +").replace(/\s-\s/g, " · ");
}

export function HomePage({
  content = homeContent,
  studies = caseStudiesCards,
  serviceCards = SERVICE_HUB_CARDS,
  locale = "fr",
}: HomeContentProps) {
  const noRecruitCards = content.noRecruitCards;
  const methodSteps = content.methodSteps;
  const whyCards = content.whyCards;
  const writtenTestimonials = content.writtenTestimonials;
  const rendezVousRowCount = 3;
  const rendezVousPerRow = Math.ceil(content.rendezVousLogos.length / rendezVousRowCount);
  const rendezVousRows = Array.from({ length: rendezVousRowCount }, (_, index) =>
    content.rendezVousLogos.slice(index * rendezVousPerRow, (index + 1) * rendezVousPerRow),
  ).filter((row) => row.length > 0);
  const qualifiedLeadSection = content.qualifiedLeadSection;
  const nativeSwissSection = content.nativeSwissSection;

  return (
    <>
      <section className="bg-white pb-10 pt-12 md:pt-20 lg:pt-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-12">
          <div className="min-w-0">
            <FadeInOnScroll eager>
              <p className="block w-full max-w-[calc(100vw-3rem)] whitespace-normal break-words rounded-full bg-devlo-100 px-4 py-1.5 text-sm font-semibold leading-snug text-devlo-700 sm:inline-flex sm:w-fit sm:max-w-full sm:flex-nowrap sm:items-center sm:gap-x-2">
                {normalizeMetricSeparator(content.hero.badge)}
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.1} eager>
              <h1 className="mt-5 max-w-[calc(100vw-3rem)] break-words text-[30px] font-extrabold leading-[1.1] tracking-tight text-devlo-900 md:max-w-5xl md:text-5xl lg:text-[56px]">
                {content.hero.h1}
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2} eager>
              <h2 className="mt-5 text-xl font-semibold leading-relaxed text-devlo-700 md:text-2xl">{content.hero.h2}</h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3} eager>
              <RichParagraph className="mt-4 text-lg leading-relaxed text-neutral-600">{content.hero.paragraph}</RichParagraph>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4} eager>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={content.hero.ctaPrimary.href} className={buttonClassName("primary", "px-8 py-4 text-base")}> 
                  {content.hero.ctaPrimary.label}
                </Link>
                <Link href={content.hero.ctaSecondary.href} className={buttonClassName("secondary", "px-8 py-4 text-base")}>
                  {content.hero.ctaSecondary.label}
                </Link>
                <Link href={content.hero.ctaServices.href} className={buttonClassName("secondary", "px-8 py-4 text-base")}>
                  {content.hero.ctaServices.label}
                </Link>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.5} eager>
              <p className="mt-5 text-sm font-semibold text-neutral-600">{normalizeMetricSeparator(content.hero.microProof)}</p>
            </FadeInOnScroll>
            <div className="mt-4">
              <AuthorByline
                datePublished={content.homeAuthor?.datePublished}
                dateModified={content.homeAuthor?.dateModified}
                locale={locale}
              />
            </div>
          </div>

          <FadeInOnScroll delay={0.2} direction="right" eager>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-panel">
              <WistiaThumbnailTrigger
                videoId={content.hero.wistiaMediaId}
                title={content.hero.h1}
                previewSrc={content.hero.posterSrc}
                previewAlt={content.hero.posterAlt}
                locale={locale}
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 768px) 88vw, 100vw"
                className="bg-white"
              />
            </div>
            <Link
              href={content.hero.videoTestimonial.href}
              className="mt-4 block rounded-xl border border-neutral-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-panel"
            >
              <p className="text-sm font-semibold text-devlo-900">{content.hero.videoTestimonial.line}</p>
              <p className="mt-2 text-sm font-semibold text-devlo-900">{content.hero.videoTestimonial.client}</p>
              <p className="mt-1 text-sm text-neutral-600">
                {content.hero.videoTestimonial.role}, {content.hero.videoTestimonial.company}
              </p>
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {qualifiedLeadSection ? (
        <SectionWrapper background="light" className="py-[64px] md:py-[88px]">
          <div className="mx-auto grid max-w-6xl min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <FadeInOnScroll className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-devlo-700">
                {qualifiedLeadSection.eyebrow}
              </p>
              <h2 className="mt-3 max-w-full break-words text-[28px] font-bold leading-[1.2] text-devlo-900 md:text-4xl">
                {qualifiedLeadSection.title}
              </h2>
              <p className="mt-4 max-w-full break-words rounded-xl border border-devlo-100 bg-white p-4 text-base font-semibold leading-7 text-devlo-800 shadow-soft">
                {qualifiedLeadSection.answer}
              </p>
              <p className="mt-4 max-w-full break-words text-base leading-7 text-neutral-600">
                {qualifiedLeadSection.description}
              </p>
              <Link
                href={qualifiedLeadSection.cta.href}
                className={buttonClassName("primary", "mt-6 px-6 py-3 text-sm")}
              >
                {qualifiedLeadSection.cta.label}
              </Link>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.15} className="min-w-0">
              <div className="grid gap-3 md:hidden">
                <p className="sr-only">{qualifiedLeadSection.tableCaption}</p>
                {qualifiedLeadSection.rows.map((row) => (
                  <article key={`mobile-${row.criterion}`} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft">
                    <h3 className="text-base font-semibold text-devlo-900">{row.criterion}</h3>
                    <dl className="mt-3 space-y-3">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">
                          {qualifiedLeadSection.headers[1]}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600">{row.signal}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">
                          {qualifiedLeadSection.headers[2]}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-neutral-600">{row.qualification}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>

              <div className="hidden w-full max-w-full min-w-0 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-soft md:block">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <caption className="sr-only">{qualifiedLeadSection.tableCaption}</caption>
                  <thead className="bg-devlo-900 text-white">
                    <tr>
                      {qualifiedLeadSection.headers.map((header) => (
                        <th key={header} scope="col" className="px-4 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {qualifiedLeadSection.rows.map((row) => (
                      <tr key={row.criterion} className="align-top">
                        <th scope="row" className="w-[28%] px-4 py-4 font-semibold text-devlo-900">
                          {row.criterion}
                        </th>
                        <td className="px-4 py-4 leading-6 text-neutral-600">{row.signal}</td>
                        <td className="px-4 py-4 leading-6 text-neutral-600">{row.qualification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInOnScroll>
          </div>
        </SectionWrapper>
      ) : null}

      {nativeSwissSection ? (
        <SectionWrapper background="white" className="py-[64px] md:py-[96px]">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <FadeInOnScroll className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-devlo-700">
                {nativeSwissSection.eyebrow}
              </p>
              <h2 className="mt-3 max-w-full break-words text-[28px] font-bold leading-[1.2] text-devlo-900 md:text-4xl">
                {nativeSwissSection.title}
              </h2>
              <p className="mt-4 max-w-full break-words rounded-xl border border-devlo-100 bg-devlo-50 p-4 text-base font-semibold leading-7 text-devlo-800">
                {nativeSwissSection.answer}
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-neutral-600">
                {nativeSwissSection.proof}
              </p>
            </FadeInOnScroll>

            <div className="grid min-w-0 gap-4 md:grid-cols-3 lg:grid-cols-1">
              {nativeSwissSection.cards.map((card, index) => {
                const Icon = nativeSwissIcons[index] ?? Languages;
                return (
                  <FadeInOnScroll key={card.title} delay={index * 0.1}>
                    <article className="h-full rounded-xl border border-neutral-200 bg-white p-5 shadow-soft">
                      <Icon className="h-6 w-6 text-devlo-700" aria-hidden />
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-devlo-900">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">{card.text}</p>
                    </article>
                  </FadeInOnScroll>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      ) : null}

      <SectionWrapper background="white" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.rendezVousTitle}</h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <div className="relative mt-10 space-y-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
            {rendezVousRows.map((logos, index) => (
              <InfiniteLogoRail key={`rendez-vous-row-${index}`} logos={logos} reverse={index % 2 === 1} duration="slow" />
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      <SectionWrapper background="light" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.videoTestimonials.title}</h2>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.videoTestimonials.items.map((item, index) => (
            <FadeInOnScroll key={item.title} delay={index * 0.2}>
              <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
                <WistiaThumbnailTrigger
                  videoId={item.wistiaMediaId}
                  title={item.title}
                  previewSrc={item.posterSrc}
                  previewAlt={item.posterAlt}
                  locale={locale}
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="bg-white"
                />
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-devlo-900">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={item.client}
                        width={40}
                        height={40}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                        loading="lazy"
                        sizes="40px"
                      />
                    ) : null}
                    <div>
                      <p className="text-sm font-semibold text-devlo-900">{item.client}</p>
                      <p className="text-xs text-neutral-600">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-neutral-600">{item.metric}</p>
                  <Link href={item.href} className="inline-flex text-sm font-semibold text-devlo-700 hover:text-devlo-900">
                    {item.linkLabel}
                  </Link>
                </div>
              </article>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.clientsTitle}</h2>
        </FadeInOnScroll>

        <div className="relative mt-10 space-y-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
          <ClientsRailRow names={content.clientsLogos.slice(0, 8)} />
          <ClientsRailRow names={content.clientsLogos.slice(8, 15)} reverse />
          <ClientsRailRow names={content.clientsLogos.slice(15)} />
        </div>
      </SectionWrapper>

      <SectionWrapper background="light" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{caseStudiesTitleByLocale[locale]}</h2>
        </FadeInOnScroll>
        <DeferredCaseStudiesCarousel cards={studies} locale={locale} />
      </SectionWrapper>

      <SectionWrapper background="light" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.noRecruitTitle}</h2>
        </FadeInOnScroll>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {noRecruitCards.map((card, index) => {
            const Icon = noRecruitIcons[index] ?? Target;
            return (
              <FadeInOnScroll key={card.title} delay={index * 0.2}>
                <article className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
                  <Icon className="h-8 w-8 text-devlo-700" aria-hidden />
                  <h3 className="mt-4 text-2xl font-semibold text-devlo-900">{card.title}</h3>
                  <RichParagraph className="mt-3 text-base leading-7 text-neutral-600">{card.text}</RichParagraph>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{servicesTitleByLocale[locale]}</h2>
        </FadeInOnScroll>
        <DeferredServicesCarousel cards={serviceCards} locale={locale} />
      </SectionWrapper>

      <SectionWrapper background="white" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.methodTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-neutral-600">
            {(content as Record<string, unknown>).methodDesc as string ?? "6 étapes éprouvées, chacune améliorée en continu par les données réelles de vos campagnes."}
          </p>
        </FadeInOnScroll>

        <div className="mx-auto mt-10 grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_380px]">
          {/* Left column — 6 methodology steps with feedback */}
          <div className="space-y-3">
            {methodSteps.map((step, index) => {
              const Icon = methodIconMap[step.icon];
              const isLast = index === methodSteps.length - 1;
              return (
                <FadeInOnScroll key={step.title} delay={index * 0.08}>
                  <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft transition-all duration-300 hover:shadow-panel md:p-5">
                    {!isLast ? (
                      <div className="absolute left-[23px] top-[46px] h-[calc(100%+12px)] border-l-2 border-dashed border-devlo-100" />
                    ) : null}
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-devlo-800 text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-devlo-700" aria-hidden />
                          <h3 className="text-lg font-semibold text-devlo-900">{step.title}</h3>
                        </div>
                        <RichParagraph className="mt-1.5 text-sm leading-6 text-neutral-600">{step.text}</RichParagraph>
                        {step.feedback ? (
                          <div className="mt-2.5 flex items-start gap-2 rounded-lg bg-devlo-50 px-3 py-2">
                            <RefreshCw className="mt-0.5 h-3.5 w-3.5 shrink-0 text-devlo-600" aria-hidden />
                            <p className="text-xs leading-5 text-devlo-700">{step.feedback}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </FadeInOnScroll>
              );
            })}
            {/* Return arrow — visual indicator that the loop closes */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex items-center gap-3 pl-[23px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-devlo-600 text-white">
                  <RefreshCw className="h-4 w-4" aria-hidden />
                </div>
                <p className="text-sm font-semibold text-devlo-700">
                  {(content as Record<string, unknown>).methodReturnLabel as string ?? "Retour à l'étape 1 — le cycle recommence avec de meilleures données"}
                </p>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right column — Feedback loop diagram (sticky spans all 6 steps) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <FadeInOnScroll delay={0.3} direction="right">
                <div className="rounded-2xl border border-devlo-100 bg-devlo-50 p-6 shadow-soft lg:p-8">
                  <h3 className="text-center text-xl font-bold text-devlo-900">
                    {content.feedbackLoop?.title ?? "Auto-amélioration continue"}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[300px] text-center text-xs leading-relaxed text-devlo-700/70">
                    {(content.feedbackLoop as Record<string, unknown> | undefined)?.activeLabel as string ?? "Active sur les 6 étapes de notre méthodologie"}
                  </p>
                  {content.feedbackLoop ? (
                    <div className="mt-6">
                      <FeedbackLoopDiagram
                        steps={content.feedbackLoop.steps}
                        subtitle={content.feedbackLoop.subtitle}
                        cta={content.feedbackLoop.cta}
                        centerLabel={(content.feedbackLoop as Record<string, unknown>).centerLabel as [string, string] | undefined}
                        hoverHint={(content.feedbackLoop as Record<string, unknown>).hoverHint as string | undefined}
                      />
                    </div>
                  ) : null}
                </div>
              </FadeInOnScroll>
            </div>
          </div>
          {/* Mobile: show feedback loop after all steps */}
          <div className="lg:hidden">
            <FadeInOnScroll delay={0.3}>
              <div className="rounded-2xl border border-devlo-100 bg-devlo-50 p-6 shadow-soft">
                <h3 className="text-center text-xl font-bold text-devlo-900">
                  {content.feedbackLoop?.title ?? "Auto-amélioration continue"}
                </h3>
                <p className="mx-auto mt-2 max-w-[300px] text-center text-xs leading-relaxed text-devlo-700/70">
                  {(content.feedbackLoop as Record<string, unknown> | undefined)?.activeLabel as string ?? "Active sur les 6 étapes de notre méthodologie"}
                </p>
                {content.feedbackLoop ? (
                  <div className="mt-6">
                    <FeedbackLoopDiagram
                      steps={content.feedbackLoop.steps}
                      subtitle={content.feedbackLoop.subtitle}
                      cta={content.feedbackLoop.cta}
                      centerLabel={(content.feedbackLoop as Record<string, unknown>).centerLabel as [string, string] | undefined}
                      hoverHint={(content.feedbackLoop as Record<string, unknown>).hoverHint as string | undefined}
                    />
                  </div>
                ) : null}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.whyTitle}</h2>
          {content.whyAnswer && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-neutral-600">{content.whyAnswer}</p>
          )}
        </FadeInOnScroll>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = whyIcons[index] ?? Globe;
            return (
              <FadeInOnScroll key={card.title} delay={(index % 4) * 0.15}>
                <article className="h-full rounded-2xl border border-devlo-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-panel">
                  <Icon className="h-6 w-6 text-devlo-700" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-devlo-900">{card.title}</h3>
                  <RichParagraph className="mt-2 text-sm leading-6 text-neutral-600">{card.text}</RichParagraph>
                </article>
              </FadeInOnScroll>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="py-[80px] md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] text-devlo-900 md:text-4xl">{content.writtenTitle}</h2>
        </FadeInOnScroll>
        <WrittenTestimonialsCarousel testimonials={writtenTestimonials} locale={locale} />
      </SectionWrapper>

      <WaveDivider variant="layered-top" fromBg="#FFFFFF" toBg="#0F2B3C" />
      <SectionWrapper background="dark" className="py-[80px] text-white md:py-[120px]">
        <FadeInOnScroll>
          <h2 className="text-center text-3xl font-bold leading-[1.2] md:text-4xl">{content.ctaMid.title}</h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <RichParagraph className="mx-auto mt-4 max-w-[920px] text-center text-lg leading-8 text-white/90">{content.ctaMid.text}</RichParagraph>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.3}>
          <h3 className="mt-8 text-center text-2xl font-semibold md:text-3xl">{content.ctaMid.h3}</h3>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.4}>
          <p className="mx-auto mt-3 max-w-[900px] text-center text-base leading-7 text-white/90 md:text-lg">{content.ctaMid.h3Text}</p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.5}>
          <div className="mt-8 text-center">
            <Link href={content.ctaMid.cta.href} className={buttonClassName("secondary", "bg-white px-8 py-4 text-base text-devlo-900 hover:text-devlo-900")}>
              {content.ctaMid.cta.label}
            </Link>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>
      <WaveDivider variant="layered-bottom" fromBg="#0F2B3C" toBg="#FFFFFF" />

      {content.homeSummaryPoints && content.homeSummaryPoints.length > 0 && (
        <section className="border-t border-neutral-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <SummarySection
              title={content.homeSummaryTitle ?? "En résumé"}
              points={content.homeSummaryPoints}
              locale={locale}
            />
            {content.homeComparisonTable && (
              <div className="mt-10">
                <ComparisonTable
                  caption={content.homeComparisonTable.caption}
                  headers={content.homeComparisonTable.headers}
                  rows={content.homeComparisonTable.rows}
                />
              </div>
            )}
          </div>
        </section>
      )}

      <FAQSection title={content.faqTitle} items={content.faqs} />
    </>
  );
}
