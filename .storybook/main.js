const covalentWebpack = require('../libs/components/webpack.config.js');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        outline: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-designs',
  ],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    return Object.assign({}, config, {
      entry: [...config.entry, ...Object.values(covalentWebpack.entry)],
      module: {
        rules: [...config.module.rules, ...covalentWebpack.module.rules],
      },
      plugins: [...config.plugins, ...covalentWebpack.plugins],
    });
  },
};
