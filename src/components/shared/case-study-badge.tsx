import Image from "next/image";
import Link from "next/link";

import { CountryFlags, ServicesSurfaceCard } from "@/components/services/services-ui";
import { buildClientMonogram, getCaseStudyBrandAssetByClient } from "@/content/service-brand-assets";

type CaseStudyBadgeProps = {
  client: string;
  result: string;
  details: string;
  href?: string;
};

export function CaseStudyBadge({ client, result, details, href }: CaseStudyBadgeProps) {
  const brand = getCaseStudyBrandAssetByClient(client);

  const content = (
    <ServicesSurfaceCard className="h-full p-4 transition-all duration-200 hover:border-devlo-600/35 hover:shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-devlo-700">{client}</p>
        <CountryFlags countries={brand?.countries ?? ["EU"]} showMore={Boolean(brand?.showMoreCountries)} />
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-devlo-900">{result}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{details}</p>

      <div className="mt-4 flex items-center gap-2 border-t border-neutral-100 pt-3">
        {brand?.logo ? (
          <div className="relative h-7 w-7 overflow-hidden rounded-md border border-neutral-200 bg-white">
            <Image src={brand.logo} alt={`${client} logo`} fill className="object-contain p-1" sizes="28px" loading="lazy" />
          </div>
        ) : (
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-200 bg-devlo-50 text-[10px] font-bold text-devlo-800">
            {buildClientMonogram(client)}
          </div>
        )}
        <span className="text-xs font-semibold text-neutral-700">Cas client vérifié</span>
      </div>
    </ServicesSurfaceCard>
  );

  if (!href) return content;
  return (
    <Link href={href} className="group block h-full">
      {content}
    </Link>
  );
}
