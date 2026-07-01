import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "AbleSpace AI",

  hero: {
    chip: "AbleSpace AI",
    chipIconSrc: "/assets/navbar/resources/ablespace-ai.svg",
    titleAccent: "AbleSpace AI.",
    title: "Built for Special Education",
    subtitle:
      "Let AI handle the heavy lifting — so planning, documenting, and tracking IEP goals becomes faster, smarter, and stress-free, giving you more time to focus on your students.",
    pills: ["IEP Goals", "Present Levels", "Progress Notes", "Session Summaries"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Learn More", href: "#schools" },
    image: "/assets/final/landing-page/ablespace-ai-01.png",
    imageAlt: "AbleSpace AI generating a worksheet and progress note",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  // Feature sections are rendered as AIFlowSections in page.tsx.
  showcases: [],

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Where can I learn how to use AbleSpace?",
        answer:
          "Step-by-step tutorials and guides walk you through every feature — most providers are up and running in under ten minutes.",
      },
      {
        question: "Can I share data with my paraprofessionals and assistants?",
        answer:
          "Yes. Invite paraprofessionals, assistants, and specialists with role-based access so the whole team works from the same data, in real time.",
      },
      {
        question: "Can you track data for multiple students simultaneously?",
        answer:
          "Yes. Log goal data, attendance, and notes for an entire group in a single session.",
      },
      {
        question: "Is AbleSpace HIPAA compliant? Will you sign a Business Associate Agreement (BAA)?",
        answer:
          "Yes. AbleSpace is fully HIPAA and FERPA compliant, and we'll sign a BAA for your organization.",
      },
    ],
  },
};

export default config;
