const { defineConfig } = require('vite');
import fs from 'fs';
import path from 'path';

// Function to dynamically generate entry paths
const getComponentEntries = () => {
  const componentsConfigPath = path.resolve(
    __dirname,
    './component-config.json'
  );
  const componentsConfig = JSON.parse(
    fs.readFileSync(componentsConfigPath, 'utf8')
  );

  return componentsConfig.map((component) =>
    path.join('libs/components/src', component.path)
  );
};

// https://vitejs.dev/config/
module.exports = defineConfig(({ mode }) => {
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
        name: 'Covalent',
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
