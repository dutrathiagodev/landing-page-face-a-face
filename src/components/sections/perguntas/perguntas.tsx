import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { perguntas } from "@/content/perguntas";
import { QuestionList } from "./question-list";
import { ThemeGrid } from "./theme-grid";

export function Perguntas() {
  return (
    <section id="perguntas" className="bg-paper py-16 md:py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={perguntas.eyebrow}
          title={perguntas.title}
          lead={perguntas.lead}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {perguntas.lists.map((list) => (
            <QuestionList key={list.candidate} {...list} />
          ))}
        </div>
        <ThemeGrid themes={perguntas.themes} />
      </Container>
    </section>
  );
}
