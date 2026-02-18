import type { ReactNode } from "react";

type LeadFormPageProps = {
  title: string;
  intro: ReactNode;
};

export function LeadFormPage({ title, intro }: LeadFormPageProps) {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-semibold leading-tight text-[#173a54] md:text-4xl">{title}</h1>
        <div className="mt-5 space-y-3 text-sm leading-6 text-[#2a4b62]/85 md:text-base">{intro}</div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl rounded-xl border border-stroke bg-white p-6 shadow-soft lg:p-8">
        <form className="grid gap-4" aria-label="Formulaire de qualification">
          <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="best-client">
            Qui sont vos meilleurs clients?
            <input id="best-client" name="best-client" className="h-10 rounded-md border border-stroke px-3" />
          </label>

          <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="decision-maker">
            Qui sont vos decideurs cibles?
            <input id="decision-maker" name="decision-maker" className="h-10 rounded-md border border-stroke px-3" />
          </label>

          <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="geo">
            Quelle zone geographique visez-vous?
            <input id="geo" name="geo" className="h-10 rounded-md border border-stroke px-3" />
          </label>

          <fieldset className="rounded-md border border-stroke p-4">
            <legend className="px-1 text-sm font-semibold text-[#173a54]">Taille des entreprises cibles</legend>
            <div className="mt-2 grid gap-2 text-sm text-[#2a4b62] sm:grid-cols-3">
              {[
                "0-10",
                "11-50",
                "51-100",
                "101-250",
                "251-500",
                "500+",
              ].map((item) => (
                <label key={item} className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="firstname">
              Prenom
              <input id="firstname" name="firstname" className="h-10 rounded-md border border-stroke px-3" />
            </label>
            <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="lastname">
              Nom de famille
              <input id="lastname" name="lastname" className="h-10 rounded-md border border-stroke px-3" />
            </label>
            <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="email">
              Email professionnel
              <input id="email" name="email" type="email" className="h-10 rounded-md border border-stroke px-3" />
            </label>
            <label className="grid gap-2 text-sm text-[#1d4059]" htmlFor="phone">
              Numero de telephone professionnel
              <input id="phone" name="phone" className="h-10 rounded-md border border-stroke px-3" />
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-[#f26a3d] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
