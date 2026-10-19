# Landing page - face a face

Guia cívico do 2º turno de 2026: um comparativo equilibrado entre os dois candidatos, com perfis, indicadores lado a lado, status jurídico, perguntas justas e as fontes consultadas.

## Stack

- Next.js 16 (App Router) e React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
npm install
npm run dev     # desenvolvimento em http://localhost:3000
npm run lint    # lint
npm run build   # build de produção
npm run start   # serve o build
```

## Estrutura

```text
src/
  app/                  rotas, layout, metadata e estilos globais
  components/
    layout/             header e footer
    sections/<secao>/   uma pasta por seção da página
    ui/                 componentes visuais reutilizáveis
  content/              textos e dados de cada seção
  lib/                  utilitários (ex.: data do dia por API)
  types/                tipos compartilhados
public/images/          fotos usadas na página
docs/architecture/      regras de arquitetura do projeto
```

A página é montada em `src/app/page.tsx`, que só compõe as seções. Os textos ficam em `src/content` e os componentes só cuidam da apresentação. As regras completas estão em `docs/architecture`.

## Data do Hero

A data exibida no Hero vem da API do `timeapi.io` (fuso de São Paulo) e é atualizada a cada hora. Se a API falhar, o site usa o relógio do sistema.
