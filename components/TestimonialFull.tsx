
interface Props {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialFull({ quote, name, role }: Props) {
  return (
    <section className="w-full pt-16 pb-16 sm:pt-[104px] sm:pb-[104px] px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(to right, rgba(250,250,249,0) 0%, rgba(250,250,249,1) 20%, rgba(250,250,249,1) 80%, rgba(250,250,249,0) 100%)" }}>
      <div className="max-w-[960px] mx-auto text-center">

        {/* Stars chip */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-1 px-4 py-1.5 bg-[#F5F5F5] border border-[#E8E8E8] rounded-full">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ display: "inline-block", width: 14, height: 14, backgroundColor: "#868482", maskImage: "url(/assets/icons/star.svg)", WebkitMaskImage: "url(/assets/icons/star.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", flexShrink: 0 }} />
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-2xl sm:text-3xl lg:text-[36px] font-bold italic text-[#5E5C5B] leading-[1.3] tracking-tight mb-8">
          "{quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-center gap-0.5">
          <p className="text-base font-bold text-[#868482]">— {name}</p>
          <span className="text-[#DDDDDD]">·</span>
          <p className="text-base text-[#868482]">{role}</p>
        </div>

      </div>
    </section>
  );
}
