import Image from "next/image";
import Link from "next/link";

interface Props {
  googlePlayHref?: string;
  appStoreHref?: string;
  className?: string;
}

export default function AppStoreButtons({ googlePlayHref = "#", appStoreHref = "#", className = "" }: Props) {
  const btnClass = "flex items-center justify-center gap-2 px-5 py-3 w-[160px] bg-[#111111] text-white text-base font-medium rounded-lg hover:bg-[#333333] transition-colors";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href={googlePlayHref} className={btnClass}>
        <Image src="/assets/mobile-app-section/google-play.svg" alt="" width={18} height={18} className="brightness-0 invert" />
        Google Play
      </Link>
      <Link href={appStoreHref} className={btnClass}>
        <Image src="/assets/mobile-app-section/apple.svg" alt="" width={18} height={18} className="brightness-0 invert" />
        App Store
      </Link>
    </div>
  );
}
