import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// plugins: [react()],

export default defineConfig({
  build: {
    lib: {
      entry: 'src/ModelModelWidget.jsx',
      name: 'ModelModelWidget'
    },
    rollupOptions: {
      // Ensure external packages are not bundled
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
