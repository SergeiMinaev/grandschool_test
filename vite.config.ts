import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'static/img',
          dest: 'static'
        },
        {
          src: 'static/icon',
          dest: 'static'
        }
      ]
    })
  ],
  server: {
    port: 8000,
    hmr: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
  },
  preview: {
    open: true,
  },
})
