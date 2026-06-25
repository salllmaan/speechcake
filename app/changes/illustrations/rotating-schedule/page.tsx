import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

import FlexibleRotationCodes from "@/components/changes/illustrations/rotating-schedule/FlexibleRotationCodes";
import ServiceFocusPerDay from "@/components/changes/illustrations/rotating-schedule/ServiceFocusPerDay";
import ConsistentDelivery from "@/components/changes/illustrations/rotating-schedule/ConsistentDelivery";
import QuickSetup from "@/components/changes/illustrations/rotating-schedule/QuickSetup";
import ApplyingRotatingSchedules from "@/components/changes/illustrations/rotating-schedule/ApplyingRotatingSchedules";
import KeepEverythingInSync from "@/components/changes/illustrations/rotating-schedule/KeepEverythingInSync";
import HolidayAwareCycles from "@/components/changes/illustrations/rotating-schedule/HolidayAwareCycles";

export const metadata: Metadata = {
  title: "Rotating Schedule Illustrations — AbleSpace",
  description:
    "Preview illustrations for the Rotating Schedule feature cards on the /changes redesign.",
};

type Item = {
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    title: "Flexible Rotation Codes",
    description:
      "Use rotation codes like AB, ABCDE, or A2B2C2D2E2 to match any cycle your program runs, however simple or complex.",
    illustration: <FlexibleRotationCodes />,
  },
  {
    title: "Service Focus per Day",
    description:
      "Assign a subject or service focus to each rotation day, like Speech on A days, so providers always know what's scheduled.",
    illustration: <ServiceFocusPerDay />,
  },
  {
    title: "Consistent Delivery",
    description:
      "Maintain rhythm and predictability in service delivery, so every student gets the right support on the right day.",
    illustration: <ConsistentDelivery />,
  },
  {
    title: "Quick Setup",
    description:
      "Create and manage cycles in just a few clicks. Add a cycle, include holidays, set start and end dates, and save in seconds.",
    illustration: <QuickSetup />,
  },
  {
    title: "Applying Rotating Schedules",
    description:
      "Activate your schedule directly in the AbleSpace Calendar to keep all your sessions aligned.",
    illustration: <ApplyingRotatingSchedules />,
  },
  {
    title: "Keep Everything in Sync",
    description:
      "Save time, reduce scheduling chaos, and ensure seamless coordination across sessions.",
    illustration: <KeepEverythingInSync />,
  },
  {
    title: "Holiday-Aware Cycles",
    description:
      "Built-in holiday handling skips non-school days automatically, so your rotation always lands on the right date.",
    illustration: <HolidayAwareCycles />,
  },
];

export default function RotatingScheduleIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="w-full px-4 pt-16 pb-10 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mb-4 flex justify-center">
              <SectionChip
                label="Illustration Lab"
                iconSrc="/assets/icons/calendar-setting-02.svg"
                variant="neutral"
              />
            </div>
            <h1 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
              Rotating Schedule Illustrations
            </h1>
            <p className="mx-auto max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">
              Self-contained preview illustrations for each Rotating Schedule feature
              card — rotation codes, per-day service focus, calendar sync, and
              holiday-aware cycles.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:p-8"
              >
                <div
                  className={`flex flex-col gap-6 ${
                    i % 2 === 1 ? "lg:flex-col-reverse" : ""
                  }`}
                >
                  <div className="space-y-2.5">
                    <h2 className="text-xl font-semibold leading-tight text-[#111111]">
                      {item.title}
                    </h2>
                    <p className="text-base leading-relaxed text-[#9A938F]">
                      {item.description}
                    </p>
                  </div>
                  <div>{item.illustration}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
