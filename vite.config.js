import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/, so the base path
  // must match your repo name exactly (with leading and trailing slashes).
  base: '/my-portfolio/',
})
