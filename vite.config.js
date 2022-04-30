import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
// import tdesignVars from './src/config/tdesign'

export default defineConfig({
  plugins: [
    reactPlugin() // prettier-ignore
  ],
  build: {
    manifest: true
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: tdesignVars,
  //       javascriptEnabled: true
  //     }
  //   }
  // }
})
