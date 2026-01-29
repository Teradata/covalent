const { join } = require('path');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',

    '@vueless/storybook-dark-mode',
    '@storybook/addon-docs',
  ],
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: true,
    defaultName: 'Overview',
  },
  staticDirs: [join(__dirname, './public')],
};
