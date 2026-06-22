import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexsee-demo.pages.dev',
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'rnzk7qyr',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    studioBasePath: '/admin',
    stega: {
      studioUrl: '/admin',
    },
  }), sitemap()],
  vite: {
    server: {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    optimizeDeps: {
      include: [
        'react/compiler-runtime',
        'lodash/isObject.js',
        'lodash/groupBy.js',
        'lodash/keyBy.js',
        'lodash/partition.js',
        'lodash/sortedIndex.js',
      ],
    },
  },
});