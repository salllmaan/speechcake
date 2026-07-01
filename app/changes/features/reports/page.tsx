import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
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
import config from "./config";

export const metadata: Metadata = {
  title: "Reports — AbleSpace",
  description: config.hero.subtitle,
};

type ReportSection = {
  chip: string;
  chipIconSrc: string;
  title: string;
  subtitle: string;
  cards: {
    title: string;
    description: string;
    image?: string;
    render?: React.ReactNode;
    textOnly?: boolean;
  }[];
};

const REPORT_SECTIONS: ReportSection[] = [
  {
    chip: "Reports & Documentation",
    chipIconSrc: "/assets/icons/ai-sheets.svg",
    title: "Goals Report",
    subtitle:
      "Accurate, exportable, and ready for IEP meetings, compliance, and audits.",
    cards: [
      {
        title: "Goals Report",
        description:
          "Get a complete overview of every student's goals, objectives, and progress trends.",
        image: "/assets/changes/features/reports/goals-1.png",
      },
      {
        title: "Progress Visualization",
        description:
          "Monitor student progress across goals with visual trends and outcome data.",
        render: <ProgressVisualization />,
      },
      {
        title: "AI-Generated Progress Notes",
        description:
          "Automatically generate goal-aligned progress notes with structured insights and compliant documentation.",
        textOnly: true,
      },
      {
        title: "Export & Share Anywhere",
        description:
          "Download polished reports as PDFs or share them with families and team members in a click, always meeting-ready.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Attendance",
    chipIconSrc: "/assets/icons/calendar-03.svg",
    title: "Attendance Report",
    subtitle:
      "Track presence, absences, and makeups across every session, ready for meetings and audits.",
    cards: [
      {
        title: "Attendance Report",
        description:
          "Track attendance across all sessions with clear present, absent, and makeup records for every student.",
        image: "/assets/changes/features/reports/attendance-1.png",
      },
      {
        title: "Attendance Trends",
        description:
          "Spot patterns in participation and flag students with recurring absences at a glance.",
        render: <AttendanceTrends />,
      },
      {
        title: "Makeup Session Tracking",
        description:
          "See which missed sessions still need to be made up so no required minutes slip through.",
        textOnly: true,
      },
      {
        title: "Export for Compliance",
        description:
          "Download attendance summaries for any date range, ready for IEP meetings and district audits.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Sessions",
    chipIconSrc: "/assets/icons/tablet-pen.svg",
    title: "Individual Session Report",
    subtitle:
      "Review goals, data, and notes from any single session in one clean report.",
    cards: [
      {
        title: "Individual Session Report",
        description:
          "Review everything that happened in a single session: goals worked on, data collected, and notes logged.",
        image: "/assets/changes/features/reports/individual-session-1.png",
      },
      {
        title: "Session-Level Detail",
        description:
          "Drill into accuracy, prompting levels, and observations captured during that one session.",
        render: <SessionLevelDetail />,
      },
      {
        title: "Goal Data Snapshot",
        description:
          "See exactly which objectives were targeted and how the student performed on each.",
        textOnly: true,
      },
      {
        title: "Shareable Summaries",
        description:
          "Generate a clean, printable session recap for families or supervising staff in seconds.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Session History",
    chipIconSrc: "/assets/icons/tablet-pen.svg",
    title: "Student Sessions Report",
    subtitle:
      "Every session a student has attended, organized by date and service type.",
    cards: [
      {
        title: "Student Sessions Report",
        description:
          "A full history of every session a student has attended, organized by date and service type.",
        image: "/assets/changes/features/reports/student-session-1.png",
      },
      {
        title: "Session Timeline",
        description:
          "Follow a student's journey across weeks and months with a chronological view of all sessions.",
        render: <SessionTimeline />,
      },
      {
        title: "Service Type Breakdown",
        description:
          "See sessions grouped by service so you know exactly what support was delivered.",
        textOnly: true,
      },
      {
        title: "Year-at-a-Glance Export",
        description:
          "Pull a complete session record for any student, ready for annual reviews and reevaluations.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Accommodations",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Accommodations Report",
    subtitle:
      "Document what was provided, refused, or modified, keeping records always audit-ready.",
    cards: [
      {
        title: "Accommodations Report",
        description:
          "Document every accommodation provided, refused, or modified across all sessions in one place.",
        image: "/assets/changes/features/reports/accommodations-report-1.png",
      },
      {
        title: "Provided vs Refused",
        description:
          "Clearly log what was offered and what the student declined, keeping documentation defensible.",
        render: <ProvidedVsRefused />,
      },
      {
        title: "Per-Goal Accommodations",
        description:
          "See which accommodations were applied to each goal and setting.",
        textOnly: true,
      },
      {
        title: "Audit-Ready Records",
        description:
          "Export complete accommodation logs for IEP meetings and compliance reviews anytime.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Due Dates",
    chipIconSrc: "/assets/icons/calendar-setting-02.svg",
    title: "Due Dates Report",
    subtitle:
      "Track IEP, evaluation, and review deadlines across your entire caseload.",
    cards: [
      {
        title: "Due Dates Report",
        description:
          "Stay ahead of every IEP, evaluation, and annual review deadline across your entire caseload.",
        image: "/assets/changes/features/reports/due-dates-report-1.png",
      },
      {
        title: "Upcoming Deadlines",
        description:
          "See what's due this week, this month, and beyond, sorted by urgency.",
        render: <UpcomingDeadlines />,
      },
      {
        title: "Overdue Alerts",
        description:
          "Instantly surface any past-due dates so nothing falls through the cracks.",
        textOnly: true,
      },
      {
        title: "Caseload-Wide View",
        description:
          "Export a master timeline of all due dates for planning and supervisor check-ins.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Data Sheets",
    chipIconSrc: "/assets/icons/tablet-pen.svg",
    title: "Data Collection Sheets",
    subtitle:
      "Generate printable, goal-specific data sheets for any student or group.",
    cards: [
      {
        title: "Data Collection Sheets",
        description:
          "Generate ready-to-use, printable data collection sheets customized by student and goal type.",
        image: "/assets/changes/features/reports/data-collection-sheets.png",
      },
      {
        title: "Goal-Specific Layouts",
        description:
          "Sheets adapt to each data type, including accuracy, duration, prompting, and task analysis.",
        render: <GoalSpecificLayouts />,
      },
      {
        title: "Print or Go Digital",
        description:
          "Use sheets on paper or collect data right inside AbleSpace on any device.",
        textOnly: true,
      },
      {
        title: "Bulk Generation",
        description:
          "Create sheets for an entire group or caseload at once, ready before your first session.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "IEP Snapshot",
    chipIconSrc: "/assets/icons/ai-sheets.svg",
    title: "IEP Snapshot Report",
    subtitle:
      "Profile, accommodations, goals, and collaborators gathered into one shareable report.",
    cards: [
      {
        title: "IEP Snapshot Report",
        description:
          "A complete IEP summary in one report: profile details, accommodations, goals, and collaborators.",
        image: "/assets/changes/features/reports/iep-snapshot-1.png",
      },
      {
        title: "Full Student Profile",
        description:
          "Key details, services, and team members gathered into a single shareable view.",
        render: <FullStudentProfile />,
      },
      {
        title: "Goals & Accommodations",
        description:
          "Every active goal and accommodation laid out clearly for quick reference.",
        textOnly: true,
      },
      {
        title: "Meeting-Ready Export",
        description:
          "Hand stakeholders a polished, complete snapshot before any IEP meeting.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Notes",
    chipIconSrc: "/assets/icons/tablet-pen.svg",
    title: "Student Notes Report",
    subtitle:
      "Compile all observations and anecdotal notes into one organized record.",
    cards: [
      {
        title: "Student Notes Report",
        description:
          "Compile every note logged for a student into one organized, searchable record.",
        image: "/assets/changes/features/reports/student-notes-1.png",
      },
      {
        title: "Chronological Notes",
        description:
          "Read observations and anecdotal notes in order, with full context for each session.",
        render: <ChronologicalNotes />,
      },
      {
        title: "Goal-Linked Notes",
        description:
          "See which notes connect to specific goals and objectives.",
        textOnly: true,
      },
      {
        title: "Exportable History",
        description:
          "Download a complete notes record for handoffs, meetings, and documentation.",
        textOnly: true,
      },
    ],
  },
  {
    chip: "Service Time",
    chipIconSrc: "/assets/icons/calendar-03.svg",
    title: "Service Time Report",
    subtitle:
      "Track delivered minutes against required IEP minutes and catch gaps early.",
    cards: [
      {
        title: "Service Time Report",
        description:
          "Track delivered service minutes against required IEP minutes for every student.",
        image: "/assets/changes/features/reports/service-time-1.png",
      },
      {
        title: "Delivered vs Required",
        description:
          "Instantly see who is on track and who is falling short of mandated time.",
        render: <DeliveredVsRequired />,
      },
      {
        title: "Service Gap Alerts",
        description:
          "Flag shortfalls early so you can schedule makeups and stay compliant.",
        textOnly: true,
      },
      {
        title: "Compliance Export",
        description:
          "Generate audit-ready service time summaries for any date range in one click.",
        textOnly: true,
      },
    ],
  },
];

export default function ReportsPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={
        <>
          {REPORT_SECTIONS.map((section) => (
            <IEPDataCollectionSection
              key={section.title}
              showMore={false}
              topRowHeightClass="lg:h-[342px]"
              chip={section.chip}
              chipIconSrc={section.chipIconSrc}
              title={section.title}
              subtitle={section.subtitle}
              cards={section.cards}
            />
          ))}
        </>
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
              <LogoCloud
                items={[
                  "Goal Progress",
                  "Attendance",
                  "Service Time",
                  "Accommodations",
                  "Due Dates",
                  "IEP Snapshots",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Reporting without the busywork."
          description="Generate accurate, exportable reports in a few clicks, ready for meetings, compliance, and audits without the manual work."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Goal Progress & Visualization",
            "Attendance & Service Time",
            "AI-Generated Progress Notes",
            "Audit-Ready Exports",
            "One-Click Sharing",
          ]}
        />
      }
    />
  );
}
