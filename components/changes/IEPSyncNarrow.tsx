"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
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
        "z-10 flex size-12 items-center justify-center rounded-full border border-[#EDEDEA] bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export default function IEPSyncNarrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-4">
      <Image
        src="/assets/icons/shield-02.svg"
        alt=""
        width={24}
        height={24}
        className="size-6"
      />
      <div className="relative z-10 space-y-2">
        <h2 className="text-lg font-semibold text-[#111111]">Works with your IEP system</h2>
        <p className="text-base text-[#9A938F]">Two-way sync with the platforms your district already runs — goals, services, and progress in lockstep.</p>
      </div>

      <div
        ref={containerRef}
        className="relative mt-6 flex h-[120px] w-full items-center justify-between px-2"
      >
        <Circle ref={leftRef} className="size-12 border-[#E8D6F0]">
          <Image
            src="/assets/navbar/ablespace-logo.svg"
            alt="AbleSpace"
            width={28}
            height={28}
            className="size-7"
          />
        </Circle>
        <Circle ref={rightRef} className="h-12 w-auto rounded-full px-3 py-2">
          <span className="whitespace-nowrap text-[11px] font-semibold text-[#3A3A3A]">IEP System</span>
        </Circle>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={leftRef}
          toRef={rightRef}
          startYOffset={8}
          endYOffset={8}
          curvature={-18}
          gradientStartColor="#A484CE"
          gradientStopColor="#D2C2E7"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={leftRef}
          toRef={rightRef}
          startYOffset={-8}
          endYOffset={-8}
          curvature={18}
          reverse
          gradientStartColor="#A484CE"
          gradientStopColor="#D2C2E7"
        />
      </div>
    </div>
  );
}
