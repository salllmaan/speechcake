import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import CertVariations from "@/components/changes/illustrations/CertVariations";

export const metadata: Metadata = {
  title: "Illustration Lab — AbleSpace",
  description:
    "Effortless Data Tracking bento — updated copy with the current changes-page illustrations.",
};

const FEATURE_SHOWCASES = [
  { label: "Reports", href: "/changes/illustrations/reports", count: 10 },
  { label: "Family Management", href: "/changes/illustrations/family-management", count: 8 },
  { label: "Rotating Schedule", href: "/changes/illustrations/rotating-schedule", count: 7 },
  { label: "Accommodations", href: "/changes/illustrations/accommodations", count: 5 },
  { label: "Service Time", href: "/changes/illustrations/service-time", count: 4 },
  { label: "IEP Audit", href: "/changes/illustrations/iep-audit", count: 4 },
  { label: "Medicaid Billing", href: "/changes/illustrations/medicaid-billing", count: 2 },
];

export default function IllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Certification badge — layout variations to compare and pick from */}
        <CertVariations />

        {/* Same bento + illustrations as the changes page, with the updated copy.
            scrollDataTypes only here — card 1 runs a continuous vertical scroll loop
            instead of the build-up. The live changes page is unchanged. */}
        <IEPDataCollectionSection showMore={false} scrollDataTypes progressIllustration paperIllustration collectionIllustration />

        {/* Index of per-feature illustration showcases */}
        <section className="w-full bg-white px-4 pb-20 pt-4 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <SectionChip label="Feature Pages" iconSrc="/assets/icons/ai-beautify.svg" variant="neutral" />
              </div>
              <h2 className="text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl">
                Illustrations by feature
              </h2>
              <p className="mx-auto mt-3 max-w-[600px] text-lg font-medium leading-relaxed text-[#666666]">
                Preview the illustrations built for each feature page&apos;s placeholder cards.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURE_SHOWCASES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-5 py-4 transition-colors hover:border-[#D9EEFB] hover:bg-[#F7FCFF]"
                >
                  <span className="text-[16px] font-semibold text-[#111111]">{s.label}</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[12px] font-semibold text-[#00A9F8] ring-1 ring-[#E8E8E8]">
                      {s.count}
                    </span>
                    <span className="text-[#C4BDB6] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#00A9F8]">
                      ›
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
