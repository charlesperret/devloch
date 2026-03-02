import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";

import type { CountryCode } from "@/content/service-brand-assets";
import { countryCodeToFlagEmoji } from "@/lib/flags";

type ServicesSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function ServicesSectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: ServicesSectionHeaderProps) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${aligned} ${className}`.trim()}>
      {eyebrow ? (
        <p className="inline-flex items-center rounded-full bg-devlo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-devlo-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${eyebrow ? "mt-4" : ""} text-3xl font-extrabold leading-[1.15] tracking-tight text-devlo-900 md:text-4xl`.trim()}>
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function ServicesSurfaceCard({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { className?: string; children: ReactNode }) {
  return (
    <section {...props} className={`rounded-2xl border border-neutral-200 bg-white shadow-soft ${className}`.trim()}>
      {children}
    </section>
  );
}

type CountryFlagsProps = {
  countries: CountryCode[];
  showMore?: boolean;
  size?: "sm" | "md";
  className?: string;
};

export function CountryFlags({ countries, showMore = false, size = "sm", className = "" }: CountryFlagsProps) {
  const maxItems = showMore ? Math.min(countries.length, 5) : countries.length;
  const visible = countries.slice(0, maxItems);

  if (!visible.length) return null;

  return (
    <div className={`inline-flex select-none items-center gap-1 ${className}`.trim()}>
      {visible.map((country, index) => (
        <span
          key={`${country}-${index}`}
          className={[
            "inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white leading-none",
            size === "md" ? "h-6 min-w-8 px-1.5 text-base" : "h-5 min-w-7 px-1 text-sm",
          ].join(" ")}
          aria-label={`Pays ${country.toUpperCase()}`}
        >
          {countryCodeToFlagEmoji(country)}
        </span>
      ))}
      {showMore ? (
        <span className="inline-flex h-5 min-w-[22px] items-center justify-center rounded-md border border-neutral-200 bg-white px-1 text-[10px] font-semibold text-neutral-600">
          +
        </span>
      ) : null}
    </div>
  );
}

export function ServiceChipButton({
  selected,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return (
    <button
      {...props}
      className={[
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-600 focus-visible:ring-offset-2",
        selected
          ? "border-devlo-700 bg-devlo-700 text-white shadow-soft"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-devlo-600/40 hover:text-devlo-800",
        props.className ?? "",
      ].join(" ")}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

export function TrustedLogosRow({ logos }: { logos: Array<{ src: string; alt: string }> }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/95 p-3 shadow-soft backdrop-blur">
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:gap-x-9">
        {logos.map((logo) => (
          <div key={logo.alt} className="relative h-7 w-[110px] md:h-8 md:w-[118px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain opacity-80 transition duration-200 hover:opacity-100"
              loading="lazy"
              sizes="118px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
