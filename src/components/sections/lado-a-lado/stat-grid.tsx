import type { StatData } from "@/types/lado-a-lado";
import { StatCard } from "./stat-card";

export function StatGrid({ stats }: { stats: StatData[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </ul>
  );
}
