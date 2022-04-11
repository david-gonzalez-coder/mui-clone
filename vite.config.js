import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { peerDependencies, dependencies } from './package.json'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies),...Object.keys(dependencies)]
    }
  }
})
