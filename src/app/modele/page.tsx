import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modele de page",
  description: "Template de reference pour recreer une page a partir d'un screenshot desktop.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ModelePage() {
  return (
    <section className="section-pad">
      <div className="rounded-panel border border-dashed border-stroke bg-paper p-8 shadow-soft lg:p-12">
        <p className="text-xs uppercase tracking-[0.18em] text-ink/60">Template</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Page modele pour migration screenshot</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/75 md:text-base">
          Duplique cette route, puis remplace les sections avec le rendu exact de chaque capture
          desktop situee dans <code className="rounded bg-canvas px-1 py-0.5">/screenshots/fr/desktop</code>.
        </p>

        <div className="mt-8 grid gap-4 rounded-soft border border-stroke bg-canvas p-5 text-sm text-ink/80">
          <p>1. Identifier les blocs visuels (hero, preuves, contenu, cta).</p>
          <p>2. Transformer chaque bloc en composant reutilisable dans /src/components/sections.</p>
          <p>3. Ajuster les tokens pour coller au screenshot (couleurs, spacing, radius, ombre).</p>
          <p>4. Verifier a 1440px, puis adapter mobile/tablette.</p>
        </div>
      </div>
    </section>
  );
}
