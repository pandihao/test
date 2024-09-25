import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/** 当前执行 node 命令时文件夹的地址（工作目录） */
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
