import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// per usare __dirname in ambiente ES module
import { fileURLToPath } from 'node:url';

// ricrea __dirname in ambiente ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // for github deployment
  base: '/',
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
