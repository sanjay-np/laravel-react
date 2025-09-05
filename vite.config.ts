import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import Pages from 'vite-plugin-pages';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
        Pages({
            dirs: 'resources/js/pages',
            extensions: ['tsx'],
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});

