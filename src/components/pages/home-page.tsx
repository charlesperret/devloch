import Link from "next/link";
import Image from "next/image";

import { WaveDivider } from "@/components/ui/wave-divider";
import { caseStudyLogos, enterpriseLogos, homeVisuals, testimonialProfiles } from "@/lib/brand-assets";

const process = [
  {
    title: "1. Ciblage ICP",
    text: "Definition des comptes cibles, filtres firmographiques et priorites sectorielles.",
  },
  {
    title: "2. Prospection multicanale",
    text: "Sequences email, reseaux sociaux et telephone avec suivi de delivrabilite.",
  },
  {
    title: "3. Qualification",
    text: "Selection des opportunites qui correspondent au niveau d'urgence et au budget.",
  },
  {
    title: "4. Rendez-vous confirmes",
    text: "Agenda rempli avec des interlocuteurs pertinents pour l'equipe commerciale.",
  },
];

const metrics = [
  { value: "+7", label: "Annees d'experience" },
  { value: "+3k", label: "Prospects engages" },
  { value: "+12k", label: "Messages envoyes" },
  { value: "+50k", label: "Comptes analyses" },
];

const sectors = [
  "Logiciels B2B",
  "Industrie",
  "RH et recrutement",
  "Conseil",
  "Immobilier",
  "Energie",
  "Formation",
  "Mobilite",
];

const faqs = [
  "Quel delai pour obtenir les premiers rendez-vous ?",
  "Travaillez-vous par secteur ou uniquement par marche cible ?",
  "Comment suivez-vous la qualite des leads ?",
  "Peut-on integrer vos actions avec notre CRM ?",
  "Comment se passe le reporting hebdomadaire ?",
];

export function HomePage() {
  return (
    <>
      <section className="bg-[#f7f8fb]">
        <div className="mx-auto grid w-full max-w-screen-xl gap-10 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1a6d94]">Agence B2B</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#0f2f49] lg:text-5xl">
              100% orientee vers la prospection et la generation de leads.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#254861]/80">
              Nous construisons des campagnes outbound claires, executables et pilotees par des
              indicateurs concrets.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link prefetch={false}
                href="/notrerendez-vous"
                className="inline-flex h-11 items-center rounded-md bg-[#0a608e] px-5 text-sm font-semibold text-white transition hover:bg-[#094f74]"
              >
                Demarrer maintenant
              </Link>
              <Link prefetch={false}
                href="/resultats"
                className="inline-flex h-11 items-center rounded-md border border-[#b8cfe0] bg-white px-5 text-sm font-semibold text-[#12364f]"
              >
                Voir les resultats
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#c7d9e7] bg-white p-4 shadow-soft">
            <Image
              src={homeVisuals.hero}
              alt="Vue de l'academie devlo"
              width={2028}
              height={1268}
              className="h-auto w-full rounded-lg object-cover"
              priority
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <Image
                src={homeVisuals.academyCover}
                alt="Apercu des modules outbound"
                width={1016}
                height={614}
                className="h-14 w-auto object-contain"
              />
              <Image
                src={homeVisuals.partnerBadge}
                alt="Badge service partner"
                width={2220}
                height={852}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-[#f3f4f6] py-4">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-center gap-5 px-6 lg:px-10">
          {caseStudyLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 w-[150px] items-center justify-center rounded-md border border-stroke bg-white px-3"
            >
              <Image src={logo.src} alt={logo.alt} width={220} height={80} className="max-h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#4d6678]">
          Entreprises deja accompagnees
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {enterpriseLogos.map((logo) => (
            <article
              key={logo.name}
              className="flex h-16 items-center justify-center rounded-md border border-stroke bg-white px-3 shadow-soft"
            >
              <Image src={logo.src} alt={logo.alt} width={200} height={70} className="max-h-10 w-auto object-contain" />
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto w-full max-w-screen-xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-stroke bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4d6678]">Notre objectif</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#173b55]">Rendre votre prospection simple et measurable.</h2>
            <p className="mt-4 text-sm leading-6 text-[#29495f]/80">
              Nous deployons des sequences precises pour transformer les listes de comptes en
              conversations qualifiees.
            </p>
          </article>

          <article className="rounded-xl border border-stroke bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4d6678]">Notre offre</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#173b55]">Prospection B2B complete, du ciblage au call.</h2>
            <p className="mt-4 text-sm leading-6 text-[#29495f]/80">
              Ciblage, copywriting, execution, qualification et reporting sont centralises dans un
              systeme unique.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 pb-14 lg:px-10">
        <div className="rounded-2xl bg-white p-8 shadow-panel lg:p-10">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-[#4d6678]">Processus en 4 etapes</p>
          <Image
            src={homeVisuals.tasksBoard}
            alt="Exemple de taches outbound organisees"
            width={1366}
            height={768}
            className="mx-auto mt-6 h-auto w-full max-w-4xl rounded-lg border border-stroke object-cover"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <article key={item.title} className="rounded-lg border border-stroke bg-[#f8fafc] p-5">
                <h3 className="text-sm font-semibold text-[#163852]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#2a4b62]/80">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c587f] py-14 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-cyan-100/85">Nos resultats</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => (
              <article key={item.label} className="rounded-lg border border-cyan-200/20 bg-[#0b4f73] p-6 text-center">
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-cyan-100/80">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider tone="dark" />

      <section className="mx-auto w-full max-w-screen-xl px-6 py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-xl border border-stroke bg-white p-5 shadow-soft">
            <Image
              src={homeVisuals.caseVideo}
              alt="Extrait etude de cas CareerLunch"
              width={1440}
              height={860}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#4d6678]">Etudes de cas</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#173b55]">
              Des campagnes qui transforment des comptes froids en discussions commerciales.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#2d4b62]/80">
              Chaque mission est pilotee par un plan de compte clair, un rythme hebdomadaire et des
              feedback loops avec votre equipe.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <article className="rounded-lg border border-stroke bg-[#f8fafc] p-4 text-sm text-[#1f4258]">
                Pipeline plus stable des la 3e semaine.
              </article>
              <article className="rounded-lg border border-stroke bg-[#f8fafc] p-4 text-sm text-[#1f4258]">
                Rendez-vous qualifies et meilleure visibilite du funnel.
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 pb-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="overflow-hidden rounded-xl border border-stroke bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4d6678]">Preuves sociales</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#173b55]">Des reponses positives, concretement.</h2>
            <Image
              src={homeVisuals.positiveReplies}
              alt="Collage de reponses positives provenant de campagnes devlo"
              width={1536}
              height={1249}
              className="mt-4 h-auto w-full rounded-lg border border-stroke object-cover"
            />
          </article>

          <article className="rounded-xl border border-stroke bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4d6678]">Contacts et references</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {testimonialProfiles.map((profile) => (
                <div key={profile.name} className="rounded-lg border border-stroke bg-[#f8fafc] p-3">
                  <Image
                    src={profile.image}
                    alt={profile.alt}
                    width={800}
                    height={800}
                    className="h-28 w-full rounded-md object-cover"
                  />
                  <p className="mt-3 text-sm font-semibold text-[#173b55]">{profile.name}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#5e798d]">{profile.role}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 pb-14 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-[#4d6678]">Secteurs cibles</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-stroke bg-white px-4 py-3 text-center text-sm font-medium text-[#1a3e58] shadow-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-14">
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-[#4d6678]">Pourquoi travailler ensemble</p>
          <div className="mx-auto mt-7 max-w-4xl divide-y divide-stroke rounded-xl border border-stroke bg-white shadow-soft">
            {faqs.map((item) => (
              <details key={item} className="group px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#183d56]">
                  <span className="flex items-center justify-between gap-4">
                    {item}
                    <span className="text-lg text-[#50748c] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#2a4b62]/80">
                  Reponse exemple: nous alignons les objectifs, les cibles et les messages pour
                  maximiser la conversion des sequences outbound.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b587f] py-14 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Demarrez rapidement et pilotez vos campagnes avec clarte.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-cyan-100/90 md:text-base">
            Nous cadrons votre projet en 48h puis nous deployons les actions prioritaires avec un
            suivi precis des KPI.
          </p>
          <Link prefetch={false}
            href="/notrerendez-vous"
            className="mt-7 inline-flex h-11 items-center rounded-md bg-white px-6 text-sm font-semibold text-[#0c567e]"
          >
            Reserver un appel
          </Link>
          <div className="mt-5 flex justify-center">
            <Image
              src={homeVisuals.partnerBadge}
              alt="Top certified lemlist agency"
              width={2220}
              height={852}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-6 py-14 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-[#4d6678]">FAQ</p>
        <div className="mx-auto mt-6 max-w-4xl divide-y divide-stroke rounded-xl border border-stroke bg-white shadow-soft">
          {[
            "Quels outils utilisez-vous pour la prospection ?",
            "Combien de comptes ciblez-vous par mois ?",
            "Comment mesurez-vous le ROI ?",
          ].map((item) => (
            <details key={item} className="group px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-[#183d56]">
                <span className="flex items-center justify-between gap-4">
                  {item}
                  <span className="text-lg text-[#50748c] transition group-open:rotate-45">+</span>
                </span>
              </summary>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
