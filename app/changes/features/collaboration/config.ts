import type { FeaturePageConfig } from "@/components/changes/feature/types";
import { COMMON_FAQ, COMMON_STATS, DATA_TRACKING_SHOWCASE } from "@/components/changes/feature/shared";

const config: FeaturePageConfig = {
  name: "Collaboration",

  hero: {
    chip: "Collaboration",
    chipIconSrc: "/assets/icons/user-sharing.svg",
    title: "Seamless Collaboration Across the AbleSpace Dashboard",
    subtitle:
      "Work smarter together. AbleSpace makes teamwork effortless for providers, therapists, teachers, and administrators — all within one secure, connected dashboard.",
    pills: ["Shared Access", "Real-Time Notes", "Role-Based Permissions"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/collaboration/hero.png",
    imageAlt: "AbleSpace collaboration dashboard shared across a team",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Secure & Centralized Team Operations",
      chipIconSrc: "/assets/icons/user-sharing.svg",
      title: "One Secure Workspace for the Whole Team",
      subtitle:
        "Share students, notes, and reports in real time while keeping data HIPAA-compliant and fully organized.",
      cards: [
        {
          title: "Shared Access for Teams",
          description:
            "Assign collaborators to each student — teachers, therapists, or assistants — so everyone stays aligned on goals, progress, and accommodations.",
          iconSrc: "/assets/icons/user-sharing.svg",
          image: "/assets/final/landing-page/iep-data-collection-card-4.png",
          imageAlt: "Assigning collaborators to a student",
          span: 2,
        },
        {
          title: "Real-Time Data and Notes",
          description:
            "As data is collected during sessions, updates are instantly visible to all assigned collaborators. Review notes, add comments, or enhance them with AbleSpace AI.",
          iconSrc: "/assets/icons/ai-content-generator-01.svg",
          image: "/assets/changes/documentation-03.png",
          imageAlt: "Real-time shared notes",
          span: 2,
        },
        {
          title: "Shared Reports",
          description:
            "Attendance, goals, or billing reports can be generated, shared, and signed collaboratively — team members co-review and sign digitally.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "/assets/final/landing-page/iep-data-collection-reports.png",
          imageAlt: "Collaboratively signed reports",
          span: 2,
        },
        {
          title: "Role-Based Permissions",
          description:
            "Control what each team member can view and edit — assistants can support scheduling and data entry without accessing sensitive data.",
          iconSrc: "/assets/icons/user-lock-01.svg",
          image: "/assets/changes/documentation-02.png",
          imageAlt: "Role-based permission controls",
          imageContain: true,
          span: 3,
        },
        {
          title: "Centralized Team Overview",
          description:
            "The Collaborators Dashboard gives you a complete overview of your team — names, roles, assigned students, and access status.",
          iconSrc: "/assets/icons/user-settings-01.svg",
          image: "/assets/final/landing-page/iep-data-collection-card-3.png",
          imageAlt: "Collaborators dashboard overview",
          span: 3,
        },
      ],
    },
    DATA_TRACKING_SHOWCASE,
  ],

  benefits: {
    chip: "Why Collaboration",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Keep your whole team aligned, in real time.",
    items: [
      "Share student profiles and session data securely with every team member.",
      "Keep documentation consistent and collaborative across the board.",
      "Protect privacy and compliance while maintaining seamless communication.",
    ],
  },

  faq: { items: COMMON_FAQ },

  cta: {
    chip: "Ready when you are",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Bring your whole team together.",
    subtitle: "Set up in minutes. Cancel anytime. No credit card required to start.",
    primaryCta: { label: "Start Free Trial", href: "#start" },
    secondaryCta: { label: "Book a Demo", href: "#demo" },
    stats: COMMON_STATS,
  },
};

export default config;
