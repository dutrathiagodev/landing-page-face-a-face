# Feature Template (Scaffold)

Passo a passo para criar o projeto da landing page com React, Next.js e Tailwind CSS.

> Todo o codigo fica dentro de `src/`. Na raiz ficam apenas `public/`, `docs/`, configs e `package.json`.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4 (via @tailwindcss/postcss)
- ESLint

## 1. Criar o projeto

Pre-requisito: Node.js 20 ou superior.

```bash
npx create-next-app@latest lading-page --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
cd lading-page
npm run dev
```

O projeto abre em http://localhost:3000.

## 2. Criar a estrutura de pastas

```bash
mkdir -p src/components/sections src/components/ui src/components/layout src/content src/types src/lib public/images
```

## 3. Definir os tokens no Tailwind

Em `src/app/globals.css`, declare cores, fontes e espacamentos dentro de `@theme`:

```css
@import "tailwindcss";

@theme inline {
  --color-brand: #4f46e5;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

Depois use as classes geradas: `bg-brand`, `text-foreground`.

## 4. Criar uma secao

Exemplo para a secao `hero`:

```bash
mkdir -p src/components/sections/hero
touch src/components/sections/hero/hero.tsx
touch src/content/hero.ts
```

Depois importe a secao em `src/app/page.tsx`.

## 5. Comandos do dia a dia

```bash
npm run dev     # desenvolvimento
npm run lint    # lint
npm run build   # build de producao
npm run start   # servir o build
```

## Observacoes

- O scaffold e propositalmente simples.
- A page compoe as secoes; cada secao e dona do proprio markup.
- Esta versao do Next.js tem mudancas em relacao ao que a maioria dos tutoriais mostra. Consulte `node_modules/next/dist/docs/` antes de usar uma API nova.
