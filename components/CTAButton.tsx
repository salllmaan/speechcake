import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, variant, children, className = "" }: Props) {
  const base = "flex items-center justify-center gap-2 px-5 py-[14px] text-base font-semibold rounded-xl transition-colors";
  const styles = {
    primary: "bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-white hover:opacity-90",
    secondary: "bg-[#F2F2F2] text-[#7A716B] hover:bg-[#F0F0F0]",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {variant === "primary" && (
        <Image src="/assets/icons/square-arrow-right-01.svg" alt="" width={20} height={20} className="brightness-0 invert" />
      )}
      {variant === "secondary" && (
        <span style={{ display: "inline-block", width: 20, height: 20, backgroundColor: "#7A716B", maskImage: "url(/assets/icons/cursor-magic-selection-02.svg)", WebkitMaskImage: "url(/assets/icons/cursor-magic-selection-02.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", flexShrink: 0 }} />
      )}
    </Link>
  );
}
