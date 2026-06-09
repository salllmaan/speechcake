import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Medicaid Billing",

  hero: {
    chip: "Medicaid Billing",
    chipIconSrc: "/assets/navbar/product/billing.svg",
    title: "Simplify and Streamline Your Medicaid Billing",
    subtitle:
      "AbleSpace makes Medicaid billing faster, more accurate, and fully compliant. Auto-generate detailed billing notes from recorded sessions — ready to copy into your billing system with one click.",
    pills: ["Auto-Generated Notes", "By Student or Session", "Bulk Billing"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/medicaid-billing/hero.png",
    imageAlt: "AbleSpace Medicaid billing notes generated from a session",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Turn Sessions into Billable Reports",
      chipIconSrc: "/assets/navbar/product/billing.svg",
      title: "Billing-Ready Notes, Automatically",
      subtitle:
        "Pull accurate data from your logs, attendance, and service records — no formatting, no typing, no stress.",
      cards: [
        {
          title: "Auto-Generated Billing Notes",
          description:
            "AbleSpace automatically creates complete Medicaid billing notes for each session, pulling accurate data from your logs, attendance, and service records.",
          iconSrc: "/assets/icons/ai-content-generator-01.svg",
          image: "/assets/final/landing-page/iep-data-collection-billing.png",
          imageAlt: "Auto-generated Medicaid billing note",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
        {
          title: "One-Click Copy & Paste",
          description: "Simply click “Copy Billing” and paste the note into your Medicaid billing portal.",
          iconSrc: "/assets/navbar/product/billing.svg",
          image: "",
          imageAlt: "Copy billing note to portal",
          span: 2,
          imageContain: true,
        },
        {
          title: "Zero Busywork",
          description: "No formatting, no typing, no stress, just smart automation that saves hours every week.",
          iconSrc: "/assets/icons/ai-beautify.svg",
          image: "",
          imageAlt: "Smart billing automation",
          span: 2,
          imageContain: true,
        },
        {
          title: "Bulk Billing",
          description:
            "Process multiple students or sessions at once. Get every session in one tabular sheet, ready to sign, export to CSV/Excel, or copy in bulk.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "/assets/final/landing-page/iep-data-collection-reports.png",
          imageAlt: "Bulk billing sheet",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
      ],
    },
    {
      chip: "Bill Your Way",
      chipIconSrc: "/assets/navbar/product/billing.svg",
      title: "Bill by Student or Session",
      subtitle:
        "Generate ready-to-use billing notes whichever way you work, grouped by student or tied to a specific session.",
      cards: [
        {
          title: "Billing Notes by Student",
          description: "Select a student, review their session list, and instantly view ready-to-use billing notes.",
          iconSrc: "/assets/navbar/product/user-square.svg",
          image: "/assets/changes/iep-data-collection-8.png",
          imageAlt: "Billing notes grouped by student",
          span: 3,
        },
        {
          title: "Billing Notes by Session",
          description: "Select a session, choose your student, and generate billing notes tied to that specific event.",
          iconSrc: "/assets/icons/calendar-03.svg",
          image: "/assets/final/landing-page/iep-data-collection-service-time.png",
          imageAlt: "Billing notes by session",
          span: 3,
        },
      ],
    },
  ],
};

export default config;
