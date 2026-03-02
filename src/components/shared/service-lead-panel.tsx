"use client";

import { useMemo, useState } from "react";

import { ServicesSurfaceCard } from "@/components/services/services-ui";
import type { ServicePageData } from "@/content/services";
import { HubSpotForm } from "@/components/shared/HubSpotForm";
import { type ConfiguratorLine, ServiceConfigurator } from "@/components/shared/service-configurator";

type ServiceLeadPanelProps = {
  service: ServicePageData;
};

function buildDefaultLines(service: ServicePageData): ConfiguratorLine[] {
  return service.configuratorFields.map((field) => ({
    id: field.id,
    label: field.label,
    value: "Non défini",
  }));
}

export function ServiceLeadPanel({ service }: ServiceLeadPanelProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [configuratorData, setConfiguratorData] = useState(service.configuratorHeader);
  const [previewLines, setPreviewLines] = useState<ConfiguratorLine[]>(() => buildDefaultLines(service));

  const summaryTitle = useMemo(() => `Étape 2 — Recevez le plan`, []);

  return (
    <div className="space-y-5 lg:sticky lg:top-28">
      <div className={step === 1 ? "block" : "hidden"}>
        <ServiceConfigurator
          title={service.configuratorTitle}
          intro={service.configuratorIntro}
          header={service.configuratorHeader}
          fields={service.configuratorFields}
          onSummaryChange={setConfiguratorData}
          onPreviewChange={setPreviewLines}
          onContinue={() => setStep(2)}
        />
      </div>

      <div className={step === 2 ? "space-y-5" : "hidden"}>
        <ServicesSurfaceCard className="p-5 md:p-6">
          <div className="rounded-xl border border-devlo-100 bg-devlo-50/70 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">Étape 2/2 — Coordonnées</p>
              <p className="text-xs font-semibold text-devlo-700">100%</p>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-devlo-100">
              <div className="h-full w-full rounded-full bg-devlo-700" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-devlo-900">{summaryTitle}</h2>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700 transition hover:border-devlo-700 hover:text-devlo-700"
            >
              Retour
            </button>
          </div>
          <p className="mt-2 text-sm leading-6 text-neutral-600">Vérifiez votre configuration puis envoyez vos coordonnées.</p>

          <div className="mt-4 rounded-2xl border border-neutral-200 bg-devlo-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-devlo-700">Résumé sélectionné</p>
            <div className="mt-2 space-y-1.5">
              {previewLines.map((line) => (
                <p key={line.id} className="text-xs leading-5 text-neutral-600">
                  <span className="font-semibold text-devlo-900">{line.label}:</span> {line.value}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <HubSpotForm
              serviceInterest={service.configuratorServiceLabel}
              configuratorData={configuratorData}
              ctaLabel="Recevoir mon plan stratégique →"
              onSuccess={() => setStep(2)}
            />
          </div>
        </ServicesSurfaceCard>
      </div>
    </div>
  );
}
