import type { ManifestoContent } from "@/types/manifesto";

export const manifesto: ManifestoContent = {
  eyebrow: "Dossiê comparativo equilibrado",
  title: "Dois projetos. Um voto. O critério é seu.",
  lead: "Pontos fortes, riscos e controvérsias documentadas de cada candidato, lado a lado. Fatos separados de propostas; investigação separada de condenação; indicador separado de causalidade.",
  note: "Sem placar, sem vencedor, sem recomendação de voto.",
  ctas: [
    { label: "Ver o comparativo", href: "#lado-a-lado", variant: "primary" },
    {
      label: "Planos no TSE",
      href: "https://divulgacandcontas.tse.jus.br/",
      variant: "outline",
    },
  ],
};
