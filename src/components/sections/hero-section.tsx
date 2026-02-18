import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-pad">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-stroke bg-paper px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
            Acquisition B2B
          </p>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Une base Next.js propre pour reproduire votre UX WordPress sans perte visuelle.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
            Cette structure sert de fondation pour migrer page par page vos captures desktop vers
            des composants reutilisables, avec un rendu responsive coherent.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link prefetch={false}
              href="/notrerendez-vous"
              className="inline-flex h-11 items-center rounded-soft bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-accent-strong"
            >
              Commencer la migration
            </Link>
            <Link prefetch={false}
              href="/modele"
              className="inline-flex h-11 items-center rounded-soft border border-stroke bg-paper px-6 text-sm font-semibold text-ink transition hover:border-ink/30"
            >
              Voir la page modele
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-panel border border-stroke bg-paper shadow-panel">
          <Image
            src="/images/placeholders/hero.svg"
            alt="Apercu de maquette desktop"
            width={900}
            height={620}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
