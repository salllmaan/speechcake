import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import type { FeaturePageConfig } from "./types";

export default function FeatureCTA({ cta }: { cta: NonNullable<FeaturePageConfig["cta"]> }) {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="relative overflow-hidden rounded-3xl border border-[#EDEDEA] bg-white px-6 py-[72px] text-center sm:px-12 lg:px-20">
          {cta.chip && (
            <div className="flex justify-center">
              <SectionChip label={cta.chip} iconSrc={cta.chipIconSrc} variant="neutral" />
            </div>
          )}

          <h2 className="mt-5 text-balance text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
            {cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">
            {cta.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href={cta.primaryCta.href} variant="primary">
              {cta.primaryCta.label}
            </CTAButton>
            <CTAButton href={cta.secondaryCta.href} variant="secondary">
              {cta.secondaryCta.label}
            </CTAButton>
          </div>

          {cta.stats && cta.stats.length > 0 && (
            <div className="mt-12 px-6 py-10 sm:mt-16 sm:px-10 sm:py-12">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:flex-nowrap sm:justify-between sm:gap-x-4">
                {cta.stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-2 sm:gap-4">
                    <div className="px-2 text-center">
                      <p className="font-[family-name:var(--font-eb-garamond)] text-[40px] font-bold italic leading-[1] tracking-tight text-[#1A1A1A] sm:text-[52px] lg:text-[68px]">
                        {stat.number}
                      </p>
                      <p className="mt-2 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B6258] sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                    {i < cta.stats!.length - 1 && (
                      <span
                        aria-hidden
                        className="hidden font-[family-name:var(--font-eb-garamond)] text-[36px] italic leading-none text-[#C8BFB1] sm:inline-block sm:text-[48px] lg:text-[60px]"
                      >
                        /
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
