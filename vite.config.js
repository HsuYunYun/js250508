import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/js250508/', // 這裡是 GitHub repository 的名稱
  plugins: [react()],
})
