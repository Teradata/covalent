'use strict';

module.exports = {
  deployed: 'deploy/platform/',
  echartsVersion: '^4.2.1',
  angularVersion: '^7.0.0 || ^8.0.0',
  materialVersion: '^7.0.0|| ^8.0.0',
  showdownVersion: '^1.9.0',
  highlightVersion: '^9.13.1',
  monacoVersion: '^0.17.0',
  simplemdeVersion: '^1.11.2',
  paths: {
    PostNgPackngrBuildRequiredFiles: [
      '!src/platform/core/**/*.component.scss',
      'src/platform/core/**/*.scss',

      'src/platform/core/**/MaterialIcons-Regular-v48.woff2',
      'src/platform/core/**/*.md',
    ],
    PostNgPackngrCompileStyles: [
      'deploy/platform/core/**/material-icons.scss',
      'deploy/platform/core/**/platform.scss',
      'deploy/platform/core/**/theming/prebuilt/**/*.scss',
    ],
    PostNgPackngrAdditionalFiles: [
      '!src/platform/core/**/*.component.scss',
      '!src/platform/core/**/*.scss',
      '!src/platform/**/*.component.scss',
      'src/platform/**/*.scss',
      '!src/platform/core/**/*.md',
      'src/platform/**/*.md',
    ],
    PostNgPackagerConfigFiles: ['src/platform/core/common/configs/**/*.{js,json}'],
  },
};
