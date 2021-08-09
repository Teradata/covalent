module.exports = {
  $schema: '../../node_modules/ng-packagr/ng-package.schema.json',
  lib: {
    entryFile: 'index.ts',
    umdModuleIds: {
      '@covalent/core/common': 'covalent.core.common',
      '@covalent/core/message': 'covalent.core.message',
      '@covalent/core/dialogs': 'covalent.core.dialogs',
      '@covalent/core/file': 'covalent.core.file',
      '@covalent/core/json-formatter': 'covalent.core.json-formatter',
      '@covalent/core/layout': 'covalent.core.layout',
      '@covalent/core/search': 'covalent.core.search',
      '@covalent/core/breadcrumbs': 'covalent.core.breadcrumbs',
      '@covalent/core/user-profile': 'covalent.core.user-profile',

      '@covalent/dynamic-forms': 'covalent.dynamic-forms',
      '@covalent/highlight': 'covalent.highlight',
      '@covalent/markdown': 'covalent.markdown',
      '@covalent/code-editor': 'covalent.code-editor',
      '@covalent/text-editor': 'covalent.text-editor',

      '@covalent/echarts/base': 'covalent.echarts.base',
      '@covalent/echarts/bar': 'covalent.echarts.bar',
      '@covalent/echarts/line': 'covalent.echarts.line',
      '@covalent/echarts/scatter': 'covalent.echarts.scatter',
      '@covalent/echarts/tooltip': 'covalent.echarts.tooltip',

      '@covalent/markdown-navigator': 'covalent.markdown-navigator',
      '@covalent/guided-tour': 'covalent.guided-tour',
    },
  },
  whitelistedNonPeerDependencies: ['.'],
};
