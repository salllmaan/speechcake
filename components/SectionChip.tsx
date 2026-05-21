interface Props {
  label: string;
  variant?: "gray" | "white" | "neutral";
  icon?: React.ReactNode;
  iconSrc?: string;
  visible?: boolean;
}

const VARIANT_STYLES = {
  gray:    { bg: "bg-[#FCFBF7]", border: "border-[#F5F2E5]", text: "text-[#5E5C55]", iconColor: "#FF8F6C" },
  white:   { bg: "bg-white",     border: "border-[#F5F2E5]", text: "text-[#5E5C55]", iconColor: "#FF8F6C" },
  neutral: { bg: "bg-[#FCFCFB]", border: "border-[#EDEDEA]", text: "text-[#7C7572]", iconColor: "#7C7572" },
} as const;

export default function SectionChip({ label, variant = "gray", icon, iconSrc, visible = true }: Props) {
  const styles = VARIANT_STYLES[variant];
  const iconUrl = iconSrc ?? "/assets/icons/star.svg";

  const defaultIcon = (
    <span
      style={{
        display: "inline-block",
        width: 14,
        height: 14,
        backgroundColor: styles.iconColor,
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        flexShrink: 0,
      }}
    />
  );

  return (
    <div className={`inline-flex items-center px-4 py-1.5 ${styles.bg} border ${styles.border} rounded-full`}>
      <div
        className="flex items-center gap-1.5"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-5px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {icon ?? defaultIcon}
        <span className={`text-[13px] font-medium ${styles.text}`}>{label}</span>
      </div>
    </div>
  );
}
