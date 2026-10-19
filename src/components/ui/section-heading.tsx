type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
};

const tones = {
  light: {
    eyebrow: "text-muted",
    title: "text-ink",
    lead: "text-text-2",
  },
  dark: {
    eyebrow: "text-muted-dark",
    title: "text-white",
    lead: "text-text-on-dark",
  },
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const colors = tones[tone];

  return (
    <div className={`flex max-w-[760px] flex-col gap-[10px] ${className}`}>
      <p
        className={`font-mono text-overline font-medium uppercase leading-[1.4] tracking-[2px] ${colors.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-[32px] font-extrabold leading-[1.05] tracking-[-1px] md:text-h2 ${colors.title}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`text-lead leading-[1.55] ${colors.lead}`}>{lead}</p>
      )}
    </div>
  );
}
