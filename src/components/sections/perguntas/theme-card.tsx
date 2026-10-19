import type { ThemeData } from "@/types/perguntas";

export function ThemeCard({ title, text }: ThemeData) {
  return (
    <li className="flex flex-col gap-1 bg-paper-2 p-5">
      <h4 className="text-card font-extrabold leading-[1.3] text-ink">{title}</h4>
      <p className="text-small leading-[1.5] text-text-2">{text}</p>
    </li>
  );
}
