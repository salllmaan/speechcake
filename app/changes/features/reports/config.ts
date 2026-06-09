import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Reports",

  hero: {
    chip: "Reports",
    chipIconSrc: "/assets/icons/ai-sheets.svg",
    title: "Generate Smart, Insightful Reports with AbleSpace",
    subtitle:
      "Create detailed, ready-to-share reports — from attendance to goal progress — in just a few clicks. Get accurate insights, track student growth, and simplify documentation for compliance and audits.",
    pills: ["Goal Progress", "Attendance", "Service Time", "IEP Snapshots"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/reports/hero.png",
    imageAlt: "AbleSpace reports and graphs dashboard",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [],
};

export default config;
