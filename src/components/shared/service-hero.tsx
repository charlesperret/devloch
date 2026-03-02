import Link from "next/link";

type ServiceHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  paragraphs: string[];
  quickFacts: string[];
};

const sectionAnchors = [
  { id: "ce-que-couvre", label: "Ce que couvre" },
  { id: "processus", label: "Processus" },
  { id: "resultats", label: "Résultats" },
  { id: "faq", label: "FAQ" },
];

export function ServiceHero({ title, subtitle, breadcrumbLabel, paragraphs, quickFacts }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-devlo-50/70 via-white to-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-devlo-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-52 w-52 rounded-full bg-devlo-100/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-12 pt-10 md:px-8 md:pb-14 md:pt-14">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <li>
              <Link href="/" className="transition hover:text-devlo-700">
                devlo.ch
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="transition hover:text-devlo-700">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-devlo-900">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <p className="inline-flex items-center rounded-full bg-devlo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-devlo-700">
          DEVLO.CH — AGENCE B2B SUISSE
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.06] tracking-tight text-devlo-900 md:text-5xl lg:text-[56px]">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-devlo-700 md:text-2xl">{subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {quickFacts.map((fact) => (
            <span
              key={fact}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-soft"
            >
              {fact}
            </span>
          ))}
        </div>

        <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
          {paragraphs.map((paragraph, index) => (
            <p key={`${title}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <nav aria-label="Navigation de section" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {sectionAnchors.map((anchor) => (
              <li key={anchor.id}>
                <a
                  href={`#${anchor.id}`}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-devlo-700 transition hover:border-devlo-700/40 hover:text-devlo-900"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
