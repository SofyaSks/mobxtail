import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Дополнительные настройки для TypeScript
  resolve: {
    alias: {
      '@': '/src', // Опционально: алиас для src
    },
  },
})