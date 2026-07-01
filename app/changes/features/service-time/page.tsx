import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import AIFlowSection from "@/components/changes/AIFlowSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import AttendanceRoster from "@/components/changes/illustrations/service-time/AttendanceRoster";
import AutoMinutes from "@/components/changes/illustrations/service-time/AutoMinutes";
import AbsenceLog from "@/components/changes/illustrations/service-time/AbsenceLog";
import ServiceFilters from "@/components/changes/illustrations/service-time/ServiceFilters";
import AiServiceCategorization from "@/components/changes/illustrations/service-time-ai/AiServiceCategorization";
import DetectMissingMinutes from "@/components/changes/illustrations/service-time-ai/DetectMissingMinutes";
import AttendanceSummaries from "@/components/changes/illustrations/service-time-ai/AttendanceSummaries";
import SmartReportPrep from "@/components/changes/illustrations/service-time-ai/SmartReportPrep";
import config from "./config";

export const metadata: Metadata = {
  title: "Service Time — AbleSpace",
  description: config.hero.subtitle,
};

export default function ServiceTimePage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      illustrations={{
        "Attendance Tracking": <AttendanceRoster />,
        "Automatic Service Calculations": <AutoMinutes />,
        "Absence Documentation": <AbsenceLog />,
        "Provider & Service Filters": <ServiceFilters />,
      }}
      afterShowcases={
        <>
          <AIFlowSection
            accent=""
            heading="Ready for Reports"
            reverse
            subtitle="Let AbleSpace AI handle service-time categorization, compliance checks, and report prep — so you spend less time on paperwork."
            steps={[
              {
                title: "AI Service Time Categorization",
                content:
                  "Upload student information or IEP details and let AI suggest service types, frequencies, and minute allocations automatically.",
                iconSrc: "/assets/icons/ai-content-generator-01.svg",
                render: <AiServiceCategorization />,
              },
              {
                title: "Detect Missing Minutes",
                content:
                  "Enable users to monitor service time entries from a dedicated tab and refine results using customizable filters.",
                iconSrc: "/assets/icons/calendar-setting-02.svg",
                render: <DetectMissingMinutes />,
              },
              {
                title: "Attendance Summaries",
                content:
                  "Turn weeks of attendance and service logs into concise summaries for meetings and reviews.",
                iconSrc: "/assets/icons/ai-sheets.svg",
                render: <AttendanceSummaries />,
              },
              {
                title: "Smart Report Preparation",
                content:
                  "AI gathers attendance, service time, accommodations, and session information into report-ready formats.",
                iconSrc: "/assets/icons/ai-beautify.svg",
                render: <SmartReportPrep />,
              },
            ]}
          />
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
              <LogoCloud
                items={[
                  "Attendance Tracking",
                  "Service Minutes",
                  "Scheduled vs. Logged",
                  "Compliance Ready",
                  "AI Service Categorization",
                  "Audit-Ready Reports",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Track every service minute with confidence."
          description="Smart scheduling and automatic attendance adjustments keep your logs accurate and audit-ready."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Smart Scheduling",
            "Auto Attendance Adjustments",
            "Service Minute Tracking",
            "Audit-Ready Reports",
            "HIPAA & FERPA Compliant",
          ]}
        />
      }
    />
  );
}
