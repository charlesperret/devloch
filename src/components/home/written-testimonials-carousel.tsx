import Image from "next/image";

import type { WrittenTestimonial } from "@/content/masterfile.fr";

function TestimonialCard({ t }: { t: WrittenTestimonial }) {
  return (
    <article className="w-[340px] shrink-0 rounded-2xl border border-devlo-100 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-1 text-accent-gold" aria-label="5 étoiles">
        {"★★★★★".split("").map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
      <p className="mt-4 line-clamp-5 text-sm italic leading-7 text-neutral-600">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <Image
          src={t.photo}
          alt={t.author}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
          loading="lazy"
          sizes="44px"
          quality={74}
        />
        <div>
          <p className="text-sm font-semibold text-devlo-900">{t.author}</p>
          <p className="text-xs text-neutral-600">{t.role}</p>
          <p className="text-xs font-semibold text-devlo-700">{t.company}</p>
        </div>
      </div>
    </article>
  );
}

export function WrittenTestimonialsCarousel({ testimonials }: { testimonials: WrittenTestimonial[] }) {
  const half = Math.ceil(testimonials.length / 2);
  const groupA = testimonials.slice(0, half);
  const groupB = testimonials.slice(half);
  const row1 = [...groupA, ...groupA];
  const row2 = [...groupB, ...groupB];

  return (
    <div className="relative mt-10 -mx-6 overflow-hidden md:-mx-8 lg:-mx-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
      <div className="space-y-4 py-2">
        <div className="flex min-w-max animate-testimonial-scroll items-stretch gap-4 will-change-transform">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex min-w-max animate-testimonial-scroll-reverse items-stretch gap-4 will-change-transform">
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
