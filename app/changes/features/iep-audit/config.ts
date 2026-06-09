import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "IEP Audit",

  hero: {
    chip: "IEP Audit",
    chipIconSrc: "/assets/icons/ai-sheets.svg",
    title: "Smart, Automated Oversight",
    subtitle:
      "Monitor and evaluate IEPs with AI-powered insights to ensure compliance, identify gaps, and improve student outcomes.",
    pills: ["Custom Audit Rules", "Automated Detection", "PDF Audit Reports"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/iep-audit/hero.png",
    imageAlt: "AbleSpace IEP Audit dashboard reviewing an IEP for compliance",
  },

  trustedByText: "Loved by special education professionals",

  showcases: [],
};

export default config;
