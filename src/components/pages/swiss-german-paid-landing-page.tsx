import Link from "next/link";
import { ArrowRight, BarChart3, Check, ClipboardCheck, MousePointer2, ShieldCheck, Target, Users } from "lucide-react";

import { PaidAwareHubspotForm } from "@/components/shared/paid-aware-hubspot-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";

const pagePath = "/de/leadgenerierung-agentur-schweiz";

const faqs = [
  {
    question: "Ist devlo eine Leadgenerierung Agentur für die Schweiz?",
    answer:
      "Ja. devlo ist eine Schweizer B2B-Agentur für Leadgenerierung, Neukundenakquise und qualifizierte Termine. Für die Deutschschweiz trennen wir Targeting, Copy, Kanäle und Qualifikation von Romandie- oder Deutschland-Kampagnen.",
  },
  {
    question: "Arbeitet devlo auf Deutsch oder Schweizerdeutsch?",
    answer:
      "Geschriebene B2B-Kampagnen laufen in natürlichem Schweizer Standarddeutsch. Für Telefonie und Review prüfen wir die Formulierungen zusätzlich mit deutschsprachigen Personen, damit die Ansprache nicht wie eine wörtliche Übersetzung wirkt.",
  },
  {
    question: "Für welche Firmen lohnt sich eine Kampagne?",
    answer:
      "Die Kampagne passt für B2B-Unternehmen mit klarem Angebot, erreichbaren Entscheidern und genügend Deal-Wert, um qualifizierte Gespräche wirtschaftlich zu machen. Unklare ICPs oder sehr kleine Tickets sollten zuerst geschärft werden.",
  },
  {
    question: "Welche Kanäle nutzt devlo in der Deutschschweiz?",
    answer:
      "Wir kombinieren je nach Markt Cold E-Mail, LinkedIn, Telefon, Kaufsignale, CRM-Tracking und manuelle Qualifikation. Die Kanalwahl hängt vom ICP, der Datenqualität und dem Entscheidungsprozess ab.",
  },
];

const proofRows = [
  ["DACH-Erfahrung", "54 qualifizierte Termine für eine HR-Tech-Kampagne in der DACH-Region."],
  ["Schweizer Markt", "Segmentierung nach Region, Sprache, Branche, Headcount und erreichbaren Entscheidern."],
  ["Mehrkanalig", "E-Mail, LinkedIn und Telefon werden erst kombiniert, wenn Daten und Botschaft sauber sind."],
];

const process = [
  {
    icon: Target,
    title: "ICP und Markt eingrenzen",
    body: "Wir prüfen, welche Segmente in Zürich, Basel, Bern, St. Gallen, Zug oder der weiteren Deutschschweiz wirklich genügend Potenzial haben.",
  },
  {
    icon: Users,
    title: "Entscheider und Signale finden",
    body: "Wir priorisieren Accounts nach Rolle, Timing, Wachstumsindikatoren, Hiring, Tech Stack und plausiblen Kaufsignalen.",
  },
  {
    icon: ClipboardCheck,
    title: "Sequenzen vor dem Launch prüfen",
    body: "Betreffzeilen, E-Mail-Copy, LinkedIn-Winkel, Telefonlogik und Qualifikationskriterien werden vor dem ersten Batch validiert.",
  },
];

const keywordRows = [
  ["leadgenerierung", "210", "US$3.46-13.19", "Gut für Nachfrage, aber ohne B2B-Filter zu breit."],
  ["kundenakquise", "320", "US$3.18-12.74", "Volumen stark; Anzeigen müssen B2B und qualifizierte Termine klar machen."],
  ["neukundengewinnung", "260", "US$3.20-10.60", "Guter Suchintent für Firmen mit Wachstumsdruck."],
  ["kaltakquise agentur", "10", "US$5.13-13.43", "Kleines Volumen, aber sehr nah an Outsourcing-Intent."],
];

export function SwissGermanPaidLandingPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Startseite", path: "/de" },
            { name: "Leadgenerierung Agentur Schweiz", path: pagePath },
          ]),
          buildFaqPageSchema(faqs),
          buildArticleSchema({
            headline: "Leadgenerierung Agentur Schweiz für die Deutschschweiz",
            description:
              "devlo prüft ICP, Markt, Kaufsignale und Sequenzen, bevor B2B-Unternehmen in der Deutschschweiz eine Outbound-Kampagne starten.",
            path: pagePath,
            datePublished: "2026-05-19",
            dateModified: "2026-05-19",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret/",
          }),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "B2B-Leadgenerierung und Neukundenakquise in der Deutschschweiz",
            provider: {
              "@type": "Organization",
              name: "devlo",
              url: "https://devlo.ch",
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Deutschschweiz" },
              { "@type": "City", name: "Zürich" },
              { "@type": "City", name: "Basel" },
              { "@type": "City", name: "Bern" },
              { "@type": "City", name: "St. Gallen" },
            ],
            serviceType: "B2B lead generation, outsourced SDR, Neukundenakquise",
          },
        ]}
      />

      <main className="bg-white">
        <section className="border-b border-neutral-200 bg-[#f7f9fb] pt-24 md:pt-30">
          <div className="mx-auto grid w-full max-w-screen-xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(360px,0.48fr)] lg:px-10 lg:py-16">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">
                B2B-Leadgenerierung in der Deutschschweiz
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-normal text-[#10283a] md:text-5xl">
                Qualifizierte B2B-Termine in der Schweiz, ohne unpassende Leadlisten
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-650">
                devlo hilft Schweizer B2B-Teams, den Markt in der Deutschschweiz zu prüfen, passende Zielaccounts zu priorisieren und eine messbare Outbound-Kampagne vorzubereiten.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Kostenloser Readout", "Antwort innerhalb von 24 Stunden", "Schweizer Agentur"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#274458]">
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#audit"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#0b668f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#095778]"
                >
                  Potenzial prüfen lassen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/de/b2b-akquise-deutschschweiz"
                  className="inline-flex min-h-12 items-center rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-[#153a54] transition hover:border-[#0b668f]/50"
                >
                  Deutschschweiz-Seite ansehen
                </Link>
              </div>
            </div>

            <div id="audit" className="scroll-mt-28 rounded-xl border border-neutral-200 bg-white p-5 shadow-soft md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">
                Kostenlose Einschätzung
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-[#10283a]">
                Erhalten Sie einen konkreten Readout für Ihre Zielkunden
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Wir prüfen Markt, ICP, Regionen, Branchen, Entscheider und erste Sequenzwinkel vor einem kurzen Gespräch.
              </p>
              <div className="mt-6">
                <PaidAwareHubspotForm
                  portalId="8082524"
                  formId="54090bd3-970d-4ad1-b3b3-1c81d54c291e"
                  region="na2"
                  targetId="hubspot-swiss-german-paid"
                  locale="de"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-6 text-neutral-500">
                Nach dem Formular meldet sich unser Team innerhalb von 24 Stunden mit den nächsten Schritten.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-5 md:grid-cols-3">
              {proofRows.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <ShieldCheck className="h-5 w-5 text-[#0b668f]" aria-hidden="true" />
                  <h2 className="mt-3 text-lg font-bold text-[#10283a]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fb] py-12 md:py-16">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">
                Vorgehen
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">
                Erst Marktqualität prüfen, dann Kampagne skalieren
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-650">
                In der Deutschschweiz ist das Suchvolumen klein. Deshalb zählt nicht die Menge der Klicks, sondern ob jeder Klick zu einem passenden B2B-Gespräch führen kann.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f3f7] text-[#0b668f]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#10283a]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0b668f]">
                  Suchnachfrage
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">
                  Welche Keywords zeigen Nachfrage in der Schweiz?
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-650">
                  Die ersten Keyword-Planner-Daten zeigen: breite Begriffe wie Leadgenerierung und Kundenakquise haben mehr Volumen. Sehr genaue Agentur-Begriffe sind kleiner, aber näher am Kaufintent.
                </p>
              </div>
              <div className="w-full max-w-full min-w-0 overflow-x-auto rounded-lg border border-neutral-200 bg-white">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <caption className="sr-only">Keyword-Potenzial für B2B-Leadgenerierung in der Schweiz</caption>
                  <thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-[#0b668f]">
                    <tr>
                      <th className="px-4 py-3" scope="col">Keyword</th>
                      <th className="px-4 py-3" scope="col">Suchen/Monat</th>
                      <th className="px-4 py-3" scope="col">Top-Page-Bid</th>
                      <th className="px-4 py-3" scope="col">Einordnung</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700">
                    {keywordRows.map(([keyword, volume, bid, note]) => (
                      <tr key={keyword}>
                        <td className="px-4 py-3 font-semibold text-[#10283a]">{keyword}</td>
                        <td className="px-4 py-3">{volume}</td>
                        <td className="px-4 py-3">{bid}</td>
                        <td className="px-4 py-3">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#10283a] py-12 text-white md:py-16">
          <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.48fr_0.52fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fd4ef]">
                Für wen
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                Geeignet für B2B-Angebote mit klarem Deal-Wert
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Wir suchen nicht möglichst viele Kontakte. Wir suchen Accounts, bei denen ein qualifiziertes Gespräch für beide Seiten Sinn ergibt.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "SaaS und Software",
                "Cybersecurity und IT-Services",
                "Industrie und professionelle Dienstleistungen",
                "Beratung, Training und B2B-Services",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4">
                  <MousePointer2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8fd4ef]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
              <div>
                <BarChart3 className="h-6 w-6 text-[#0b668f]" aria-hidden="true" />
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#10283a]">
                  Was Sie nach dem Formular erhalten
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-650">
                  Ein kurzer, konkreter Blick auf die Frage: Lohnt sich ein Test in der Deutschschweiz, und welche Segmente sollten zuerst kommen?
                </p>
              </div>
              <ul className="grid gap-3">
                {[
                  "Priorisierte Regionen und Branchen für den ersten Batch",
                  "Erste Einschätzung von Suchintent, CPC und Outbound-Volumen",
                  "Vorschlag für E-Mail-, LinkedIn- und Telefonwinkel",
                  "Risiken: zu breiter ICP, zu kleine Zielgruppe oder unklare Qualifikation",
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-neutral-200 bg-[#f7f9fb] p-4 text-sm leading-6 text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-[#f7f9fb] py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <h2 className="text-3xl font-extrabold leading-tight text-[#10283a]">
              Häufige Fragen
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-neutral-200 bg-white p-5">
                  <h3 className="font-bold text-[#10283a]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
