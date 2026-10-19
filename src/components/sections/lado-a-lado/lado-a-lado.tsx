import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ladoALado } from "@/content/lado-a-lado";
import { ComparisonTable } from "./comparison-table";
import { StatGrid } from "./stat-grid";

export function LadoALado() {
  return (
    <section id="lado-a-lado" className="bg-paper py-16 md:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={ladoALado.eyebrow}
          title={ladoALado.title}
          lead={ladoALado.lead}
        />
        <ComparisonTable rows={ladoALado.rows} />
        <StatGrid stats={ladoALado.stats} />
        <p className="font-mono text-caption leading-[1.5] text-muted">
          {ladoALado.note}
        </p>
      </Container>
    </section>
  );
}
