import { ButtonLink } from "@/components/ui/button-link";
import { manifesto } from "@/content/manifesto";

export function Manifesto() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="flex flex-col gap-[14px] bg-ink px-6 py-10 md:px-16">
        <p className="font-mono text-overline font-medium uppercase leading-[1.4] tracking-[2px] text-muted-dark">
          {manifesto.eyebrow}
        </p>
        <h2 className="text-[40px] font-extrabold leading-[1.02] tracking-[-1px] text-paper md:text-h1">
          {manifesto.title}
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-4 bg-paper-2 px-6 py-10 md:px-16">
        <p className="text-lead leading-[1.55] text-ink">{manifesto.lead}</p>
        <p className="font-mono text-mono leading-[1.5] text-muted">
          {manifesto.note}
        </p>
        <div className="flex flex-wrap gap-3">
          {manifesto.ctas.map((cta) => (
            <ButtonLink key={cta.label} href={cta.href} variant={cta.variant}>
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
