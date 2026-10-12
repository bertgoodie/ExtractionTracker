import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // GitHub Pages serves from /ExtractionTracker/
  base: '/ExtractionTracker/',

  build: {
    // Emit files alongside their entry points so relative links work
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        tech:    resolve(__dirname, 'tech/index.html'),
        manager: resolve(__dirname, 'manager/index.html'),
      },
    },
  },

  server: {
    // Local dev: serve from root so relative paths match
    port: 3000,
  },
})
