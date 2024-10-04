import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    proxy: {
      '/api': {
        target: 'http://www.fmin-courses.com:4106',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

// 加载环境变量标识
const mode = process.env.NODE_ENV
console.log("-----------------------");
console.log("| VITE_NAME：" + `${mode == 'development' ? '开发模式' : '生产模式'} |`);
console.log("-----------------------");