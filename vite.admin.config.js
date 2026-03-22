import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    // Serve admin.html at / instead of index.html
    {
      name: 'serve-admin-html',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/admin.html'
          }
          next()
        })
      },
    },
  ],
  root: '.',
  build: {
    outDir: 'dist-admin',
    emptyOutDir: true,
    rollupOptions: {
      input: 'admin.html',
    },
  },
  server: {
    port: 6003,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:6001',
        changeOrigin: true,
      },
    },
  },
})
