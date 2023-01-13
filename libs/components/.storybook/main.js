const covalentWebpack = require('../webpack.config.js');
const rootMain = require('../../../.storybook/main.js');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.framework = '@storybook/html';
rootMain.core = { ...rootMain.core, builder: '@storybook/builder-webpack5' };
rootMain.webpackFinal = (config) => {
  return Object.assign({}, config, {
    entry: [...config.entry, ...Object.values(covalentWebpack.entry)],
    module: {
      rules: [...config.module.rules, ...covalentWebpack.module.rules],
    },
    plugins: [...config.plugins, ...covalentWebpack.plugins],
  });
};

module.exports = rootMain;
