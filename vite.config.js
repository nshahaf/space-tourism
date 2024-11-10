import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), svgr()],
    base: mode === 'production' ? '/space-tourism' : '/',
  };
});
