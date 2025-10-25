import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://pro-api.coinmarketcap.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rimuove /api prima di inviare a CMC
      },
    },
  },
})