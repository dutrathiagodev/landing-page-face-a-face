import type { ComparisonRowData } from "@/types/lado-a-lado";

const columns = "grid grid-cols-[150px_1fr_1fr] md:grid-cols-[180px_1fr_1fr]";

export function ComparisonTable({ rows }: { rows: ComparisonRowData[] }) {
  return (
    <div className="overflow-x-auto border-2 border-ink">
      <div className="min-w-[720px]">
        <div className={columns}>
          <p className="flex items-center bg-ink px-5 font-mono text-overline font-medium uppercase tracking-[2px] text-paper">
            Dimensão
          </p>
          <p className="bg-lula px-5 py-4 font-lula text-[32px] uppercase leading-none tracking-[0.5px] text-white">
            Lula
          </p>
          <p className="bg-flavio px-5 py-4 font-flavio text-[28px] font-black uppercase italic leading-none tracking-[-1px] text-white">
            Flávio
          </p>
        </div>

        {rows.map((row, index) => (
          <div
            key={row.dimension}
            className={`${columns} ${index % 2 === 0 ? "bg-paper" : "bg-paper-2"}`}
          >
            <p className="px-5 py-4 text-small font-bold leading-[1.5] text-ink">
              {row.dimension}
            </p>
            <p className="px-5 py-4 text-small leading-[1.5] text-text-2">
              {row.lula}
            </p>
            <p className="px-5 py-4 text-small leading-[1.5] text-text-2">
              {row.flavio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
