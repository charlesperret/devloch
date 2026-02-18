const features = [
  {
    title: "Composants reutilisables",
    text: "Header, Footer, Hero, sections de contenu, CTA et formulaires separables par page.",
  },
  {
    title: "SEO et accessibilite",
    text: "Metadata par page, structure semantique, alt images et labels pour les champs de formulaire.",
  },
  {
    title: "Design tokens centralises",
    text: "Couleurs, rayons, ombres et espacements harmonises pour garder une coherence de rendu.",
  },
];

export function FeatureSection() {
  return (
    <section className="section-pad pt-0">
      <div className="grid gap-5 lg:grid-cols-3">
        {features.map((item) => (
          <article key={item.title} className="rounded-panel border border-stroke bg-paper p-7 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
