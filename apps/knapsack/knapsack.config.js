const {
  KnapsackWebComponentRenderer,
} = require('@knapsack/renderer-web-components');
const { KnapsackAngularRenderer } = require('@knapsack/renderer-angular');
const { configureKnapsack } = require('@knapsack/app');
const { join } = require('path');
const { version } = require('../../package.json');

module.exports = configureKnapsack({
  data: join(__dirname, './data'),
  dist: join(__dirname, './dist'),
  public: join(__dirname, './public'),
  version,
  templateRenderers: [
    new KnapsackWebComponentRenderer({}),
    new KnapsackAngularRenderer({
      customNgModulePath: join(__dirname, './ks.module.ts'),
      pkgPathAliases: {
        '@covalent/core': join(__dirname, '../../dist/libs/angular/'),
        '@covalent/core/breadcrumbs': join(
          __dirname,
          '../../dist/libs/angular/breadcrumbs'
        ),
      },
    }),
  ],
  plugins: [],
  cloud: {
    siteId: 'covalent',
    repoRoot: join(__dirname, '../../'),
  },
});
