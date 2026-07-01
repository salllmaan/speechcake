import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Shared pieces for the service-time "Ready for Reports" AI mockups.
// Matches the changes-page AbleSpace AI section style: macOS window chrome,
// gray skeleton content, and a purple-bordered "AI output" card with a signature.

export function Window({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-[#ECEBE7] bg-[#FCFBFA] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-[#F1F0EC] bg-[#FBFAF8] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  );
}

export function Bar({ w = "100%", tone = "gray", className }: { w?: string; tone?: "gray" | "purple"; className?: string }) {
  return (
    <div
      className={cn("h-2 rounded-full", tone === "purple" ? "bg-[#ECE7F8]" : "bg-[#ECECEC]", className)}
      style={{ width: w }}
    />
  );
}

export function OutputPanel({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-xl border-[1.5px] border-[#C9BCEC] bg-white p-3 shadow-[0_14px_30px_-14px_rgba(124,92,206,0.45)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EFEAF8] text-[11px] leading-none text-[#9A8FB8]"
      >
        ×
      </span>
      <h4 className="mb-2 pr-5 text-[12.5px] font-bold leading-tight text-[#111111]">{title}</h4>
      {children}
    </div>
  );
}

export function Signature() {
  return (
    <div className="mt-3 flex items-center gap-2">
      <svg width="42" height="18" viewBox="0 0 42 18" fill="none" className="text-[#3D3D3D]" aria-hidden>
        <path
          d="M3 12c2-1 4-8 6-8s1 9 3 9 3-7 5-7 2 6 4 6 4-4 6-6m4 3 5-9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#C9BCEC]" />
        ))}
      </span>
    </div>
  );
}
