import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Itachiuchiha/',  // Must match your repo name
  plugins: [react()],
})

