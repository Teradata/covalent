const rootMain = require('../../../.storybook/main.js');
const { mergeConfig } = require('vite');

// Use the following syntax to add addons!
((rootMain.stories = ['../**/*.stories.@(js|jsx|ts|tsx|mdx)']),
  (rootMain.core = { builder: '@storybook/builder-vite' }));
module.exports = {
  ...rootMain,
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      // Set base URL for where it will be served in production
      config.base = './';
    }
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      //root: '../../',
      cacheDir: '../../../node_modules/.vite-storybook',
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['@vueless/storybook-dark-mode'],
      },
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['../../'],
        },
      },
      assetsInclude: ['/sb-preview/runtime.js', '**/*.html'],
    });
  },

  framework: '@storybook/html-vite',

  features: {
    backgrounds: false,
    outline: false,
  },
};
