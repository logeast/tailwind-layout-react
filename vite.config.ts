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
      fileName: (format) => `tailwind-layout-react.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'autoprefixer', 'postcss', 'tailwindcss'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
      },
    },
  },
});
