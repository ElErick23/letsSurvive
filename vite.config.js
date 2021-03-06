import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
  plugins: [react()]
})
