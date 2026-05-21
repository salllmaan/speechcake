"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  content: string;
  srcImage: string;
  srcAlt: string;
};

const STEPS: Step[] = [
  {
    title: "Collect data while you work",
    content:
      "Tap-fast logging during sessions, automatic service-time tracking, and accommodations captured inline. No after-hours catch-up.",
    srcImage: "/assets/landing-page/hero-iep-data-tracking.avif",
    srcAlt: "Logging IEP goal data during a session",
  },
  {
    title: "Let Ablespace AI write the draft",
    content:
      "Progress notes, behavior summaries, and IEP goals drafted from the data you just tracked. Seconds, not Sundays.",
    srcImage: "/assets/landing-page/hero-ablespace-ai.avif",
    srcAlt: "Ablespace AI drafting a progress note",
  },
  {
    title: "Review on your terms",
    content:
      "Edit any sentence, change the tone, regenerate with a different prompt. Nothing leaves your account until you approve it.",
    srcImage: "/assets/landing-page/ai-section-hero.png",
    srcAlt: "Reviewing and editing an AI-drafted note",
  },
  {
    title: "Ship to families and districts",
    content:
      "Sharable progress reports, defensible documentation for IEP meetings, clean exports for Medicaid claims.",
    srcImage: "/assets/landing-page/hero-collaboration.avif",
    srcAlt: "Sharing a finalized report with the team",
  },
];

const AUTO_ADVANCE_MS = 10000;
const TICK_MS = 50;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function AIFlowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setElapsed((p) => p + TICK_MS), TICK_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (elapsed >= AUTO_ADVANCE_MS) {
      setActiveIndex((i) => (i + 1) % STEPS.length);
      setElapsed(0);
    }
  }, [elapsed]);

  const handleSelect = (i: number) => {
    setActiveIndex(i);
    setElapsed(0);
  };

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex justify-center">
            <SectionChip
              label="How Ablespace AI works"
              iconSrc="/assets/icons/ai-content-generator-01.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-balance text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
            From data collection to ready-to-share, automated.
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-base sm:text-lg font-medium text-[#666666] leading-relaxed">
            Four steps that take the documentation work off your plate without taking your hands off the wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {/* Steps */}
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = activeIndex === i;
              const progress = isActive ? (elapsed / AUTO_ADVANCE_MS) * 100 : 0;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-pressed={isActive}
                  className="block w-full text-left"
                >
                  <StepCard
                    number={i + 1}
                    title={step.title}
                    content={step.content}
                    isActive={isActive}
                    progress={progress}
                  />
                </button>
              );
            })}
          </div>

          {/* Stacked images */}
          <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] md:h-[500px]">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={cn(
                  "absolute inset-0 transform-gpu motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
                  activeIndex === i ? "scale-100" : "scale-[0.92]",
                  activeIndex > i ? "translate-y-full" : "translate-y-0",
                )}
                style={{ zIndex: STEPS.length - i }}
                aria-hidden={activeIndex !== i}
              >
                <Image
                  src={step.srcImage}
                  alt={step.srcAlt}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="rounded-2xl object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  content,
  isActive,
  progress,
}: {
  number: number;
  title: string;
  content: string;
  isActive: boolean;
  progress: number;
}) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-2xl border transition-all duration-300",
        isActive
          ? "border-[#EDEDEA] bg-[#FAFAF9]"
          : "scale-[0.97] border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-4 p-5">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-[#F0EFEB] text-[13px] font-semibold text-[#7C7572]">
          {number}
        </span>
        <h3 className="text-left text-[17px] sm:text-lg font-semibold text-[#111111]">
          {title}
        </h3>
      </div>
      <div
        className={cn(
          "grid w-full transform-gpu overflow-hidden transition-[grid-template-rows] duration-500 ease-out",
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-left text-[14px] sm:text-[15px] leading-relaxed text-[#666666]">
            {content}
          </p>
          <div className="px-5 pb-5">
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[#EDEDEA]">
              <div
                className="absolute left-0 top-0 h-[2px] bg-[#111111] transition-[width] duration-100 ease-linear"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
