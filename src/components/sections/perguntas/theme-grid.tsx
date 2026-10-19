import type { ThemeData } from "@/types/perguntas";
import { ThemeCard } from "./theme-card";

export function ThemeGrid({ themes }: { themes: ThemeData[] }) {
  return (
    <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {themes.map((theme) => (
        <ThemeCard key={theme.title} {...theme} />
      ))}
    </ul>
  );
}
