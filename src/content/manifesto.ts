import type { ManifestoContent } from "@/types/manifesto";

export const manifesto: ManifestoContent = {
  eyebrow: "Dossiê comparativo equilibrado",
  title: "Dois projetos. Um voto. O critério é seu.",
  lead: "Pontos fortes, riscos e controvérsias documentadas de cada candidato, lado a lado. Fatos separados de propostas; investigação separada de condenação; indicador separado de causalidade.",
  note: "Sem placar, sem vencedor, sem recomendação de voto.",
  ctas: [
    { label: "Ver o comparativo", href: "#perfis", variant: "primary" },
    {
      label: "Planos no TSE",
      href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026",
      variant: "outline",
    },
  ],
};
