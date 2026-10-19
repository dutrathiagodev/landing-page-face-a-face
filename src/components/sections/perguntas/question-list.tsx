import type { QuestionListData } from "@/types/perguntas";

const borders = {
  lula: "border-lula",
  flavio: "border-flavio",
};

export function QuestionList({ candidate, questions }: QuestionListData) {
  return (
    <ol
      className={`flex list-decimal flex-col gap-3 border-t-4 bg-white py-6 pl-12 pr-6 text-body leading-[1.5] text-ink marker:text-ink ${borders[candidate]}`}
    >
      {questions.map((question) => (
        <li key={question}>{question}</li>
      ))}
    </ol>
  );
}
