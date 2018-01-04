'use strict';

module.exports = {
  paths: {
    packagejson: [
      'src/**/**/package.json'
    ],
    deployed: 'dist/packages',
    deployedCore: 'dist/packages/core',
    /**
     * Enter blob for ssr metadata here per @covalent/* distributed project and
     * consume it in the gulp replace-scss-css task.
     */
    distCoreNgcGeneratedMetadataForSSR: 'dist/packages/core/**/index.metadata.json',
    styles: [
      '!src/theme.scss',
      '!src/styles.scss',
      'src/**/**.scss',
      '!src/app/**/**.scss',
      'src/**/**.css',
      '!src/app/**/**.css',
      '!src/**/universal-app/**/*',
      '!src/platform/dynamic-forms/**/*',
      '!src/platform/highlight/**/*',
      '!src/platform/http/**/*',
      '!src/platform/markdown/**/*',
    ],
    requiredfiles: [
      'src/**/codepoints',
      'src/**/MaterialIcons-Regular.eot',
      'src/**/MaterialIcons-Regular.ijmap',
      'src/**/MaterialIcons-Regular.ttf',
      'src/**/MaterialIcons-Regular.woff',
      'src/**/MaterialIcons-Regular.woff2',
      '!src/theme.scss',
      '!src/styles.scss',
      'src/**/**.scss',
      '!src/app/**/**.scss',
      'src/**/**.html',
      'src/**/**.md',
      'src/**/**.js',
      'src/**/**.ts',
      'src/**/tsconfig-build.json',
      '!src/**/**.spec.ts',
      'src/**/**/package.json',
      'src/**/tsconfig-aot.json',
      '!src/tests/**/**.ts',
      '!src/app/**/**.html',
      '!src/app/**/**.js',
      '!src/app/**/**.ts',
      '!src/environments/**/**.ts',
      '!src/polyfills.ts',
      '!src/main.ts',
      '!src/test.ts',
      'src/typings.d.ts',
      '!src/index.html',
      '!src/**/universal-app/**/*',
      // temporary to test only core
      '!src/platform/dynamic-forms/**/*',
      '!src/platform/highlight/**/*',
      '!src/platform/http/**/*',
      '!src/platform/markdown/**/*',
    ]
  }
};
