const { join } = require('path');

module.exports = {
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
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: [join(__dirname, './public')]
};
