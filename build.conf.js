'use strict';

module.exports = {
  deployed: 'deploy/platform/',
  echartsVersion: '^4.2.1',
  angularVersion: '^9.0.0 || ^10.0.0-0 || ^11.0.0-0',
  materialVersion: '^9.0.0 || ^10.0.0-0 || ^11.0.0-0',
  showdownVersion: '^1.9.1',
  highlightVersion: '^9.13.1',
  monacoVersion: '^0.22.0',
  easymdeVersion: '2.8.0',
  shepherdVersion: '^7.1.0',
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
    PostNgPackagerCodingStandardsPackage: ['src/platform/coding-standards/**/*.{js,json}'],
  },
};
