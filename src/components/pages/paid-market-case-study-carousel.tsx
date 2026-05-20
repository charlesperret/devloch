"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { caseStudiesCards, type CaseStudyCard } from "@/content/masterfile.fr";
import { getLocalizedMasterfileContent } from "@/lib/i18n/masterfile-content";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

const copyByLocale: Record<SupportedLocale, { previous: string; next: string; all: string }> = {
  fr: {
    previous: "Étude de cas précédente",
    next: "Étude de cas suivante",
    all: "Voir toutes les études de cas",
  },
  en: {
    previous: "Previous case study",
    next: "Next case study",
    all: "View all case studies",
  },
  de: {
    previous: "Vorherige Fallstudie",
    next: "Nächste Fallstudie",
    all: "Alle Fallstudien ansehen",
  },
  nl: {
    previous: "Vorige case study",
    next: "Volgende case study",
    all: "Bekijk alle case studies",
  },
};

function normalise(value: string): string {
  return value.trim().toLowerCase();
}

function orderCards(cards: CaseStudyCard[], featuredClients: string[]): CaseStudyCard[] {
  const featured = new Set(featuredClients.map(normalise));
  return [...cards].sort((a, b) => {
    const aFeatured = featured.has(normalise(a.client)) ? 0 : 1;
    const bFeatured = featured.has(normalise(b.client)) ? 0 : 1;
    return aFeatured - bFeatured;
  });
}

type PaidMarketCaseStudyCarouselProps = {
  locale: SupportedLocale;
  featuredClients: string[];
};

export function PaidMarketCaseStudyCarousel({ locale, featuredClients }: PaidMarketCaseStudyCarouselProps) {
  const copy = copyByLocale[locale];
  const localizedCards = (getLocalizedMasterfileContent(locale).caseStudiesCards as CaseStudyCard[]) ?? caseStudiesCards;
  const cards = useMemo(
    () => orderCards(localizedCards.filter((card) => card.banner), featuredClients),
    [featuredClients, localizedCards],
  );
  const [offset, setOffset] = useState(0);

  const previous = useCallback(() => {
    setOffset((current) => (current - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const next = useCallback(() => {
    setOffset((current) => (current + 1) % cards.length);
  }, [cards.length]);

  const orderedCards = cards.map((_, index) => cards[(offset + index) % cards.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-4">
          {orderedCards.map((card, index) => (
            <Link
              key={`${card.slug}-${offset}-${index}`}
              href={resolvePathForLocale(`/etudes-de-cas/${card.slug}`, locale).path}
              className="group min-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:border-[#0b6c8f]/40 sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.67rem)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                <Image
                  src={card.banner}
                  alt={card.client}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Link href={resolvePathForLocale("/etudes-de-cas", locale).path} className="text-sm font-semibold text-[#0b6c8f] underline-offset-4 hover:underline">
          {copy.all}
        </Link>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label={copy.previous}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-[#153a54] transition hover:border-[#0b6c8f] hover:text-[#0b6c8f]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={copy.next}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-[#153a54] transition hover:border-[#0b6c8f] hover:text-[#0b6c8f]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
