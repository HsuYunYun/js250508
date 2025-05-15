import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  base: '/js250508/', // 根據你的 GitHub repository 名稱設置
  plugins: [react()],
}