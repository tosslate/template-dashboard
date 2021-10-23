import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import antdVars from './src/themes/antd'

export default defineConfig({
  plugins: [vuePlugin()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: antdVars,
        javascriptEnabled: true
      }
    }
  }
})
