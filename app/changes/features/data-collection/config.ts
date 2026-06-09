import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Data Types",

  hero: {
    chip: "10+ Data Types",
    chipIconSrc: "/assets/icons/ai-content-generator-01.svg",
    title: "IEP-Ready Data Types for Progress Tracking",
    subtitle:
      "Every goal is unique — AbleSpace lets you track it your way with flexible, customizable data types built for IEP accuracy.",
    pills: ["Accuracy", "Task Analysis", "Rating Scales", "Custom Goals"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/data-collection/hero.png",
    imageAlt: "AbleSpace data type selection for an IEP goal",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Built for Real IEP Progress Tracking",
      chipIconSrc: "/assets/icons/ai-content-generator-01.svg",
      title: "10+ Data Types",
      subtitle:
        "Each data type is designed to fit a different goal measurement style.",
      layout: "grid",
      centered: true,
      cards: [
        {
          title: "Accuracy",
          description:
            "Track correct vs. incorrect responses. Record total attempts, accuracy percentages, and error patterns for clear progress insights.",
          iconSrc: "/assets/icons/ai-beautify.svg",
        },
        {
          title: "Prompting Levels",
          description:
            "Measure how much assistance a student needs. Select from custom prompt levels or multiple-choice options.",
          iconSrc: "/assets/icons/user-sharing.svg",
        },
        {
          title: "Task Analysis",
          description: "Break complex skills into step-by-step components and record mastery for each step.",
          iconSrc: "/assets/icons/ai-sheets.svg",
        },
        {
          title: "Task with Prompts",
          description: "Combine task analysis with prompting levels — track each step and the level of assistance provided.",
          iconSrc: "/assets/icons/tablet-pen.svg",
        },
        {
          title: "Rating Scale",
          description:
            "Use numeric or labeled scales (e.g., 1–5 or Never–Always) to measure consistency, quality, or frequency of a behavior.",
          iconSrc: "/assets/icons/certificate-01.svg",
        },
        {
          title: "Frequency",
          description: "Count how often a specific behavior or skill occurs within a session or time period.",
          iconSrc: "/assets/icons/calendar-02.svg",
        },
        {
          title: "Duration",
          description: "Record how long a student engages in an activity or displays a behavior.",
          iconSrc: "/assets/icons/calendar-setting-02.svg",
        },
        {
          title: "Opportunity",
          description: "Track total opportunities, correct responses, and errors for any repeatable skill or activity.",
          iconSrc: "/assets/icons/image-02.svg",
        },
        {
          title: "Anecdotal",
          description: "Document qualitative observations when quantitative tracking isn't possible.",
          iconSrc: "/assets/icons/notebook-02.svg",
        },
        {
          title: "Rubrics",
          description: "Rate student performance using custom rubric scales and descriptors.",
          iconSrc: "/assets/icons/ai-sheets.svg",
        },
        {
          title: "Custom Goal",
          description: "Combine multiple data types and create tailored tracking solutions that match how you actually work.",
          iconSrc: "/assets/icons/ai-content-generator-01.svg",
        },
      ],
    },
  ],
};

export default config;
