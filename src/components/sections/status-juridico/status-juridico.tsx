import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { statusJuridico } from "@/content/status-juridico";
import { LegalCard } from "./legal-card";

export function StatusJuridico() {
  return (
    <section id="status-juridico" className="bg-ink py-16 md:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          tone="dark"
          eyebrow={statusJuridico.eyebrow}
          title={statusJuridico.title}
          lead={statusJuridico.lead}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {statusJuridico.cards.map((card) => (
            <LegalCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
