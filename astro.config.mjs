import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: false, // We're using our own design-tokens.css
    })],
    build: {
        format: 'directory'
    },
    site: 'https://transformpersonaltraining.com',
    server: {
        port: 3000,
        host: true // Allow access from network
    }
});