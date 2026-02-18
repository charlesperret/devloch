type LegalPageProps = {
  title: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-xl border border-stroke bg-white p-8 shadow-soft lg:p-10">
        <h1 className="text-3xl font-semibold text-[#173a54] md:text-4xl">{title}</h1>

        <div className="mt-8 space-y-7">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-lg font-semibold text-[#173a54]">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-[#274a62]/85">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
