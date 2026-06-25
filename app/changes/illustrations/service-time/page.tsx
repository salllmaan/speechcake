import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

import AttendanceRoster from "@/components/changes/illustrations/service-time/AttendanceRoster";
import AutoMinutes from "@/components/changes/illustrations/service-time/AutoMinutes";
import AbsenceLog from "@/components/changes/illustrations/service-time/AbsenceLog";
import ServiceFilters from "@/components/changes/illustrations/service-time/ServiceFilters";

export const metadata: Metadata = {
  title: "Service Time Illustrations — AbleSpace",
  description:
    "Preview illustrations for the Service Time feature — Compliance Made Simple cards.",
};

type Item = {
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    title: "Attendance Tracking",
    description: "Mark students Present, Absent, or Not Tracked directly from sessions.",
    illustration: <AttendanceRoster />,
  },
  {
    title: "Automatic Service Calculations",
    description: "Service minutes update automatically based on attendance and session duration.",
    illustration: <AutoMinutes />,
  },
  {
    title: "Absence Documentation",
    description: "Record absence reasons and maintain a complete service history.",
    illustration: <AbsenceLog />,
  },
  {
    title: "Provider & Service Filters",
    description: "Filter records by student, provider, attendance status, or service type.",
    illustration: <ServiceFilters />,
  },
];

export default function ServiceTimeIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="w-full px-4 pt-32 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Service Time" iconSrc="/assets/icons/calendar-03.svg" variant="neutral" />
            </div>
            <h1 className="mx-auto max-w-[820px] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-[56px]">
              Compliance Made Simple
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-lg font-medium leading-relaxed text-[#666666]">
              Preview illustrations for the Service Time feature page — each one mapped to
              its card in the &ldquo;Stay Compliant Without Extra Paperwork&rdquo; section.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => {
              const illoFirst = i % 2 === 1; // alternate sides
              const text = (
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#111111]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">{item.description}</p>
                </div>
              );
              const illo = (
                <div className="flex items-center">
                  <div className="w-full">{item.illustration}</div>
                </div>
              );
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {illoFirst ? (
                      <>
                        {illo}
                        {text}
                      </>
                    ) : (
                      <>
                        {text}
                        {illo}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
