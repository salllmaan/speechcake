import { Check } from "lucide-react";
import SectionChip from "@/components/SectionChip";
import type { FeaturePageConfig } from "./types";

type Benefits = NonNullable<FeaturePageConfig["benefits"]>;

export default function FeatureBenefits({ benefits }: { benefits: Benefits }) {
  return (
    <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-[1080px] rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-14 sm:px-12 sm:py-16">
        <div className="mb-10 text-center">
          {benefits.chip && (
            <div className="mb-4 flex justify-center">
              <SectionChip label={benefits.chip} iconSrc={benefits.chipIconSrc} variant="neutral" />
            </div>
          )}
          <h2 className="mx-auto max-w-[760px] text-balance text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl">
            {benefits.title}
          </h2>
        </div>

        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
          {benefits.items.map((item) => (
            <li key={item} className="flex flex-col items-start gap-3">
              <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EEE7F6] text-[#A484CE]">
                <Check className="size-4" strokeWidth={2.5} />
              </span>
              <p className="text-[15px] leading-relaxed text-[#5E5C55]">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
