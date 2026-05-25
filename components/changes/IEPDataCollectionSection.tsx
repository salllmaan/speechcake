import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";

const DATA_TYPES = [
  { name: "Accuracy", description: "% correct responses", icon: "🎯", color: "#F4ECFB" },
  { name: "Duration", description: "Time-on-task tracking", icon: "⏱️", color: "#E8F4FE" },
  { name: "Prompting Levels", description: "Independence scoring", icon: "🤝", color: "#FEF3E2" },
  { name: "Task Analysis", description: "Step-by-step mastery", icon: "📋", color: "#E8F8EE" },
  { name: "Anecdotal Notes", description: "Observation logs", icon: "📝", color: "#FCEAF0" },
  { name: "Frequency", description: "Event count tracking", icon: "🔢", color: "#F0EEFB" },
];

type DataType = (typeof DATA_TYPES)[number];

function DataTypeNotification({ name, description, icon, color }: DataType) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[340px] cursor-pointer overflow-hidden rounded-2xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white border border-[#EDEDEA]",
        "shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
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
          <p className="text-xs font-normal text-[#9A938F]">{description}</p>
        </div>
      </div>
    </figure>
  );
}

const moreCards = [
  {
    title: "Service Minutes",
    subtitle: "Smart scheduling and automatic attendance adjustments keep your logs accurate. Customize service types and generate audit-ready reports in seconds.",
    mockup: "/assets/final/landing-page/iep-data-collection-service-time.png",
  },
  {
    title: "Reports and Graphs",
    subtitle: "20+ graphs and reports — including Trendlines and Forecasts — generated automatically from your goal and service data. No extra work before meeting day.",
    mockup: "/assets/final/landing-page/iep-data-collection-reports.png",
  },
  {
    title: "Accommodations",
    subtitle: "Manage & track accommodations in one place. Log what was provided and what was refused — so your documentation is always complete and defensible.",
    mockup: "/assets/final/landing-page/iep-data-collection-accommodations.png",
  },
  {
    title: "Medicaid Billing",
    subtitle: "Ablespace auto-generates compliant Medicaid billing notes from your session data. Integrate with your billing system or submit directly — fast, accurate, done.",
    mockup: "/assets/final/landing-page/iep-data-collection-billing.png",
  },
];

export default function IEPDataCollectionSection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="IEP Data Collection"
              iconSrc="/assets/icons/tablet-pen.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Effortless Data Tracking
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Whether you need quick progress monitoring or detailed behavioral tracking, AbleSpace adapts to the way your team already works.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1: 10+ Built-in Data Types (WIDE) */}
            <MagicCard
              className="col-span-full overflow-hidden rounded-xl p-[2px] lg:col-span-4 lg:h-[360px]"
              gradientFrom="#A484CE"
              gradientTo="#D2C2E7"
              gradientColor="#F4ECFB"
              gradientSize={300}
            >
              <Card className="relative overflow-hidden rounded-[10px] border-0 bg-[#FAFAF9] shadow-none lg:h-full">
                <CardContent className="grid pt-6 sm:grid-cols-2 lg:h-full">
                  <div className="relative z-10 flex flex-col space-y-4">
                    <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                      <Image
                        src="/assets/icons/ai-sheets.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="m-auto size-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-[#111111]">10+ Built-in Data Types</h2>
                      <p className="text-base text-[#9A938F]">Track Accuracy, Duration, Prompting Levels, Task Analysis, anecdotal notes, and more — all within one flexible system.</p>
                    </div>
                  </div>
                  <div className="relative mt-6 flex h-[280px] flex-col overflow-hidden sm:mt-0 sm:pl-6 lg:h-full">
                    <AnimatedList delay={1200}>
                      {DATA_TYPES.map((item) => (
                        <DataTypeNotification {...item} key={item.name} />
                      ))}
                    </AnimatedList>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAF9]" />
                  </div>
                </CardContent>
              </Card>
            </MagicCard>

            {/* Card 2: Auto mastery detection (NARROW) */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="pt-6">
                <div className="relative z-10 space-y-2">
                  <h2 className="text-lg font-semibold text-[#111111]">Auto mastery detection</h2>
                  <p className="text-base text-[#9A938F]">AbleSpace automatically flags mastered goals, stalled progress, and students who may need intervention.</p>
                </div>
                <div className="mx-auto mt-4 flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-2.png"
                    alt="Auto mastery detection"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Live progress charts (NARROW) */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="pt-6">
                <div className="relative z-10 space-y-2">
                  <h2 className="text-lg font-semibold text-[#111111]">Live progress charts</h2>
                  <p className="text-base text-[#9A938F]">Trendlines, forecasts, and real-time visualizations update instantly as your team logs data.</p>
                </div>
                <div className="mx-auto mt-4 flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-3.png"
                    alt="Live progress charts"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Session-based data collection (WIDE) */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-4 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2 lg:h-full">
                <div className="relative z-10 flex flex-col space-y-4">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/calendar-03.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Session-based data collection</h2>
                    <p className="text-base text-[#9A938F]">Start a session and collect goal data, attendance, accommodations, and notes from one screen.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-4.png"
                    alt="Session-based data collection"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#EDEDEA]" />
          <span className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-4 py-1.5 text-[13px] font-medium italic text-[#7C7572] whitespace-nowrap">
            and there&apos;s more...
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#EDEDEA] to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {moreCards.map((card, idx) => (
            <div key={`${card.title}-${idx}`} className="flex flex-col overflow-hidden rounded-2xl border border-[#F2F2F2] bg-white px-8 pt-8 pb-0">
              <h3 className="mb-3 text-2xl font-semibold leading-[1.2] tracking-tight text-[#111111]">
                {card.title}
              </h3>
              <p className="mb-8 max-w-sm text-base leading-relaxed text-[#9A938F]">
                {card.subtitle}
              </p>
              <div className="mt-auto">
                <Image
                  src={card.mockup}
                  alt={card.title}
                  width={600}
                  height={380}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
