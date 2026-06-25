import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Service Time",

  hero: {
    chip: "Service Time",
    chipIconSrc: "/assets/icons/calendar-02.svg",
    title: "Track Every Minute Students Receive",
    subtitle:
      "With IEP-aligned tracking, every student's service minutes are easily monitored to ensure IEP goals are met.",
    pills: ["Track Services", "Track Accommodations", "Log Service Type"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/service-time/hero.png",
    imageAlt: "AbleSpace service time tracking dashboard",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "All-in-One Service Tracking",
      chipIconSrc: "/assets/icons/calendar-03.svg",
      title: "All-in-One Service Tracking",
      subtitle:
        "Everything you need to log, monitor, and report on service delivery — built around the way special educators actually work.",
      cards: [
        {
          title: "Attendance & Participation",
          description:
            "Quickly log who's present or absent and track participation over time toward each student's IEP goals.",
          iconSrc: "/assets/icons/calendar-03.svg",
          image: "/assets/changes/features/service-time/feature-1.png",
          imageAlt: "Attendance and participation tracking",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
        {
          title: "Service Minutes",
          description: "Auto-track service time with smart adjustments for attendance.",
          iconSrc: "/assets/icons/tablet-pen.svg",
          image: "/assets/changes/features/service-time/feature-2.png",
          imageAlt: "Service minutes summary",
          span: 2,
          imageContain: true,
        },
        {
          title: "Scheduled vs. Logged",
          description: "Compare planned minutes with actual sessions in real time.",
          iconSrc: "/assets/icons/calendar-setting-02.svg",
          image: "/assets/changes/features/service-time/feature-3.png",
          imageAlt: "Scheduled versus logged service minutes",
          span: 2,
          imageContain: true,
        },
        {
          title: "Reports & Visibility",
          description:
            "Generate instant, audit-ready reports on attendance, service minutes, and delivery per student.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "/assets/changes/features/service-time/feature-4.png",
          imageAlt: "Service delivery reports and visibility",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
      ],
    },
    {
      chip: "Compliance Made Simple",
      chipIconSrc: "/assets/icons/certificate-01.svg",
      title: "Stay Compliant Without Extra Paperwork",
      subtitle:
        "Attendance, minutes, and absences tracked automatically — so your service records are always audit-ready.",
      cards: [
        {
          title: "Attendance Tracking",
          description: "Mark students Present, Absent, or Not Tracked directly from sessions.",
          iconSrc: "/assets/icons/calendar-03.svg",
          image: "",
          imageAlt: "Attendance tracking",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
        {
          title: "Automatic Service Calculations",
          description: "Service minutes update automatically based on attendance and session duration.",
          iconSrc: "/assets/icons/tablet-pen.svg",
          image: "",
          imageAlt: "Automatic minute calculations",
          span: 2,
          imageContain: true,
        },
        {
          title: "Absence Documentation",
          description: "Record absence reasons and maintain a complete service history.",
          iconSrc: "/assets/icons/notebook-02.svg",
          image: "",
          imageAlt: "Absence documentation",
          span: 2,
          imageContain: true,
        },
        {
          title: "Provider & Service Filters",
          description: "Filter records by student, provider, attendance status, or service type.",
          iconSrc: "/assets/icons/ai-sheets.svg",
          image: "",
          imageAlt: "Provider and service filters",
          span: 4,
          imageRight: true,
          imageLarge: true,
        },
      ],
    },
  ],
};

export default config;
