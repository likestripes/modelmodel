import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

export default defineConfig({
    // plugins: [react()],
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
