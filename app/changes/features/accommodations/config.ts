import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Accommodations",

  hero: {
    chip: "Accommodations",
    chipIconSrc: "/assets/icons/user-settings-01.svg",
    title: "Accommodations Made Effortless",
    subtitle:
      "Support every student's unique needs with simple, reliable accommodation tracking.",
    pills: ["Track Services", "Track Accommodations", "Log Accommodation"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/accommodations/hero.png",
    imageAlt: "AbleSpace accommodations tracking table",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Reports & Integrations",
      chipIconSrc: "/assets/icons/ai-sheets.svg",
      title: "Stay Audit-Ready and Connected",
      subtitle: "Report on accommodation delivery and sync seamlessly with the systems you already use.",
      cards: [
        {
          title: "Audit-Ready Reports",
          description:
            "Track accommodation implementation and generate audit-ready accommodation reports for IEP compliance and team oversight.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "",
          imageContain: true,
          span: 3,
        },
        {
          title: "Sync Seamlessly with IEP Systems",
          description:
            "Sync directly from your IEP system or upload files to instantly populate student accommodations, no retyping or duplicate entries required.",
          iconSrc: "/assets/icons/calendar-setting-02.svg",
          image: "",
          imageContain: true,
          span: 3,
        },
      ],
    },
  ],
};

export default config;
