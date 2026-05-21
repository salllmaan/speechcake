"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import { cn } from "@/lib/utils";

export type TabMedia = {
  value: string;
  label: string;
  src: string;
  alt?: string;
};

export type ShowcaseStep = {
  id: string;
  title: string;
  text: string;
};

export type FeatureShowcaseProps = {
  eyebrow?: string;
  eyebrowIconSrc?: string;
  title: string;
  description?: string;
  stats?: string[];
  steps?: ShowcaseStep[];
  tabs: TabMedia[];
  defaultTab?: string;
  panelMinHeight?: number;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function FeatureShowcase({
  eyebrow,
  eyebrowIconSrc = "/assets/icons/star.svg",
  title,
  description,
  stats = [],
  steps = [],
  tabs,
  defaultTab,
  panelMinHeight = 560,
  primaryCta,
  secondaryCta,
  className,
}: FeatureShowcaseProps) {
  const initial = defaultTab ?? (tabs[0]?.value ?? "tab-0");

  return (
    <section
      className={cn(
        "w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-12 lg:gap-14 items-start">
          {/* Left column */}
          <div>
            {eyebrow && (
              <div className="mb-4">
                <SectionChip
                  label={eyebrow}
                  iconSrc={eyebrowIconSrc}
                  variant="neutral"
                />
              </div>
            )}

            <h2 className="text-balance text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
              {title}
            </h2>

            {description && (
              <p className="mt-3 text-base sm:text-lg font-medium text-[#666666] leading-relaxed">
                {description}
              </p>
            )}

            {stats.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {stats.map((s, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-3 py-1 text-[13px] font-medium text-[#7C7572]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {steps.length > 0 && (
              <div className="mt-8">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={steps[0]?.id}
                  className="w-full"
                >
                  {steps.map((step) => (
                    <AccordionItem key={step.id} value={step.id}>
                      <AccordionTrigger className="text-left text-base font-semibold text-[#111111]">
                        {step.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] leading-relaxed">
                        {step.text}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <CTAButton href={primaryCta.href} variant="primary">
                    {primaryCta.label}
                  </CTAButton>
                )}
                {secondaryCta && (
                  <CTAButton href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </CTAButton>
                )}
              </div>
            )}
          </div>

          {/* Right column — media tabs */}
          <div className="relative overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] shadow-none">
            <Tabs defaultValue={initial} className="relative h-full w-full">
              <div
                className="relative w-full"
                style={{ height: panelMinHeight, minHeight: panelMinHeight }}
              >
                {tabs.map((t, idx) => (
                  <TabsContent
                    key={t.value}
                    value={t.value}
                    className="absolute inset-0 m-0 h-full w-full data-[state=inactive]:hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.src}
                      alt={t.alt ?? t.label}
                      className="h-full w-full object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </TabsContent>
                ))}

                <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 flex w-full justify-center px-4">
                  <TabsList className="flex max-w-full gap-1 overflow-x-auto rounded-xl border border-[#EDEDEA] bg-white/85 p-1 backdrop-blur supports-[backdrop-filter]:bg-white/70">
                    {tabs.map((t) => (
                      <TabsTrigger
                        key={t.value}
                        value={t.value}
                        className="rounded-lg px-3 py-1.5 text-[13px] data-[state=active]:bg-[#111111] data-[state=active]:text-white"
                      >
                        {t.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
