import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../samadhiyogaidaho/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
