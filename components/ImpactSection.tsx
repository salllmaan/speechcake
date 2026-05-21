import SectionChip from "@/components/SectionChip";

const STATS = [
  {
    number: "20,000+",
    label: "Sped Ed Professionals",
    description: "Trust AbleSpace to manage their IEP workflows daily",
  },
  {
    number: "10,000+",
    label: "Progress Notes Generated",
    description: "AI-written notes that save hours of documentation time",
  },
  {
    number: "10M+",
    label: "Data Points Logged",
    description: "Across goals, sessions, and student milestones",
  },
];

export default function ImpactSection() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <SectionChip label="Our Impact" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">
            Numbers that speak for themselves
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#666666] max-w-xl mx-auto leading-relaxed">
            AbleSpace is trusted by special education professionals across the country.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center bg-[#FCFBF7] border border-[#F5F2E5] rounded-2xl px-8 py-10"
            >
              <span className="text-[52px] sm:text-[60px] font-extrabold text-[#111111] leading-none tracking-tight mb-3">
                {stat.number}
              </span>
              <span className="text-[15px] font-semibold text-[#111111] mb-2">
                {stat.label}
              </span>
              <span className="text-sm text-[#666666] leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
