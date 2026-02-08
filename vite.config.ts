import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-react-typescript-template/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
