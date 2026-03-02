import type { ServiceProcessStep } from "@/content/services";
import { ServicesSurfaceCard } from "@/components/services/services-ui";

type ServiceProcessProps = {
  title: string;
  steps: ServiceProcessStep[];
};

export function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <ServicesSurfaceCard className="p-6 md:p-8">
      <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-devlo-900 md:text-4xl">{title}</h2>
      <ol className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-neutral-200 bg-devlo-50 p-4 md:p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-devlo-700 text-[11px] font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-devlo-900 md:text-xl">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-neutral-600 md:text-base">{step.description}</p>
          </li>
        ))}
      </ol>
    </ServicesSurfaceCard>
  );
}
