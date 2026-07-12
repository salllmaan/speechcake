"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import ComplianceStrip from "@/components/changes/ComplianceStrip";

const TABS = [
  { label: "IEP Goal Tracking",             icon: "/assets/landing-page/tab/iep-goal-tracking.svg",           mockup: "/assets/landing-page/hero-iep-data-tracking.avif" },
  { label: "Service Time & Accommodations", icon: "/assets/landing-page/tab/service-time-accommodations.svg", mockup: "/assets/landing-page/hero-servicep-time-accommodations.avif" },
  { label: "AbleSpace AI",                  icon: "/assets/landing-page/tab/ai.svg",                          mockup: "/assets/landing-page/hero-ablespace-ai.avif" },
  { label: "Collaboration",                 icon: "/assets/landing-page/tab/collaboration.svg",               mockup: "/assets/landing-page/hero-collaboration.avif" },
  { label: "Medicaid Billing",              icon: "/assets/landing-page/tab/billing.svg",                     mockup: "/assets/landing-page/hero-billing.avif" },
];

const CHIP_ITEMS = [
  { label: "Trusted by 50,000+ Special Ed Professionals", icon: "/assets/icons/shield-02.svg" },
  { label: "Built for Teachers, SLPs, OTs & BCBAs",       icon: "/assets/icons/user-sharing.svg" },
  { label: "10 Million+ Data Points Logged",              icon: "/assets/icons/tablet-pen.svg" },
  { label: "200k+ Progress Notes Generated",              icon: "/assets/icons/ai-content-generator-01.svg" },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [chipIndex, setChipIndex] = useState(0);
  const [chipVisible, setChipVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setChipVisible(false);
      setTimeout(() => {
        setChipIndex((i) => (i + 1) % CHIP_ITEMS.length);
        setChipVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="opacity-60 [mask-image:radial-gradient(1300px_circle_at_center_top,white,transparent)] inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
      />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Chip */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <SectionChip
            label={CHIP_ITEMS[chipIndex].label}
            iconSrc={CHIP_ITEMS[chipIndex].icon}
            visible={chipVisible}
            variant="neutral"
          />
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <h1 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
            <SparklesText
              text="AI-Powered"
              colors={{ first: "#D2C2E7", second: "#D2C2E7" }}
              sparklesCount={4}
              duration={1.5}
              className="font-[family-name:var(--font-eb-garamond)] font-bold italic text-[#A484CE]"
            />{" "}&nbsp;IEP Tracking
            <br />
            for Special Education Teams
          </h1>
          <p className="mt-3 sm:mt-4 text-lg text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Track goals, service minutes, and accommodations in one place — and let AbleSpace automate your progress reports, Medicaid billing, and assessments.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5 sm:mb-6">
          <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
          <CTAButton href="#schools" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
        </div>

        {/* Compliance badges — Variation 5 (divider-separated colour seals) */}
        <div className="mb-20 flex justify-center sm:mb-24">
          <ComplianceStrip />
        </div>

        {/* Feature tabs */}
        <div className="mx-auto max-w-5xl mb-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab((i) => (i === 0 ? TABS.length - 1 : i - 1))}
            aria-label="Previous tab"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-left-04.svg" alt="" width={18} height={18} />
          </button>

          <div className="flex w-full items-center gap-1.5 overflow-x-auto rounded-xl bg-[#FAFAF9] px-2 py-2 lg:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex flex-shrink-0 items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === i
                    ? "bg-white text-[#111111] shadow-sm border border-[#E8E8E8]"
                    : "text-[#777777] hover:text-[#111111] hover:bg-white/60 border border-transparent"
                }`}
              >
                <span style={{
                  display: "inline-block",
                  width: 16,
                  height: 16,
                  backgroundColor: activeTab === i ? "#111111" : "#777777",
                  maskImage: `url(${tab.icon})`,
                  WebkitMaskImage: `url(${tab.icon})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  flexShrink: 0,
                }} />
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveTab((i) => (i === TABS.length - 1 ? 0 : i + 1))}
            aria-label="Next tab"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-right-04.svg" alt="" width={18} height={18} />
          </button>
        </div>

        {/* App mockup */}
        <div className="mx-auto max-w-5xl p-3 bg-[#FAFAF9] rounded-2xl">
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
            thumbnailSrc={TABS[activeTab].mockup}
            thumbnailAlt={`AbleSpace — ${TABS[activeTab].label}`}
            className="[&_img]:rounded-xl [&_img]:border-[#E8E8E8] [&_img]:shadow-none"
          />
        </div>

      </div>
    </section>
  );
}
