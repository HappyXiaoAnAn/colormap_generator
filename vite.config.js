import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './colormap' + '/[!.]*',
          dest: './colormap/',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@shoelace-style/shoelace': path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace'),
    },
  },
  base: './',
})
