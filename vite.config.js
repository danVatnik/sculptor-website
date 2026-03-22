import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    cssMinify: false,
  },
  server: {
    port: 6002,
    strictPort: true,
    proxy: {
      // Forward /api/* to the Express API server during development
      '/api': {
        target: 'http://127.0.0.1:6001',
        changeOrigin: true,
      },
    },
  },
})
