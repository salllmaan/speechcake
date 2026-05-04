import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

const FEATURES = [
  { label: "Admin Portal",               icon: "/assets/landing-page/schools-districts/Admin Portal.svg" },
  { label: "IEP System Integrations",    icon: "/assets/landing-page/schools-districts/IEP System Integrations.svg" },
  { label: "Staff and Admin Training",   icon: "/assets/landing-page/schools-districts/Staff and Admin Training.svg" },
  { label: "Single Sign-On",             icon: "/assets/landing-page/schools-districts/Single Sign-On.svg" },
  { label: "Advanced Collaboration",     icon: "/assets/landing-page/schools-districts/Advanced Collaboration.svg" },
  { label: "Dedicated Success Manager",  icon: "/assets/landing-page/schools-districts/Dedicated Success Manager.svg" },
];

const LOGOS = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/logos/social-strip-logo-${i + 1}@2x.avif`,
  alt: `School logo ${i + 1}`,
}));

export default function ForSchoolsSection() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
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
            Roll out AbleSpace across your entire school or district — advanced admin tools, compliance, and training included.
          </p>
        </div>

        <div className="bg-[#FCFBF7] border border-[#F5F2E5] rounded-3xl px-8 py-16 sm:px-16 sm:py-20">

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <Image src="/assets/landing-page/schools-districts/illustration.svg" alt="Schools and Districts" width={400} height={320} />
          </div>

          {/* Title */}
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#312E2D] tracking-tight leading-[1.2] text-center mb-4 max-w-[720px] mx-auto">
            For Schools and Districts
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-[#5E5755] leading-relaxed text-center max-w-[720px] mx-auto mb-8">
            Roll out AbleSpace across your entire school or district to take advantage of its advanced collaboration features and administrative dashboards.
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

          {/* Divider */}
          <div className="border-t border-[#F5F2E5] mb-8" />

          {/* Trusted by */}
          <p className="text-[11px] font-semibold text-[#5E5755] uppercase tracking-widest text-center mb-6">
            Trusted By
          </p>
          <div className="flex items-center justify-center gap-5 sm:gap-8 flex-wrap">
            {LOGOS.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={36}
                className="object-contain h-14 w-auto opacity-80 grayscale"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
