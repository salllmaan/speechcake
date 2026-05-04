import Image from "next/image";

interface FeatureCard {
  title: string;
  subtitle: string;
  mockup: string;
  mockupAlt?: string;
}

interface Props {
  cards: [FeatureCard, FeatureCard];
}

function Card({ title, subtitle, mockup, mockupAlt = "" }: FeatureCard) {
  return (
    <div className="flex flex-col bg-[#FDFDFD] border border-[#F3F3F2] rounded-2xl pt-8 px-8 pb-0 overflow-hidden">
      <h3 className="text-[28px] font-bold text-[#111111] tracking-tight leading-[1.2] mb-3">
        {title}
      </h3>
      <p className="text-base font-medium text-[#666666] leading-relaxed mb-8 max-w-sm">
        {subtitle}
      </p>
      <div className="mt-auto">
        <Image
          src={mockup}
          alt={mockupAlt || title}
          width={600}
          height={380}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}

export default function Features2({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
