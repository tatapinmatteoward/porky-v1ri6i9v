import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://porky-pie-chronicles.pages.dev',
  build: {
    format: 'directory'
  }
});
