import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll";
import { PaidAwareHubspotForm } from "@/components/shared/paid-aware-hubspot-form";
import { consultationContent } from "@/content/masterfile.fr";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type ConsultationMasterPageProps = {
  content?: typeof consultationContent;
  locale?: SupportedLocale;
};

const consultationAuditTables: Record<
  SupportedLocale,
  {
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  }
> = {
  fr: {
    caption: "Points audites pendant une demo devlo",
    headers: ["Axe", "Ce que l'on verifie", "Impact attendu"],
    rows: [
      ["ICP et TAM", "Segments, comptes prioritaires et decideurs accessibles.", "Eviter le volume inutile et concentrer la prospection."],
      ["Signaux d'achat", "Recrutements, changements, intent data et actualités marché.", "Approcher les comptes au bon moment."],
      ["Séquences", "Canaux, messages, cadence et critères de qualification.", "Lancer une campagne mesurable sans recruter."],
    ],
  },
  en: {
    caption: "Areas audited during a devlo demo",
    headers: ["Area", "What we check", "Expected impact"],
    rows: [
      ["ICP and TAM", "Segments, priority accounts, and reachable decision makers.", "Avoid useless volume and focus prospecting."],
      ["Buying signals", "Hiring, changes, intent data, and market news.", "Reach accounts at the right moment."],
      ["Sequences", "Channels, messaging, cadence, and qualification criteria.", "Launch a measurable campaign without hiring."],
    ],
  },
  de: {
    caption: "Bereiche, die in einer devlo-Demo geprüft werden",
    headers: ["Bereich", "Was wir prüfen", "Erwarteter Effekt"],
    rows: [
      ["ICP und TAM", "Segmente, Zielaccounts und erreichbare Entscheider.", "Unnützes Volumen vermeiden und Prospektion fokussieren."],
      ["Kaufsignale", "Rekrutierung, Wechsel, Intent Data und Marktnews.", "Accounts zum richtigen Zeitpunkt ansprechen."],
      ["Sequenzen", "Kanäle, Messaging, Kadenz und Qualifikationskriterien.", "Messbare Kampagne ohne Neueinstellung starten."],
    ],
  },
  nl: {
    caption: "Onderdelen die tijdens een devlo-demo worden geaudit",
    headers: ["Onderdeel", "Wat we controleren", "Verwachte impact"],
    rows: [
      ["ICP en TAM", "Segmenten, prioritaire accounts en bereikbare beslissers.", "Onnodig volume vermijden en prospectie focussen."],
      ["Koopsignalen", "Werving, veranderingen, intent data en marktnieuws.", "Accounts op het juiste moment benaderen."],
      ["Sequenties", "Kanalen, messaging, cadans en kwalificatiecriteria.", "Meetbare campagne lanceren zonder aan te werven."],
    ],
  },
};

export function ConsultationMasterPage({ content = consultationContent, locale = "fr" }: ConsultationMasterPageProps) {
  const c = content;
  const auditTable = consultationAuditTables[locale];

  return (
    <SectionWrapper background="white" className="pt-[80px] md:pt-[120px]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start xl:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
        <div className="min-w-0">
          {/* ── H1 ──────────────────────────────────────────────────────── */}
          <FadeInOnScroll>
            <h1 className="max-w-[560px] text-4xl font-extrabold leading-[1.1] text-devlo-900 md:text-5xl lg:text-[52px]">
              {c.h1}
            </h1>
          </FadeInOnScroll>

          {/* ── Reassurance badges ─────────────────────────────────────── */}
          <FadeInOnScroll delay={0.05}>
            <div className="mt-6 flex max-w-[560px] flex-wrap gap-3">
              {c.reassurance.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-700"
                >
                  <span className="text-green-600">✓</span>
                  {badge}
                </span>
              ))}
            </div>
          </FadeInOnScroll>

          {/* ── Intro paragraph ────────────────────────────────────────── */}
          <FadeInOnScroll delay={0.1}>
            <p className="mt-6 max-w-[560px] text-lg leading-8 text-neutral-600">
              {c.intro}
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.12}>
            <div className="mt-6 w-full max-w-[640px] min-w-0 overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <table className="w-full table-fixed border-collapse text-left text-xs sm:text-sm">
                <caption className="sr-only">{auditTable.caption}</caption>
                <colgroup>
                  <col className="w-[26%]" />
                  <col className="w-[40%]" />
                  <col className="w-[34%]" />
                </colgroup>
                <thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">
                  <tr>
                    {auditTable.headers.map((header) => (
                      <th key={header} scope="col" className="break-words px-3 py-3 sm:px-4">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {auditTable.rows.map(([area, check, impact]) => (
                    <tr key={area}>
                      <td className="break-words px-3 py-3 font-semibold text-devlo-900 sm:px-4">{area}</td>
                      <td className="break-words px-3 py-3 sm:px-4">{check}</td>
                      <td className="break-words px-3 py-3 sm:px-4">{impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInOnScroll>
        </div>

        {/* ── Form ─────────────────────────────────────────────────────── */}
        <FadeInOnScroll delay={0.15}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-soft md:p-7">
            <h2 className="mb-1 text-2xl font-bold text-devlo-900">
              {c.formTitle}
            </h2>
            <p className="mb-6 text-neutral-600">{c.formSubtitle}</p>
            <PaidAwareHubspotForm
              portalId={c.hubspot.portalId}
              formId={c.hubspot.formId}
              region={c.hubspot.region}
              targetId="hubspot-consultation"
              locale={locale}
            />
            <p className="mt-4 text-center text-sm text-neutral-500">
              {c.postForm}
            </p>
          </div>
        </FadeInOnScroll>
      </div>

      {/* ── Deliverables ───────────────────────────────────────────────── */}
      <FadeInOnScroll delay={0.2}>
        <div className="mt-10">
          <h2 className="mb-6 text-xl font-bold text-devlo-900">
            {c.deliverablesTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {c.deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-5"
              >
                <span className="mb-3 block text-2xl">{item.icon}</span>
                <h3 className="mb-1 font-semibold text-devlo-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInOnScroll>

      {/* ── Proof stat ─────────────────────────────────────────────────── */}
      <FadeInOnScroll delay={0.25}>
        <div className="mt-10 rounded-xl bg-slate-900 px-6 py-5 text-white">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
            <span className="text-4xl font-extrabold text-blue-400">
              {c.proof.stat}
            </span>
            <div>
              <p className="font-semibold">{c.proof.label}</p>
              <p className="text-sm text-slate-400">{c.proof.source}</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* ── For who ────────────────────────────────────────────────────── */}
      <FadeInOnScroll delay={0.3}>
        <div className="mt-10">
          <h2 className="mb-2 text-xl font-bold text-devlo-900">
            {c.forWhoTitle}
          </h2>
          <p className="mb-4 text-neutral-600">{c.forWhoIntro}</p>
          <ul className="space-y-2">
            {c.forWho.map((item) => (
              <li key={item} className="flex items-start gap-2 text-neutral-700">
                <span className="mt-0.5 text-blue-500">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
