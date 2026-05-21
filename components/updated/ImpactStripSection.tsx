import { ShieldCheck, AlarmClock, Users, type LucideIcon } from "lucide-react";

interface Stat {
  Icon: LucideIcon;
  metric: string;
  before?: string;
  after: string;
}

const STATS: Stat[] = [
  {
    Icon: ShieldCheck,
    metric: "90%",
    after: "report improvement in compliance",
  },
  {
    Icon: AlarmClock,
    before: "Save",
    metric: "4 hours/week",
    after: "on average",
  },
  {
    Icon: Users,
    metric: "80%",
    after: "report improvement in collaboration",
  },
];

export default function ImpactStripSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-[#EAEAEA]">
          {STATS.map(({ Icon, metric, before, after }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6 py-8 sm:py-4"
            >
              <Icon
                className="w-14 h-14 sm:w-16 sm:h-16 text-[#BCDEF5] mb-5"
                strokeWidth={1}
              />
              <p className="text-base sm:text-lg text-[#111111] leading-snug">
                {before && <span className="font-normal">{before} </span>}
                <span className="font-bold">{metric}</span>
                {after && <span className="font-normal"> {after}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
