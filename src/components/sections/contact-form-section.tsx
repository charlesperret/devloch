export function ContactFormSection() {
  return (
    <section className="section-pad pt-0">
      <div className="grid gap-8 rounded-panel border border-stroke bg-paper p-7 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink/60">Formulaire</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">Demander une maquette de migration</h2>
          <p className="mt-4 text-sm leading-6 text-ink/75">
            Formulaire simple de base, deja stylise. Tu pourras brancher ensuite ton CRM ou un endpoint API.
          </p>
        </div>

        <form className="grid gap-4" aria-label="Formulaire de contact">
          <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="name">
            Nom
            <input
              id="name"
              name="name"
              type="text"
              className="h-11 rounded-soft border border-stroke px-4 text-sm outline-none transition focus:border-ink/40"
              placeholder="Jean Dupont"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="email">
            Email professionnel
            <input
              id="email"
              name="email"
              type="email"
              className="h-11 rounded-soft border border-stroke px-4 text-sm outline-none transition focus:border-ink/40"
              placeholder="jean@entreprise.ch"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              className="min-h-28 rounded-soft border border-stroke px-4 py-3 text-sm outline-none transition focus:border-ink/40"
              placeholder="Objectifs, pages prioritaires, delais..."
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex h-11 items-center justify-center rounded-soft bg-accent px-5 text-sm font-semibold text-paper transition hover:bg-accent-strong"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
