import Link from "next/link";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type CTASectionProps = {
  locale?: SupportedLocale;
  title: string;
  subtitle: string;
};

const copyByLocale: Record<SupportedLocale, { ctaConsultation: string; ctaCaseStudies: string; ctaServices: string }> = {
  fr: {
    ctaConsultation: "Réserver une consultation gratuite",
    ctaCaseStudies: "Voir les études de cas",
    ctaServices: "Voir les services",
  },
  en: {
    ctaConsultation: "Book a free consultation",
    ctaCaseStudies: "View case studies",
    ctaServices: "View services",
  },
  de: {
    ctaConsultation: "Kostenlose Beratung buchen",
    ctaCaseStudies: "Fallstudien ansehen",
    ctaServices: "Leistungen ansehen",
  },
  nl: {
    ctaConsultation: "Gratis consultatie boeken",
    ctaCaseStudies: "Praktijkvoorbeelden bekijken",
    ctaServices: "Diensten bekijken",
  },
};

export function CTASection({ locale = "fr", title, subtitle }: CTASectionProps) {
  const copy = copyByLocale[locale];
  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-18">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold leading-tight text-devlo-900 md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={resolvePathForLocale("/consultation", locale).path}
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            {copy.ctaConsultation}
          </Link>
          <Link
            href={resolvePathForLocale("/etudes-de-cas", locale).path}
            className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-devlo-900 transition hover:border-devlo-700/40 hover:text-devlo-700"
          >
            {copy.ctaCaseStudies}
          </Link>
          <Link
            href={resolvePathForLocale("/services", locale).path}
            className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-devlo-900 transition hover:border-devlo-700/40 hover:text-devlo-700"
          >
            {copy.ctaServices}
          </Link>
        </div>
      </div>
    </section>
  );
}
