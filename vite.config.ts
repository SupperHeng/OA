import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    open: true,
    proxy: {
      '/url': {
        target: 'http://www.fmin-courses.com:4106',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/url/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
