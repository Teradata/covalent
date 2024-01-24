const {
  KnapsackWebComponentRenderer,
} = require('@knapsack/renderer-web-components');
const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const { version } = require('./../package.json');

module.exports = configureKnapsack({
  data: join(__dirname, './data'),
  dist: join(__dirname, './dist'),
  public: join(__dirname, './public'),
  version,
  templateRenderers: [new KnapsackWebComponentRenderer()],
  plugins: [],
  cloud: {
    siteId: 'covalent',
    repoRoot: join(__dirname, '..'),
  },
});
