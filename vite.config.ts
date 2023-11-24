/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@svgs': path.resolve(__dirname, 'src/assets/svgs'),
      '@illustrations': path.resolve(__dirname, 'src/assets/illustrations'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@queries': path.resolve(__dirname, 'src/hooks/queries'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
