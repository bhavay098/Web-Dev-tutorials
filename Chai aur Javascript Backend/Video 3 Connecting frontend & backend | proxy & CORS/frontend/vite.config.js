import { defineConfig } from 'vite'   // Import helper to define Vite configuration
import react from '@vitejs/plugin-react'   // Import the official React plugin for Vite

// https://vite.dev/config/
export default defineConfig({ 
  // Dev server specific options
  server: {
    // Setup a proxy: intercepts requests starting with "/api" and forwards them to the backend running at http://localhost:3000. This avoids CORS issues during development
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [react()],   // List of plugins to use in this project
})
