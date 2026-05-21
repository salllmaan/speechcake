import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, LineChart, Target, BookOpen, FileText } from "lucide-react";
import FeatureSectionWrapper from "@/components/FeatureSectionWrapper";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedFeatureCard } from "@/components/ui/feature-card-1";

const CTA_BASE = "flex items-center justify-center gap-2 px-5 py-[14px] text-base font-semibold rounded-xl transition-colors w-full sm:w-auto sm:min-w-[200px]";

function MaskIcon({ src, color, size = 20 }: { src: string; color: string; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        flexShrink: 0,
      }}
    />
  );
}

const AI_FEATURES_TOP = [
  {
    tag: "Align to Standard",
    title: "Match every goal and worksheet to state and Common Core standards automatically.",
    color: "orange" as const, gradientColor: "#FFC35C", Icon: BadgeCheck,
  },
  {
    tag: "Suggest Data Tracking",
    title: "AbleSpace AI recommends the right measurement type for each IEP goal.",
    color: "purple" as const, gradientColor: "#A38DBF", Icon: LineChart,
  },
  {
    tag: "Generate IEP Goal",
    title: "Draft SMART, standards-aligned IEP goals tailored to each student — in seconds.",
    color: "blue" as const, gradientColor: "#5B9BD5", Icon: Target,
  },
];

const AI_FEATURES_BOTTOM = [
  {
    tag: "Worksheet",
    title: "Standards-aligned worksheets matched to each student's goals and interests.",
    color: "orange" as const, gradientColor: "#FFC35C", Icon: BookOpen,
  },
  {
    tag: "Progress Notes",
    title: "Session-ready notes drafted from your data, personalized per student.",
    color: "purple" as const, gradientColor: "#A38DBF", Icon: FileText,
  },
];

export default function AIFeaturesSection() {
  return (
    <FeatureSectionWrapper
      className="pt-16 sm:pt-24 pb-16 sm:pb-24 bg-[#7572B7] rounded-t-[32px] sm:rounded-t-[48px]"
      title="AI Built for Special Ed"
      titleClassName="text-white"
      subtitle="Special educators spend hours every week on documentation that AbleSpace AI can handle in seconds. That time belongs with your students."
      subtitleClassName="text-white/80"
      headerClassName="mb-3 sm:mb-3 lg:mb-3"
      afterSubtitle={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#"
            className={`${CTA_BASE} bg-white text-[#7572B7] hover:bg-white/90`}
          >
            Sign Up for FREE
            <MaskIcon src="/assets/icons/square-arrow-right-01.svg" color="#7572B7" />
          </Link>
          <Link
            href="#schools"
            className={`${CTA_BASE} bg-[#8986C1] text-white hover:bg-[#8986C1]/90`}
          >
            Book a Demo
            <MaskIcon src="/assets/icons/cursor-magic-selection-02.svg" color="#ffffff" />
          </Link>
        </div>
      }
      backgroundSlot={
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.04}
          duration={1.5}
          repeatDelay={0.4}
          className="text-white fill-white/5 stroke-white/[0.03] inset-x-0 inset-y-[-20%] h-[140%] w-full skew-y-6"
        />
      }
    >
      <div className="mx-auto max-w-5xl">
        <Image
          src="/assets/landing-page/ai-section-hero.png"
          alt="AbleSpace AI"
          width={2476}
          height={1788}
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AI_FEATURES_TOP.map(({ tag, title, color, gradientColor, Icon }) => (
          <AnimatedFeatureCard
            key={tag}
            className="h-[360px]"
            tag={tag}
            title={title}
            tagVariant="heading"
            color={color}
            gradientColor={gradientColor}
            centerVisual={
              <div
                className="flex items-center justify-center w-24 h-24 rounded-full"
                style={{ backgroundColor: "var(--feature-color-light)" }}
              >
                <Icon
                  className="w-12 h-12"
                  style={{ color: "var(--feature-color)" }}
                  strokeWidth={1.5}
                />
              </div>
            }
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {AI_FEATURES_BOTTOM.map(({ tag, title, color, gradientColor, Icon }) => (
          <AnimatedFeatureCard
            key={tag}
            className="h-[360px]"
            tag={tag}
            title={title}
            tagVariant="heading"
            color={color}
            gradientColor={gradientColor}
            centerVisual={
              <div
                className="flex items-center justify-center w-24 h-24 rounded-full"
                style={{ backgroundColor: "var(--feature-color-light)" }}
              >
                <Icon
                  className="w-12 h-12"
                  style={{ color: "var(--feature-color)" }}
                  strokeWidth={1.5}
                />
              </div>
            }
          />
        ))}
      </div>
      </div>
    </FeatureSectionWrapper>
  );
}
