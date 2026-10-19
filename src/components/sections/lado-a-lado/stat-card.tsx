import type { StatData } from "@/types/lado-a-lado";

const styles = {
  lula: {
    border: "border-lula",
    value: "font-lula text-[56px] leading-none tracking-[0.5px] text-lula",
  },
  flavio: {
    border: "border-flavio",
    value:
      "font-flavio text-[52px] font-black italic leading-none tracking-[-1px] text-flavio",
  },
};

export function StatCard({ candidate, value, label, source }: StatData) {
  const style = styles[candidate];

  return (
    <li className={`flex flex-col gap-2 border-t-4 bg-white p-5 ${style.border}`}>
      <p className={style.value}>{value}</p>
      <p className="text-small font-bold leading-[1.3] text-ink">{label}</p>
      <p className="font-mono text-caption leading-[1.5] text-muted">{source}</p>
    </li>
  );
}
