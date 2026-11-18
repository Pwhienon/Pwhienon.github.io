import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'

// GitHub Pages has no SPA rewrites: serve the app for unknown paths too,
// so /work/<slug> and /resume load on refresh and from shared links.
const spaFallback = (): Plugin => ({
  name: 'spa-404-fallback',
  apply: 'build',
  closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html')
  },
})

export default defineConfig({
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
