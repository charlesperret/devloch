"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { caseStudiesCards, type CaseStudyCard } from "@/content/masterfile.fr";
import { getLocalizedMasterfileContent } from "@/lib/i18n/masterfile-content";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type PaidCaseStudy = {
  client: string;
  sector: string;
  title: string;
  metrics: string[];
  logo?: string;
  href?: string;
};

const copyByLocale: Record<SupportedLocale, { all: string }> = {
  fr: { all: "Voir toutes les études de cas" },
  en: { all: "View all case studies" },
  de: { all: "Alle Fallstudien ansehen" },
  nl: { all: "Bekijk alle case studies" },
};

function normalise(value: string): string {
  return value.trim().toLowerCase();
}

function selectCards(cards: CaseStudyCard[], caseStudies: PaidCaseStudy[]): Array<CaseStudyCard & Partial<PaidCaseStudy>> {
  const cardsWithBanners = cards.filter((card) => card.banner);
  const featuredByName = new Map(cardsWithBanners.map((card) => [normalise(card.client), card]));
  const featured = caseStudies
    .map((study): CaseStudyCard | null => {
      const card = featuredByName.get(normalise(study.client));
      if (!card) return null;

      return {
        ...card,
        sector: study.sector,
        title: study.title,
        metrics: study.metrics,
        logo: study.logo ?? card.logo,
      };
    })
    .filter((card): card is CaseStudyCard => Boolean(card));
  const featuredSlugs = new Set(featured.map((card) => card.slug));
  const remaining = cardsWithBanners.filter((card) => !featuredSlugs.has(card.slug));
  const ordered = [...featured, ...remaining];

  return ordered.slice(0, 6);
}

type PaidMarketCaseStudyGridProps = {
  locale: SupportedLocale;
  caseStudies: PaidCaseStudy[];
};

export function PaidMarketCaseStudyGrid({ locale, caseStudies }: PaidMarketCaseStudyGridProps) {
  const copy = copyByLocale[locale];
  const localizedCards = (getLocalizedMasterfileContent(locale).caseStudiesCards as CaseStudyCard[]) ?? caseStudiesCards;
  const cards = selectCards(localizedCards, caseStudies);
  const allCaseStudiesPath = resolvePathForLocale("/etudes-de-cas", locale).path;
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextCase = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const step = Math.min(420, scroller.clientWidth * 0.8);
    const remaining = scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft;
    scroller.scrollBy({ left: remaining < 40 ? -scroller.scrollWidth : step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative">
        <div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-4 pr-16 [scrollbar-width:thin]">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={resolvePathForLocale(`/etudes-de-cas/${card.slug}`, locale).path}
              className="group w-[min(82vw,380px)] shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:border-[#0b6c8f]/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                <Image
                  src={card.banner}
                  alt={card.client}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <div className="flex min-h-10 items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0b6c8f]">
                      {card.sector}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold text-[#153a54]">{card.client}</h3>
                  </div>
                  {card.logo ? (
                    <div className="relative h-9 w-24 shrink-0">
                      <Image src={card.logo} alt={`${card.client} logo`} fill className="object-contain object-right" sizes="96px" />
                    </div>
                  ) : null}
                </div>
                <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-neutral-700">
                  {card.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.metrics.slice(0, 3).map((metric) => (
                    <span key={metric} className="rounded-md border border-[#0b6c8f]/15 bg-[#e8f4f7] px-2.5 py-1 text-xs font-semibold text-[#153a54]">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-white via-white/80 to-transparent pl-16 pr-2">
          <button
            type="button"
            onClick={scrollToNextCase}
            aria-label={copy.all}
            className="pointer-events-auto rounded-full bg-[#f47b5f] p-3 text-white shadow-lg transition hover:bg-[#e3654d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f47b5f] focus-visible:ring-offset-2"
          >
            <ArrowRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link href={allCaseStudiesPath} className="inline-flex h-12 items-center justify-center rounded-md bg-[#f47b5f] px-6 text-base font-extrabold text-[#0f2b3c] shadow-sm transition hover:bg-[#e3654d]">
          {copy.all}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
