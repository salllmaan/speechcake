"use client";

import { useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// In-house illustration generator (v1).
// Procedurally generates clean, brand-on SVG illustrations — no external API.
// Pick a style + palette + aspect, regenerate for new variants, then copy or
// download the SVG. Everything is deterministic from a seed.
// ─────────────────────────────────────────────────────────────────────────────

type Palette = { id: string; name: string; bg: string; colors: string[] };

const PALETTES: Palette[] = [
  { id: "ablespace", name: "AbleSpace", bg: "#F7F6F3", colors: ["#A484CE", "#00A9F8", "#D2C2E7", "#7C7572", "#FF8F6C"] },
  { id: "soniculate", name: "Soniculate", bg: "#FFF7EC", colors: ["#FF6A3D", "#F4A521", "#2FB8A6", "#FF5C8A", "#6D5DF6"] },
  { id: "calm", name: "Calm", bg: "#F4F3F0", colors: ["#5E5C55", "#9A938F", "#C9C5BD", "#7C7572"] },
  { id: "vivid", name: "Vivid", bg: "#0E1116", colors: ["#6D5DF6", "#22D3EE", "#F472B6", "#FBBF24", "#34D399"] },
];

const STYLES = ["Blobs", "Bauhaus", "Confetti", "Mesh"] as const;
type Style = (typeof STYLES)[number];

const ASPECTS = [
  { id: "square", label: "Square", w: 600, h: 600 },
  { id: "wide", label: "Wide", w: 800, h: 500 },
  { id: "portrait", label: "Portrait", w: 520, h: 660 },
] as const;

// ── seeded RNG (mulberry32) ─────────────────────────────────────────────────
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Pt = [number, number];
const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

function smoothClosedPath(pts: Pt[]) {
  if (pts.length < 3) return "";
  let d = `M ${mid(pts[pts.length - 1], pts[0]).join(" ")} `;
  for (let i = 0; i < pts.length; i++) {
    const c = pts[i];
    const m = mid(c, pts[(i + 1) % pts.length]);
    d += `Q ${c[0].toFixed(1)} ${c[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)} `;
  }
  return d + "Z";
}

function pick<T>(rand: () => number, arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

// ── style renderers (return inner SVG markup) ────────────────────────────────
function blobs(rand: () => number, P: Palette, w: number, h: number) {
  let s = "";
  const n = 2 + Math.floor(rand() * 2);
  for (let i = 0; i < n; i++) {
    const cx = w * (0.28 + rand() * 0.44);
    const cy = h * (0.28 + rand() * 0.44);
    const r = Math.min(w, h) * (0.2 + rand() * 0.18);
    const np = 6 + Math.floor(rand() * 4);
    const pts: Pt[] = [];
    for (let k = 0; k < np; k++) {
      const a = (k / np) * Math.PI * 2;
      const rr = r * (0.68 + rand() * 0.5);
      pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
    }
    s += `<path d="${smoothClosedPath(pts)}" fill="${pick(rand, P.colors)}" opacity="${(0.6 + rand() * 0.4).toFixed(2)}"/>`;
  }
  return s;
}

function bauhaus(rand: () => number, P: Palette, w: number, h: number) {
  let s = "";
  const cols = 4;
  const cw = w / cols;
  const rows = Math.max(2, Math.round((h / w) * cols));
  const ch = h / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rand() < 0.14) continue;
      const x = c * cw;
      const y = r * ch;
      const cx = x + cw / 2;
      const cy = y + ch / 2;
      const rr = Math.min(cw, ch) * 0.46;
      const col = pick(rand, P.colors);
      const t = Math.floor(rand() * 5);
      if (t === 0) s += `<circle cx="${cx}" cy="${cy}" r="${rr.toFixed(1)}" fill="${col}"/>`;
      else if (t === 1) s += `<circle cx="${cx}" cy="${cy}" r="${rr.toFixed(1)}" fill="none" stroke="${col}" stroke-width="${(rr * 0.3).toFixed(1)}"/>`;
      else if (t === 2) {
        const rot = Math.floor(rand() * 4) * 90;
        s += `<path d="M ${cx - rr} ${cy} A ${rr} ${rr} 0 0 1 ${cx + rr} ${cy} Z" fill="${col}" transform="rotate(${rot} ${cx} ${cy})"/>`;
      } else if (t === 3) {
        s += `<polygon points="${cx},${cy - rr} ${cx - rr},${cy + rr} ${cx + rr},${cy + rr}" fill="${col}"/>`;
      } else {
        const side = rr * 1.5;
        s += `<rect x="${cx - side / 2}" y="${cy - side / 2}" width="${side.toFixed(1)}" height="${side.toFixed(1)}" rx="${(side * 0.18).toFixed(1)}" fill="${col}"/>`;
      }
    }
  }
  return s;
}

function confetti(rand: () => number, P: Palette, w: number, h: number) {
  let s = "";
  const k = 22 + Math.floor(rand() * 16);
  for (let i = 0; i < k; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const sz = Math.min(w, h) * (0.03 + rand() * 0.06);
    const col = pick(rand, P.colors);
    const rot = (rand() * 90).toFixed(1);
    const t = Math.floor(rand() * 5);
    if (t === 0) s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${sz.toFixed(1)}" fill="${col}"/>`;
    else if (t === 1) s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${sz.toFixed(1)}" fill="none" stroke="${col}" stroke-width="${(sz * 0.4).toFixed(1)}"/>`;
    else if (t === 2) s += `<rect x="${(x - sz).toFixed(1)}" y="${(y - sz).toFixed(1)}" width="${(sz * 2).toFixed(1)}" height="${(sz * 2).toFixed(1)}" rx="${(sz * 0.5).toFixed(1)}" fill="${col}" transform="rotate(${rot} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    else if (t === 3) s += `<path d="M ${x} ${y - sz} L ${x} ${y + sz} M ${x - sz} ${y} L ${x + sz} ${y}" stroke="${col}" stroke-width="${(sz * 0.5).toFixed(1)}" stroke-linecap="round"/>`;
    else s += `<polygon points="${x},${y - sz} ${x - sz},${y + sz} ${x + sz},${y + sz}" fill="${col}" transform="rotate(${rot} ${x} ${y})"/>`;
  }
  return s;
}

function mesh(rand: () => number, P: Palette, w: number, h: number, uid: string) {
  const blur = Math.min(w, h) * 0.14;
  let g = "";
  const n = 4 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    g += `<circle cx="${(rand() * w).toFixed(1)}" cy="${(rand() * h).toFixed(1)}" r="${(Math.min(w, h) * (0.22 + rand() * 0.22)).toFixed(1)}" fill="${pick(rand, P.colors)}" opacity="0.85"/>`;
  }
  return `<defs><filter id="m${uid}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${blur.toFixed(1)}"/></filter></defs><g filter="url(#m${uid})">${g}</g>`;
}

function generate(style: Style, P: Palette, seed: number, w: number, h: number) {
  const rand = makeRng(seed);
  const uid = (seed >>> 0).toString(36);
  let inner = "";
  if (style === "Blobs") inner = blobs(rand, P, w, h);
  else if (style === "Bauhaus") inner = bauhaus(rand, P, w, h);
  else if (style === "Confetti") inner = confetti(rand, P, w, h);
  else inner = mesh(rand, P, w, h, uid);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${P.bg}"/>${inner}</svg>`;
}

// ── UI ───────────────────────────────────────────────────────────────────────
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
        active ? "bg-[#111111] text-white" : "border border-[#E5E2DC] bg-white text-[#5E5C55] hover:bg-[#F4F3F0]"
      }`}
    >
      {children}
    </button>
  );
}

export default function Generator() {
  const [style, setStyle] = useState<Style>("Blobs");
  const [paletteId, setPaletteId] = useState(PALETTES[0].id);
  const [aspectId, setAspectId] = useState<(typeof ASPECTS)[number]["id"]>("square");
  const [base, setBase] = useState(1234);
  const [copied, setCopied] = useState<number | null>(null);

  const palette = PALETTES.find((p) => p.id === paletteId)!;
  const aspect = ASPECTS.find((a) => a.id === aspectId)!;

  const svgs = useMemo(
    () => Array.from({ length: 8 }, (_, i) => generate(style, palette, base + i * 7919, aspect.w, aspect.h)),
    [style, palette, base, aspect],
  );

  const download = (svg: string, i: number) => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${paletteId}-${style.toLowerCase()}-${i + 1}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copy = async (svg: string, i: number) => {
    await navigator.clipboard.writeText(svg);
    setCopied(i);
    setTimeout(() => setCopied((c) => (c === i ? null : c)), 1400);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Header */}
      <header className="border-b border-[#ECEAE4] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <h1 className="text-[24px] font-extrabold tracking-tight">Illustration Generator</h1>
          <p className="mt-1 text-sm text-[#7C7572]">
            Generate clean, on-brand SVG illustrations for the site. Pick a style and palette, regenerate for new
            variants, then copy or download. No external services.
          </p>
        </div>
      </header>

      {/* Toolbar */}
      <div className="sticky top-0 z-10 border-b border-[#ECEAE4] bg-[#FAFAF8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A89F94]">Style</span>
            {STYLES.map((s) => (
              <Chip key={s} active={style === s} onClick={() => setStyle(s)}>{s}</Chip>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A89F94]">Palette</span>
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPaletteId(p.id)}
                className={`flex items-center gap-2 rounded-full py-1.5 pl-2 pr-3.5 text-[13px] font-semibold transition-colors ${
                  paletteId === p.id ? "bg-[#111111] text-white" : "border border-[#E5E2DC] bg-white text-[#5E5C55] hover:bg-[#F4F3F0]"
                }`}
              >
                <span className="flex gap-0.5">
                  {p.colors.slice(0, 4).map((c) => (
                    <span key={c} className="size-3 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </span>
                {p.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A89F94]">Aspect</span>
            {ASPECTS.map((a) => (
              <Chip key={a.id} active={aspectId === a.id} onClick={() => setAspectId(a.id)}>{a.label}</Chip>
            ))}
          </div>
          <button
            onClick={() => setBase(Math.floor(Math.random() * 1_000_000_000))}
            className="ml-auto rounded-full bg-[#00A9F8] px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-[#0098E0]"
          >
            ↻ Regenerate
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {svgs.map((svg, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-[#ECEAE4] bg-white">
              <div className="aspect-square w-full [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />
              <div className="flex items-center gap-2 border-t border-[#F1EFE9] p-2.5">
                <button
                  onClick={() => copy(svg, i)}
                  className="flex-1 rounded-lg bg-[#F4F3F0] py-2 text-[12px] font-bold text-[#5E5C55] transition-colors hover:bg-[#ECEAE4]"
                >
                  {copied === i ? "Copied ✓" : "Copy SVG"}
                </button>
                <button
                  onClick={() => download(svg, i)}
                  className="flex-1 rounded-lg bg-[#111111] py-2 text-[12px] font-bold text-white transition-colors hover:bg-[#000]"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
