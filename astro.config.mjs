// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL real de produção. Default: GitHub Pages (project site).
  // Domínio próprio / Vercel na raiz? Use site: 'https://seudominio.com' e remova `base`.
  site: 'https://yuritborges.github.io',
  base: '/orvia-sistema-site',
  vite: {
    plugins: [tailwindcss()]
  }
});