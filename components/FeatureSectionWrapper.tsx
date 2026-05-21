import SectionChip from "@/components/SectionChip";
import { cn } from "@/lib/utils";

interface Props {
  chip?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  backgroundSlot?: React.ReactNode;
  afterSubtitle?: React.ReactNode;
  headerClassName?: string;
}

export default function FeatureSectionWrapper({ chip, title, subtitle, children, className, titleClassName, subtitleClassName, backgroundSlot, afterSubtitle, headerClassName }: Props) {
  return (
    <section className={cn(
      "relative overflow-hidden w-full bg-white px-4 sm:px-6 lg:px-8",
      className ?? "pt-16 sm:pt-24 lg:pt-40 pb-16 sm:pb-24",
    )}>
      {backgroundSlot && (
        <div className="absolute inset-0 z-0">
          {backgroundSlot}
        </div>
      )}
      <div className="relative z-10 max-w-[1080px] mx-auto">

        {/* Header */}
        <div className={cn("text-center mb-10 sm:mb-14 lg:mb-20", headerClassName)}>
          {chip && (
            <div className="flex justify-center mb-4">
              <SectionChip label={chip} />
            </div>
          )}
          <h2 className={cn("text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3", titleClassName)}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto", subtitleClassName)}>
              {subtitle}
            </p>
          )}
          {afterSubtitle && (
            <div className="mt-6 sm:mt-8">
              {afterSubtitle}
            </div>
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
