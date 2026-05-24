import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";
import AppStoreButtons from "@/components/AppStoreButtons";

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
            Documentation that keeps everyone in the loop.
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            From AI-assisted notes and daily logs to a secure family dashboard — one connected workspace that keeps your team, your students, and their families aligned.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1: 10+ Built-in Data Types */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-1.png"
                    alt="AI-assisted session notes"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">AI-assisted session notes</h2>
                  <p className="text-sm text-[#9A938F]">Write notes faster with AI-powered suggestions, refinements, and reusable templates tailored to your workflow.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Auto mastery detection */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-2.png"
                    alt="Goal-linked documentation"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Goal-linked documentation</h2>
                  <p className="text-sm text-[#9A938F]">Attach notes directly to goals, objectives, students, or sessions for clear and searchable progress tracking.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Live progress charts */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-3.png"
                    alt="Multi-provider collaboration"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Multi-provider collaboration</h2>
                  <p className="text-sm text-[#9A938F]">Teachers, SLPs, OTs, BCBAs, and paras can all contribute notes in the same student record in real time.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Family Dashboard */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/user-lock-01.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Family Dashboard</h2>
                    <p className="text-sm text-[#9A938F]">Give families secure, real-time visibility into goals, daily progress, and updates — with controls over exactly what they see.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-4.png"
                    alt="Family Dashboard"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Daily Logs */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/notebook-02.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Daily Logs</h2>
                    <p className="text-sm text-[#9A938F]">Capture daily observations, behaviors, and session highlights in a simple log that builds into a complete picture over time.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-5.png"
                    alt="Daily Logs"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 6: IEP System Integration */}
            <Card className="relative col-span-full overflow-hidden border-[#F2F2F2] shadow-none">
              <CardContent className="p-8 pt-4 sm:p-12 sm:pt-6 lg:p-16 lg:pt-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
                  <div className="order-2 lg:order-1">
                    <div className="mb-5 relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                      <Image
                        src="/assets/icons/shield-02.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="m-auto size-6"
                      />
                    </div>
                    <h3 className="mb-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#111111]">
                      Works with your IEP system.
                    </h3>
                    <p className="mb-6 max-w-md text-base font-medium leading-relaxed text-[#666666]">
                      Two-way sync with the platforms your district already runs — goals, services, and progress stay in lockstep, no double entry.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Frontline", "PowerSchool", "Tienet", "SEAS", "Skyward", "IEP Direct"].map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-white px-3 py-1.5 text-[13px] font-semibold text-[#3A3A3A]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
                    {/* Soft purple glow */}
                    <div
                      aria-hidden
                      className="absolute h-[280px] w-[280px] rounded-full bg-[#AF58C9]/8 blur-3xl"
                    />

                    {/* Concentric rings */}
                    <div aria-hidden className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-[#EDE3F3]" />
                    <div aria-hidden className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-[#EDE3F3]" />

                    {/* Floating system badges */}
                    {[
                      { label: "FR", style: "top-0 left-1/2 -translate-x-1/2" },
                      { label: "PS", style: "top-1/4 right-0 translate-x-2" },
                      { label: "TN", style: "bottom-1/4 right-0 translate-x-2" },
                      { label: "SE", style: "bottom-0 left-1/2 -translate-x-1/2" },
                      { label: "SK", style: "bottom-1/4 left-0 -translate-x-2" },
                      { label: "ID", style: "top-1/4 left-0 -translate-x-2" },
                    ].map((b) => (
                      <div
                        key={b.label}
                        className={`absolute ${b.style} z-10 flex size-10 items-center justify-center rounded-full border border-[#EDEDEA] bg-white text-[11px] font-bold text-[#3A3A3A] shadow-[0_2px_10px_rgba(17,17,17,0.06)]`}
                      >
                        {b.label}
                      </div>
                    ))}

                    {/* AbleSpace center hub */}
                    <div className="relative z-20 flex size-16 items-center justify-center rounded-full border border-[#E8D6F0] bg-white shadow-[0_10px_40px_-10px_rgba(175,88,201,0.35),0_2px_8px_rgba(17,17,17,0.08)] sm:size-20">
                      <Image
                        src="/assets/navbar/ablespace-logo.svg"
                        alt="AbleSpace"
                        width={36}
                        height={36}
                        className="size-7 sm:size-9"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 7: AbleSpace on the GO! */}
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
