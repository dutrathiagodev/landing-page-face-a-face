import type { PerguntasContent } from "@/types/perguntas";

export const perguntas: PerguntasContent = {
  eyebrow: "Perguntas justas",
  title: "O que cobrar de cada um",
  lead: "As mesmas perguntas de fundo para os dois: custo, evidência, execução e transparência.",
  lists: [
    {
      candidate: "lula",
      questions: [
        "Qual é a trajetória fiscal proposta e como será medida?",
        "Como conciliar programas sociais com dívida sustentável?",
        "Quanto dos indicadores se deve a fatores externos ou privados?",
        "Como manter transparência e confiança institucional?",
      ],
    },
    {
      candidate: "flavio",
      questions: [
        "Quais ministérios e despesas seriam cortados?",
        "A meta fiscal tem memória de cálculo?",
        "Como medir a segurança sem comprometer direitos?",
        "Qual a experiência da equipe em executar políticas federais?",
      ],
    },
  ],
  themes: [
    {
      title: "Economia",
      text: "Metas de inflação, emprego e dívida, com fonte de financiamento.",
    },
    {
      title: "Trabalho e renda",
      text: "Efeito sobre salários, jornada, informalidade e pequenas empresas.",
    },
    {
      title: "Segurança",
      text: "Medidas com evidência de eficácia e integração com Justiça e prisões.",
    },
    {
      title: "Saúde e educação",
      text: "Metas para filas e aprendizagem, com orçamento acompanhável.",
    },
    {
      title: "Meio ambiente",
      text: "Desmatamento, fiscalização e direitos territoriais por indicador independente.",
    },
    {
      title: "Instituições",
      text: "Respeito à fiscalização e transparência de gastos e contratos.",
    },
  ],
};
