import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  // other Vite configurations
  preview: {
    port: process.env.PORT || 5173, // Use the port provided by Render or default to 5000 for local
  },
};

