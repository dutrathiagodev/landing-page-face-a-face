import type { LadoALadoContent } from "@/types/lado-a-lado";

export const ladoALado: LadoALadoContent = {
  eyebrow: "Lado a lado",
  title: "Trajetórias diferentes pedem a mesma régua",
  lead: "Compare proposta com proposta e resultado com resultado. Um tem gestão executiva para avaliar; o outro, atuação parlamentar.",
  rows: [
    {
      dimension: "Experiência",
      lula: "Presidência e governo federal; familiaridade com a máquina pública.",
      flavio: "Quatro mandatos de deputado estadual; senador desde 2019.",
    },
    {
      dimension: "Agenda declarada",
      lula: "Programas sociais, trabalho, saúde, educação, moradia, meio ambiente.",
      flavio:
        "Segurança, reforma administrativa, desburocratização, serviços digitais, menos tributos.",
    },
    {
      dimension: "O que dá para medir",
      lula: "Indicadores do mandato: emprego, PIB, desmatamento, dívida.",
      flavio:
        "Histórico parlamentar e propostas; sem resultado de governo federal a avaliar.",
    },
    {
      dimension: "Principal risco",
      lula: "Trajetória da dívida e ajuste fiscal duradouro.",
      flavio: "Detalhamento fiscal e capacidade de execução no Executivo.",
    },
  ],
  stats: [
    {
      candidate: "lula",
      value: "5,6%",
      label: "Desocupação anual em 2025",
      source: "IBGE · mandato Lula [5]",
    },
    {
      candidate: "lula",
      value: "82,5%",
      label: "Dívida bruta / PIB, jul. 2026",
      source: "Banco Central · mandato Lula [8]",
    },
    {
      candidate: "flavio",
      value: "+1,5%",
      label: "Meta de primário em 18 meses",
      source: "Proposta · Flávio [9]",
    },
    {
      candidate: "flavio",
      value: "5",
      label: "Mandatos legislativos",
      source: "Senado Federal · Flávio [12]",
    },
  ],
  note: "Indicador nacional não prova, sozinho, causalidade presidencial. Proposta não é resultado.",
};
