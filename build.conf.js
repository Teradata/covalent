'use strict';

module.exports = {
  deployed: 'deploy/platform/',
  angularVersion: '6.0.0-rc.4',
  materialVersion: '6.0.0-rc.2',
  paths: {
    PostNgPackngrBuildRequiredFiles: [
      '!src/platform/core/**/*.component.scss',
      'src/platform/core/**/*.scss',

      'src/platform/core/**/codepoints',
      'src/platform/core/**/MaterialIcons-Regular.eot',
      'src/platform/core/**/MaterialIcons-Regular.ijmap',
      'src/platform/core/**/MaterialIcons-Regular.ttf',
      'src/platform/core/**/MaterialIcons-Regular.woff',
      'src/platform/core/**/MaterialIcons-Regular.woff2',
      'src/platform/core/**/*.md',
    ],
    PostNgPackngrCompileStyles: [
      'deploy/platform/core/**/material-icons.scss',
      'deploy/platform/core/**/platform.scss',
      'deploy/platform/core/**/theming/prebuilt/**/*.scss'
    ],
    PostNgPackngrAdditionalFiles: [
      '!src/platform/core/**/*.component.scss',
      '!src/platform/core/**/*.scss',
      '!src/platform/**/*.component.scss',
      'src/platform/**/*.scss',
      '!src/platform/core/**/*.md',
      'src/platform/**/*.md',
    ],
  }
};
