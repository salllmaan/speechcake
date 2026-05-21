import Image from "next/image";
import AppStoreButtons from "@/components/AppStoreButtons";

const ITEMS = [
  {
    icon: "/assets/mobile-app-section/smart-phone-01.svg",
    title: "Real-time tracking on any device",
    desc: "Log data, update goals, and check progress from your phone, tablet, or iPad — no catching up later.",
  },
  {
    icon: "/assets/mobile-app-section/analytics-02.svg",
    title: "Reports in your pocket",
    desc: "View, filter, download, and share graphs and reports from any device, any time.",
  },
];

export default function MobileAppSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="rounded-3xl bg-[#F7F7F5] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

            {/* Content — left */}
            <div className="order-2 lg:order-1">
              <h2 className="text-[32px] font-bold text-[#111111] tracking-tight leading-[1.15] mb-3">
                Your Special Education Workspace — On the Go
              </h2>
              <p className="text-base font-medium text-[#666666] leading-relaxed mb-6 max-w-md">
                AbleSpace works on any device — phone, tablet, or iPad — so your workflow never stops just because you&apos;re not at a desk.
              </p>

              <AppStoreButtons className="flex-wrap mb-12" />

              <div className="space-y-5">
                {ITEMS.map((item) => (
                  <div key={item.title} className="flex items-center gap-3.5">
                    <div className="flex-shrink-0">
                      <Image src={item.icon} alt="" width={36} height={36} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111111] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#888888] leading-relaxed max-w-[403px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup — right */}
            <div className="order-1 lg:order-2">
              <Image
                src="/assets/landing-page/hero-iep-data-tracking.avif"
                alt="AbleSpace mobile app"
                width={700}
                height={490}
                className="max-w-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
