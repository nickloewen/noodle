import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 10000000,
    chunkSizeWarningLimit: 10000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js"
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/style/main.scss';@import './src/style/components.scss';`,
      },
    },
  },
});
