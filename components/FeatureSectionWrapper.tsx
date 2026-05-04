import SectionChip from "@/components/SectionChip";

interface Props {
  chip?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FeatureSectionWrapper({ chip, title, subtitle, children, className }: Props) {
  return (
    <section className={`w-full bg-white px-4 sm:px-6 lg:px-8 ${className ?? "pt-16 sm:pt-24 lg:pt-40 pb-16 sm:pb-24"}`}>
      <div className="max-w-[1080px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          {chip && (
            <div className="flex justify-center mb-4">
              <SectionChip label={chip} />
            </div>
          )}
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Feature blocks */}
        <div className="space-y-10">
          {children}
        </div>

      </div>
    </section>
  );
}
