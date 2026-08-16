import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    watch: {
      // Exclude directories that are not source files and may contain
      // locked or busy files (e.g. design assets, agent configs)
      ignored: ['**/docs/**', '**/.agents/**', '**/node_modules/**']
    }
  }
});
