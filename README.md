# ORVIA — Landing Page

Landing page profissional em português (Brasil) para apresentar o **ORVIA — Pedidos de Compra**, sistema desktop standalone para gestão de compras em construção civil.

> **Demo portfólio · dados fictícios · v2.1.2**

## Stack

- [Astro 7](https://astro.build/) — site estático, SEO excelente, carregamento rápido
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização utilitária com paleta ORVIA customizada
- TypeScript — scripts de interação (menu, tema, galeria, lightbox)
- Deploy estático — sem backend

### Por que Astro?

Escolhido por ser **estático por padrão** (ideal para GitHub Pages/Vercel grátis), ter **SEO nativo**, gerar HTML mínimo e carregar rápido em 4G — critérios essenciais para uma landing de portfólio.

## Estrutura

```
orvia-sistema-site/
├── public/              # Arquivos estáticos (favicon local opcional)
├── src/
│   ├── components/      # Header, Hero, FeatureCard, ScreenshotGallery, CTA, Footer
│   ├── data/            # Conteúdo e URLs centralizados (site.ts)
│   ├── layouts/         # Layout base com SEO e meta tags
│   ├── pages/           # index.astro — página única
│   ├── scripts/         # main.ts — interações client-side
│   └── styles/          # global.css — tokens ORVIA + Tailwind
├── astro.config.mjs
├── LICENSE
└── README.md
```

## Desenvolvimento local

**Requisitos:** Node.js 22.12+

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:4321)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Deploy

### Vercel (recomendado — zero config)

1. Faça push do repositório para o GitHub
2. Importe o projeto em [vercel.com](https://vercel.com)
3. Framework preset: **Astro**
4. Deploy automático a cada push

Nenhuma configuração extra necessária — `site` e `base` ficam na raiz `/`.

### GitHub Pages

1. Edite `astro.config.mjs` e adicione `site` e `base`:

```js
export default defineConfig({
  site: 'https://SEU-USUARIO.github.io',
  base: '/orvia-sistema-site', // nome do repositório
  vite: { plugins: [tailwindcss()] },
});
```

2. Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Em **Settings → Pages**, selecione **GitHub Actions** como source.

4. Acesse: `https://SEU-USUARIO.github.io/orvia-sistema-site/`

## Links oficiais do produto

| Recurso | URL |
|---------|-----|
| Repositório | https://github.com/Yuritborges/orvia-sistema |
| Release v2.1.2 | https://github.com/Yuritborges/orvia-sistema/releases/tag/v2.1.2 |
| Instalador | ORVIA_Setup_2.1.2.exe (via Release) |
| LinkedIn | https://www.linkedin.com/in/marlyson-iury-taveira-borges-6311aa331 |
| WhatsApp | https://wa.me/5519910386339 |

## Aviso legal

Esta landing page apresenta uma **versão demonstração para portfólio**. Todos os dados exibidos no sistema ORVIA são **fictícios** — nenhum dado real de clientes foi utilizado.

## Autor

**Marlyson Iury Taveira Borges**

© 2026 · ORVIA — Ordem na compra. Gestão na Obra.
