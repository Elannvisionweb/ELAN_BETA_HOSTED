import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-sitemap-robots',
      apply: 'build',
      buildEnd() {
        try {
          copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist/sitemap.xml'));
          copyFileSync(resolve(__dirname, 'robots.txt'), resolve(__dirname, 'dist/robots.txt'));
          console.log('Copied sitemap.xml and robots.txt to dist folder.');
        } catch (err) {
          console.error('Error copying files:', err);
        }
      }
    }
  ]
})
