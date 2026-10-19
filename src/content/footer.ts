export type SourceLink = {
  label: string;
  href: string;
};

export type SourceGroup = {
  title: string;
  links: SourceLink[];
};

export const footer = {
  title: "Fontes",
  groups: [
    {
      title: "Planos de governo",
      links: [
        {
          label: "[2] Planos de governo das candidaturas — TSE",
          href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026",
        },
        {
          label: "[3] Plano de governo de Lula — TSE (PDF)",
          href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt",
        },
        {
          label: "[4] Plano de governo de Flávio Bolsonaro — TSE (PDF)",
          href: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl",
        },
      ],
    },
    {
      title: "Dados oficiais",
      links: [
        {
          label: "[5] PNAD Contínua: desocupação de 5,6% em 2025 — IBGE",
          href: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45759-pnad-continua-em-2025-taxa-anual-de-desocupacao-foi-de-5-6-enquanto-taxa-de-subutilizacao-foi-14-5",
        },
        {
          label: "[6] PIB cresce 2,3% em 2025 — IBGE",
          href: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45968-pib-cresce-2-3-em-2025-e-fecha-o-ano-em-r-12-7-trilhoes",
        },
        {
          label: "[7] PRODES: redução do desmatamento em 2025 — INPE",
          href: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/dados-do-prodes-apontam-reducao-no-desmatamento-na-amazonia-e-no-cerrado-brasileiros-1/",
        },
        {
          label: "[8] Estatísticas fiscais — Banco Central do Brasil",
          href: "https://www.bcb.gov.br/estatisticas/estatisticasfiscais",
        },
        {
          label:
            "[12] Perfil, mandatos e comissões de Flávio Bolsonaro — Senado Federal",
          href: "https://www25.senado.leg.br/pt_BR/web/senadores/senador/-/perfil/5894",
        },
      ],
    },
    {
      title: "Decisões judiciais",
      links: [
        {
          label:
            "[10] STF confirma anulação das condenações de Lula na Lava Jato — STF, 15/04/2021",
          href: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261",
        },
        {
          label:
            "[11] STF confirma suspeição de Sergio Moro no caso do tríplex — STF, 23/06/2021",
          href: "https://noticias.stf.jus.br/postsnoticias/stf-confirma-suspeicao-de-sergio-moro-na-acao-do-triplex-do-guaruja/",
        },
      ],
    },
    {
      title: "Imprensa",
      links: [
        {
          label:
            "[9] Planos fiscais dos candidatos antes do 2º turno — Reuters, 15/10/2026",
          href: "https://www.reuters.com/world/americas/brazil-candidates-focus-fiscal-plans-voter-friendly-measures-before-runoff-2026-10-15/",
        },
        {
          label:
            "[13] Projetos ambientais de Flávio Bolsonaro — Folha de S.Paulo, 14/10/2026",
          href: "https://www1.folha.uol.com.br/ambiente/2026/10/no-senado-flavio-bolsonaro-propos-fim-de-protecao-a-area-onde-pai-foi-multado-por-pesca-ilegal.shtml",
        },
        {
          label:
            "[14] Justiça do Rio arquiva denúncia do caso rachadinha — Agência Brasil, 16/05/2022",
          href: "https://agenciabrasil.ebc.com.br/politica/noticia/2022-05/justica-do-rio-arquiva-processo-de-caso-de-supostas-rachadinhas",
        },
        {
          label:
            "[15] TJ-RJ nega retomada do caso rachadinha — Folha, 06/03/2026",
          href: "https://www1.folha.uol.com.br/poder/2026/03/tj-rj-negou-tentativa-de-retomada-do-caso-rachadinha-contra-flavio-bolsonaro.shtml",
        },
        {
          label:
            "[19] PEC da escala 6x1: Flávio vota a favor — UOL, 14/10/2026",
          href: "https://noticias.uol.com.br/eleicoes/2026/10/14/em-campanha-no-rs-flavio-vota-a-distancia-a-favor-do-fim-da-6x1.ghtm",
        },
        {
          label:
            "[20] Proposta de Ministério da Prosperidade — Folha, 15/10/2026",
          href: "https://www1.folha.uol.com.br/poder/2026/10/ministerio-da-prosperidade-proposto-por-flavio-bolsonaro-tem-apelo-evangelico-e-coaching.shtml",
        },
      ],
    },
    {
      title: "Fotos oficiais (Wikimedia Commons)",
      links: [
        {
          label: "Retrato de Lula",
          href: "https://commons.wikimedia.org/wiki/File:Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_(recortada).jpg",
        },
        {
          label: "Retrato de Flávio Bolsonaro (Agência Senado)",
          href: "https://commons.wikimedia.org/wiki/File:Foto_oficial_do_senador_Fl%C3%A1vio_Bolsonaro_(v._AgSen).jpg",
        },
      ],
    },
  ] satisfies SourceGroup[],
  disclaimer:
    "Material informativo. Não prevê resultado eleitoral, não recomenda voto e não atribui culpa onde as decisões consultadas não a estabeleceram. Pesquisa consultada em 15/10/2026.",
};
