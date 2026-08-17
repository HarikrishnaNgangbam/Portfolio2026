import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(() => ({
  // GitHub Pages serves project sites at https://<user>.github.io/<repo>/,
  // so that deployment's asset URLs need the /Portfolio2026/ prefix — but
  // only that one. Gating on `command === 'build'` instead of this env var
  // broke `npm run build && npm run preview` locally: preview serves dist/
  // flat at "/", it doesn't know to also mount it under /Portfolio2026/, so
  // every asset 404'd into the SPA-fallback HTML. GITHUB_PAGES is set only
  // by the CI workflow that actually builds for deployment (see
  // .github/workflows/deploy-pages.yml); every other build (local preview,
  // any other host) keeps serving at "/".
  base: process.env.GITHUB_PAGES ? '/Portfolio2026/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
}))
