"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { WrittenTestimonial } from "@/content/masterfile.fr";

const VISIBLE = 3;

export function WrittenTestimonialsCarousel({ testimonials }: { testimonials: WrittenTestimonial[] }) {
  const maxPos = Math.max(0, testimonials.length - VISIBLE);
  const [pos, setPos] = useState(0);

  const prev = () => setPos((p) => Math.max(0, p - 1));
  const next = () => setPos((p) => Math.min(maxPos, p + 1));

  const visible = testimonials.slice(pos, pos + VISIBLE);

  return (
    <div className="relative mt-10">
      {/* Left arrow — desktop */}
      <button
        type="button"
        onClick={prev}
        disabled={pos === 0}
        aria-label="Témoignages précédents"
        className="absolute left-0 top-1/2 z-10 hidden -translate-x-7 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 shadow-soft transition hover:border-devlo-600 hover:text-devlo-600 disabled:opacity-30 lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial) => (
          <article key={testimonial.author} className="h-full rounded-2xl border border-devlo-100 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-1 text-accent-gold" aria-label="5 étoiles">
              {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
            </div>
            <p className="mt-4 line-clamp-6 text-sm italic leading-8 text-neutral-600">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src={testimonial.photo}
                alt={testimonial.author}
                width={48}
                height={48}
                className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
                sizes="48px"
                quality={74}
              />
              <div>
                <p className="text-sm font-semibold text-devlo-900">{testimonial.author}</p>
                <p className="text-xs text-neutral-600">{testimonial.role}</p>
                <p className="text-xs font-semibold text-devlo-700">{testimonial.company}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Right arrow — desktop */}
      <button
        type="button"
        onClick={next}
        disabled={pos >= maxPos}
        aria-label="Témoignages suivants"
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-7 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 shadow-soft transition hover:border-devlo-600 hover:text-devlo-600 disabled:opacity-30 lg:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Navigation row */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={pos === 0}
          aria-label="Précédent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-soft disabled:opacity-30 lg:hidden"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxPos + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPos(i)}
              aria-label={`Page ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-200",
                pos === i ? "w-6 bg-devlo-700" : "w-2 bg-neutral-300",
              ].join(" ")}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          disabled={pos >= maxPos}
          aria-label="Suivant"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-soft disabled:opacity-30 lg:hidden"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
