import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  optimizeDeps: {
    exclude: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore", "firebase/analytics"],
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
