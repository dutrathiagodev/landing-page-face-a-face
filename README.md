<div align="center">

# Face a Face

**Guia cívico do 2º turno de 2026: Lula x Flávio, lado a lado e com as fontes.**

[![Site](https://img.shields.io/badge/site-online-0A3A8C?style=for-the-badge)](https://dutrathiagodev.github.io/landing-page-face-a-face/)
[![Figma](https://img.shields.io/badge/design-Figma-B5121B?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/iCxy9NWhta0GHxngExw3m5/Lula-x-Fl%C3%A1vio-%E2%80%94-Face-a-Face--componentes-)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

![Tela principal do projeto](docs/images/tela-principal.jpg)

</div>

## Sobre

Landing page com um comparativo equilibrado entre os dois candidatos do 2º turno: perfis, indicadores lado a lado, status jurídico, perguntas para cobrar de cada um e a lista completa de fontes. Sem placar, sem vencedor e sem recomendação de voto.

## Links

| | |
|---|---|
| Site publicado | https://dutrathiagodev.github.io/landing-page-face-a-face/ |
| Design no Figma | [Lula x Flávio — Face a Face (componentes)](https://www.figma.com/design/iCxy9NWhta0GHxngExw3m5/Lula-x-Fl%C3%A1vio-%E2%80%94-Face-a-Face--componentes-) |

## O que tem na página

- **Hero** em tela cheia, com a data do dia vinda de uma API de horário
- **Navbar** que só aparece depois de passar pelo Hero
- **Manifesto**, **Perfis**, **Lado a lado** (tabela e números-chave), **Status jurídico** e **Perguntas justas**
- **Regra de ouro** e **Fontes** agrupadas por tipo, com links para cada referência
- Layout responsivo (desktop, tablet e mobile)

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) e [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint
- GitHub Actions e GitHub Pages

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev     # desenvolvimento em http://localhost:3000
npm run lint    # lint
npm run build   # gera o site estático na pasta out/
```

## Estrutura

```text
src/
  app/                  layout, página, metadata, favicon e estilos globais
  components/
    layout/             header e footer
    sections/<secao>/   uma pasta por seção da página
    ui/                 componentes visuais reutilizáveis
  content/              textos e dados de cada seção
  lib/                  utilitários (data do dia por API, caminho dos arquivos públicos)
  types/                tipos compartilhados
public/images/          fotos usadas na página
docs/architecture/      regras de arquitetura do projeto
.github/workflows/      publicação no GitHub Pages
```

A página é montada em `src/app/page.tsx`, que só compõe as seções. Os textos ficam em `src/content` e os componentes só cuidam da apresentação. As regras completas estão em [`docs/architecture`](docs/architecture).

## Publicação

O site é publicado no GitHub Pages pelo workflow [`deploy.yml`](.github/workflows/deploy.yml), que roda o lint, gera o site estático e publica:

- a cada push na `main`;
- todo dia às 00:00 (Brasília), para atualizar a data exibida no Hero, que vem da API do [timeapi.io](https://timeapi.io) (fuso de São Paulo, com o relógio do sistema como reserva);
- manualmente, pela aba Actions.

## Time

| | |
|---|---|
| [@dutrathiagodev](https://github.com/dutrathiagodev) | Fundação do projeto, estrutura, Status jurídico, Perguntas, GoldenRule, Footer e revisão final |
| [@MuriloTFROTB](https://github.com/MuriloTFROTB) | Navbar, Hero, Manifesto, Perfis e Lado a lado |

O trabalho foi dividido em PRs pequenos, com um commit por etapa, seguindo o design do Figma.
