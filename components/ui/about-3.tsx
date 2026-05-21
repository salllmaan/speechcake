import { Button } from "@/components/ui/button";
import SectionChip from "@/components/SectionChip";

interface About3Props {
  chip?: string;
  chipIcon?: string;
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  afterLogos?: React.ReactNode;
}

export const About3 = ({
  chip,
  chipIcon,
  title = "About Us",
  description = "",
  mainImage,
  secondaryImage,
  breakout,
  companiesTitle,
  companies = [],
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "",
  achievements = [],
  afterLogos,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          {chip && (
            <div className="flex justify-center mb-4">
              <SectionChip label={chip} iconSrc={chipIcon} variant="neutral" />
            </div>
          )}
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {mainImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
            />
          )}
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {breakout && (
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-[#F7F7F5] p-7 md:w-1/2 lg:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="mr-auto h-12 w-12"
                />
                <div>
                  <p className="mb-2 text-lg font-semibold text-[#111111]">{breakout.title}</p>
                  <p className="text-[#666666]">{breakout.description}</p>
                </div>
                <Button variant="outline" className="mr-auto" asChild>
                  <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
                </Button>
              </div>
            )}
            {secondaryImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            )}
          </div>
        </div>
        {companies.length > 0 && (
          <div className="py-16">
            {companiesTitle && (
              <p className="text-center text-[#666666] mb-8 sm:mb-10">{companiesTitle}</p>
            )}
            <div className="mx-auto max-w-5xl px-2 sm:px-4 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
              {companies.map((company, idx) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={company.src + idx}
                  src={company.src}
                  alt={company.alt}
                  className="h-10 sm:h-14 w-auto object-contain opacity-70"
                />
              ))}
            </div>
          </div>
        )}
        {afterLogos}
        {achievements.length > 0 && (
          <div className="relative overflow-hidden rounded-xl bg-[#F7F7F5] p-10 md:p-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-4xl font-semibold text-[#111111]">{achievementsTitle}</h2>
              <p className="max-w-screen-sm text-[#666666]">
                {achievementsDescription}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
              {achievements.map((item, idx) => (
                <div className="flex flex-col gap-4" key={item.label + idx}>
                  <p className="text-[#666666]">{item.label}</p>
                  <span className="text-4xl font-semibold text-[#111111] md:text-5xl">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,#9A938F_1px,transparent_1px),linear-gradient(to_bottom,#9A938F_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
          </div>
        )}
      </div>
    </section>
  );
};
