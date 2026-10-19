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

- app, components (sections, ui, layout), content, types, lib e public.

2. Separacao de responsabilidade

- app: rotas, layout e metadata
- components/sections: markup de cada secao da landing
- components/ui: elementos visuais genericos (button, container, card)
- components/layout: header e footer
- content: textos e dados estaticos
- lib: helpers e integracoes externas

3. Fluxo de dependencia (sempre nessa direcao)

- app -> components/sections -> components/ui
- components/sections -> content, types, lib
- components/ui -> lib (somente utilitarios)

4. Regra da page

- app/page.tsx apenas importa e ordena as secoes
- sem texto, sem estilo de secao e sem logica

5. Regra da secao

- recebe dados de content ou por props
- nao importa outra secao
- Server Component por padrao; "use client" so com estado, evento ou efeito

6. Regra do Tailwind

- estilo apenas por classes utilitarias
- cores, fontes e espacamentos definidos como tokens em @theme (app/globals.css)
- mobile first: base sem prefixo, depois sm:, md:, lg:

7. Convencoes de arquivo

- arquivos em kebab-case (hero.tsx, section-title.tsx)
- componentes em PascalCase
- content e types: <section>.ts

## Estrutura obrigatoria de arquivos

```text
app/layout.tsx
app/page.tsx
app/globals.css
components/layout/header.tsx
components/layout/footer.tsx
components/ui/...
components/sections/<section>/<section>.tsx
content/<section>.ts
types/<section>.ts
lib/utils.ts
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

- Texto de negocio dentro de components/ui
- Importar uma secao dentro de outra
- "use client" na secao inteira sem necessidade
- CSS inline ou valores magicos repetidos em vez de tokens
- Tag img em vez de next/image

## Processo de evolucao

1. Copiar a estrutura de uma secao existente (ex.: hero)
2. Adaptar nomes e conteudo
3. Adicionar em app/page.tsx
4. Validar responsivo, lint e build
