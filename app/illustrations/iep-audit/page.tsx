import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import TailoredCompliance from "@/components/changes/illustrations/iep-audit/TailoredCompliance";
import CustomRuleBuilder from "@/components/changes/illustrations/iep-audit/CustomRuleBuilder";
import ReportsThatWork from "@/components/changes/illustrations/iep-audit/ReportsThatWork";
import InstantDetection from "@/components/changes/illustrations/iep-audit/InstantDetection";

export const metadata: Metadata = {
  title: "IEP Audit Illustrations — AbleSpace",
  description:
    "Preview illustrations for the AbleSpace IEP Audit feature page — custom audit rules, AI detection, and shareable reports.",
};

type Item = {
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    title: "Tailored Compliance",
    description:
      "Easily add, edit, and prioritize custom audit rules to match your school or district's unique requirements.",
    illustration: <TailoredCompliance />,
  },
  {
    title: "Custom Rule Builder",
    description:
      "Coming soon — create custom rules for specific audit criteria, then edit or update them anytime.",
    illustration: <CustomRuleBuilder />,
  },
  {
    title: "Reports That Work for You",
    description:
      "Turn audit results into detailed, shareable reports instantly, complete with insights and action points.",
    illustration: <ReportsThatWork />,
  },
  {
    title: "Instant Detection, Clear Resolution",
    description:
      "AI identifies potential compliance issues within IEPs, from missing details to misaligned goals, and flags them for review.",
    illustration: <InstantDetection />,
  },
];

export default function IEPAuditIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="w-full px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mb-5 flex justify-center">
              <SectionChip
                label="IEP Audit"
                iconSrc="/assets/icons/ai-sheets.svg"
                variant="neutral"
              />
            </div>
            <h1 className="mx-auto max-w-[820px] text-[36px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-[44px] lg:text-[52px]">
              Illustrations for the IEP Audit page
            </h1>
            <p className="mx-auto mt-4 max-w-[680px] text-lg font-medium leading-relaxed text-[#666666]">
              Self-contained previews for each placeholder card — custom audit rules,
              AI-powered compliance detection, and shareable audit reports.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => {
              const illoFirst = i % 2 === 1;
              const text = (
                <div className="flex flex-col justify-center">
                  <h2 className="text-[22px] font-bold leading-tight tracking-tight text-[#111111]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-[#9A938F]">
                    {item.description}
                  </p>
                </div>
              );
              const illo = <div className="flex flex-col justify-center">{item.illustration}</div>;
              return (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-5 rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:grid-cols-2 sm:p-8"
                >
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
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
