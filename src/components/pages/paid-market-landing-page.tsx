import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, MapPin, Quote, ShieldCheck, Target, Users } from "lucide-react";

import { PaidAwareHubspotForm } from "@/components/shared/paid-aware-hubspot-form";
import { LogoCloudRows } from "@/components/shared/logo-rail";
import { paidMarketHubspot, type PaidMarketPage } from "@/content/paid-market-pages";
import { PaidMarketCaseStudyGrid } from "@/components/pages/paid-market-case-study-grid";

const proofIcons = [MapPin, ShieldCheck, Users] as const;
const stepIcons = [Target, ClipboardCheck, CheckCircle2] as const;

const heroProofTitle = {
  fr: "Ce que nos clients soulignent",
  en: "What clients point out",
  de: "Was Kunden hervorheben",
  nl: "Wat klanten benadrukken",
} as const;

const methodStepLabel = {
  fr: "Étape",
  en: "Step",
  de: "Schritt",
  nl: "Stap",
} as const;

const appointmentMetric = {
  fr: {
    value: "4'615+",
    label: "meetings successfully booked",
    sublabel: "with decision-makers at leading companies worldwide",
  },
  en: {
    value: "4'615+",
    label: "meetings successfully booked",
    sublabel: "with decision-makers at leading companies worldwide",
  },
  de: {
    value: "4'615+",
    label: "meetings successfully booked",
    sublabel: "with decision-makers at leading companies worldwide",
  },
  nl: {
    value: "4'615+",
    label: "meetings successfully booked",
    sublabel: "with decision-makers at leading companies worldwide",
  },
} as const;

const clientLogoIntro = {
  fr: "Des clients B2B accompagnés sur des campagnes où le ciblage, le timing et la preuve comptent.",
  en: "B2B clients supported on campaigns where targeting, timing and proof matter.",
  de: "B2B-Kunden in Kampagnen, bei denen Zielgruppe, Timing und Beweis zählen.",
  nl: "B2B-klanten geholpen met campagnes waarin targeting, timing en bewijs tellen.",
} as const;

const heroTestimonials = {
  fr: [
    {
      quote: "Communication fluide, équipe réactive, volume et qualité.",
      author: "Anthony Crémer",
      role: "Revenue Ops Analyst",
      company: "Monizze",
      photo: "/images/Anthony_CREMER.webp",
      photoAlt: "Anthony Crémer, Revenue Ops Analyst chez Monizze",
    },
    {
      quote: "Campagnes hyper-personnalisées et rendez-vous qualifiés.",
      author: "Raphael Haut",
      role: "Head of Business Development & Marketing",
      company: "CareerLunch",
      photo: "/images/Raphael-haut.webp",
      photoAlt: "Raphael Haut, Head of Business Development and Marketing chez CareerLunch",
    },
    {
      quote: "Collaboration professionnelle et efficace en cybersécurité.",
      author: "Olivier Eyries",
      role: "CEO",
      company: "Saporo",
      photo: "/images/Olivier-Eyries.webp",
      photoAlt: "Olivier Eyries, CEO de Saporo",
    },
    {
      quote: "Ciblage affiné et approche améliorée avec devlo.",
      author: "Xavier Leuthold",
      role: "Fondateur",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, fondateur de Many Ways SA",
    },
  ],
  en: [
    {
      quote: "Clear communication, responsive team, volume and quality.",
      author: "Anthony Crémer",
      role: "Revenue Ops Analyst",
      company: "Monizze",
      photo: "/images/Anthony_CREMER.webp",
      photoAlt: "Anthony Crémer, Revenue Ops Analyst at Monizze",
    },
    {
      quote: "Hyper-personalised campaigns and qualified meetings.",
      author: "Raphael Haut",
      role: "Head of Business Development & Marketing",
      company: "CareerLunch",
      photo: "/images/Raphael-haut.webp",
      photoAlt: "Raphael Haut, Head of Business Development and Marketing at CareerLunch",
    },
    {
      quote: "Professional and efficient collaboration in cybersecurity.",
      author: "Olivier Eyries",
      role: "CEO",
      company: "Saporo",
      photo: "/images/Olivier-Eyries.webp",
      photoAlt: "Olivier Eyries, CEO of Saporo",
    },
    {
      quote: "Sharper targeting and a better prospecting approach.",
      author: "Xavier Leuthold",
      role: "Founder",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Founder of Many Ways SA",
    },
  ],
  de: [
    {
      quote: "Klare Kommunikation, reaktionsschnelles Team, Volumen und Qualität.",
      author: "Anthony Crémer",
      role: "Revenue Ops Analyst",
      company: "Monizze",
      photo: "/images/Anthony_CREMER.webp",
      photoAlt: "Anthony Crémer, Revenue Ops Analyst bei Monizze",
    },
    {
      quote: "Hyperpersonalisierte Kampagnen und qualifizierte Termine.",
      author: "Raphael Haut",
      role: "Head of Business Development & Marketing",
      company: "CareerLunch",
      photo: "/images/Raphael-haut.webp",
      photoAlt: "Raphael Haut, Head of Business Development and Marketing bei CareerLunch",
    },
    {
      quote: "Professionelle und effiziente Zusammenarbeit in Cybersecurity.",
      author: "Olivier Eyries",
      role: "CEO",
      company: "Saporo",
      photo: "/images/Olivier-Eyries.webp",
      photoAlt: "Olivier Eyries, CEO von Saporo",
    },
    {
      quote: "Präziseres Targeting und ein besserer Prospecting-Ansatz.",
      author: "Xavier Leuthold",
      role: "Founder",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Founder bei Many Ways SA",
    },
  ],
  nl: [
    {
      quote: "Heldere communicatie, een reactief team, volume en kwaliteit.",
      author: "Anthony Crémer",
      role: "Revenue Ops Analyst",
      company: "Monizze",
      photo: "/images/Anthony_CREMER.webp",
      photoAlt: "Anthony Crémer, Revenue Ops Analyst bij Monizze",
    },
    {
      quote: "Hypergepersonaliseerde campagnes en gekwalificeerde afspraken.",
      author: "Raphael Haut",
      role: "Head of Business Development & Marketing",
      company: "CareerLunch",
      photo: "/images/Raphael-haut.webp",
      photoAlt: "Raphael Haut, Head of Business Development and Marketing bij CareerLunch",
    },
    {
      quote: "Professionele en efficiënte samenwerking in cybersecurity.",
      author: "Olivier Eyries",
      role: "CEO",
      company: "Saporo",
      photo: "/images/Olivier-Eyries.webp",
      photoAlt: "Olivier Eyries, CEO van Saporo",
    },
    {
      quote: "Scherpere targeting en een betere prospectieaanpak.",
      author: "Xavier Leuthold",
      role: "Founder",
      company: "Many Ways SA",
      photo: "/images/Xavier_Leuthold_Many_Ways.webp",
      photoAlt: "Xavier Leuthold, Founder bij Many Ways SA",
    },
  ],
} as const;

export function PaidMarketLandingPage({ page }: { page: PaidMarketPage }) {
  const testimonialRail = [...heroTestimonials[page.locale], ...heroTestimonials[page.locale]];

  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-[#08384d] pb-10 pt-2 text-white md:pb-12">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-6 pt-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(560px,0.92fr)] xl:grid-cols-[minmax(0,0.9fr)_minmax(680px,0.92fr)] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">
              {page.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {page.badges.map((badge) => (
                <span key={badge} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                  {badge}
                </span>
              ))}
            </div>
            <a
              href="#paid-market-form"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#08384d] transition hover:bg-white/90"
            >
              {page.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="mt-8 grid gap-3">
              {page.proofRows.map(([label, detail], index) => {
                const Icon = proofIcons[index % proofIcons.length];
                return (
                  <div key={label} className="rounded-md border border-white/12 bg-white/[0.07] p-4">
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 flex-none text-white/76" aria-hidden="true" />
                      <div>
                        <h2 className="text-sm font-extrabold text-white">{label}</h2>
                        <p className="mt-1 text-sm leading-6 text-white/72">{detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="paid-market-form" className="self-start rounded-lg border border-white/15 bg-white p-5 text-neutral-900 shadow-xl md:p-6 xl:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0b6c8f]">
              {page.marketLabel}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#153a54]">
              {page.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {page.formIntro}
            </p>
            <div className="mt-5">
              <PaidAwareHubspotForm
                portalId={paidMarketHubspot.portalId}
                formId={paidMarketHubspot.formIds[page.locale]}
                region={paidMarketHubspot.region}
                targetId={`hubspot-${page.key}`}
                locale={page.locale}
                mode="native"
                reservedHeightClass="min-h-[420px] md:min-h-[460px]"
              />
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">
              {page.postForm}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-14">
        <div className="mx-auto w-full max-w-[1600px] px-6 text-center lg:px-10">
          {page.appointmentLogos?.length ? (
            <div>
              <p className="text-6xl font-extrabold tracking-tight text-[#34415c] md:text-7xl">
                {appointmentMetric[page.locale].value}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-neutral-900 md:text-3xl">
                {appointmentMetric[page.locale].label}
              </h2>
              <p className="mt-2 text-sm font-semibold text-neutral-500">
                {appointmentMetric[page.locale].sublabel}
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-300 md:text-sm">
                {page.appointmentLogosTitle}
              </p>
              <div className="mt-5">
                <LogoCloudRows logos={page.appointmentLogos} rows={4} />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#08384d] py-8 text-white">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#f47b5f] md:text-base">
            {heroProofTitle[page.locale]}
          </p>
          <div className="group relative mt-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#08384d] via-[#08384d]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#08384d] via-[#08384d]/80 to-transparent" />
            <div className="flex min-w-max gap-4 animate-logo-scroll-marathon will-change-transform group-hover:[animation-play-state:paused]">
              {testimonialRail.map((item, index) => (
                <figure key={`${item.author}-${item.company}-${index}`} className="min-h-[150px] w-[min(82vw,440px)] shrink-0 rounded-md border border-white/16 bg-white/[0.09] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                      <Image src={item.photo} alt={item.photoAlt} fill className="object-cover" sizes="48px" />
                    </div>
                    <figcaption className="min-w-0">
                      <p className="truncate text-base font-extrabold text-white">{item.author}</p>
                      <p className="truncate text-sm font-semibold text-white/68">
                        {item.role}, {item.company}
                      </p>
                    </figcaption>
                  </div>
                  <blockquote className="mt-4 text-sm font-semibold leading-6 text-white/82">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f47b5f]/35 bg-[#f47b5f] text-white shadow-sm">
              <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-12">
        <div className="mx-auto w-full max-w-[1600px] px-6 text-center lg:px-10">
          <h2 className="text-2xl font-extrabold leading-none text-neutral-900 md:text-3xl">
            {page.locale === "fr"
              ? page.logosTitle.split(" ").map((word) => <span key={word} className="block">{word}</span>)
              : page.logosTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-[#153a54]/70">
            {clientLogoIntro[page.locale]}
          </p>
          <div className="mt-7">
            <LogoCloudRows logos={page.logos} rows={1} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#0b6c8f]">
              {page.proofTitle}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#153a54]">
              {page.fitTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">
              {page.fitIntro}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.fitItems.map((item) => (
              <div key={item} className="flex min-h-16 items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#0b6c8f]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-12 md:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.methodTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.methodIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.methodSteps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              return (
                <div key={step.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-[#0b6c8f]" aria-hidden="true" />
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.1em] text-[#0b6c8f]">
                    {methodStepLabel[page.locale]} {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-[#153a54]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{step.body}</p>
                  <p className="mt-4 rounded-md border border-[#0b6c8f]/15 bg-[#e8f4f7] px-3 py-3 text-xs font-semibold leading-5 text-[#153a54]">
                    {step.artifact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.caseStudiesTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.caseStudiesIntro}</p>
          </div>

          <div className="mt-8">
            <PaidMarketCaseStudyGrid
              locale={page.locale}
              featuredClients={page.caseStudies.map((study) => study.client)}
            />
          </div>

          <h2 className="mt-10 text-2xl font-extrabold text-[#153a54]">{page.testimonialsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.testimonials.map((testimonial) => (
              <figure key={`${testimonial.author}-${testimonial.company}`} className="rounded-lg border border-neutral-200 bg-[#08384d] p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.photoAlt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <Quote className="h-5 w-5 text-white/70" aria-hidden="true" />
                </div>
                <blockquote className="mt-4 text-sm leading-6 text-white/88">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-white/15 pt-4 text-sm">
                  <p className="font-extrabold">{testimonial.author}</p>
                  <p className="mt-1 text-white/72">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  {testimonial.note ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
                      {testimonial.note}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.riskTitle}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-700">{page.riskIntro}</p>
            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {page.riskRows.map(([label, detail]) => (
                    <tr key={label} className="border-b border-neutral-200 last:border-0">
                      <th className="w-[34%] bg-neutral-50 px-4 py-4 font-semibold text-[#153a54]">{label}</th>
                      <td className="px-4 py-4 leading-6 text-neutral-700">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-[#08384d] p-6 text-white md:p-8">
            <BarChart3 className="h-6 w-6 text-white" aria-hidden="true" />
            <h2 className="text-2xl font-extrabold">{page.deliverablesTitle}</h2>
            <ul className="mt-5 space-y-4">
              {page.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/86">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-white" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-10">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center lg:px-10">
          <div>
            <h2 className="text-2xl font-extrabold text-[#153a54]">{page.formTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-700">{page.formIntro}</p>
          </div>
          <a
            href="#paid-market-form"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-md bg-[#08384d] px-5 text-sm font-semibold text-white transition hover:bg-[#0b4f6b]"
          >
            {page.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto grid w-full max-w-screen-xl gap-8 px-6 lg:grid-cols-[1fr_0.7fr] lg:px-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#153a54]">{page.faqTitle}</h2>
            <div className="mt-6 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="p-5">
                  <h3 className="text-base font-extrabold text-[#153a54]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-extrabold text-[#153a54]">{page.marketLabel}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{page.formIntro}</p>
            <a
              href="#paid-market-form"
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-md bg-[#08384d] px-5 text-sm font-semibold text-white transition hover:bg-[#0b4f6b]"
            >
              {page.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
