export function AcademyCallPage() {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-semibold text-[#173a54] md:text-4xl">
          Parcourons vos besoins pour atteindre vos objectifs de croissance.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#2a4b62]/80 md:text-base">
          Decouvrez comment notre formation permet aux commerciaux de signer de nouveaux clients B2B.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-stroke bg-white p-6 shadow-soft lg:p-8">
        <ul className="space-y-2 text-sm font-medium text-[#1e4159]">
          <li>1. Identification des prospects</li>
          <li>2. Generation de prospects</li>
          <li>3. Prospection commerciale</li>
          <li>4. Qualification des prospects</li>
          <li>5. Planification des rendez-vous</li>
        </ul>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-lg bg-[#3f5f80] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.12em] text-cyan-100/85">Discovery meeting</p>
            <p className="mt-2 text-2xl font-semibold">avec Charles</p>
            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs">
              {Array.from({ length: 35 }, (_, i) => (
                <span key={i} className="rounded bg-white/10 py-2">
                  {i + 1}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-stroke p-6">
            <h2 className="text-lg font-semibold text-[#173a54]">Lieu de reunion</h2>
            <p className="mt-2 text-sm text-[#2a4b62]/80">Video conference</p>
            <h3 className="mt-6 text-base font-semibold text-[#173a54]">Quelle heure vous convient le mieux?</h3>
            <div className="mt-3 grid gap-2">
              {[
                "17:30",
                "17:45",
                "18:00",
                "18:15",
              ].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className="h-10 rounded-md border border-stroke text-sm font-semibold text-[#173a54]"
                >
                  {slot}
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
