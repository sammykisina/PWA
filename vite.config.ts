import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['logo.png', 'vite.svg'],
  manifest: {
    name: 'Weather Ups',
    short_name: 'Weather Ups',
    description: 'An app that can show weather',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#171717',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});