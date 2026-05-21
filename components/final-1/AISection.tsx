"use client";

import { useState } from "react";
import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

type AICapability = {
  id: string;
  label: string;
  description: string;
  mediaSrc: string;
  mediaAlt: string;
};

const CAPABILITIES: AICapability[] = [
  {
    id: "progress-notes",
    label: "Progress Notes",
    description:
      "Ablespace AI generates draft progress notes for each student, customized to their goals and ready to review, edit, and share.",
    mediaSrc: "/assets/landing-page/hero-ablespace-ai.avif",
    mediaAlt: "Ablespace AI drafting a progress note for a student goal",
  },
  {
    id: "worksheets",
    label: "Worksheets & Assessments",
    description:
      "Generate standards-aligned worksheets that match each student's goals and interests in seconds, not hours.",
    mediaSrc: "/assets/landing-page/ai-section-hero.png",
    mediaAlt: "AI-generated worksheet matched to a student's IEP goals",
  },
  {
    id: "iep-goals",
    label: "IEP Goals & Present Levels",
    description:
      "Draft standards-aligned SMART IEP goals and present-level statements tailored to each student's needs. Defensible, personalized, ready to refine.",
    mediaSrc: "/assets/landing-page/hero-iep-data-tracking.avif",
    mediaAlt: "Ablespace AI suggesting an IEP goal aligned to state standards",
  },
  {
    id: "insights",
    label: "Strategies & Insights",
    description:
      "Ablespace AI surfaces each student's strengths and struggles from your tracked data, then suggests evidence-based strategies.",
    mediaSrc: "/assets/landing-page/hero-collaboration.avif",
    mediaAlt: "Insights panel highlighting student progress patterns",
  },
];

export default function AISection() {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id);
  const activeIndex = CAPABILITIES.findIndex((c) => c.id === activeId);

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-12 lg:gap-14 items-start">
          {/* Left column */}
          <div>
            <div className="mb-4">
              <SectionChip
                label="Ablespace AI"
                iconSrc="/assets/icons/ai-content-generator-01.svg"
                variant="neutral"
              />
            </div>

            <h2 className="text-balance text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
              Ablespace AI
            </h2>

            <p className="mt-3 max-w-xl text-base sm:text-lg font-medium text-[#666666] leading-relaxed">
              Documentation that used to take an hour per student now drafts itself from the data you&apos;re already collecting. You review, edit, and ship.
            </p>

            <div className="mt-8" role="tablist" aria-label="Ablespace AI capabilities">
              {CAPABILITIES.map((cap, i) => {
                const isActive = cap.id === activeId;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`ai-panel-${cap.id}`}
                    id={`ai-tab-${cap.id}`}
                    onClick={() => setActiveId(cap.id)}
                    className={`group block w-full text-left transition-colors ${
                      i < CAPABILITIES.length - 1 ? "border-b border-[#EDEDEA]" : ""
                    } ${isActive ? "" : "hover:bg-[#FAFAF9]"}`}
                  >
                    <div className="flex items-center justify-between gap-4 py-5">
                      <span
                        className={`text-[15px] sm:text-base font-semibold transition-colors ${
                          isActive ? "text-[#111111]" : "text-[#7C7572] group-hover:text-[#111111]"
                        }`}
                      >
                        {cap.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`block h-[2px] flex-shrink-0 transition-all duration-300 ease-out ${
                          isActive ? "w-8 bg-[#111111]" : "w-3 bg-[#D6D2CE]"
                        }`}
                      />
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 pb-5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-md text-[14px] sm:text-[15px] leading-relaxed text-[#666666]">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="#start" variant="primary">
                Try Ablespace AI
              </CTAButton>
              <CTAButton href="#examples" variant="secondary">
                See examples
              </CTAButton>
            </div>
          </div>

          {/* Right column — preview swaps with active capability */}
          <div
            className="relative overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9]"
            role="tabpanel"
            id={`ai-panel-${activeId}`}
            aria-labelledby={`ai-tab-${activeId}`}
          >
            <div className="relative aspect-[3/4] w-full md:aspect-auto md:h-[560px]">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={cap.id}
                  className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out ${
                    i === activeIndex
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={i !== activeIndex}
                >
                  <Image
                    src={cap.mediaSrc}
                    alt={cap.mediaAlt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
