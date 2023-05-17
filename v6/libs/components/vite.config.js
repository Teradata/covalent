const { defineConfig, splitVendorChunkPlugin } = require('vite');

// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    lib: {
      entry: 'libs/components/src/index.ts',
      name: 'Covalent',
      fileName: 'covalent',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [/^lit/, /^@material/],
      output: {
        chunkFileNames: '[name].mjs',
      },
    },
  },
  test: {
    coverage: {
      provider: 'c8',
      enabled: true,
      reportsDirectory: '../../coverage/libs/components',
    },
    cache: {
      dir: '../../node_modules/.vitest',
    },
  },
  plugins: [splitVendorChunkPlugin()],
});
