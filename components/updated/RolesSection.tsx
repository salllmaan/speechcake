import SectionChip from "@/components/SectionChip";
import { AnimatedFeatureCard } from "@/components/ui/feature-card-1";

const COLOR_CYCLE = ["orange", "purple", "blue"] as const;
const ABBR_COLORS = ["#FFC35C", "#81AA71", "#A38DBF"];

const ROLES = [
  { abbr: "SPED", label: "Special Ed Teachers",           desc: "IEP goals, data, and reporting in one workflow." },
  { abbr: "SLP",  label: "Speech-Language Pathologists",  desc: "Track articulation, language, and fluency goals with ease." },
  { abbr: "OT",   label: "Occupational Therapists",       desc: "Log fine motor, sensory, and self-care goals on the go." },
  { abbr: "BCBA", label: "Behavior Analysts (BCBAs)",     desc: "ABC data, prompting levels, and behavior tracking — built-in." },
  { abbr: "PT",   label: "Physical Therapists",           desc: "Service minutes and gross motor goals, fully documented." },
  { abbr: "DIR",  label: "Special Ed Directors",          desc: "District-wide visibility, and standardized workflows." },
];

export default function RolesSection() {
  return (
    <section className="w-full bg-white pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="Built for Every IEP Team Member"
              iconSrc="/assets/icons/user-sharing.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            One Workflow for Every Role
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Whether you&apos;re a special ed teacher, SLP, OT, or BCBA — AbleSpace handles your documentation so your whole team spends less time on paperwork and more time on what matters.
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((role, i) => (
            <AnimatedFeatureCard
              key={role.abbr}
              tag={role.label}
              title={role.desc}
              color={COLOR_CYCLE[i % COLOR_CYCLE.length]}
              gradientColor={ABBR_COLORS[i % ABBR_COLORS.length]}
              centerVisual={
                <span
                  className="text-7xl sm:text-[80px] tracking-tight"
                  style={{ color: ABBR_COLORS[i % ABBR_COLORS.length], fontFamily: "var(--font-limelight)" }}
                >
                  {role.abbr}
                </span>
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}
