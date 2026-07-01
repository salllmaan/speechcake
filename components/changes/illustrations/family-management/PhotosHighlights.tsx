"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, ImageIcon, Star } from "lucide-react";

// Card — "Photos & Highlights"
// A daily-log highlight card with an attached photo (rendered as a soft pastel
// scene, no external assets) and a "win of the day" note. A heart reaction count
// auto-ticks to show families engaging with the moment. Passive.

export default function PhotosHighlights() {
  const [likes, setLikes] = useState(3);
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setLikes((l) => (l >= 6 ? 3 : l + 1));
      setBeat(true);
      const off = setTimeout(() => setBeat(false), 400);
      return () => clearTimeout(off);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      {/* "photo" — a self-contained pastel scene, no external image */}
      <div className="relative mb-2 h-[112px] overflow-hidden rounded-lg border border-[#ECEBE7]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F8EE] via-[#FCEAF0] to-[#FEF3E2]" />
        <div className="absolute left-4 top-4 h-7 w-7 rounded-full bg-[#FEF3E2]" />
        <div className="absolute bottom-0 left-0 right-0 h-7 bg-[#E7F0E4]" />
        <div className="absolute bottom-5 left-7 h-6 w-3 rounded-t-full bg-[#4E9D5B]/70" />
        <div className="absolute bottom-5 left-12 h-8 w-3 rounded-t-full bg-[#74B488]/80" />
        <div className="absolute bottom-5 left-[68px] h-5 w-3 rounded-t-full bg-[#FF8F6C]/70" />
        <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/85 px-1.5 py-0.5 text-[9px] font-semibold text-[#1A7A4A]">
          <ImageIcon className="h-2.5 w-2.5" strokeWidth={2.5} /> Group time
        </span>
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-[#FEF3E2] px-1.5 py-0.5 text-[9px] font-semibold text-[#B5732B]">
          <Star className="h-2.5 w-2.5 fill-[#E8A33D] text-[#E8A33D]" /> Highlight
        </span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[11px] leading-snug text-[#3D4046]">
          <span className="font-semibold text-[#111111]">Win of the day:</span> Maya shared a toy on her own!
        </p>
        <motion.span
          animate={{ scale: beat ? 1.25 : 1 }}
          transition={{ duration: 0.25 }}
          className="ml-2 flex shrink-0 items-center gap-1 rounded-full bg-[#FCEAF0] px-2 py-0.5 text-[10px] font-semibold text-[#B5436A]"
        >
          <Heart className="h-2.5 w-2.5 fill-[#B5436A]" /> {likes}
        </motion.span>
      </div>
    </div>
  );
}
