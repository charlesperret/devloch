"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CaseStudyCard } from "@/content/masterfile.fr";
import { buttonClassName } from "@/components/ui/button";

const VISIBLE = 3;

export function CaseStudiesCarousel({ cards }: { cards: CaseStudyCard[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  const visible = Array.from({ length: Math.min(VISIBLE, cards.length) }, (_, offset) =>
    cards[(index + offset) % cards.length],
  );

  return (
    <div className="mt-10">
      <div className="relative">
        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Étude de cas précédente"
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 shadow-soft transition hover:border-devlo-600 hover:text-devlo-600 lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((card, i) => (
            <Link
              key={`${card.slug}-${i}`}
              href={`/etudes-de-cas/${card.slug}`}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-panel"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-devlo-50">
                <Image
                  src={card.banner}
                  alt={card.client}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-devlo-600">{card.sector}</p>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-devlo-900 line-clamp-2">{card.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {card.metrics.slice(0, 3).map((m) => (
                    <span key={m} className="rounded-full bg-devlo-50 px-2.5 py-0.5 text-xs font-medium text-devlo-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Étude de cas suivante"
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 shadow-soft transition hover:border-devlo-600 hover:text-devlo-600 lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile nav */}
      <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={prev}
          aria-label="Précédent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-soft"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Suivant"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-soft"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* All studies link */}
      <div className="mt-8 text-center">
        <Link href="/etudes-de-cas" className={buttonClassName("outline", "px-8 py-3 text-sm")}>
          Voir toutes les études de cas
        </Link>
      </div>
    </div>
  );
}
