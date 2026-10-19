import type { LegalCardData } from "@/types/status-juridico";

const titles = {
  lula: "font-lula text-[38px] uppercase leading-none tracking-[0.5px] text-lula-accent",
  flavio:
    "font-flavio text-[30px] font-black uppercase italic leading-none tracking-[-1px] text-flavio-accent",
};

export function LegalCard({ title, tone, text, source }: LegalCardData) {
  return (
    <article className="flex flex-col gap-4 border border-line-dark bg-ink-2 p-6 md:p-8">
      <h3 className={titles[tone]}>{title}</h3>
      <p className="text-small leading-[1.55] text-text-on-dark">{text}</p>
      <p className="mt-auto font-mono text-caption leading-[1.5] text-muted-dark">
        {source}
      </p>
    </article>
  );
}
