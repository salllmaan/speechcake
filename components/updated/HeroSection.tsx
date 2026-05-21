"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const COMPLIANCE_BADGES = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif",   alt: "ISO 27001 Certified" },
];

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
    <section className="relative w-full bg-white pt-16 sm:pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              colors={{ first: "#BCBAEF", second: "#BCBAEF" }}
              sparklesCount={4}
              duration={1.5}
              className="font-bold italic"
            />{" "}&nbsp;IEP Tracking
            <br />
            for Special Education Teams
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Track goals, service minutes, and accommodations in one place — and let AbleSpace automate your progress reports, Medicaid billing, and assessments.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5 sm:mb-6">
          <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
          <CTAButton href="#schools" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
        </div>

        {/* Compliance badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap mb-20 sm:mb-24">
          {COMPLIANCE_BADGES.map((b) => (
            <Image key={b.alt} src={b.src} alt={b.alt} width={80} height={36} className="object-contain h-8 sm:h-9 w-auto" />
          ))}
        </div>

        {/* Feature tabs */}
        <div className="mx-auto max-w-5xl mb-4 flex items-center gap-2">
          <button
            onClick={() => setActiveTab((i) => (i === 0 ? TABS.length - 1 : i - 1))}
            aria-label="Previous tab"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-left-04.svg" alt="" width={18} height={18} />
          </button>

          <div className="flex items-center justify-center gap-1.5 bg-[#FAFAF9] rounded-xl px-2 py-2 w-full">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
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
            onClick={() => setActiveTab((i) => (i === TABS.length - 1 ? 0 : i + 1))}
            aria-label="Next tab"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-right-04.svg" alt="" width={18} height={18} />
          </button>
        </div>

        {/* App mockup */}
        <div className="mx-auto max-w-5xl p-3 bg-[#FAFAF9] rounded-2xl">
          <div className="relative">
            <Image
              src={TABS[activeTab].mockup}
              alt={`AbleSpace — ${TABS[activeTab].label}`}
              width={1200}
              height={675}
              className="w-full rounded-xl border border-[#E8E8E8]"
              priority
            />
            {/* Watch Video overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, rgba(255,255,255,1) 0%, transparent 100%)" }}
            >
              <button className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#1A1917]/90 backdrop-blur-sm text-white text-base sm:text-[20px] font-semibold rounded-full border border-white/10 shadow-lg hover:bg-[#1A1917] transition-colors">
                <Image src="/assets/icons/play-circle.svg" alt="" width={24} height={24} className="brightness-0 invert sm:hidden" />
                <Image src="/assets/icons/play-circle.svg" alt="" width={32} height={32} className="brightness-0 invert hidden sm:block" />
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Trusted-by logos strip */}
        <div className="mx-auto max-w-5xl mt-8 sm:mt-10 px-2 sm:px-4 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {Array.from({ length: 8 }, (_, i) => (
            <Image
              key={i}
              src={`/assets/logos/social-strip-logo-${i + 1}@2x.avif`}
              alt={`District logo ${i + 1}`}
              width={120}
              height={32}
              className="h-10 sm:h-14 w-auto object-contain opacity-70"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
