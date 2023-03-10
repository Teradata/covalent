const rootMain = require('../../../.storybook/main.js');
const { mergeConfig } = require('vite');

// Use the following syntax to add addons!
(rootMain.stories = ['../**/*.stories.@(js|jsx|ts|tsx|mdx)']),
  (rootMain.core = { builder: '@storybook/builder-vite' });
module.exports = {
  ...rootMain,
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      //root: '../../',
      cacheDir: '../../../node_modules/.vite-storybook',
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['../../'],
        },
      },
      assetsInclude: ['**/*.html'],
    });
  },
};
