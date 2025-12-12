import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Function to dynamically generate entry paths
const getComponentEntries = () => {
  const componentsConfigPath = path.resolve(
    new URL('.', import.meta.url).pathname,
    './component-config.json',
  );
  const componentsConfig = JSON.parse(
    fs.readFileSync(componentsConfigPath, 'utf8'),
  );

  return componentsConfig.map((component) =>
    path.join('libs/components/src', component.path),
  );
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    optimizeDeps: {
      include: ['monaco-editor'], // Ensure Monaco Editor is pre-bundled
    },
    build: {
      lib: {
        entry: ['libs/components/src/index.ts', ...getComponentEntries()],
        rollupOptions: {
          external: ['monaco-editor'],
        },
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    test: {
      setupFiles: ['src/test-setup.ts'],
      server: {
        deps: {
          inline: [/safevalues/],
        },
      },
      coverage: {
        provider: 'v8',
        enabled: true,
        reportsDirectory: '../../coverage/libs/components',
      },
    },
    cacheDir: '../../node_modules/.vite',
  };
});
