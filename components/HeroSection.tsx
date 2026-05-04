"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

const COMPLIANCE_BADGES = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif",   alt: "ISO 27001 Certified" },
];

const TABS = [
  { label: "IEP Goal Tracking",             icon: "/assets/landing-page/tab/iep-goal-tracking.svg",           mockup: "/assets/landing-page/hero-data-collection.avif" },
  { label: "Service Time & Accommodations", icon: "/assets/landing-page/tab/service-time-accommodations.svg", mockup: "/assets/landing-page/hero-data-collection.avif" },
  { label: "AbleSpace AI",                  icon: "/assets/landing-page/tab/ai.svg",                          mockup: "/assets/landing-page/hero-data-collection.avif" },
  { label: "Collaboration",                 icon: "/assets/landing-page/tab/collaboration.svg",               mockup: "/assets/landing-page/hero-data-collection.avif" },
  { label: "Medicaid Billing",              icon: "/assets/landing-page/tab/billing.svg",                     mockup: "/assets/landing-page/hero-data-collection.avif" },
];

const SCHOOL_LOGOS = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/logos/social-strip-logo-${i + 1}@2x.avif`,
  alt: `School logo ${i + 1}`,
}));

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  }

  return (
    <section className="w-full bg-white pt-16 sm:pt-24 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Chip */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <SectionChip label="Trusted by 20,000+ Sped Ed Professionals" />
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <h1 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
            AI-Powered IEP Tracking
            <br />
            for Sped Ed Professionals
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#666666] leading-relaxed max-w-xl mx-auto">
            Track goals, service time, and accommodations seamlessly — generate reports faster and focus more on your students.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5 sm:mb-6">
          <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
          <CTAButton href="#schools" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
        </div>

        {/* Compliance badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap mb-16 sm:mb-[104px]">
          {COMPLIANCE_BADGES.map((b) => (
            <Image key={b.alt} src={b.src} alt={b.alt} width={80} height={36} className="object-contain h-8 sm:h-9 w-auto" />
          ))}
        </div>

        {/* Feature tabs */}
        <div className="mx-auto max-w-5xl mb-4 flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-left-04.svg" alt="" width={18} height={18} />
          </button>

          <div ref={scrollRef} className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-[#FAFAF9] rounded-xl px-2 py-2 w-full">
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
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#E8E8E8] bg-white items-center justify-center hover:bg-[#F5F5F5] transition-colors shadow-sm"
          >
            <Image src="/assets/icons/arrow-right-04.svg" alt="" width={18} height={18} />
          </button>
        </div>

        {/* App mockup */}
        <div className="relative mx-auto max-w-5xl p-3 bg-[#FAFAF9] rounded-2xl">
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

        {/* School logos strip */}
        <div className="mt-10 sm:mt-12 mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-5 sm:gap-10 flex-wrap">
            {SCHOOL_LOGOS.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={56}
                className="object-contain h-10 sm:h-14 w-auto opacity-80 grayscale hover:opacity-80 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
