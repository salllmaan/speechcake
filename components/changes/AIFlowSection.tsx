"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SparklesText } from "@/components/ui/sparkles-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  content: string;
  iconSrc: string;
  srcImage: string;
  srcAlt: string;
};

const STEPS: Step[] = [
  {
    title: "Progress Notes",
    content:
      "Ablespace AI generates draft progress notes for each student — customized to their goals and ready to review, edit, and share.",
    iconSrc: "/assets/icons/tablet-pen.svg",
    srcImage: "/assets/final/landing-page/ablespace-ai-01.png",
    srcAlt: "Ablespace AI drafting a progress note for a student goal",
  },
  {
    title: "Worksheets & Assessments",
    content:
      "Generate standards-aligned worksheets that match each student's goals and interests — in seconds, not hours.",
    iconSrc: "/assets/icons/ai-sheets.svg",
    srcImage: "/assets/final/landing-page/ablespace-ai-02.png",
    srcAlt: "AI-generated worksheet matched to a student's IEP goals",
  },
  {
    title: "IEP Goals & Present Levels",
    content:
      "Draft standards-aligned SMART IEP goals and present level statements tailored to each student's needs. Defensible, personalized, and ready to refine.",
    iconSrc: "/assets/icons/certificate-01.svg",
    srcImage: "/assets/landing-page/hero-ablespace-ai.avif",
    srcAlt: "Ablespace AI suggesting an IEP goal aligned to state standards",
  },
  {
    title: "Strategies and Insights",
    content:
      "AbleSpace AI surfaces each student's strengths and struggles from your data — and suggests evidence-based strategies.",
    iconSrc: "/assets/icons/ai-beautify.svg",
    srcImage: "/assets/landing-page/hero-collaboration.avif",
    srcAlt: "Insights panel highlighting student progress patterns",
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
          <h2 className="text-balance text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
            <SparklesText
              text="AbleSpace AI."
              colors={{ first: "#D2C2E7", second: "#D2C2E7" }}
              sparklesCount={4}
              duration={1.5}
              className="font-[family-name:var(--font-playfair-display)] font-bold italic text-[#A484CE]"
            />
            <br />
            Built for Special Education.
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] text-base sm:text-lg font-medium text-[#666666] leading-relaxed">
            Special educators spend hours every week on documentation that Ablespace AI can handle in seconds. That time belongs with your students.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-stretch md:gap-10">
          {/* Steps */}
          <div className="flex flex-col gap-3">
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
                    iconSrc={step.iconSrc}
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
          <MagicCard
            className="w-full rounded-2xl p-[2px] md:self-stretch"
            gradientFrom="#A484CE"
            gradientTo="#D2C2E7"
            gradientColor="#F4ECFB"
            gradientSize={300}
          >
            <div className="relative min-h-[400px] w-full overflow-hidden rounded-[14px] bg-[#FAFAF9] md:min-h-0 md:h-full">
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className={cn(
                    "absolute inset-0 transform-gpu motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out",
                    activeIndex === i ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                  aria-hidden={activeIndex !== i}
                >
                  <Image
                    src={step.srcImage}
                    alt={step.srcAlt}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="rounded-[14px] object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  iconSrc,
  title,
  content,
  isActive,
  progress,
}: {
  iconSrc: string;
  title: string;
  content: string;
  isActive: boolean;
  progress: number;
}) {
  return (
    <div
      className={cn(
        "h-full transform-gpu rounded-2xl border bg-white transition-all duration-300",
        isActive
          ? "border-[#E8E8E5]"
          : "border-[#EDEDEA]",
      )}
    >
      <div className="flex w-full items-center gap-4 px-5 py-4">
        <span
          className={cn(
            "inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-colors",
            isActive ? "bg-[#F7F1FF]" : "bg-[#F5F5F4]",
          )}
        >
          {isActive ? (
            <span
              style={{
                display: "inline-block",
                width: 20,
                height: 20,
                backgroundColor: "#9377B9",
                maskImage: `url(${iconSrc})`,
                WebkitMaskImage: `url(${iconSrc})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          ) : (
            <Image
              src={iconSrc}
              alt=""
              width={20}
              height={20}
              className="size-5 opacity-70"
            />
          )}
        </span>
        <h3
          className={cn(
            "text-left text-[16px] sm:text-[17px] font-semibold transition-colors",
            isActive ? "text-[#111111]" : "text-[#3A3A3A]",
          )}
        >
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
