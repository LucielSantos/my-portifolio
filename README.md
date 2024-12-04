This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tecnologias usadas

- Typescript
  - Tipagem para JavaScript
- Lucide
  - Biblioteca de ícones para React
- Tailwind CSS
  - Biblioteca de estilização
  - Tailwind Variants
  - Possibilita utilizar variantes com Tailwind CSS
- next-intl
  - Internacionalização para aplicações Next.js
  - Internacionalização dos Metadados (title e description da página)
- tsparticles
  - Background interativo

### Features Next.JS

- Server Components
  - São componentes que são montados no lado do servidor. Todos componentes por padrão são Server components, como por exemplo `src/app/components/Title/index.tsx`.
- Client Components
  - São componentes que são renderizados no lado do cliente, precisam ser declarados de maneira explicita com `"use client"`. Como por exemplo `src/app/components/ParticlesBackground/index.tsx`.
