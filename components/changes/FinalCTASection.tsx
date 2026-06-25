"use client";

import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import WordListSwap from "@/components/cuicui/word-list-swap";

const IMPACT_STATS = [
  { number: "90%", label: "Improved compliance" },
  { number: "4 hrs/wk", label: "Saved on average" },
  { number: "80%", label: "Improved collaboration" },
];

const ROTATING_WORDS = [
  "Teachers",
  "SLPs",
  "OTs",
  "BCBAs",
  "Paras",
];

export default function FinalCTASection() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="relative overflow-hidden rounded-3xl border border-[#EDEDEA] bg-white px-6 py-[72px] sm:px-12 lg:px-20">

          <div className="relative text-center">
            <div className="flex justify-center">
              <SectionChip
                label="Ready when you are"
                iconSrc="/assets/icons/star.svg"
                variant="neutral"
              />
            </div>

            <h2 className="mt-5 text-balance text-[32px] sm:text-4xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-[#111111]">
              <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3">
                <span>Built for</span>
                <WordListSwap
                  texts={ROTATING_WORDS}
                  rotationInterval={2200}
                  staggerDuration={0.025}
                  staggerFrom="first"
                  mainClassName="inline-flex text-[#A484CE]"
                  splitLevelClassName="overflow-hidden pb-1"
                  elementLevelClassName="inline-block"
                />
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">
              Set up in minutes. Cancel anytime. No credit card required to start your free trial.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href="#start" variant="primary">
                Start Free Trial
              </CTAButton>
              <CTAButton href="#demo" variant="secondary">
                Book a Demo
              </CTAButton>
            </div>

            {/* Impact stats — serif strip */}
            <div className="mt-12 sm:mt-16 px-6 py-10 sm:px-10 sm:py-12">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:gap-x-4 sm:flex-nowrap sm:justify-between">
                {IMPACT_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-2 sm:gap-4">
                    <div className="text-center px-2">
                      <p className="font-[family-name:var(--font-eb-garamond)] font-bold italic text-[#1A1A1A] text-[40px] sm:text-[52px] lg:text-[68px] leading-[1] tracking-tight">
                        {stat.number}
                      </p>
                      <p className="mt-2 text-[12px] sm:text-sm tracking-[0.1em] uppercase text-[#6B6258] font-medium whitespace-nowrap">
                        {stat.label}
                      </p>
                    </div>
                    {i < IMPACT_STATS.length - 1 && (
                      <span
                        aria-hidden
                        className="hidden sm:inline-block text-[36px] sm:text-[48px] lg:text-[60px] font-[family-name:var(--font-eb-garamond)] italic text-[#C8BFB1] leading-none"
                      >
                        /
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
