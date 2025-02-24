import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["aws-amplify"],
    exclude: ["@aws-amplify/ui-react"] // ✅ Exclude UI modules if not needed
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // ✅ Ensures proper ESM transformation
    }
  }
});
