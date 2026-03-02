import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { SERVICE_HUB_CARDS, type ServiceSlug } from "@/content/services";

type ServiceSwitcherProps = {
  currentSlug: ServiceSlug;
};

export function ServiceSwitcher({ currentSlug }: ServiceSwitcherProps) {
  const currentService = SERVICE_HUB_CARDS.find((item) => item.href.endsWith(`/${currentSlug}`));

  return (
    <details className="group rounded-2xl border border-neutral-200 bg-white p-2 shadow-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2.5">
        <span className="text-left">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-devlo-700">
            Changer de service
          </span>
          <span className="block text-sm font-semibold text-devlo-900">
            {currentService?.title ?? "Sélectionner un service"}
          </span>
        </span>
        <ChevronDown className="h-4 w-4 text-devlo-700 transition-transform duration-150 group-open:rotate-180" />
      </summary>

      <div className="mt-2 grid gap-1.5 rounded-xl border border-neutral-100 bg-neutral-50 p-2">
        {SERVICE_HUB_CARDS.map((service) => {
          const selected = service.href.endsWith(`/${currentSlug}`);
          return (
            <Link
              key={service.href}
              href={service.href}
              className={[
                "rounded-lg px-3 py-2 text-sm transition",
                selected
                  ? "bg-devlo-700 text-white"
                  : "bg-white text-devlo-900 hover:bg-devlo-100 hover:text-devlo-700",
              ].join(" ")}
            >
              <span className="font-semibold">{service.title}</span>
              <span className={["mt-0.5 block text-xs", selected ? "text-white/90" : "text-neutral-500"].join(" ")}>
                {service.subtitle}
              </span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
