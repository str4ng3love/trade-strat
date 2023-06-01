import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: 'https://str4ng3love.github.io',
  base: '/trade-strat'
});