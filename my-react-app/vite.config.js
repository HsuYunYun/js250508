import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/js250508/', // ⚠️ 這裡用你的 repo 名稱
  plugins: [react()],
})
