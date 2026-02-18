import Link from "next/link";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <section className="section-pad">
      <div className="rounded-panel border border-stroke bg-paper p-8 shadow-soft lg:p-12">
        <p className="text-xs uppercase tracking-[0.18em] text-ink/60">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/75 md:text-base">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link prefetch={false}
            href="/modele"
            className="inline-flex h-11 items-center rounded-soft bg-accent px-5 text-sm font-semibold text-paper transition hover:bg-accent-strong"
          >
            Utiliser la page modele
          </Link>
          <Link prefetch={false}
            href="/"
            className="inline-flex h-11 items-center rounded-soft border border-stroke bg-paper px-5 text-sm font-semibold text-ink"
          >
            Retour vers accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
