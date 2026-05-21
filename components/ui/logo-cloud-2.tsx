import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoCloudProps = React.ComponentProps<"div"> & {
  items?: string[];
};

const DEFAULT_ITEMS = [
  "Special Ed Teachers",
  "Speech-Language Pathologists",
  "Occupational Therapists",
  "Behavior Analysts (BCBAs)",
  "Physical Therapists",
  "Special Ed Directors",
];

const BORDER = "border-[#EDEDEA]";
const TINT = "bg-[#FAFAF7]";

export function LogoCloud({ className, items = DEFAULT_ITEMS, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        `relative grid grid-cols-2 border-x ${BORDER} sm:grid-cols-3`,
        className,
      )}
      {...props}
    >
      <div className={`-translate-x-1/2 pointer-events-none absolute left-1/2 top-0 -mt-px w-screen border-t ${BORDER}`} />

      {items.map((label, i) => {
        const colCount = 3;
        const isLastCol = (i + 1) % colCount === 0;
        const totalRows = Math.ceil(items.length / colCount);
        const currentRow = Math.floor(i / colCount) + 1;
        const isLastRow = currentRow === totalRows;
        const isIntersection = !isLastCol && !isLastRow;

        return (
          <Cell
            key={label}
            label={label}
            className={cn(
              !isLastCol && `border-r ${BORDER}`,
              !isLastRow && `border-b ${BORDER}`,
              i % 2 === 0 ? "bg-white" : TINT,
            )}
          >
            {isIntersection && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#9A938F]"
                strokeWidth={1}
              />
            )}
          </Cell>
        );
      })}

      <div className={`-translate-x-1/2 pointer-events-none absolute left-1/2 bottom-0 -mb-px w-screen border-b ${BORDER}`} />
    </div>
  );
}

type CellProps = React.ComponentProps<"div"> & {
  label: string;
};

function Cell({ label, className, children, ...props }: CellProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-4 py-8 text-center text-sm font-medium text-[#7C7572] sm:text-base md:p-8",
        className,
      )}
      {...props}
    >
      {label}
      {children}
    </div>
  );
}
