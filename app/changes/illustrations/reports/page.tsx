import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

import ProgressVisualization from "@/components/changes/illustrations/reports/ProgressVisualization";
import AttendanceTrends from "@/components/changes/illustrations/reports/AttendanceTrends";
import SessionLevelDetail from "@/components/changes/illustrations/reports/SessionLevelDetail";
import SessionTimeline from "@/components/changes/illustrations/reports/SessionTimeline";
import ProvidedVsRefused from "@/components/changes/illustrations/reports/ProvidedVsRefused";
import UpcomingDeadlines from "@/components/changes/illustrations/reports/UpcomingDeadlines";
import GoalSpecificLayouts from "@/components/changes/illustrations/reports/GoalSpecificLayouts";
import FullStudentProfile from "@/components/changes/illustrations/reports/FullStudentProfile";
import ChronologicalNotes from "@/components/changes/illustrations/reports/ChronologicalNotes";
import DeliveredVsRequired from "@/components/changes/illustrations/reports/DeliveredVsRequired";

export const metadata: Metadata = {
  title: "Reports Illustrations — AbleSpace",
  description:
    "Preview of the illustrations built for the empty placeholder cards on the Reports feature page.",
};

type Item = {
  section: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    section: "Goals Report",
    title: "Progress Visualization",
    description:
      "Monitor student progress across goals with visual trends and outcome data.",
    illustration: <ProgressVisualization />,
  },
  {
    section: "Attendance",
    title: "Attendance Trends",
    description:
      "Spot patterns in participation and flag students with recurring absences at a glance.",
    illustration: <AttendanceTrends />,
  },
  {
    section: "Individual Session Report",
    title: "Session-Level Detail",
    description:
      "Drill into accuracy, prompting levels, and observations captured during that one session.",
    illustration: <SessionLevelDetail />,
  },
  {
    section: "Student Sessions Report",
    title: "Session Timeline",
    description:
      "Follow a student's journey across weeks and months with a chronological view of all sessions.",
    illustration: <SessionTimeline />,
  },
  {
    section: "Accommodations",
    title: "Provided vs Refused",
    description:
      "Clearly log what was offered and what the student declined, keeping documentation defensible.",
    illustration: <ProvidedVsRefused />,
  },
  {
    section: "Due Dates",
    title: "Upcoming Deadlines",
    description: "See what's due this week, this month, and beyond, sorted by urgency.",
    illustration: <UpcomingDeadlines />,
  },
  {
    section: "Data Collection Sheets",
    title: "Goal-Specific Layouts",
    description:
      "Sheets adapt to each data type, including accuracy, duration, prompting, and task analysis.",
    illustration: <GoalSpecificLayouts />,
  },
  {
    section: "IEP Snapshot",
    title: "Full Student Profile",
    description:
      "Key details, services, and team members gathered into a single shareable view.",
    illustration: <FullStudentProfile />,
  },
  {
    section: "Student Notes Report",
    title: "Chronological Notes",
    description:
      "Read observations and anecdotal notes in order, with full context for each session.",
    illustration: <ChronologicalNotes />,
  },
  {
    section: "Service Time",
    title: "Delivered vs Required",
    description:
      "Instantly see who is on track and who is falling short of mandated time.",
    illustration: <DeliveredVsRequired />,
  },
];

export default function ReportsIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="mx-auto max-w-[1080px] px-6 pb-10 pt-16 text-center sm:pt-24">
          <div className="flex justify-center">
            <SectionChip label="Reports Illustrations" variant="neutral" iconSrc="/assets/icons/ai-sheets.svg" />
          </div>
          <h1 className="mx-auto mt-5 max-w-[760px] text-[40px] font-semibold leading-[1.08] tracking-tight text-[#111111] sm:text-[52px]">
            Preview illustrations for the Reports page
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[18px] leading-relaxed text-[#666666]">
            One self-contained illustration for every empty placeholder card across the
            ten Reports sections — charts, timelines, and live data sheets in the /changes
            visual language.
          </p>
        </section>

        <section className="mx-auto max-w-[1080px] px-6 pb-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-6 rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:p-8 lg:flex-row lg:items-center"
              >
                <div className={`flex-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="mb-2 text-[12px] font-medium uppercase tracking-wide text-[#9A938F]">
                    {item.section}
                  </p>
                  <h2 className="text-[22px] font-semibold leading-snug tracking-tight text-[#111111]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#666666]">
                    {item.description}
                  </p>
                </div>
                <div className={`flex-1 ${i % 2 === 1 ? "lg:order-1" : ""}`}>{item.illustration}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
