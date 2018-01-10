'use strict';

module.exports = {
  paths: {
    packagejson: [
      'src/**/**/package.json'
    ],
    deployed: 'deploy/platform/',
    ngPackngrBuildRequiredFiles: [
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
    ngPackngrCompileStyles: [
      'deploy/platform/core/**/material-icons.scss',
      'deploy/platform/core/**/platform.scss',
      'deploy/platform/core/**/theming/prebuilt/**/*.scss'
    ],
    styles: [
      '!src/theme.scss',
      '!src/styles.scss',
      'src/**/**.scss',
      '!src/app/**/**.scss',
      'src/**/**.css',
      '!src/app/**/**.css'
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
      '!src/index.html'
    ]
  }
};
