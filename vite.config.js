// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SakuraNihongo/', // 👈 Tên repo của bạn trên GitHub
})
