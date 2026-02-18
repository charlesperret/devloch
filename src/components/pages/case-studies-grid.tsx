import Link from "next/link";
import Image from "next/image";

import { caseStudies } from "@/lib/case-studies";

type CaseStudiesGridProps = {
  title: string;
  subtitle: string;
  compact?: boolean;
};

export function CaseStudiesGrid({ title, subtitle, compact = false }: CaseStudiesGridProps) {
  const list = compact ? caseStudies.slice(0, 6) : caseStudies;

  return (
    <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-[#173a54] md:text-4xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#294a62]/80 md:text-base">{subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((item, index) => (
          <article key={item.slug} className="overflow-hidden rounded-xl border border-stroke bg-white shadow-soft">
            <div
              className={`flex h-44 w-full items-center justify-center px-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white ${
                index % 3 === 0
                  ? "bg-gradient-to-br from-[#1d5f8a] via-[#2a7cad] to-[#65a3cc]"
                  : index % 3 === 1
                    ? "bg-gradient-to-br from-[#3f7f53] via-[#5b9b6e] to-[#8fbc9d]"
                    : "bg-gradient-to-br from-[#704a7e] via-[#905fa0] to-[#b890c6]"
              }`}
            >
              {item.clientLogoUrl ? (
                <Image
                  src={item.clientLogoUrl}
                  alt={`${item.client} logo`}
                  width={420}
                  height={140}
                  className="max-h-16 w-auto max-w-[80%] object-contain"
                />
              ) : (
                item.client
              )}
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#153a54]">{item.title}</h2>
              <p className="mt-2 text-sm text-[#2b4d64]/80">{item.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-[#2b4d64]/85">
                {item.resultHighlights.slice(0, 3).map((line, index) => (
                  <li key={`${item.slug}-highlight-${index}`} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a608e]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <Link
                prefetch={false}
                href={`/resultats/${item.slug}`}
                className="mt-5 inline-flex h-10 items-center rounded-md bg-[#0a608e] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#084d70]"
              >
                Voir etude de cas
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
