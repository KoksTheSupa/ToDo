import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      exportAsDefault: true
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: './build'
  },
  base: command === 'build' ? '/static/' : ''
}));
