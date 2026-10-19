import type { NamePlateData } from "@/types/hero";

const styles = {
  lula: {
    box: "bg-lula items-start shadow-[8px_8px_0_var(--color-ink)]",
    party: "text-lula-tint",
    name: "font-lula text-[clamp(48px,10.4vw,150px)] leading-[0.95] tracking-[0.5px] text-white",
  },
  flavio: {
    box: "bg-flavio items-end shadow-[-8px_8px_0_var(--color-ink)]",
    party: "text-flavio-accent",
    name: "font-flavio text-[clamp(40px,8.9vw,128px)] font-black italic leading-[1.05] tracking-[-1px] text-white",
  },
};

export function NamePlate({ candidate, party, name }: NamePlateData) {
  const style = styles[candidate];

  return (
    <div
      className={`flex flex-col px-5 pb-2 pt-3 uppercase md:px-8 md:pb-[14px] md:pt-[22px] ${style.box}`}
    >
      <p className={`font-mono text-overline font-medium leading-[1.4] tracking-[2px] ${style.party}`}>
        {party}
      </p>
      <p className={style.name}>{name}</p>
    </div>
  );
}
