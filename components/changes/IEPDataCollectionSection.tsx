import type { ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedList } from "@/components/magicui/animated-list";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import MasteryForecast from "@/components/changes/illustrations/MasteryForecast";
import PaperGraphLoop from "@/components/changes/illustrations/PaperGraphLoop";
import PhaseChange from "@/components/changes/illustrations/PhaseChange";
import { Iphone } from "@/components/magicui/iphone";
import ProgressChart from "@/components/changes/ProgressChart";
import CardStack from "@/components/changes/ReportsCardStack";
import { cn } from "@/lib/utils";

const DATA_TYPES = [
  { name: "Accuracy", description: "Track correct vs incorrect responses", icon: "🎯", color: "#F4ECFB" },
  { name: "Prompting Levels", description: "Measure student independence", icon: "🤝", color: "#FEF3E2" },
  { name: "Task Analysis", description: "Step-by-step task completion", icon: "📋", color: "#E8F8EE" },
  { name: "Task with Prompts", description: "Task steps with prompting levels", icon: "🧩", color: "#E8F4FE" },
  { name: "Rating Scale", description: "Measure along a custom scale", icon: "⭐", color: "#FCEAF0" },
  { name: "Frequency", description: "Count how often a behavior occurs", icon: "🔢", color: "#F0EEFB" },
  { name: "Duration", description: "Time-based activity measurement", icon: "⏱️", color: "#FFF4E8" },
  { name: "Opportunity", description: "Track response opportunities", icon: "💡", color: "#F4FBE8" },
  { name: "Anecdotal", description: "Capture qualitative observations", icon: "📝", color: "#FBEAF0" },
  { name: "Partial Interval", description: "Behavior tracked within intervals", icon: "⏸️", color: "#E8F8F8" },
];

type DataType = (typeof DATA_TYPES)[number];

function DataTypeNotification({ name, description, icon, color }: DataType) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[340px] cursor-pointer rounded-2xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        "bg-white border-[1.5px] border-[#EDEDEA]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium text-[#111111]">
            <span>{name}</span>
          </figcaption>
          <p className="truncate text-xs font-normal text-[#9A938F]">{description}</p>
        </div>
      </div>
    </figure>
  );
}

const moreCards = [
  {
    title: "Service Minutes Tracking",
    subtitle: "Smart scheduling and automatic attendance adjustments keep your logs accurate. Customize service types and generate audit-ready reports in seconds.",
    mockup: "/assets/changes/iep-data-collection-5.png",
  },
  {
    title: "Reports and Graphs",
    subtitle: "20+ graphs and reports — including Trendlines and Forecasts — generated automatically from your goal and service data. No extra work before meeting day.",
    mockup: "/assets/final/landing-page/iep-data-collection-reports.png",
  },
  {
    title: "Accommodations Tracking",
    subtitle: "Manage & track accommodations in one place. Log what was provided and what was refused — so your documentation is always complete and defensible.",
    mockup: "/assets/changes/iep-data-collection-7.png",
  },
  {
    title: "Medicaid Billing",
    subtitle: "Ablespace auto-generates compliant Medicaid billing notes from your session data. Integrate with your billing system or submit directly — fast, accurate, done.",
    mockup: "/assets/changes/iep-data-collection-8.png",
  },
];

const DEFAULT_BENTO_CARDS = [
  { title: "Track Any Goal or Behavior", description: "With 10+ measurement types — including Accuracy, Task Analysis, Partial Interval, Rubrics, and custom options — every goal gets tracked exactly the way it should." },
  { title: "See Progress Before It's Obvious", description: "Automated mastery detection, trendlines, forecasts, and custom statistics give you a complete view of every student's progress — and where they're headed." },
  { title: "Turn Paper Data Sheets Into Instant Graphs", description: "Upload any paper data sheet or Excel file — AbleSpace converts it to digital data and generates graphs and analysis automatically. No retyping, no manual entry." },
  { title: "Go Beyond Basic Data Collection", description: "Phases, ABC Data, custom tracking fields, and multiple collection views — for BCBAs, SLPs, OTs, and teams managing complex behavioral or clinical data." },
];

function BentoPlaceholder() {
  return (
    <div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-xl border border-dashed border-[#D8D4CC] bg-[#F4F3EF] text-[13px] font-medium text-[#B0A99D]">
      Image
    </div>
  );
}

// Bento card icons tinted to a single muted tone via CSS mask (shared SVGs stay untouched).
function BentoIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="size-6 bg-[#7C7572]"
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export default function IEPDataCollectionSection({
  showMore = true,
  cards = DEFAULT_BENTO_CARDS,
  chip = "IEP Data Collection",
  chipIconSrc = "/assets/icons/tablet-pen.svg",
  title = "Effortless Data Tracking",
  subtitle = "Whether you need quick progress monitoring or detailed behavioral tracking, AbleSpace adapts to the way your team already works.",
  topRowHeightClass = "lg:h-[380px]",
  scrollDataTypes = false,
  progressIllustration = false,
  paperIllustration = false,
  collectionIllustration = false,
}: {
  showMore?: boolean;
  cards?: { title: string; description: string; image?: string; imageAlt?: string; imageFit?: "cover" | "contain"; textOnly?: boolean; render?: ReactNode }[];
  chip?: string;
  chipIconSrc?: string;
  title?: string;
  subtitle?: string;
  topRowHeightClass?: string;
  scrollDataTypes?: boolean;
  progressIllustration?: boolean;
  paperIllustration?: boolean;
  collectionIllustration?: boolean;
}) {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip label={chip} iconSrc={chipIconSrc} variant="neutral" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1: 10+ Built-in Data Types (WIDE) */}
            <MagicCard
              className={cn("col-span-full overflow-hidden rounded-2xl p-[2px] lg:col-span-4", topRowHeightClass)}
              gradientFrom="#A484CE"
              gradientTo="#D2C2E7"
              gradientColor="#F4ECFB"
              gradientSize={300}
            >
              <Card className="relative overflow-hidden rounded-[14px] border border-[#F7F7F7] bg-[#FCFCFC] shadow-none lg:h-full">
                <CardContent
                  className={cn(
                    "grid pt-6 lg:h-full",
                    cards[0].image ? "sm:grid-cols-[45%_50%] sm:gap-x-[5%]" : "sm:grid-cols-2",
                  )}
                >
                  <div className="relative z-10 flex flex-col space-y-4">
                    <BentoIcon src="/assets/icons/ai-sheets.svg" />
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-[#111111]">{cards[0].title}</h2>
                      <p className="text-base text-[#9A938F]">{cards[0].description}</p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "relative mt-6 h-[280px] overflow-hidden sm:mt-0 sm:px-6 lg:h-full",
                      cards[0].image && "-mb-6",
                    )}
                  >
                    {cards[0].render ? (
                      <div className="flex h-full items-center justify-center">{cards[0].render}</div>
                    ) : cards[0].image ? (
                      <Image
                        src={cards[0].image}
                        alt={cards[0].imageAlt ?? cards[0].title}
                        fill
                        className={cards[0].imageFit === "contain" ? "object-contain object-bottom" : "object-cover object-bottom"}
                      />
                    ) : cards[0].image === "" ? (
                      <BentoPlaceholder />
                    ) : scrollDataTypes ? (
                      <div className="relative h-full min-h-[280px] sm:-mx-6">
                        <InfiniteSlider direction="vertical" speed={30} speedOnHover={10} gap={12} className="flex h-full justify-center">
                          {DATA_TYPES.map((item) => (
                            <div key={item.name} className="w-[296px] max-w-full">
                              <DataTypeNotification {...item} />
                            </div>
                          ))}
                        </InfiniteSlider>
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FCFCFC] to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FCFCFC] to-transparent" />
                      </div>
                    ) : (
                      <div className="flex h-full flex-col">
                        <AnimatedList delay={1200}>
                          {DATA_TYPES.map((item) => (
                            <DataTypeNotification {...item} key={item.name} />
                          ))}
                        </AnimatedList>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAF9]" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </MagicCard>

            {/* Card 2: Auto mastery detection (NARROW) */}
            <Card className={cn("relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F7F7F7] bg-[#FCFCFC] shadow-none", topRowHeightClass)}>
              <CardContent className={cn("pt-6", (cards[1].image !== undefined || progressIllustration || cards[1].render) && "flex flex-col lg:h-full")}>
                <div className="flex flex-col space-y-4">
                  <BentoIcon src="/assets/icons/certificate-01.svg" />
                  <div className="relative z-10 space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">{cards[1].title}</h2>
                    <p className="text-base text-[#9A938F]">{cards[1].description}</p>
                  </div>
                </div>
                {cards[1].render ? (
                  <div className="mt-4 flex-1">{cards[1].render}</div>
                ) : progressIllustration ? (
                  <div className="mt-4 shrink-0">
                    <MasteryForecast />
                  </div>
                ) : cards[1].image !== undefined ? (
                  <div className="mt-4 min-h-[160px] flex-1">
                    {cards[1].image ? (
                      <Image src={cards[1].image} alt={cards[1].imageAlt ?? cards[1].title} width={640} height={480} className="h-full w-full object-contain" />
                    ) : (
                      <BentoPlaceholder />
                    )}
                  </div>
                ) : (
                  <div className="mx-auto mt-4 flex justify-center">
                    <Image
                      src="/assets/final/landing-page/iep-data-collection-card-2.png"
                      alt="Auto mastery detection"
                      width={640}
                      height={480}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 3: Live progress charts (NARROW) */}
            <Card className={cn("relative col-span-full overflow-hidden sm:col-span-3 border-[#F7F7F7] bg-[#FCFCFC] shadow-none", cards[2].textOnly ? "lg:col-span-3" : "lg:col-span-2 lg:h-[440px]")}>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <BentoIcon src="/assets/icons/ai-beautify.svg" />
                  <div className="relative z-10 space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">{cards[2].title}</h2>
                    <p className="text-base text-[#9A938F]">{cards[2].description}</p>
                  </div>
                </div>
                {cards[2].render ? (
                  <div className="mt-6">{cards[2].render}</div>
                ) : paperIllustration ? (
                  <div className="mt-6">
                    <PaperGraphLoop />
                  </div>
                ) : cards[2].textOnly ? null : cards[2].image !== undefined ? (
                  <div className="mt-6 h-[200px]">
                    {cards[2].image ? (
                      <Image src={cards[2].image} alt={cards[2].imageAlt ?? cards[2].title} width={640} height={480} className="h-full w-full object-contain" />
                    ) : (
                      <BentoPlaceholder />
                    )}
                  </div>
                ) : (
                  <div className="mt-6">
                    <ProgressChart />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 4: Session-based data collection (WIDE) */}
            <Card className={cn("relative col-span-full overflow-hidden border-[#F7F7F7] bg-[#FCFCFC] shadow-none", cards[3].textOnly ? "lg:col-span-3" : "lg:col-span-4 lg:h-[440px]")}>
              <CardContent className={cards[3].textOnly ? "pt-6" : "grid pt-6 sm:grid-cols-2 lg:h-full"}>
                <div className="relative z-10 flex flex-col space-y-4">
                  <BentoIcon src="/assets/icons/calendar-03.svg" />
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">{cards[3].title}</h2>
                    <p className="text-base text-[#9A938F]">{cards[3].description}</p>
                  </div>
                </div>
                {!cards[3].textOnly &&
                  (cards[3].render ? (
                    <div className="relative mt-6 flex items-center sm:mt-0 sm:pl-6">
                      {cards[3].render}
                    </div>
                  ) : collectionIllustration ? (
                    <div className="relative mt-6 flex items-center sm:mt-0 sm:pl-6">
                      <PhaseChange />
                    </div>
                  ) : cards[3].image !== undefined ? (
                    <div className="relative mt-6 h-[200px] sm:mt-0 sm:h-full sm:pl-6">
                      {cards[3].image ? (
                        <Image src={cards[3].image} alt={cards[3].imageAlt ?? cards[3].title} fill className="object-contain object-bottom" />
                      ) : (
                        <BentoPlaceholder />
                      )}
                    </div>
                  ) : (
                    <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:pl-6">
                      <Iphone src="/assets/final-assets/landing-page/iep-data-collection-4.png" className="w-40" />
                    </div>
                  ))}
              </CardContent>
              {!cards[3].textOnly && cards[3].image === undefined && !collectionIllustration && (
                <Image
                  src="/assets/changes/iep-data-collection-4-overlay.png"
                  alt="Calculator"
                  width={400}
                  height={160}
                  className="absolute -bottom-5 left-[136px] z-20 w-80 h-auto object-contain rotate-[3.64deg]"
                />
              )}
            </Card>

          </div>
        </div>

        {showMore && (
          <>
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#EDEDEA]" />
          <span className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-4 py-1.5 text-[13px] font-medium italic text-[#7C7572] whitespace-nowrap">
            and there&apos;s more...
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#EDEDEA] to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {moreCards.map((card, idx) => (
            <div key={`${card.title}-${idx}`} className="flex h-[440px] flex-col overflow-hidden rounded-2xl border border-[#F2F2F2] bg-[#FBFBF9] px-8 pt-8 pb-0">
              <h3 className="mb-3 text-2xl font-semibold leading-[1.2] tracking-tight text-[#111111]">
                {card.title}
              </h3>
              <p className="mb-8 max-w-sm text-base leading-relaxed text-[#9A938F]">
                {card.subtitle}
              </p>
              <div className="relative mt-auto w-full flex-1 overflow-hidden">
                {card.title === "Reports and Graphs" ? (
                  <CardStack />
                ) : card.title === "Medicaid Billing" ? (
                  <Image
                    src={card.mockup}
                    alt={card.title}
                    width={1060}
                    height={853}
                    className="absolute inset-x-0 bottom-0 h-auto w-full rounded-xl"
                  />
                ) : (
                  <Image
                    src={card.mockup}
                    alt={card.title}
                    fill
                    className="rounded-xl object-cover object-top"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
          </>
        )}

      </div>
    </section>
  );
}
