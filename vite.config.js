import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  // for github deployment
  base: '/',
  
  plugins: 
    [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        webp: {
          quality: 80,
        },
        avif: {
          quality: 65,
        },
        gif: {
          quality: 80,
        },
        svg: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false
            },
            {
              name: 'sortAttrs',
            }
          ]
        }
      })
    ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
