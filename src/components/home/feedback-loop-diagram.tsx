"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FeedbackLoopStep } from "@/content/masterfile.fr";
import { buttonClassName } from "@/components/ui/button";

type FeedbackLoopDiagramProps = {
  steps: FeedbackLoopStep[];
  subtitle: string;
  cta: { label: string; href: string };
  centerLabel?: [string, string];
  hoverHint?: string;
};

const LOOP_COLORS = [
  { bg: "bg-devlo-800", border: "border-devlo-700", text: "text-white" },
  { bg: "bg-devlo-700", border: "border-devlo-600", text: "text-white" },
  { bg: "bg-devlo-600", border: "border-devlo-700", text: "text-white" },
  { bg: "bg-devlo-800", border: "border-devlo-700", text: "text-white" },
] as const;

export function FeedbackLoopDiagram({
  steps,
  subtitle,
  cta,
  centerLabel = ["Boucle", "continue"],
  hoverHint = "Survolez une étape pour en savoir plus",
}: FeedbackLoopDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Compact circular loop — sized to fit viewport */}
      <div className="relative mx-auto h-[220px] w-full max-w-[220px] overflow-hidden">
        {/* Outer ring — animated dashed circle */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="110"
            cy="110"
            r="95"
            stroke="#1E4D6B"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            opacity="0.3"
            className="origin-center animate-[spin_30s_linear_infinite]"
          />
          <circle
            cx="110"
            cy="110"
            r="80"
            stroke="#2A6F97"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.15"
            className="origin-center animate-[spin_45s_linear_infinite_reverse]"
          />
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 110 110)`}>
              <path d="M110 15 L107 22 L113 22 Z" fill="#2A6F97" opacity="0.4" />
            </g>
          ))}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-devlo-900 px-3 py-1.5 text-center shadow-panel">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">{centerLabel[0]}</p>
            <p className="text-[11px] font-bold text-white">{centerLabel[1]}</p>
          </div>
        </div>

        {/* 4 step nodes positioned around the circle */}
        {steps.map((step, i) => {
          const positions = [
            { top: "0", left: "50%", tx: "-50%", ty: "0" },
            { top: "50%", right: "0", tx: "0", ty: "-50%" },
            { bottom: "0", left: "50%", tx: "-50%", ty: "0" },
            { top: "50%", left: "0", tx: "0", ty: "-50%" },
          ];
          const pos = positions[i];
          const colors = LOOP_COLORS[i];
          const isActive = activeStep === i;

          return (
            <button
              key={step.title}
              type="button"
              className={`absolute z-10 flex max-w-[92px] items-center gap-1.5 rounded-lg ${colors.bg} ${colors.border} border px-2 py-1.5 shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-panel ${isActive ? "scale-105 shadow-panel ring-2 ring-white/30" : ""} ${colors.text}`}
              style={{
                top: "top" in pos ? pos.top : undefined,
                bottom: "bottom" in pos ? pos.bottom : undefined,
                left: "left" in pos ? pos.left : undefined,
                right: "right" in pos ? pos.right : undefined,
                transform: `translate(${pos.tx}, ${pos.ty})`,
              }}
              onClick={() => setActiveStep(isActive ? null : i)}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                {i + 1}
              </span>
              <span className="truncate text-xs font-semibold">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active step description */}
      <div className="min-h-[48px] text-center">
        {activeStep !== null ? (
          <p className="mx-auto max-w-[280px] text-xs leading-relaxed text-neutral-600 motion-safe:animate-fade-in-up">
            {steps[activeStep].description}
          </p>
        ) : (
          <p className="mx-auto max-w-[280px] text-xs leading-relaxed text-neutral-400 italic">
            {hoverHint}
          </p>
        )}
      </div>

      {/* Subtitle */}
      <p className="mx-auto max-w-[300px] text-center text-xs leading-relaxed text-neutral-600">
        {subtitle}
      </p>

      {/* CTA */}
      <Link
        href={cta.href}
        className={buttonClassName("primary", "inline-flex items-center gap-2 px-5 py-2.5 text-xs")}
      >
        {cta.label}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}
