"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ReportItem = {
  id: string;
  label: string;
  description: string;
  iconSrc: string;
  mediaSrc: string;
  mediaAlt: string;
};

const REPORT_ITEMS: ReportItem[] = [
  {
    id: "goals",
    label: "IEP goal progress reports",
    description:
      "Auto-generated progress summaries built from the data you’re already collecting, defensible and ready to share.",
    iconSrc: "/assets/icons/ai-sheets.svg",
    mediaSrc: "/assets/landing-page/hero-iep-data-tracking.avif",
    mediaAlt: "IEP goal progress report",
  },
  {
    id: "behavior",
    label: "Behavior summaries",
    description:
      "Patterns, antecedents, and trends across sessions, written up in seconds instead of after-hours.",
    iconSrc: "/assets/icons/ai-content-generator-01.svg",
    mediaSrc: "/assets/landing-page/hero-ablespace-ai.avif",
    mediaAlt: "Behavior summary",
  },
  {
    id: "service-time",
    label: "Service time logs",
    description:
      "Minutes served, missed, and made up. Formatted for Medicaid claims and team check-ins.",
    iconSrc: "/assets/icons/calendar-02.svg",
    mediaSrc: "/assets/landing-page/hero-servicep-time-accommodations.avif",
    mediaAlt: "Service time log",
  },
  {
    id: "custom",
    label: "Create your own",
    description:
      "Mix any data point and let Ablespace draft a report shaped around the question you actually want answered.",
    iconSrc: "/assets/icons/ai-beautify.svg",
    mediaSrc: "/assets/landing-page/hero-collaboration.avif",
    mediaAlt: "Custom report builder",
  },
];

function MaskIcon({ src, color, size = 16 }: { src: string; color: string; size?: number }) {
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
  const [activeId, setActiveId] = useState<string>(REPORT_ITEMS[0].id);
  const activeIndex = REPORT_ITEMS.findIndex((r) => r.id === activeId);

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left card */}
          <div className="flex flex-col rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] p-8 sm:p-10">
            <span className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#7C7572]">
              Custom Reports
            </span>

            <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
              Reports that write themselves from the data you already track.
            </h3>

            <a
              href="#reports"
              aria-label="Learn more about Custom Reports"
              className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white transition-colors hover:bg-[#000000]"
            >
              <ArrowRight size={18} strokeWidth={2.25} />
            </a>

            <ul className="mt-10 flex-1" role="tablist" aria-label="Report types">
              {REPORT_ITEMS.map((item, i) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`report-panel-${item.id}`}
                      id={`report-tab-${item.id}`}
                      onClick={() => setActiveId(item.id)}
                      className={`group block w-full text-left transition-colors ${
                        i < REPORT_ITEMS.length - 1 && !isActive
                          ? "border-b border-[#EDEDEA]"
                          : ""
                      } ${isActive ? "-mx-3 my-1 rounded-xl bg-[#F0EFEB] px-3" : ""}`}
                    >
                      <div className="flex items-center gap-3 py-4">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                            isActive
                              ? "border-[#FFD9C7] bg-[#FFF1EA]"
                              : "border-[#EDEDEA] bg-white group-hover:border-[#E5E5E0]"
                          }`}
                        >
                          <MaskIcon
                            src={item.iconSrc}
                            color={isActive ? "#FF8F6C" : "#7C7572"}
                          />
                        </span>
                        <span
                          className={`text-[15px] font-semibold transition-colors ${
                            isActive ? "text-[#111111]" : "text-[#3F3A36] group-hover:text-[#111111]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100 pb-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden pl-12 pr-2">
                          <p className="text-[13px] leading-relaxed text-[#666666]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right card — preview swaps with active item */}
          <div
            className="relative overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9]"
            role="tabpanel"
            id={`report-panel-${activeId}`}
            aria-labelledby={`report-tab-${activeId}`}
          >
            <div className="relative h-full min-h-[460px] w-full">
              {REPORT_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out ${
                    i === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={i !== activeIndex}
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
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
