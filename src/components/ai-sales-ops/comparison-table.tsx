import type { SupportedLocale } from "@/lib/i18n/slug-map";

type ComparisonRow = {
  criterion: string;
  withoutDevlo: string;
  withDevlo: string;
};

type ComparisonTableProps = {
  rows: readonly ComparisonRow[];
  locale?: SupportedLocale;
};

const copyByLocale: Record<
  SupportedLocale,
  {
    caption: string;
    criterion: string;
    withoutDevlo: string;
    withDevlo: string;
  }
> = {
  fr: {
    caption: "Comparatif entre le statu quo commercial et AI Sales Ops par devlo",
    criterion: "Critère",
    withoutDevlo: "Sans AI Sales Ops",
    withDevlo: "Avec AI Sales Ops, devlo",
  },
  en: {
    caption: "Comparison between the current sales setup and AI Sales Ops by devlo",
    criterion: "Criteria",
    withoutDevlo: "Without AI Sales Ops",
    withDevlo: "With AI Sales Ops, devlo",
  },
  de: {
    caption: "Vergleich zwischen dem aktuellen Vertriebsstatus quo und AI Sales Ops von devlo",
    criterion: "Kriterium",
    withoutDevlo: "Ohne AI Sales Ops",
    withDevlo: "Mit AI Sales Ops, devlo",
  },
  nl: {
    caption: "Vergelijking tussen de huidige salesaanpak en AI Sales Ops van devlo",
    criterion: "Criterium",
    withoutDevlo: "Zonder AI Sales Ops",
    withDevlo: "Met AI Sales Ops, devlo",
  },
};

export function ComparisonTable({ rows, locale = "fr" }: ComparisonTableProps) {
  const copy = copyByLocale[locale];

  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-soft">
      <table itemScope itemType="https://schema.org/Table" className="min-w-full border-separate border-spacing-0 text-left">
        <caption className="sr-only">{copy.caption}</caption>
        <thead>
          <tr className="bg-devlo-900 text-white">
            <th scope="col" className="rounded-tl-3xl px-5 py-4 text-sm font-semibold">{copy.criterion}</th>
            <th scope="col" className="px-5 py-4 text-sm font-semibold text-white/80">{copy.withoutDevlo}</th>
            <th scope="col" className="rounded-tr-3xl px-5 py-4 text-sm font-semibold">{copy.withDevlo}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.criterion} className={index % 2 === 0 ? "bg-white" : "bg-devlo-50/60"}>
              <th scope="row" className="border-t border-neutral-200 px-5 py-4 text-sm font-semibold text-devlo-900 md:text-base">
                {row.criterion}
              </th>
              <td className="border-t border-neutral-200 px-5 py-4 text-sm leading-7 text-neutral-600 md:text-base">
                {row.withoutDevlo}
              </td>
              <td className="border-t border-neutral-200 px-5 py-4 text-sm font-medium leading-7 text-devlo-900 md:text-base">
                {row.withDevlo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
