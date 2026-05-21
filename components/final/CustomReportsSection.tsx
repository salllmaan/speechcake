"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ReportItem = {
  label: string;
  description: string;
  iconSrc: string;
  iconBg: string;
  iconColor: string;
  mediaSrc: string;
  mediaAlt: string;
};

const REPORT_ITEMS: ReportItem[] = [
  {
    label: "IEP goal progress reports",
    description: "Auto-generated progress summaries built from your tracked data.",
    iconSrc: "/assets/icons/ai-sheets.svg",
    iconBg: "bg-[#FFE7DC]",
    iconColor: "#FF8F6C",
    mediaSrc: "/assets/landing-page/hero-iep-data-tracking.avif",
    mediaAlt: "IEP goal progress",
  },
  {
    label: "Behavior summaries",
    description: "Patterns, antecedents, and trends — written up in seconds.",
    iconSrc: "/assets/icons/ai-content-generator-01.svg",
    iconBg: "bg-[#EFE7FE]",
    iconColor: "#8B6EE8",
    mediaSrc: "/assets/landing-page/hero-ablespace-ai.avif",
    mediaAlt: "Behavior summaries",
  },
  {
    label: "Service time logs",
    description: "Minutes served, missed, and made up — ready for Medicaid.",
    iconSrc: "/assets/icons/calendar-02.svg",
    iconBg: "bg-[#DDF3EA]",
    iconColor: "#2BAA7A",
    mediaSrc: "/assets/landing-page/hero-servicep-time-accommodations.avif",
    mediaAlt: "Service time logs",
  },
  {
    label: "Create your own",
    description: "Mix any data point and let AbleSpace draft a custom report.",
    iconSrc: "/assets/icons/ai-beautify.svg",
    iconBg: "bg-[#FFE0EE]",
    iconColor: "#E26FAB",
    mediaSrc: "/assets/landing-page/hero-collaboration.avif",
    mediaAlt: "Custom report",
  },
];

function MaskIcon({ src, color, size = 18 }: { src: string; color: string; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        flexShrink: 0,
      }}
    />
  );
}

export default function CustomReportsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = REPORT_ITEMS[activeIndex];

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left card */}
          <div className="flex flex-col rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] p-8 sm:p-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[15px] font-semibold text-[#7C7572]">Custom Reports</span>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
              Automate progress reports for your team.
            </h3>

            <a
              href="#reports"
              aria-label="Learn more"
              className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white transition-colors hover:bg-[#000000]"
            >
              <ArrowRight size={18} strokeWidth={2.25} />
            </a>

            <div className="mt-10 flex-1">
              {REPORT_ITEMS.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className={`group w-full text-left ${
                      i < REPORT_ITEMS.length - 1 && !isActive
                        ? "border-b border-[#EDEDEA]"
                        : ""
                    } ${
                      isActive
                        ? "-mx-3 my-1 rounded-xl bg-[#F0EFEB] px-3"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 py-4">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${item.iconBg}`}
                      >
                        <MaskIcon src={item.iconSrc} color={item.iconColor} />
                      </span>
                      <span className="text-[15px] font-semibold text-[#111111]">
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <p className="pb-4 pl-12 pr-2 text-[13px] leading-relaxed text-[#7C7572]">
                        {item.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right card — preview swaps with active item */}
          <div className="relative overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9]">
            <div className="relative h-full min-h-[460px] w-full">
              {REPORT_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    i === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={item.mediaSrc}
                    alt={item.mediaAlt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
              {/* Subtle gradient frame for product-shot feel */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
