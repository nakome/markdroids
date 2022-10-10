import { defineConfig } from 'vite'
// ...
export default defineConfig({
  build: {
    outDir: './dist'
  },
  define: {
    'process.env': {}
  }
})