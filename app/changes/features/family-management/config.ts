import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Family Management",

  hero: {
    chip: "Family Management",
    chipIconSrc: "/assets/navbar/product/user-square.svg",
    title: "Keep Families in the Loop, Effortlessly",
    subtitle:
      "Give parents and guardians secure, real-time visibility into goals, daily progress, and updates. You stay in control of exactly what they see, every step of the way.",
    pills: ["Secure Portal", "Real-Time Progress", "Controlled Sharing"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/documentation-02.png",
    imageAlt: "AbleSpace family portal showing student progress shared with parents",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Bring Families Closer",
      chipIconSrc: "/assets/navbar/product/user-square.svg",
      title: "Family Engagement, Built In",
      subtitle:
        "Give parents and guardians secure, real-time visibility into goals and progress, with you in control of exactly what they see.",
      cards: [
        {
          title: "Secure Family Portal",
          description:
            "Give families a secure, private space to follow their student's journey, with access you control down to the detail.",
          iconSrc: "/assets/navbar/product/user-square.svg",
          image: "",
          imageAlt: "Secure family portal",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
        {
          title: "Real-Time Progress",
          description:
            "Parents see goals, daily progress, and updates the moment you log them, no waiting for meetings.",
          iconSrc: "/assets/icons/ai-content-generator-01.svg",
          image: "",
          imageAlt: "Real-time progress updates",
          span: 2,
          imageContain: true,
        },
        {
          title: "Controlled Sharing",
          description:
            "Decide exactly what each family can see, from full reports down to specific goals only.",
          iconSrc: "/assets/icons/certificate-01.svg",
          image: "",
          imageAlt: "Controlled sharing settings",
          span: 2,
          imageContain: true,
        },
        {
          title: "Two-Way Communication",
          description:
            "Share updates, notes, and milestones, and keep every conversation in one organized, FERPA-compliant place.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "",
          imageAlt: "Two-way family communication",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
      ],
    },
    {
      chip: "Daily Logs",
      chipIconSrc: "/assets/icons/notebook-02.svg",
      title: "A Window into Every Day",
      subtitle:
        "Capture what happens each day and share it with families, so parents stay connected to everyday progress, not just meeting-day summaries.",
      cards: [
        {
          title: "Daily Activity Logs",
          description:
            "Capture activities, wins, and notes from each day in a simple log that families can follow at a glance.",
          iconSrc: "/assets/icons/notebook-02.svg",
          image: "",
          imageAlt: "Daily activity logs",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
        {
          title: "Quick Logging",
          description:
            "Log a student's day in seconds from any device, during or right after a session.",
          iconSrc: "/assets/icons/tablet-pen.svg",
          image: "",
          imageAlt: "Quick daily logging",
          span: 2,
          imageContain: true,
        },
        {
          title: "Photos & Highlights",
          description:
            "Attach photos and highlight moments so families see the wins, not just the data.",
          iconSrc: "/assets/icons/ai-beautify.svg",
          image: "",
          imageAlt: "Photos and highlights in daily logs",
          span: 2,
          imageContain: true,
        },
        {
          title: "Shared with Families",
          description:
            "Daily logs flow straight to the family portal, keeping parents connected to everyday progress.",
          iconSrc: "/assets/navbar/product/user-square.svg",
          image: "",
          imageAlt: "Daily logs shared to family portal",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
      ],
    },
  ],
};

export default config;
