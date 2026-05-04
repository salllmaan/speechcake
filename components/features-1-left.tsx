import Image from "next/image";
import CTAButton from "@/components/CTAButton";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Props {
  mockup: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  items: FeatureItem[];
}

function FeatureItem({ icon, title, desc }: FeatureItem) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-[#111111] mb-0.5">{title}</p>
        <p className="text-sm text-[#888888] leading-relaxed max-w-[403px]">{desc}</p>
      </div>
    </div>
  );
}

export default function Features1Left({ mockup, title, subtitle, primaryCta, secondaryCta, items }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">

      {/* Mockup — left */}
      <div className="order-2 lg:order-1">
        <Image
          src={mockup}
          alt={title}
          width={700}
          height={490}
          className="max-w-full"
        />
      </div>

      {/* Content — right */}
      <div className="order-1 lg:order-2">
        <h2 className="text-[32px] font-bold text-[#111111] tracking-tight leading-[1.15] mb-3">
          {title}
        </h2>
        <p className="text-base font-medium text-[#666666] leading-relaxed mb-6 max-w-md">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <CTAButton href={primaryCta.href} variant="primary" className="w-full sm:w-auto sm:min-w-[160px]">{primaryCta.label}</CTAButton>
          <CTAButton href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto sm:min-w-[160px]">{secondaryCta.label}</CTAButton>
        </div>

        <div className="space-y-5">
          {items.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>

    </div>
  );
}
