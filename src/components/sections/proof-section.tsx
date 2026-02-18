const metrics = [
  { value: "26", label: "Pages FR capturees" },
  { value: "1440px", label: "Reference desktop" },
  { value: "App Router", label: "Architecture Next.js" },
  { value: "Tailwind", label: "Styling systematique" },
];

export function ProofSection() {
  return (
    <section className="section-pad pt-0">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <article key={item.label} className="rounded-panel border border-stroke bg-paper p-6 shadow-soft">
            <p className="text-3xl font-semibold text-ink">{item.value}</p>
            <p className="mt-2 text-sm text-ink/70">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
