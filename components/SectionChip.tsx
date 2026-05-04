interface Props {
  label: string;
  variant?: "gray" | "white";
  icon?: React.ReactNode;
}

const defaultIcon = (
  <span
    style={{
      display: "inline-block",
      width: 14,
      height: 14,
      backgroundColor: "#FF8F6C",
      maskImage: "url(/assets/icons/star.svg)",
      WebkitMaskImage: "url(/assets/icons/star.svg)",
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      flexShrink: 0,
    }}
  />
);

export default function SectionChip({ label, variant = "gray", icon }: Props) {
  const bg = variant === "white" ? "bg-white" : "bg-[#FCFBF7]";

  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 ${bg} border border-[#F5F2E5] rounded-full`}>
      {icon ?? defaultIcon}
      <span className="text-[13px] font-medium text-[#5E5C55]">{label}</span>
    </div>
  );
}
