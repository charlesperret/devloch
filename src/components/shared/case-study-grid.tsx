import Image from "next/image";
import Link from "next/link";

import { CountryFlags, ServicesSurfaceCard } from "@/components/services/services-ui";
import { buildClientMonogram, getCaseStudyBrandAsset } from "@/content/service-brand-assets";
import { ALL_CASE_STUDIES, type ServiceTag } from "@/content/services";

type CaseStudyGridProps = {
  filterTag?: ServiceTag;
  limit?: number;
};

const tagColors: Record<ServiceTag, string> = {
  outbound: "bg-blue-50 text-blue-700 border-blue-100",
  "intent-data": "bg-violet-50 text-violet-700 border-violet-100",
  "enrichissement-clay": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "generation-leads": "bg-amber-50 text-amber-700 border-amber-100",
  "qualification-leads": "bg-orange-50 text-orange-700 border-orange-100",
  "prise-rdv": "bg-pink-50 text-pink-700 border-pink-100",
  "cold-email": "bg-sky-50 text-sky-700 border-sky-100",
  "cold-calling": "bg-red-50 text-red-700 border-red-100",
  "linkedin-outreach": "bg-indigo-50 text-indigo-700 border-indigo-100",
  "crm-delivrabilite": "bg-gray-50 text-gray-700 border-gray-200",
};

export function CaseStudyGrid({ filterTag, limit }: CaseStudyGridProps) {
  const filtered = filterTag
    ? ALL_CASE_STUDIES.filter((caseStudy) => caseStudy.tags.includes(filterTag))
    : ALL_CASE_STUDIES;

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayed.map((caseStudy) => {
        const brand = getCaseStudyBrandAsset(caseStudy.slug);

        return (
          <Link key={caseStudy.slug} href={caseStudy.href} className="group">
            <ServicesSurfaceCard className="h-full p-5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-devlo-600/35 group-hover:shadow-panel">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className={`inline-flex items-center rounded-full border px-2 py-1 text-[11px] font-semibold ${tagColors[caseStudy.tags[0]]}`}
                >
                  {caseStudy.sector.split("/")[0].trim()}
                </span>
                <CountryFlags countries={brand?.countries ?? ["EU"]} showMore={Boolean(brand?.showMoreCountries)} />
              </div>

              <h3 className="text-lg font-bold leading-snug text-devlo-900">{caseStudy.headline}</h3>

              <div className="mt-3 space-y-1.5">
                {caseStudy.kpis.map((kpi) => (
                  <p key={`${caseStudy.slug}-${kpi}`} className="flex items-center gap-1.5 text-xs text-neutral-600">
                    <span className="font-bold text-devlo-700">·</span>
                    {kpi}
                  </p>
                ))}
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-4">
                <div className="flex items-center gap-3">
                  {brand?.logo ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                      <Image
                        src={brand.logo}
                        alt={`${caseStudy.client} logo`}
                        fill
                        className="object-contain p-1.5"
                        sizes="40px"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-devlo-50 text-xs font-bold text-devlo-800">
                      {buildClientMonogram(caseStudy.client)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-devlo-900">{caseStudy.client}</p>
                    <p className="truncate text-xs text-neutral-500">{caseStudy.region}</p>
                  </div>
                  <span className="ml-auto text-sm font-semibold text-devlo-700 transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </ServicesSurfaceCard>
          </Link>
        );
      })}
    </div>
  );
}
