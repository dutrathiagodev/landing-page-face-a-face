# Feature Skills - Next.js + Tailwind CSS

Guia pratico para criar e evoluir a landing page com React, Next.js e Tailwind CSS.

## Objetivo

Manter consistencia entre as secoes, com responsabilidades claras:

- src/app: rotas, layout e metadata (somente composicao)
- src/components/sections: secoes da landing (hero, features, pricing, faq...)
- src/components/ui: componentes visuais reutilizaveis
- src/content: textos, links e dados estaticos
- src/lib e src/types: utilitarios e tipos compartilhados

## Estrutura base

```text
src/app/
  layout.tsx
  page.tsx
  globals.css

src/components/
  layout/
    header.tsx
    footer.tsx
  sections/<section>/
    <section>.tsx
  ui/
    button.tsx
    container.tsx

src/content/<section>.ts
src/types/<section>.ts
src/lib/utils.ts
public/images/
```

## Regras praticas (skills)

1. A page apenas compoe secoes

- src/app/page.tsx importa as secoes na ordem; o markup fica nas secoes.

2. Cada secao e independente

- uma pasta por secao; secao nao importa outra secao.

3. Conteudo separado da UI

- textos e listas em src/content/<section>.ts.

4. UI generica em src/components/ui

- sem texto de negocio; variantes por props.

5. Server Component por padrao

- "use client" so quando houver estado, evento ou efeito
- isolar a parte interativa em um componente pequeno

6. Tailwind

- classes utilitarias, mobile first (sm:, md:, lg:)
- tokens de cor e fonte em @theme no globals.css
- extrair componente quando uma combinacao de classes se repetir

7. Imagens e SEO

- next/image com width, height e alt
- metadata em src/app/layout.tsx
- um unico h1 por pagina

8. Acessibilidade

- landmarks (header, main, footer), contraste e foco visivel

9. Nomenclatura

- arquivos em kebab-case, componentes em PascalCase

10. Qualidade minima

- responsivo, sem erro de lint e de build

## Template rapido de implementacao

1. Criar src/content/<section>.ts
2. Criar src/components/sections/<section>/<section>.tsx
3. Reutilizar src/components/ui
4. Adicionar a secao em src/app/page.tsx
5. Conferir responsivo e acessibilidade
6. Rodar npm run lint e npm run build

## Definition of Done

- Estrutura segue o padrao
- Conteudo separado da UI
- Client Components somente quando necessario
- Lint e build sem erros

Documentacao detalhada:

- [Spec](feature.spec.md)
- [Template de criacao do projeto](feature.template.md)
