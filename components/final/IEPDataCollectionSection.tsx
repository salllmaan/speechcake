import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";

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

            {/* Card 1: 10+ Built-in Data Types */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-1.png"
                    alt="10+ Built-in Data Types"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">10+ Built-in Data Types</h2>
                  <p className="text-sm text-[#9A938F]">Track Accuracy, Duration, Prompting Levels, Task Analysis, anecdotal notes, and more — all within one flexible system.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Auto mastery detection */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-2.png"
                    alt="Auto mastery detection"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Auto mastery detection</h2>
                  <p className="text-sm text-[#9A938F]">AbleSpace automatically flags mastered goals, stalled progress, and students who may need intervention.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Live progress charts */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-3.png"
                    alt="Live progress charts"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Live progress charts</h2>
                  <p className="text-sm text-[#9A938F]">Trendlines, forecasts, and real-time visualizations update instantly as your team logs data.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Session-based data collection */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
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
                    <p className="text-sm text-[#9A938F]">Start a session and collect goal data, attendance, accommodations, and notes from one screen.</p>
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

            {/* Card 5: Multi-tracker logging (avatars) */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/user-sharing.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Multi-provider collaboration</h2>
                    <p className="text-sm text-[#9A938F]">Teachers, paras, SLPs, OTs, and BCBAs can log into the same student record simultaneously.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-5.png"
                    alt="Multi-provider collaboration"
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
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#9A938F]">
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
