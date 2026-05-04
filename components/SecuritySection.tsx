import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

const FEATURE_CHIPS = [
  "IEP Data Tracking",
  "AI Progress Notes",
  "Medicaid Billing",
  "20+ Reports",
  "Accommodations",
  "10+ Data Types",
  "Collaboration",
];

export default function SecuritySection() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="bg-[#FCFBF7] border border-[#F5F2E5] rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center">

        {/* Chip */}
        <div className="flex justify-center mb-6">
          <SectionChip
            label="Get Started Now"
            variant="white"
            icon={
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#888888" strokeWidth="1.2"/>
                <ellipse cx="7.5" cy="7.5" rx="2.5" ry="6.5" stroke="#888888" strokeWidth="1.2"/>
                <path d="M1 7.5h13" stroke="#888888" strokeWidth="1.2"/>
              </svg>
            }
          />
        </div>

        {/* Title */}
        <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.15] tracking-tight mb-5 max-w-3xl mx-auto">
          IEP Tracking, Reimagined
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto mb-10">
          Spend less time on paperwork and more time supporting your students — with smarter IEP tracking.
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-[720px] mx-auto">
          {FEATURE_CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-lg text-[14px] font-medium text-[#444444]"
            >
              <Image src="/assets/icons/star.svg" alt="" width={12} height={12} />
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
          <CTAButton href="#" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
        </div>

        </div>
      </div>
    </section>
  );
}
