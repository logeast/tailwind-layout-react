import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.tsx'),
      name: 'tailwind-layout-react',
      fileName: format => `tailwind-layout-react.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'autoprefixer', 'postcss', 'tailwindcss'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
