// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://antimicrobianos.vercel.app', // Atualizar após deploy
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
