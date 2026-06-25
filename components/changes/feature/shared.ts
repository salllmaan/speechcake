import type { FaqItem, ShowcaseSection } from "./types";

// Content that repeats across every feature page (kept in one place).

export const COMMON_FAQ: FaqItem[] = [
  {
    question: "Where can I learn how to use AbleSpace?",
    answer:
      "Our Help Center, step-by-step tutorials, and onboarding team walk you through everything. Most teams are up and running in a single session.",
  },
  {
    question: "Can I share data with my paraprofessionals and assistants?",
    answer:
      "Yes. Invite paraprofessionals, assistants, and specialists with role-based access so everyone works from the same data, in real time.",
  },
  {
    question: "Can you track data for multiple students simultaneously?",
    answer:
      "Absolutely. Run group or back-to-back sessions and log data for multiple students from one screen.",
  },
  {
    question: "Is AbleSpace HIPAA compliant? Will you sign a Business Associate Agreement (BAA)?",
    answer:
      "Yes. AbleSpace is fully HIPAA and FERPA compliant with encrypted storage, and we are happy to sign a BAA for your district.",
  },
];

export const COMMON_STATS = [
  { number: "90%", label: "Improved compliance" },
  { number: "4 hrs/wk", label: "Saved on average" },
  { number: "80%", label: "Improved collaboration" },
];

// "Effortless Data Tracking" cross-sell — appears at the bottom of every feature page.
export const DATA_TRACKING_SHOWCASE: ShowcaseSection = {
  chip: "More Than One Feature",
  chipIconSrc: "/assets/icons/ai-content-generator-01.svg",
  title: "Effortless Data Tracking",
  subtitle:
    "AbleSpace uses AI to streamline IEP goal tracking. Collect data with a single click, organize it automatically, and ensure nothing slips through the cracks.",
  cards: [
    {
      title: "Collect Data with 10+ Data Types",
      description: "Track IEP goals using Task Analysis, Prompts, Rating Scales, and more.",
      iconSrc: "/assets/icons/ai-content-generator-01.svg",
      image: "/assets/final/landing-page/iep-data-collection-card-2.png",
      imageAlt: "Multiple IEP data collection types",
      span: 3,
    },
    {
      title: "Phases, Labels, and History",
      description: "Organize goals with visual phases, custom tags, and goal history.",
      iconSrc: "/assets/icons/notebook-02.svg",
      image: "/assets/final/landing-page/iep-data-collection-card-3.png",
      imageAlt: "Goal phases, labels and history",
      span: 3,
    },
  ],
};
