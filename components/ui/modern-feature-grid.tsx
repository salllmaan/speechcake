import * as React from "react";
import Image from "next/image";

import SectionChip from "@/components/SectionChip";
import { cn } from "@/lib/utils";

export interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ iconSrc, title, description, className }, ref) => {
    const titleId = React.useId();
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center gap-6 rounded-2xl border border-[#F2F2F2] bg-white p-6 text-center shadow-none",
          className,
        )}
        aria-labelledby={titleId}
      >
        <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
          <Image src={iconSrc} alt="" width={24} height={24} className="m-auto size-6" />
        </div>
        <div className="space-y-2">
          <h3 id={titleId} className="text-lg font-semibold text-[#111111]">
            {title}
          </h3>
          <p className="text-sm text-[#9A938F]">{description}</p>
        </div>
      </div>
    );
  },
);
FeatureCard.displayName = "FeatureCard";

export interface FeatureGridProps extends React.HTMLAttributes<HTMLElement> {
  chipLabel: string;
  chipIconSrc?: string;
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
  children?: React.ReactNode;
}

export const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ chipLabel, chipIconSrc, sectionTitle, sectionDescription, features, children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <SectionChip label={chipLabel} iconSrc={chipIconSrc} variant="neutral" />
            </div>
            <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
              {sectionTitle}
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
              {sectionDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={`${feature.title}-${index}`} {...feature} />
            ))}
            {children}
          </div>
        </div>
      </section>
    );
  },
);
FeatureGrid.displayName = "FeatureGrid";
