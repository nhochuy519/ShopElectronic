import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    babel({
      babelHelpers: 'bundled', // Gộp tất cả các Babel helper vào một file duy nhất
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'], // Xác định các loại tệp mà Babel sẽ xử lý
      include: ['src/**/*'], // Chỉ bao gồm các tệp trong thư mục 'src'
      exclude: 'node_modules/**' // Loại trừ các tệp trong thư mục 'node_modules'
    })
  ],
})
