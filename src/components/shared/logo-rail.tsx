import Image from "next/image";

type LogoItem = {
  src: string;
  alt: string;
};

type InfiniteLogoRailProps = {
  logos: LogoItem[];
  pauseOnHover?: boolean;
  reverse?: boolean;
  duration?: "normal" | "slow" | "marathon";
};

type LogoCloudRowsProps = {
  logos: LogoItem[];
  rows?: 1 | 2 | 3 | 4;
  pauseOnHover?: boolean;
};

const logoScaleClassByAlt: Record<string, string> = {
  Apple: "scale-[0.82]",
  BCF: "scale-[0.82]",
  BHP: "scale-[0.82]",
  ADM: "scale-[1.12]",
};

const railLogoSizesByAlt: Record<string, string> = {
  Apple: "(max-width: 768px) 72px, 80px",
  BCF: "(max-width: 768px) 72px, 80px",
  BHP: "(max-width: 768px) 72px, 80px",
  ADM: "(max-width: 768px) 88px, 96px",
  UEFA: "(max-width: 768px) 72px, 80px",
};

const defaultRailLogoSizes = "(max-width: 768px) 120px, 160px";

export function namesToLogoItems(names: string[]): LogoItem[] {
  return names.map((name) => {
    const base = name.replace(/\.[a-z0-9]+$/i, "").replace(/^Logo[_-]?/i, "").replace(/[_-]/g, " ");
    return { src: `/images/${name}`, alt: `${base} logo` };
  });
}

export function InfiniteLogoRail({
  logos,
  pauseOnHover = false,
  reverse = false,
  duration = "normal",
}: InfiniteLogoRailProps) {
  const doubled = [...logos, ...logos];
  const animationClass = duration === "marathon"
    ? (reverse ? "animate-logo-scroll-marathon-reverse" : "animate-logo-scroll-marathon")
    : duration === "slow"
      ? (reverse ? "animate-logo-scroll-slow-reverse" : "animate-logo-scroll-slow")
      : (reverse ? "animate-logo-scroll-reverse" : "animate-logo-scroll");

  return (
    <div className="group relative w-full max-w-full overflow-hidden bg-white py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent" />
      <div
        className={[
          "flex min-w-max items-center gap-2 will-change-transform",
          animationClass,
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {doubled.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-14 w-[190px] shrink-0 items-center justify-center px-6"
          >
            <div
              className={["relative h-11 w-full overflow-hidden", logoScaleClassByAlt[logo.alt] ?? ""].join(" ").trim()}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                sizes={railLogoSizesByAlt[logo.alt] ?? defaultRailLogoSizes}
                quality={72}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoCloudRows({ logos, rows = 3, pauseOnHover = true }: LogoCloudRowsProps) {
  const rowCount = Math.max(1, Math.min(rows, logos.length));
  const logoRows = Array.from({ length: rowCount }, (_, rowIndex) =>
    logos.filter((_, index) => index % rowCount === rowIndex),
  );

  return (
    <div className="group relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-1">
      <div className="space-y-2">
        {logoRows.map((rowLogos, rowIndex) => (
          <LogoCloudRow
            key={`logo-cloud-row-${rowIndex}`}
            logos={rowLogos}
            reverse={rowIndex % 2 === 1}
            pauseOnHover={pauseOnHover}
          />
        ))}
      </div>
    </div>
  );
}

function LogoCloudRow({
  logos,
  reverse,
  pauseOnHover,
}: {
  logos: LogoItem[];
  reverse: boolean;
  pauseOnHover: boolean;
}) {
  const repeated = [...logos, ...logos];
  const animationClass = reverse ? "animate-logo-scroll-marathon-reverse" : "animate-logo-scroll-marathon";

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />
      <div
        className={[
          "flex w-max gap-2 will-change-transform",
          animationClass,
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {repeated.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-14 w-[112px] shrink-0 items-center justify-center rounded-md border border-neutral-200/70 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:scale-[1.02]"
          >
            <div className={["relative h-10 w-full overflow-hidden", logoScaleClassByAlt[logo.alt] ?? ""].join(" ").trim()}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-45 saturate-[0.7] transition duration-200 hover:opacity-100 hover:saturate-100"
                loading="lazy"
                sizes={railLogoSizesByAlt[logo.alt] ?? "112px"}
                quality={72}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
