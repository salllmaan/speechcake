"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-[#EDEDEA] bg-white p-2 shadow-[0_2px_10px_rgba(17,17,17,0.06)] sm:size-14",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

const SYSTEMS = [
  { name: "Frontline", short: "FR" },
  { name: "PowerSchool", short: "PS" },
  { name: "Tienet", short: "TN" },
  { name: "SEAS", short: "SE" },
];

const CURVATURES = [-50, -20, 20, 50];

export default function IEPSystemsSyncSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const systemRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="Two-way sync"
              iconSrc="/assets/icons/star.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Works with your IEP system.
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            AbleSpace syncs live with the systems your district already runs — goals, services, and progress stay in lockstep without double entry.
          </p>
        </div>

        {/* Beam diagram */}
        <div
          ref={containerRef}
          className="relative mx-auto flex h-[380px] w-full max-w-[820px] items-center justify-between gap-6 p-6 sm:h-[420px] sm:p-10"
        >
          {/* Left column — IEP systems (inputs) */}
          <div className="flex flex-col justify-between gap-4 sm:gap-6 h-full py-4">
            {SYSTEMS.map((sys, i) => (
              <div key={sys.name} className="flex items-center gap-2 sm:gap-3">
                <Circle ref={systemRefs[i]}>
                  <span className="text-[11px] sm:text-xs font-bold text-[#3A3A3A]">
                    {sys.short}
                  </span>
                </Circle>
                <span className="hidden sm:inline text-[13px] font-semibold text-[#3A3A3A] whitespace-nowrap">
                  {sys.name}
                </span>
              </div>
            ))}
          </div>

          {/* Center — AbleSpace hub */}
          <div className="relative z-30 flex items-center">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-[#AF58C9]/10 blur-2xl" />
              <Circle
                ref={hubRef}
                className="relative z-30 size-16 sm:size-20 border-[#E8D6F0] bg-white shadow-[0_10px_40px_-10px_rgba(175,88,201,0.35),0_2px_8px_rgba(17,17,17,0.08)]"
              >
                <Image
                  src="/assets/navbar/ablespace-logo.svg"
                  alt="AbleSpace"
                  width={36}
                  height={36}
                  className="size-7 sm:size-9"
                />
              </Circle>
            </div>
          </div>

          {/* Right column — Output (Teacher) */}
          <div className="relative z-20 flex items-center">
            <div className="flex flex-col items-end gap-2">
              <Circle ref={userRef}>
                <Image
                  src="/assets/icons/user-settings-01.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </Circle>
              <span className="hidden sm:inline text-[13px] font-semibold text-[#3A3A3A]">
                Your team
              </span>
            </div>
          </div>

          {/* Animated Beams — systems → hub */}
          {systemRefs.map((ref, i) => (
            <AnimatedBeam
              key={i}
              containerRef={containerRef}
              fromRef={ref}
              toRef={hubRef}
              curvature={CURVATURES[i]}
              delay={i * 0.5}
              duration={4}
              pathColor="#EDE3F3"
              pathWidth={2}
              pathOpacity={0.6}
              gradientStartColor="#D9A6E8"
              gradientStopColor="#AF58C9"
            />
          ))}

          {/* Beam — hub → user */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={hubRef}
            toRef={userRef}
            duration={4}
            delay={0.8}
            pathColor="#EDE3F3"
            pathWidth={2}
            pathOpacity={0.6}
            gradientStartColor="#D9A6E8"
            gradientStopColor="#AF58C9"
          />
        </div>
      </div>
    </section>
  );
}
