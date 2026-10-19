# Feature Spec - Arquitetura Padrao

Documento normativo do projeto de landing page com React, Next.js e Tailwind CSS.

## Escopo

Define a stack, a estrutura de pastas, o fluxo de dependencia e as regras de composicao da UI. Toda nova secao ou pagina deve seguir este spec.

## Stack obrigatoria

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Requisitos obrigatorios

1. Pastas obrigatorias

- src/app, src/components (sections, ui, layout), src/content, src/types, src/lib e public (na raiz).

2. Separacao de responsabilidade

- src/app: rotas, layout e metadata
- src/components/sections: markup de cada secao da landing
- src/components/ui: elementos visuais genericos (container, section-heading, button-link)
- src/components/layout: header e footer
- src/content: textos e dados estaticos
- src/lib: helpers e integracoes externas

3. Fluxo de dependencia (sempre nessa direcao)

- src/app -> src/components/sections -> src/components/ui
- src/components/sections -> src/content, src/types, src/lib
- src/components/ui -> src/lib (somente utilitarios)

4. Regra da page

- src/app/page.tsx apenas importa e ordena as secoes
- sem texto, sem estilo de secao e sem logica

5. Regra da secao

- recebe dados de content ou por props
- nao importa outra secao
- Server Component por padrao; "use client" so com estado, evento ou efeito

6. Regra do Tailwind

- estilo apenas por classes utilitarias
- cores, fontes e espacamentos definidos como tokens em @theme (src/app/globals.css)
- mobile first: base sem prefixo, depois sm:, md:, lg:

7. Convencoes de arquivo

- arquivos em kebab-case (hero.tsx, section-title.tsx)
- componentes em PascalCase
- src/content e src/types: <section>.ts

## Estrutura obrigatoria de arquivos

```text
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/components/layout/header.tsx
src/components/layout/footer.tsx
src/components/ui/...
src/components/sections/<section>/<section>.tsx
src/content/<section>.ts
src/types/<section>.ts
src/lib/utils.ts
public/images/...
```

## Criterios de aceitacao

- Estrutura obrigatoria respeitada
- Page apenas compoe secoes
- Texto fora dos componentes
- Responsivo e acessivel
- Sem imports ciclicos
- npm run lint e npm run build sem erros

## Nao permitido

- Texto de negocio dentro de src/components/ui
- Importar uma secao dentro de outra
- "use client" na secao inteira sem necessidade
- CSS inline ou valores magicos repetidos em vez de tokens
- Tag img em vez de next/image

## Processo de evolucao

1. Copiar a estrutura de uma secao existente (ex.: hero)
2. Adaptar nomes e conteudo
3. Adicionar em src/app/page.tsx
4. Validar responsivo, lint e build
