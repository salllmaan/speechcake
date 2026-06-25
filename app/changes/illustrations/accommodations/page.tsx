import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

import AuditReadyRecords from "@/components/changes/illustrations/accommodations/AuditReadyRecords";
import CentralizedLog from "@/components/changes/illustrations/accommodations/CentralizedLog";
import ReusableTemplates from "@/components/changes/illustrations/accommodations/ReusableTemplates";
import AuditReadyReports from "@/components/changes/illustrations/accommodations/AuditReadyReports";
import SyncIEPSystems from "@/components/changes/illustrations/accommodations/SyncIEPSystems";

export const metadata: Metadata = {
  title: "Accommodations Illustrations — AbleSpace",
  description:
    "Preview illustrations for the AbleSpace Accommodations feature redesign — one per bento placeholder card.",
};

// Each item pairs a placeholder card's EXACT title + description (from the live
// feature page / config) with its self-contained illustration. Preview only —
// the live feature page, config, and shared components are untouched.
const ITEMS: { title: string; description: string; illustration: React.ReactNode }[] = [
  {
    title: "Audit-Ready Records",
    description:
      "Document and update student accommodations in seconds to support audit-ready records.",
    illustration: <AuditReadyRecords />,
  },
  {
    title: "Centralized Log",
    description:
      "Maintain a centralized, compliant accommodation log accessible to authorized teams.",
    illustration: <CentralizedLog />,
  },
  {
    title: "Reusable Templates",
    description:
      "Create reusable accommodation templates and apply them in a single click to save time and ensure consistent tracking.",
    illustration: <ReusableTemplates />,
  },
  {
    title: "Audit-Ready Reports",
    description:
      "Track accommodation implementation and generate audit-ready accommodation reports for IEP compliance and team oversight.",
    illustration: <AuditReadyReports />,
  },
  {
    title: "Sync Seamlessly with IEP Systems",
    description:
      "Sync directly from your IEP system or upload files to instantly populate student accommodations, no retyping or duplicate entries required.",
    illustration: <SyncIEPSystems />,
  },
];

export default function AccommodationsIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="w-full px-4 pt-16 pb-10 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mb-4 flex justify-center">
              <SectionChip
                label="Accommodations"
                iconSrc="/assets/icons/user-settings-01.svg"
                variant="neutral"
              />
            </div>
            <h1 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
              Accommodations Illustrations
            </h1>
            <p className="mx-auto max-w-[680px] text-lg font-medium leading-relaxed text-[#666666]">
              Self-contained preview illustrations for every bento placeholder on the
              Accommodations feature page — built in the /changes visual language.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => {
              const illoFirst = i % 2 === 1;
              const text = (
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#111111]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">
                    {item.description}
                  </p>
                </div>
              );
              const illo = (
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-[360px]">{item.illustration}</div>
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
