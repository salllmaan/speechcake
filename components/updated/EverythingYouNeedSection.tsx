import CTAButton from "@/components/CTAButton";
import FeaturesGrid from "@/components/FeaturesGrid";
import SectionChip from "@/components/SectionChip";

const ICON_PATHS: Record<string, string> = {
  scheduling: "/assets/icons/play-circle.svg",
  rotating:   "/assets/icons/play-circle.svg",
  mastery:    "/assets/icons/play-circle.svg",
  notes:      "/assets/icons/play-circle.svg",
  audits:     "/assets/icons/play-circle.svg",
  family:     "/assets/icons/play-circle.svg",
  lessons:    "/assets/icons/play-circle.svg",
  library:    "/assets/icons/play-circle.svg",
  support:    "/assets/icons/play-circle.svg",
};

function Icon({ src }: { src: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 32,
        height: 32,
        backgroundColor: "#FF8F6C",
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}

export default function EverythingYouNeedSection() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <SectionChip label="Complete SPED Ed Toolkit" variant="neutral" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            More than Goal Tracking.
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto mb-6">
            Scheduling, audits, billing, community, and more — everything built around the way special educators actually work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="#" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Sign Up for FREE</CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">Book a Demo</CTAButton>
          </div>
        </div>
        <FeaturesGrid
          items={[
            {
              icon: <Icon src={ICON_PATHS.scheduling} />,
              title: "Smart Scheduling",
              desc: "Multi-provider sessions, recurring sessions, and custom event fields from one flexible scheduling system.",
            },
            {
              icon: <Icon src={ICON_PATHS.rotating} />,
              title: "Rotating Schedules",
              desc: "Support rotating schedules, block schedules, holidays, and changing service calendars without manual adjustments.",
            },
            {
              icon: <Icon src={ICON_PATHS.mastery} />,
              title: "Automatic Goal Mastery Detection",
              desc: "AbleSpace automatically identifies mastered goals, stalled progress, and students needing attention — helping teams stay proactive.",
            },
            {
              icon: <Icon src={ICON_PATHS.notes} />,
              title: "Smarter Session Notes",
              desc: "Session and goal notes with voice input, AI refinement, and one-tap access to your last note — so documentation never slows you down.",
            },
            {
              icon: <Icon src={ICON_PATHS.audits} />,
              title: "AI-Powered IEP Audits",
              desc: "Review IEPs against federal, state, and district requirements to identify missing information and potential compliance risks.",
            },
            {
              icon: <Icon src={ICON_PATHS.family} />,
              title: "Secure Family Access",
              desc: "Give families secure visibility into student progress, daily logs, and updates while controlling exactly what is shared.",
            },
            {
              icon: <Icon src={ICON_PATHS.lessons} />,
              title: "Lesson Plans",
              desc: "Generate lesson plans and session activities aligned to student goals so providers can walk into sessions prepared.",
            },
            {
              icon: <Icon src={ICON_PATHS.library} />,
              title: "Materials Library",
              desc: "A curated, growing library of teaching strategies and therapy materials — ready to use, no searching required.",
            },
            {
              icon: <Icon src={ICON_PATHS.support} />,
              title: "Support That's Always Available",
              desc: "Get fast, reliable support from a team that understands special education workflows — available 24/7 year-round.",
            },
          ]}
        />
      </div>
    </section>
  );
}
