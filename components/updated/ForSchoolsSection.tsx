import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

const FEATURES = [
  { label: "Admin Dashboard",            icon: "/assets/landing-page/schools-districts/Admin Portal.svg" },
  { label: "IEP System Integrations",    icon: "/assets/landing-page/schools-districts/IEP System Integrations.svg" },
  { label: "Professional Development",   icon: "/assets/landing-page/schools-districts/Staff and Admin Training.svg" },
  { label: "Single Sign-On",             icon: "/assets/landing-page/schools-districts/Single Sign-On.svg" },
  { label: "Advanced Collaboration",     icon: "/assets/landing-page/schools-districts/Advanced Collaboration.svg" },
  { label: "Dedicated Success Manager",  icon: "/assets/landing-page/schools-districts/Dedicated Success Manager.svg" },
];

const DISTRICTS = [
  "Chicago Public Schools",
  "Los Angeles USD",
  "Houston ISD",
  "Miami-Dade Schools",
  "NYC Department of Education",
  "Boston Public Schools",
  "Denver Public Schools",
  "Seattle Public Schools",
];

const INTEGRATIONS = [
  "Frontline IEP",
  "PowerSchool SPED",
  "SEAS",
  "Embrace",
  "Tienet",
  "Goalbook",
];

export default function ForSchoolsSection() {
  return (
    <section id="schools" className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">

        {/* Section header */}
        <div className="text-center mb-9">
          <div className="flex justify-center mb-4">
            <SectionChip label="Schools & Districts" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            For Schools and Districts
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Deploy AbleSpace across your school or district with centralized administration, secure collaboration, onboarding, and ongoing support.
          </p>
        </div>

        <div className="bg-[#FCFBF7] border border-[#F5F2E5] rounded-3xl px-8 py-16 sm:px-16 sm:py-20">

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <Image src="/assets/landing-page/schools-districts/illustration.svg" alt="Schools and Districts" width={400} height={320} />
          </div>

          {/* Title */}
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#312E2D] tracking-tight leading-[1.2] text-center mb-4 max-w-[720px] mx-auto">
            Built to scale across your whole district
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-[#5E5755] leading-relaxed text-center max-w-[720px] mx-auto mb-8">
            AbleSpace gives each school a standardized, compliant workflow — while giving district admins and special ed directors the visibility and control they need.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[160px]">Learn More</CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full sm:w-auto sm:min-w-[160px]">Contact Us</CTAButton>
          </div>

          {/* Feature checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 max-w-2xl mx-auto mb-12" style={{ columnGap: "32px" }}>
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center justify-center gap-3 bg-white border border-[#F5F2E5] rounded-xl px-4 py-3">
                <Image src={f.icon} alt="" width={18} height={18} />
                <span className="text-base font-medium text-[#5E5755]">{f.label}</span>
              </div>
            ))}
          </div>

          {/* IEP System Integrations callout */}
          <div className="border-t border-[#F5F2E5] pt-8 mb-8">
            <p className="text-[11px] font-semibold text-[#5E5755] uppercase tracking-widest text-center mb-4">
              Works with your IEP system
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap max-w-3xl mx-auto">
              {INTEGRATIONS.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold text-[#312E2D] bg-white border border-[#F5F2E5] rounded-full px-4 py-2"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Trusted by districts */}
          <div className="border-t border-[#F5F2E5] pt-8">
            <p className="text-[11px] font-semibold text-[#5E5755] uppercase tracking-widest text-center mb-5">
              Trusted by Districts Nationwide
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 max-w-3xl mx-auto">
              {DISTRICTS.map((name) => (
                <span
                  key={name}
                  className="text-sm sm:text-[15px] font-bold text-[#312E2D] text-center"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
