"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: Specification[];
}

const products: Product[] = [
  {
    id: "trendlines",
    title: "Trendlines",
    subtitle: "Goal Progress",
    image: "/assets/final/landing-page/iep-data-collection-card-3.png",
    specs: [
      { label: "Type", value: "Live" },
      { label: "Range", value: "8 wks" },
      { label: "Forecast", value: "On" },
      { label: "Goal", value: "Set" },
    ],
  },
  {
    id: "service-log",
    title: "Service Log",
    subtitle: "Time & Minutes",
    image: "/assets/final/landing-page/iep-data-collection-service-time.png",
    specs: [
      { label: "Format", value: "Audit" },
      { label: "Export", value: "CSV" },
      { label: "Range", value: "Monthly" },
      { label: "Compliance", value: "IDEA" },
    ],
  },
  {
    id: "mastery",
    title: "Mastery",
    subtitle: "Goal Status",
    image: "/assets/final/landing-page/iep-data-collection-reports.png",
    specs: [
      { label: "Goals", value: "Auto" },
      { label: "Alerts", value: "Live" },
      { label: "View", value: "Grid" },
      { label: "Filter", value: "Smart" },
    ],
  },
  {
    id: "billing",
    title: "Billing",
    subtitle: "Medicaid Ready",
    image: "/assets/final/landing-page/iep-data-collection-billing.png",
    specs: [
      { label: "Status", value: "Auto" },
      { label: "State", value: "All" },
      { label: "Submit", value: "Direct" },
      { label: "Audit", value: "Built-in" },
    ],
  },
];

interface CardProps {
  product: Product;
  index: number;
  totalCards: number;
  isExpanded: boolean;
}

const Card = ({ product, index, totalCards, isExpanded }: CardProps) => {
  const centerOffset = (totalCards - 1) * 5;

  const defaultX = index * 10 - centerOffset;
  const defaultY = index * 2;
  const defaultRotate = index * 1.5;
  const defaultScale = 1;

  const cardWidth = 320;
  const cardOverlap = 240;
  const totalExpandedWidth =
    cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
  const expandedCenterOffset = totalExpandedWidth / 2;

  const spreadX =
    index * (cardWidth - cardOverlap) - expandedCenterOffset + cardWidth / 2;
  const spreadY = 0;
  const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
  const spreadScale = 1;

  return (
    <motion.div
      animate={{
        x: isExpanded ? spreadX : defaultX,
        y: isExpanded ? spreadY : defaultY,
        rotate: isExpanded ? spreadRotate : defaultRotate,
        scale: isExpanded ? spreadScale : defaultScale,
        zIndex: totalCards - index,
      }}
      className={cn(
        "absolute inset-0 w-full rounded-2xl p-6",
        "bg-gradient-to-br from-white/40 via-neutral-50/30 to-neutral-100/20",
        "border border-white/20",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-b before:from-white/20 before:via-neutral-100/10 before:to-transparent",
        "before:opacity-100 before:transition-opacity before:duration-500",
        "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br",
        "after:from-white/80 after:to-neutral-100/70",
        "after:z-[-1] after:blur-xl",
        "backdrop-blur-xl backdrop-saturate-150",
        "shadow-[0_8px_20px_rgb(0,0,0,0.08)]",
        "hover:border-white/30",
        "hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]",
        "hover:backdrop-blur-2xl",
        "hover:bg-gradient-to-br hover:from-white/50 hover:via-neutral-50/40 hover:to-neutral-100/30",
        "transition-all duration-500 ease-out",
        "transform-gpu overflow-hidden",
      )}
      initial={{
        x: defaultX,
        y: defaultY,
        rotate: defaultRotate,
        scale: defaultScale,
      }}
      style={{
        maxWidth: "320px",
        transformStyle: "preserve-3d",
        perspective: "2000px",
        left: "50%",
        marginLeft: "-160px",
        transform: isExpanded
          ? ""
          : `
                        translateY(${index * 10}px)
                        translateX(${index * 1}px)
                        rotate(${index * 3}deg)
                        scale(${1 - index * 0.02})
                    `,
        zIndex: products.length - index,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        mass: 0.8,
        restDelta: 0.001,
        restSpeed: 0.001,
      }}
    >
      <div className="absolute inset-1 rounded-xl border border-neutral-200/50 bg-neutral-50/50 backdrop-blur-sm" />

      <div className="relative z-10">
        <dl className="mb-4 grid grid-cols-4 justify-center gap-2">
          {product.specs.map((spec) => (
            <div
              className="flex flex-col items-start text-left text-[10px] backdrop-blur-sm"
              key={spec.label}
            >
              <dd className="w-full text-left font-medium text-gray-500">
                {spec.value}
              </dd>
              <dt className="mb-0.5 w-full text-left text-gray-900">
                {spec.label}
              </dt>
            </div>
          ))}
        </dl>

        <div
          className={cn(
            "aspect-[16/11] w-full overflow-hidden rounded-lg",
            "bg-neutral-100",
            "transition-transform duration-300 ease-out",
            "group-hover:scale-[1.02]",
            "border border-neutral-200/50",
            "shadow-inner",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={product.title}
            className="h-full w-full object-cover"
            loading="lazy"
            src={product.image}
          />
        </div>

        <div className="mt-4">
          <div className="space-y-1">
            <h2 className="text-left font-bold text-3xl text-gray-900 tracking-tight">
              {product.title}
            </h2>
            <span className="block bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-left font-semibold text-3xl text-transparent tracking-tight">
              {product.subtitle}
            </span>
          </div>
          <p className="mt-2 text-left text-gray-500 text-sm">
            Generated automatically from your goal and service data.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface CardStackProps {
  className?: string;
}

export default function CardStack({ className }: CardStackProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <button
      aria-label="Toggle card stack"
      className={cn(
        "relative mx-auto cursor-pointer",
        "min-h-[440px] w-full",
        "appearance-none border-0 bg-transparent p-0",
        "flex items-center justify-center",
        className,
      )}
      onClick={handleToggle}
      type="button"
    >
      {products.map((product, index) => (
        <Card
          index={index}
          isExpanded={isExpanded}
          key={product.id}
          product={product}
          totalCards={products.length}
        />
      ))}
    </button>
  );
}
