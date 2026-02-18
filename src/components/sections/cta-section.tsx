import Link from "next/link";

export function CtaSection() {
  return (
    <section className="section-pad pt-0">
      <div className="rounded-panel border border-stroke bg-ink px-8 py-10 text-paper shadow-panel lg:px-12 lg:py-14">
        <p className="text-xs uppercase tracking-[0.2em] text-paper/70">Migration WordPress vers Next.js</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
          Base prete pour integrer chaque screenshot en page React propre.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-paper/80 md:text-base">
          Tu peux maintenant reconstruire les pages une a une, en reutilisant cette base sans
          repartir de zero a chaque fois.
        </p>
        <Link prefetch={false}
          href="/modele"
          className="mt-8 inline-flex h-11 items-center rounded-soft bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-accent-strong"
        >
          Ouvrir la page modele
        </Link>
      </div>
    </section>
  );
}
