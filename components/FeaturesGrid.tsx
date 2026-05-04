import Image from "next/image";

interface GridItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Props {
  items: GridItem[];
}

function GridCell({ icon, title, desc }: GridItem) {
  return (
    <div className="flex flex-col items-center text-center px-8 py-10">
      <div className="w-16 h-16 bg-[#FCFBF7] rounded-2xl flex items-center justify-center mb-5">
        {icon}
      </div>
      <h4 className="text-[18px] font-bold text-[#111111] mb-2">{title}</h4>
      <p className="text-sm text-[#888888] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function FeaturesGrid({ items }: Props) {
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div className="border border-[#F0F0F0] rounded-2xl overflow-hidden">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`grid grid-cols-1 sm:grid-cols-3 ${rowIdx > 0 ? "border-t border-[#F0F0F0]" : ""}`}
        >
          {row.map((item, colIdx) => (
            <div
              key={item.title}
              className={colIdx > 0 ? "sm:border-l border-[#F0F0F0]" : ""}
            >
              <GridCell {...item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
