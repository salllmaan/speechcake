"use client";

import Image from "next/image";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

type Feature = { icon: string; title: string };

const ROW_1: Feature[] = [
  { icon: "/assets/icons/tablet-pen.svg", title: "Tap-fast logging" },
  { icon: "/assets/icons/calendar-02.svg", title: "Auto service-time" },
  { icon: "/assets/icons/ai-content-generator-01.svg", title: "Voice-to-note" },
  { icon: "/assets/icons/notebook-02.svg", title: "Daily logs" },
  { icon: "/assets/icons/user-sharing.svg", title: "Real-time team sync" },
  { icon: "/assets/icons/shield-02.svg", title: "FERPA & HIPAA" },
  { icon: "/assets/icons/calendar-setting-02.svg", title: "Rotating schedules" },
];

const ROW_2: Feature[] = [
  { icon: "/assets/icons/ai-content-generator-01.svg", title: "AI progress notes" },
  { icon: "/assets/icons/ai-sheets.svg", title: "AI worksheets" },
  { icon: "/assets/icons/certificate-01.svg", title: "Goal mastery detection" },
  { icon: "/assets/icons/ai-beautify.svg", title: "Smart summaries" },
  { icon: "/assets/icons/ai-sheets.svg", title: "IEP audits" },
  { icon: "/assets/icons/user-settings-01.svg", title: "IEP goal drafts" },
  { icon: "/assets/icons/customer-service-01.svg", title: "Insights & strategies" },
];

const ROW_3: Feature[] = [
  { icon: "/assets/icons/user-lock-01.svg", title: "Family Dashboard" },
  { icon: "/assets/icons/security-lock.svg", title: "Role-based access" },
  { icon: "/assets/icons/image-02.svg", title: "Materials library" },
  { icon: "/assets/icons/notebook-02.svg", title: "Lesson plans" },
  { icon: "/assets/icons/calendar-02.svg", title: "Smart scheduling" },
  { icon: "/assets/icons/certificate-01.svg", title: "Medicaid billing" },
  { icon: "/assets/icons/customer-service-01.svg", title: "24/7 support" },
];

function FeatureCard({ icon, title }: Feature) {
  return (
    <div className="mx-1.5 flex items-center gap-3 rounded-2xl border border-[#EDEDEA] bg-white px-5 py-4 shadow-[0_1px_2px_rgba(17,17,17,0.04)] sm:mx-2">
      <Image
        src={icon}
        alt=""
        width={22}
        height={22}
        className="size-5 shrink-0 sm:size-[22px]"
      />
      <span className="whitespace-nowrap text-[14px] sm:text-[15px] font-semibold text-[#111111]">
        {title}
      </span>
    </div>
  );
}

export default function FeaturesMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16">
      <div className="space-y-3 sm:space-y-4">
        <SimpleMarquee
          className="w-full"
          baseVelocity={5}
          direction="left"
          repeat={4}
          useScrollVelocity
          slowdownOnHover
          draggable
          grabCursor
          scrollSpringConfig={{ damping: 60, stiffness: 300 }}
        >
          {ROW_1.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={5}
          direction="right"
          repeat={4}
          useScrollVelocity
          slowdownOnHover
          draggable
          grabCursor
          scrollSpringConfig={{ damping: 60, stiffness: 300 }}
        >
          {ROW_2.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </SimpleMarquee>

        <SimpleMarquee
          className="w-full"
          baseVelocity={5}
          direction="left"
          repeat={4}
          useScrollVelocity
          slowdownOnHover
          draggable
          grabCursor
          scrollSpringConfig={{ damping: 60, stiffness: 300 }}
        >
          {ROW_3.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </SimpleMarquee>
      </div>
    </section>
  );
}
