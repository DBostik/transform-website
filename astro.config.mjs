import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false, // We're using our own design-tokens.css
        })
    ],
    server: {
        port: 3000,
        host: true // Allow access from network
    }
});
