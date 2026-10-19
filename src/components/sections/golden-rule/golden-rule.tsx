import { goldenRule } from "@/content/golden-rule";

export function GoldenRule() {
  return (
    <section className="bg-pink">
      <div aria-hidden="true" className="flex h-[10px]">
        <div className="flex-1 bg-lula" />
        <div className="flex-1 bg-flavio" />
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24 lg:px-[104px]">
        <p className="font-mono text-overline font-medium uppercase leading-[1.4] tracking-[2px] text-ink">
          {goldenRule.eyebrow}
        </p>
        <blockquote className="max-w-[840px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.5px] text-ink md:text-quote">
          {goldenRule.quote}
        </blockquote>
      </div>
    </section>
  );
}
