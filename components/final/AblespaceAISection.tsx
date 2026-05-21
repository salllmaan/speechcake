import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import StackingCards, { StackingCardItem } from "@/components/fancy/blocks/stacking-cards";
import MouseEffectBg from "@/components/kokonutui/mouse-effect-bg";

const CARD_CHIP = {
  label: "Ablespace AI",
  icon: "/assets/icons/ai-beautify.svg",
};

const AI_CARDS = [
  {
    title: "Progress Notes",
    description: "Ablespace AI generates draft progress notes for each student — customized to their goals and ready to review, edit, and share.",
    tint: "bg-[#C4A9FE]",
    titleColor: "text-[#3F394D]",
    descriptionColor: "text-[#3F394D]",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=1200&q=80",
    imageAlt: "Teacher writing notes",
  },
  {
    title: "Worksheets & Assessments",
    description: "Generate standards-aligned worksheets that match each student's goals and interests — in seconds, not hours.",
    tint: "bg-[#C8AEFE]",
    titleColor: "text-[#3F394D]",
    descriptionColor: "text-[#3F394D]",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&h=1200&q=80",
    imageAlt: "Worksheets on desk",
  },
  {
    title: "IEP Goals & Present Levels",
    description: "Draft standards-aligned SMART IEP goals and present level statements tailored to each student's needs. Defensible, personalized, and ready to refine.",
    tint: "bg-[#CFB8FE]",
    titleColor: "text-[#3F394D]",
    descriptionColor: "text-[#3F394D]",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&h=1200&q=80",
    imageAlt: "Student studying",
  },
  {
    title: "Strategies and Insights",
    description: "AbleSpace AI surfaces each student's strengths and struggles from your data — and suggests evidence-based strategies.",
    tint: "bg-[#D6C3FE]",
    titleColor: "text-[#3F394D]",
    descriptionColor: "text-[#3F394D]",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&h=1200&q=80",
    imageAlt: "Chart analysis",
  },
];

export default function AblespaceAISection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="Ablespace AI"
              iconSrc="/assets/icons/ai-content-generator-01.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            AI Built for Special Ed
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Special educators spend hours every week on documentation that Ablespace AI can handle in seconds. That time belongs with your students.
          </p>
        </div>

        <StackingCards totalCards={AI_CARDS.length} className="relative" scaleMultiplier={0.04}>
          {AI_CARDS.map((card, index) => (
            <StackingCardItem key={card.title} index={index} className="h-[70vh] top-20">
              <MouseEffectBg
                className={`mx-auto h-full w-full max-w-[1080px] rounded-3xl border border-[#EDEDEA] ${card.tint}`}
                dotColor="rgba(255,255,255,0.85)"
              >
                <div className="flex h-full w-full">
                <div className="flex h-full basis-3/5 flex-col justify-between p-10 sm:p-14">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white">
                      <span
                        className="inline-block size-3.5 shrink-0"
                        style={{
                          backgroundColor: "currentColor",
                          maskImage: `url(${CARD_CHIP.icon})`,
                          WebkitMaskImage: `url(${CARD_CHIP.icon})`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                        }}
                      />
                      {CARD_CHIP.label}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${card.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className={`mt-4 max-w-xl text-base font-medium leading-relaxed sm:text-lg ${card.descriptionColor}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="hidden basis-2/5 p-6 pl-0 sm:block sm:p-10 sm:pl-0 lg:p-14 lg:pl-0">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                </div>
              </MouseEffectBg>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
}
