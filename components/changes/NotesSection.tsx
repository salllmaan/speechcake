import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";
import AppStoreButtons from "@/components/changes/AppStoreButtons";
import AINoteCard from "@/components/changes/AINoteCard";
import IEPSyncNarrow from "@/components/changes/IEPSyncNarrow";

const MOBILE_FEATURES = [
  {
    icon: "/assets/mobile-app-section/smart-phone-01.svg",
    title: "Track & Manage Anywhere",
    desc: "Log data, check progress, and update goals directly from your phone or tablet.",
  },
  {
    icon: "/assets/mobile-app-section/analytics-02.svg",
    title: "Instant Access to Reports",
    desc: "View, filter, download and share reports and graphs in just a few taps.",
  },
];

export default function NotesSection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="Documentation"
              iconSrc="/assets/icons/tablet-pen.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Documentation and more...
          </h2>
          <p className="text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            From AI-assisted notes and daily logs to a secure family dashboard — one connected workspace that keeps your team, your students, and their families aligned.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1: AI-assisted session notes (NARROW) */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <Image
                    src="/assets/icons/ai-content-generator-01.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                  <div className="relative z-10 space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">AI-assisted session notes</h2>
                    <p className="text-base text-[#9A938F]">Write notes faster with AI-powered suggestions, refinements, and reusable templates tailored to your workflow.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <AINoteCard />
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Family Dashboard (WIDE) */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-4 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2 lg:h-full">
                <div className="relative z-10 flex flex-col space-y-4">
                  <Image
                    src="/assets/icons/user-lock-01.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Family Dashboard</h2>
                    <p className="text-base text-[#9A938F]">Give families secure, real-time visibility into goals, daily progress, and updates — with controls over exactly what they see.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/changes/documentation-02.png"
                    alt="Family Dashboard"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none origin-bottom-left -translate-x-6 scale-95 object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Daily Logs (WIDE) */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-4 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2 lg:h-full">
                <div className="relative z-10 flex flex-col space-y-4">
                  <Image
                    src="/assets/icons/notebook-02.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Daily Logs</h2>
                    <p className="text-base text-[#9A938F]">Capture daily observations, behaviors, and session highlights in a simple log that builds into a complete picture over time.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/changes/documentation-03.png"
                    alt="Daily Logs"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none origin-bottom-left -translate-y-8 scale-90 object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 4: IEP System Integration (NARROW) */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 lg:h-[360px] border-[#F2F2F1] bg-[#FAFAF9] shadow-none">
              <CardContent className="pt-6">
                <IEPSyncNarrow />
              </CardContent>
            </Card>

            {/* Card 6: AbleSpace on the GO! */}
            <Card className="relative col-span-full overflow-hidden border-[#F2F2F2] shadow-none">
              <CardContent className="p-8 pt-4 sm:p-12 sm:pt-6 lg:p-16 lg:pt-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
                  <div className="order-2 lg:order-1">
                    <h3 className="mb-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#111111]">
                      AbleSpace on the GO!
                    </h3>
                    <p className="mb-6 max-w-md text-base font-medium leading-relaxed text-[#666666]">
                      Works on all devices — phone, tablet or iPad — so you can take data on the go.
                    </p>
                    <AppStoreButtons className="mb-8 flex-wrap" />
                    <div className="space-y-5">
                      {MOBILE_FEATURES.map((item) => (
                        <div key={item.title} className="flex items-center gap-3.5">
                          <Image src={item.icon} alt="" width={32} height={32} className="flex-shrink-0" />
                          <div>
                            <p className="mb-0.5 text-sm font-semibold text-[#111111]">{item.title}</p>
                            <p className="max-w-[403px] text-sm leading-relaxed text-[#888888]">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="-mb-8 order-1 sm:-mb-12 lg:order-2 lg:-mb-16 lg:self-end">
                    <Image
                      src="/assets/final/landing-page/mobile-app.png"
                      alt="AbleSpace mobile app"
                      width={700}
                      height={490}
                      className="block max-w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
}
