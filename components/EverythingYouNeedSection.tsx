import CTAButton from "@/components/CTAButton";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function EverythingYouNeedSection() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto mb-6">
            Every tool a special ed professional needs — data collection, reporting, AI, and more — in one place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
          </div>
        </div>
        <FeaturesGrid
          items={[
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Scheduling",
              desc: "Schedule sessions, plan assessments or IEP meetings with a built-in calendar.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Collaboration",
              desc: "Work alongside other clinicians and assistants. Securely share and collect data.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "20+ Graphs",
              desc: "Choose from over 20 automatically generated graphs to visualise goal progress.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Medicaid Billing",
              desc: "Auto-generated notes you can copy and paste directly into your IEP system.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Materials Library",
              desc: "A growing library of helpful teaching strategies and therapy materials.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Community",
              desc: "A powerful community of Special Ed professionals, ready to help.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "IEP Audits",
              desc: "Effortlessly ensure student IEPs meet compliance standards.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Custom Goals",
              desc: "Combine multiple data types and create tailored tracking solutions.",
            },
            {
              icon: <span style={{ display: "inline-block", width: 32, height: 32, backgroundColor: "#FF8F6C", maskImage: "url(/assets/icons/play-circle.svg)", WebkitMaskImage: "url(/assets/icons/play-circle.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />,
              title: "Rotating Schedules",
              desc: "Easily manage recurring service days and ensure consistent support.",
            },
          ]}
        />
      </div>
    </section>
  );
}
