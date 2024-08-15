import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bh2/',  // Assurez-vous que ce chemin correspond à celui où vous déployez votre application
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
});
