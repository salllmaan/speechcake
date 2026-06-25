import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";
import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

import TrackAnyGoal from "./TrackAnyGoal";
import SeeProgress from "./SeeProgress";
import PaperToGraphs from "./PaperToGraphs";
import GoBeyond from "./GoBeyond";

// Mirrors the IEPDataCollectionSection bento grid exactly (same col-spans, header,
// icon + title + desc per card) but drops the interactive illustrations into each
// card's visual slot. Self-contained — it never imports or touches the live section.

const COPY = {
  track: {
    title: "Track Any Goal or Behavior",
    desc: "With 10+ measurement types — including Accuracy, Task Analysis, Partial Interval, Rubrics, and custom options — every goal gets tracked exactly the way it should.",
  },
  progress: {
    title: "See Progress Before It's Obvious",
    desc: "Automated mastery detection, trendlines, forecasts, and custom statistics give you a complete view of every student's progress — and where they're headed.",
  },
  paper: {
    title: "Turn Paper Data Sheets Into Instant Graphs",
    desc: "Upload any paper data sheet or Excel file — AbleSpace converts it to digital data and generates graphs and analysis automatically. No retyping, no manual entry.",
  },
  beyond: {
    title: "Go Beyond Basic Data Collection",
    desc: "Phases, ABC Data, custom tracking fields, and multiple collection views — for BCBAs, SLPs, OTs, and teams managing complex behavioral or clinical data.",
  },
};

function CardHead({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col space-y-4">
      <Image src={icon} alt="" width={24} height={24} className="size-6" />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-[#111111]">{title}</h2>
        <p className="text-base text-[#9A938F]">{desc}</p>
      </div>
    </div>
  );
}

export default function BentoPreview() {
  return (
    <section className="w-full bg-white pt-4 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        {/* Header — same as the live section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip label="IEP Data Collection" iconSrc="/assets/icons/tablet-pen.svg" variant="neutral" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Effortless Data Tracking
          </h2>
          <p className="text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Whether you need quick progress monitoring or detailed behavioral tracking, AbleSpace adapts to the way your team already works.
          </p>
        </div>

        {/* Bento grid */}
        <div className="relative z-10 grid grid-cols-6 gap-3">
          {/* Card 1 — WIDE: Track Any Goal */}
          <MagicCard
            className="col-span-full overflow-hidden rounded-2xl p-[2px] lg:col-span-4"
            gradientFrom="#A484CE"
            gradientTo="#D2C2E7"
            gradientColor="#F4ECFB"
            gradientSize={300}
          >
            <Card className="relative overflow-hidden rounded-[14px] border border-[#F7F7F7] bg-[#FCFCFC] shadow-none lg:h-full">
              <CardContent className="grid items-center gap-x-8 gap-y-6 p-6 sm:grid-cols-2 lg:h-full">
                <CardHead icon="/assets/icons/ai-sheets.svg" title={COPY.track.title} desc={COPY.track.desc} />
                <div className="relative z-10 w-full">
                  <TrackAnyGoal />
                </div>
              </CardContent>
            </Card>
          </MagicCard>

          {/* Card 2 — NARROW: See Progress */}
          <Card className="relative col-span-full overflow-hidden border-[#F7F7F7] bg-[#FCFCFC] shadow-none sm:col-span-3 lg:col-span-2">
            <CardContent className="pt-6">
              <CardHead icon="/assets/icons/certificate-01.svg" title={COPY.progress.title} desc={COPY.progress.desc} />
              <div className="mt-4">
                <SeeProgress />
              </div>
            </CardContent>
          </Card>

          {/* Card 3 — NARROW: Turn Paper Into Graphs */}
          <Card className="relative col-span-full overflow-hidden border-[#F7F7F7] bg-[#FCFCFC] shadow-none sm:col-span-3 lg:col-span-2">
            <CardContent className="pt-6">
              <CardHead icon="/assets/icons/ai-beautify.svg" title={COPY.paper.title} desc={COPY.paper.desc} />
              <div className="mt-4">
                <PaperToGraphs />
              </div>
            </CardContent>
          </Card>

          {/* Card 4 — WIDE: Go Beyond */}
          <Card className="relative col-span-full overflow-hidden border-[#F7F7F7] bg-[#FCFCFC] shadow-none lg:col-span-4 lg:h-full">
            <CardContent className="grid items-center gap-x-8 gap-y-6 p-6 sm:grid-cols-2 lg:h-full">
              <CardHead icon="/assets/icons/calendar-03.svg" title={COPY.beyond.title} desc={COPY.beyond.desc} />
              <div className="relative z-10 w-full">
                <GoBeyond />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
