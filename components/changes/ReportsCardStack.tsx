"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Full card designs exported from Figma — the image IS the card.
const CARDS = [
  { src: "/assets/changes/iep-data-collection-6-card1.png", w: 690, h: 684 },
  { src: "/assets/changes/iep-data-collection-6-card2.png", w: 734, h: 685 },
  { src: "/assets/changes/iep-data-collection-6-card3.png", w: 762, h: 663 },
  { src: "/assets/changes/iep-data-collection-6-card4.png", w: 784, h: 637 },
];

const CARD_HEIGHT = 360; // cards fill the container height (100%)
const ROTATIONS = [0, 3.29, 5.47, 7.31]; // per-card tilt at rest (deg)
const HOVER_ROTATIONS = [-11.64, -3.83, 4.09, 12.96]; // per-card tilt on hover (deg)
const HOVER_X = [-142, -28.92, 109, 225]; // per-card x on hover (px)
const HOVER_Y = [12.16, -6.84, 3.16, 35.16]; // per-card y on hover (px)

function StackCard({
  card,
  index,
  total,
  isExpanded,
  isHovered,
}: {
  card: (typeof CARDS)[number];
  index: number;
  total: number;
  isExpanded: boolean;
  isHovered: boolean;
}) {
  // Card width follows its own aspect so the image is never distorted.
  const cardW = Math.round(CARD_HEIGHT * (card.w / card.h));

  // Rest: a tidy cascade. Open (hover or tap): fan out to exact x/y/rotate.
  const open = isHovered || isExpanded;
  const scale = 0.8;
  const restX = index * 8;
  const restY = index * 6;
  const x = open ? HOVER_X[index] ?? restX : restX;
  const y = open ? HOVER_Y[index] ?? restY : restY;
  const rotate = open ? HOVER_ROTATIONS[index] ?? 0 : ROTATIONS[index] ?? 0;

  return (
    <motion.div
      className="absolute left-1/2"
      style={{ height: CARD_HEIGHT, width: cardW, marginLeft: -cardW / 2, zIndex: total - index }}
      initial={{ x: restX, y: restY, rotate, scale }}
      animate={{ x, y, rotate, scale }}
      transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8, restDelta: 0.001 }}
    >
      <Image src={card.src} alt="" width={card.w} height={card.h} className="h-full w-full" />
    </motion.div>
  );
}

export default function ReportsCardStack({ className }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      aria-label="Toggle report cards"
      type="button"
      onClick={() => setIsExpanded((v) => !v)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative mx-auto flex h-full min-h-[300px] w-full cursor-pointer appearance-none items-center justify-center border-0 bg-transparent p-0",
        className,
      )}
    >
      {CARDS.map((card, index) => (
        <StackCard key={card.src} card={card} index={index} total={CARDS.length} isExpanded={isExpanded} isHovered={isHovered} />
      ))}
    </button>
  );
}
