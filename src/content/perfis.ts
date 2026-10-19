import type { ProfileData } from "@/types/perfis";

export const perfis: [ProfileData, ProfileData] = [
  {
    candidate: "lula",
    name: "Luiz Inácio",
    bio: "Presidente em exercício. Experiência prévia na Presidência e no governo federal; agenda declarada em programas sociais, trabalho, saúde, educação, moradia e proteção ambiental.",
    image: { src: "/images/perfil-lula.jpg", alt: "Retrato de Lula" },
    strengths: [
      {
        title: "Experiência executiva",
        text: "Conhece a máquina federal, diplomacia e articulação nacional. Experiência não garante acerto futuro.",
        ref: "",
      },
      {
        title: "Mercado de trabalho",
        text: "Desocupação de 5,6% em 2025, menor da série iniciada em 2012. Sem análise causal, não se atribui só ao governo.",
        ref: "[5]",
      },
      {
        title: "Crescimento",
        text: "PIB cresceu 2,3% em 2025. Qualidade depende de renda real, produtividade e investimento.",
        ref: "[6]",
      },
      {
        title: "Ambiente e agenda social",
        text: "INPE indica queda do desmatamento na Amazônia e no Cerrado em 2025; plano prioriza renda, saúde e moradia.",
        ref: "[3][7]",
      },
    ],
    risks: [
      {
        title: "Dívida e sustentabilidade fiscal",
        text: "Dívida bruta em 82,5% do PIB em julho de 2026, alta de 3,9 p.p. no ano. Vários fatores pesam, inclusive juros.",
        ref: "[4]",
      },
      {
        title: "Ajuste sem solução estrutural",
        text: "Reuters aponta que o plano evita detalhar o crescimento das despesas obrigatórias — crítica feita aos dois candidatos.",
        ref: "[9]",
      },
      {
        title: "Controvérsia da Lava Jato",
        text: "Condenações anuladas pelo STF. Ver o status jurídico exato abaixo.",
        ref: "[10][11]",
      },
    ],
  },
  {
    candidate: "flavio",
    name: "Flávio",
    bio: "Senador desde 2019, após quatro mandatos como deputado estadual no RJ. Agenda declarada em segurança pública, reforma administrativa, desburocratização, serviços digitais e redução de tributos.",
    image: { src: "/images/perfil-flavio.jpg", alt: "Retrato de Flávio" },
    strengths: [
      {
        title: "Experiência legislativa",
        text: "Mandatos estaduais e federal, comissões e negociação parlamentar. Diferente de chefiar o Executivo.",
        ref: "[12]",
      },
      {
        title: "Segurança pública",
        text: "Crime organizado, fronteiras e sistema prisional no centro do plano. Eficácia depende de evidência e recursos.",
        ref: "[4]",
      },
      {
        title: "Custo do Estado",
        text: "Menos ministérios e cargos comissionados, revisão de despesas. Falta medir a economia líquida.",
        ref: "[4]",
      },
      {
        title: "Ambiente de negócios",
        text: "Serviços digitais, simplificação para empreender e menos imposto sobre consumo. Precisa de compensação de receita.",
        ref: "[4]",
      },
    ],
    risks: [
      {
        title: "Sem experiência no Executivo",
        text: "Nunca foi presidente, governador, prefeito ou ministro. Não impede governar, mas aumenta a incerteza sobre execução.",
        ref: "[12]",
      },
      {
        title: "Meta fiscal sem memória de cálculo",
        text: "Promete +1,5% do PIB no primário em 18 meses, sem detalhar como, segundo a Reuters — crítica aos dois planos.",
        ref: "[9]",
      },
      {
        title: "Propostas ambientais controversas",
        text: "Projetos sobre Estação Ecológica de Tamoios, reservas legais e demarcação. São proposições, não leis em vigor.",
        ref: "[13]",
      },
    ],
  },
];
