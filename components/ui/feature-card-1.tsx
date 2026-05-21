"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd" | "title"
  > {
  tag: string;
  title?: React.ReactNode;
  centerVisual: React.ReactNode;
  color: "orange" | "purple" | "blue";
  gradientColor?: string;
  tagVariant?: "chip" | "heading";
}

const colorVariants = {
  orange: {
    "--feature-color": "hsl(35, 91%, 55%)",
    "--feature-color-light": "hsl(41, 100%, 85%)",
    "--feature-color-dark": "hsl(24, 98%, 98%)",
  },
  purple: {
    "--feature-color": "hsl(262, 85%, 60%)",
    "--feature-color-light": "hsl(261, 100%, 87%)",
    "--feature-color-dark": "hsl(264, 100%, 98%)",
  },
  blue: {
    "--feature-color": "hsl(211, 100%, 60%)",
    "--feature-color-light": "hsl(210, 100%, 83%)",
    "--feature-color-dark": "hsl(216, 100%, 98%)",
  },
};

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, tag, title, centerVisual, color, gradientColor = "#C7DBBD", tagVariant = "chip", ...props }, ref) => {
    const cardStyle = colorVariants[color] as React.CSSProperties;

    return (
      <motion.div
        ref={ref}
        style={cardStyle}
        className={cn(
          "relative flex h-[280px] w-full flex-col justify-end overflow-hidden rounded-2xl border-2 border-[#A5B09E]/10 bg-white p-6",
          className,
        )}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { y: 0 },
          hover: { y: -10 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        {...props}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${gradientColor} 0%, transparent 70%)`,
          }}
        />

        {/* Center visual */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center pb-[72px]"
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.15, y: -12 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {centerVisual}
        </motion.div>

        {/* Content */}
        <div className="relative z-20 rounded-lg border border-[#F5F2E5] bg-white/80 p-4 backdrop-blur-sm text-center">
          {tagVariant === "heading" ? (
            <h3 className="mb-1 text-base sm:text-lg font-bold text-[#111111] tracking-tight">
              {tag}
            </h3>
          ) : (
            <span
              className="mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: "#F5F7F5",
                borderColor: "#E5E8E4",
                color: "#2E312D",
              }}
            >
              {tag}
            </span>
          )}
          {title && <p className="text-sm sm:text-base text-[#666666]">{title}</p>}
        </div>
      </motion.div>
    );
  },
);
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
