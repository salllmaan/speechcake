import Image from "next/image";
import { Fragment } from "react";

import SectionChip from "@/components/SectionChip";
import { Separator } from "@/components/ui/separator";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {
  chipLabel: string;
  chipIconSrc?: string;
  heading: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  features: Feature[];
}

const Hero45 = ({
  chipLabel,
  chipIconSrc,
  heading,
  subtitle,
  imageSrc,
  imageAlt = "",
  features,
}: Hero45Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <SectionChip label={chipLabel} iconSrc={chipIconSrc} variant="neutral" />
          </div>
          <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
            {heading}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-[720px] text-base font-medium leading-relaxed text-[#666666] sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative mx-auto max-w-screen-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={675}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(#7C7572_1px,transparent_1px)]" />
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(#7C7572_1px,transparent_1px)]" />
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          {features.map((feature, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-[#EDEDEA] via-transparent to-[#EDEDEA] md:block"
                />
              )}
              <div className="flex grow basis-0 flex-col rounded-md bg-white p-4">
                <div className="relative mb-6 flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold text-[#111111]">{feature.title}</h3>
                <p className="text-sm text-[#7C7572]">{feature.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero45 };
