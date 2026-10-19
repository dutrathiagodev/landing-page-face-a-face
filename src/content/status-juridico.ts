import type { StatusJuridicoContent } from "@/types/status-juridico";

export const statusJuridico: StatusJuridicoContent = {
  eyebrow: "Status jurídico",
  title: "Investigação não é condenação",
  lead: "Os dois carregam controvérsias judiciais. Nenhuma delas resulta, segundo as fontes, em condenação criminal válida hoje.",
  cards: [
    {
      title: "Lava Jato",
      tone: "lula",
      text: "O STF anulou as condenações por incompetência da 13ª Vara de Curitiba e, em decisão separada, confirmou a suspeição de Sergio Moro no caso do triplex. Não são condenações válidas, nem um julgamento de mérito de todas as alegações.",
      source: "STF, abr. e jun. 2021 [10][11]",
    },
    {
      title: "“Rachadinha”",
      tone: "flavio",
      text: "A denúncia foi rejeitada em 2022 após STJ e STF anularem provas. Em 2025 o TJ-RJ negou nova quebra de sigilo na apuração cível. Tema de transparência, não prova de culpa.",
      source: "Agência Brasil 2022 · Folha 2026 [14][15]",
    },
  ],
};
