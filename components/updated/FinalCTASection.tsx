import CTAButton from "@/components/CTAButton";

const PILLS = [
  "IEP Data Tracking",
  "AI Progress Notes",
  "Service Minutes Tracking",
  "Medicaid Billing",
  "Accommodations",
  "IEP System Integration",
  "Secure Collaboration",
];

export default function FinalCTASection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="bg-[#FCFBF7] border border-[#F5F2E5] rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center">

          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            IEP Tracking, Reimagined
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[640px] mx-auto mb-8">
            You became a special educator to make a difference — not to drown in documentation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-10">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="text-sm font-semibold text-[#312E2D] bg-white border border-[#F5F2E5] rounded-full px-4 py-2"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
          </div>

        </div>
      </div>
    </section>
  );
}
