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
  ],
  features: {
    legacyMdx1: true, // 👈 Enables MDX v1 support
  },
  staticDirs: [join(__dirname, './public')],
};
