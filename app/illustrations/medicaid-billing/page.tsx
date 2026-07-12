import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import OneClickCopy from "@/components/changes/illustrations/medicaid-billing/OneClickCopy";
import ZeroBusywork from "@/components/changes/illustrations/medicaid-billing/ZeroBusywork";

export const metadata: Metadata = {
  title: "Medicaid Billing Illustrations — AbleSpace",
  description:
    "Preview of the illustration set for the Medicaid Billing /changes feature page — one-click copy and zero-busywork automation.",
};

type Item = {
  title: string;
  description: string;
  illustration: React.ReactNode;
};

// Exact title + description pulled from the medicaid-billing feature config
// (cards with image: "").
const ITEMS: Item[] = [
  {
    title: "One-Click Copy & Paste",
    description: "Simply click “Copy Billing” and paste the note into your Medicaid billing portal.",
    illustration: <OneClickCopy />,
  },
  {
    title: "Zero Busywork",
    description: "No formatting, no typing, no stress, just smart automation that saves hours every week.",
    illustration: <ZeroBusywork />,
  },
];

export default function MedicaidBillingIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <section className="mx-auto max-w-[1080px] px-4 pt-16 pb-10 sm:px-6 sm:pt-24 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <SectionChip
                label="Medicaid Billing"
                iconSrc="/assets/navbar/product/billing.svg"
                variant="neutral"
              />
            </div>
            <h1 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
              Medicaid Billing Illustrations
            </h1>
            <p className="mx-auto max-w-[640px] text-lg font-medium leading-relaxed text-[#666666]">
              Self-contained illustration previews for the placeholder cards on the Medicaid
              Billing feature page — each one shows its card&rsquo;s idea with realistic
              billing sample data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1080px] px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:grid-cols-2 sm:p-8"
              >
                {/* Alternate which side the text/illustration sits on. */}
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <h2 className="text-xl font-semibold leading-tight text-[#111111]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-[#9A938F]">
                    {item.description}
                  </p>
                </div>
                <div className={i % 2 === 1 ? "sm:order-1" : ""}>{item.illustration}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
