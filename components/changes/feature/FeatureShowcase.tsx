import type { ReactNode } from "react";
import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";
import type { ShowcaseSection, ShowcaseCard } from "./types";

// Static span → class map (Tailwind needs full class names, not interpolation).
const SPAN_CLASS: Record<NonNullable<ShowcaseCard["span"]>, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
};

function Placeholder() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-[#D8D4CC] bg-[#F4F3EF] text-[13px] font-medium text-[#B0A99D]">
      Image
    </div>
  );
}

function CardText({ card }: { card: ShowcaseCard }) {
  return (
    <>
      {card.iconSrc && <Image src={card.iconSrc} alt="" width={24} height={24} className="size-6" />}
      <h3 className="text-lg font-semibold leading-tight text-[#111111]">{card.title}</h3>
      <p className="text-base leading-relaxed text-[#9A938F]">{card.description}</p>
    </>
  );
}

function CardBody({ card, custom }: { card: ShowcaseCard; custom?: ReactNode }) {
  const showImageArea = !!card.image || !!card.imageContain || !!custom;
  return (
    <>
      <div className={cn("flex flex-col space-y-2.5 px-6 pt-6", !showImageArea && "pb-6")}>
        <CardText card={card} />
      </div>
      {showImageArea &&
        (custom ? (
          <div className="mt-5 w-full flex-1 overflow-hidden px-5 pb-5">{custom}</div>
        ) : card.imageContain ? (
          <div className="mt-5 w-full flex-1 overflow-hidden">
            {card.image ? (
              <Image src={card.image} alt={card.imageAlt ?? card.title} width={1000} height={1000} className="block h-auto w-full" />
            ) : (
              <Placeholder />
            )}
          </div>
        ) : (
          <div className="relative mt-5 w-full flex-1 overflow-hidden">
            {card.image ? (
              <Image src={card.image} alt={card.imageAlt ?? card.title} fill className="object-cover object-top" />
            ) : (
              <Placeholder />
            )}
          </div>
        ))}
    </>
  );
}

export default function FeatureShowcase({
  showcase,
  illustrations,
}: {
  showcase: ShowcaseSection;
  /** Optional map of card title → custom illustration node (replaces the image). */
  illustrations?: Record<string, ReactNode>;
}) {
  const grid = showcase.layout === "grid";
  const centered = grid && !!showcase.centered;
  const glow = !!showcase.glow;

  const containerClass = centered
    ? "flex flex-wrap justify-center gap-3"
    : grid
      ? "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      : "grid grid-cols-1 gap-3 sm:grid-cols-6";

  const itemClass = (card: ShowcaseCard) =>
    centered
      ? "w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
      : grid
        ? ""
        : cn("col-span-full sm:col-span-3", SPAN_CLASS[card.span ?? 3]);

  return (
    <section className="w-full bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-8 text-center">
          {showcase.chip && (
            <div className="mb-4 flex justify-center">
              <SectionChip label={showcase.chip} iconSrc={showcase.chipIconSrc} variant="neutral" />
            </div>
          )}
          <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
            {showcase.title}
          </h2>
          {showcase.subtitle && (
            <p className="mx-auto max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">
              {showcase.subtitle}
            </p>
          )}
        </div>

        <div className={containerClass}>
          {showcase.cards.map((card, i) => {
            const custom = illustrations?.[card.title];
            const horizontal = !!card.imageRight || !!card.imageLeft;
            const wantsImage = !!card.image || !!card.imageContain || horizontal || !!custom;
            const reduced = !!card.imageContain || horizontal;
            const heightClass = wantsImage ? (reduced ? "h-[306px] lg:h-[324px]" : "h-[340px] lg:h-[360px]") : "";

            // Horizontal card: content + image side by side.
            if (horizontal) {
              const textCol = (
                <div className="flex flex-col space-y-2.5 px-6 pt-6 sm:pt-8">
                  <CardText card={card} />
                </div>
              );
              const imageCol = (
                <div className="flex items-center justify-center p-5 sm:p-6">
                  {custom ? (
                    <div className="w-full">{custom}</div>
                  ) : card.image ? (
                    <Image
                      src={card.image}
                      alt={card.imageAlt ?? card.title}
                      width={900}
                      height={800}
                      className={cn("h-auto object-contain", card.imageLarge ? "w-[96%] max-w-[312px]" : "w-[80%] max-w-[260px]")}
                    />
                  ) : (
                    <div className="aspect-[4/3] w-[88%]">
                      <Placeholder />
                    </div>
                  )}
                </div>
              );
              return (
                <div
                  key={`${card.title}-${i}`}
                  className={cn("overflow-hidden rounded-2xl border border-[#F2F2F1] bg-[#FAFAF9]", heightClass, itemClass(card))}
                >
                  <div className="grid h-full grid-cols-1 sm:grid-cols-2">
                    {card.imageLeft ? (
                      <>
                        {imageCol}
                        {textCol}
                      </>
                    ) : (
                      <>
                        {textCol}
                        {imageCol}
                      </>
                    )}
                  </div>
                </div>
              );
            }

            if (glow) {
              return (
                <MagicCard
                  key={`${card.title}-${i}`}
                  className={cn("rounded-2xl p-[2px]", heightClass, itemClass(card))}
                  gradientFrom="#A484CE"
                  gradientTo="#D2C2E7"
                  gradientColor="#F4ECFB"
                  gradientSize={240}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[14px] bg-[#FAFAF9]">
                    <CardBody card={card} custom={custom} />
                  </div>
                </MagicCard>
              );
            }

            return (
              <div
                key={`${card.title}-${i}`}
                className={cn("flex flex-col overflow-hidden rounded-2xl border border-[#F2F2F1] bg-[#FAFAF9]", heightClass, itemClass(card))}
              >
                <CardBody card={card} custom={custom} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
