"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
        "z-10 flex size-14 items-center justify-center rounded-full border border-[#EDEDEA] bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export default function IEPSyncCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="relative col-span-full overflow-hidden border-[#F2F2F2] shadow-none">
      <CardContent className="p-8 pt-4 sm:p-12 sm:pt-6 lg:p-16 lg:pt-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#111111]">
            Works with your IEP system.
          </h3>
          <p className="mb-8 max-w-md text-base font-medium leading-relaxed text-[#666666]">
            Two-way sync with the platforms your district already runs — goals, services, and progress stay in lockstep, no double entry.
          </p>

          <div
            ref={containerRef}
            className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
          >
            <div className="flex size-full flex-row items-center justify-between">
              <Circle ref={leftRef} className="size-16 border-[#E8D6F0]">
                <Image
                  src="/assets/navbar/ablespace-logo.svg"
                  alt="AbleSpace"
                  width={32}
                  height={32}
                  className="size-8"
                />
              </Circle>
              <Circle ref={rightRef} className="size-16">
                <Image
                  src="/assets/icons/shield-02.svg"
                  alt="IEP System"
                  width={28}
                  height={28}
                  className="size-7"
                />
              </Circle>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={leftRef}
              toRef={rightRef}
              startYOffset={10}
              endYOffset={10}
              curvature={-20}
              gradientStartColor="#A484CE"
              gradientStopColor="#D2C2E7"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={leftRef}
              toRef={rightRef}
              startYOffset={-10}
              endYOffset={-10}
              curvature={20}
              reverse
              gradientStartColor="#A484CE"
              gradientStopColor="#D2C2E7"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
