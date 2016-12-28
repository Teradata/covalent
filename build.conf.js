'use strict';

module.exports = {
  paths: {
    packagejson: [
      'src/**/**/package.json'
    ],
    deployed: 'deploy/platform/',
    tsfiles: [
      'src/typings.d.ts',
      '!src/main.ts',
      '!src/polyfills.ts',
      '!src/test.ts',
      'src/**/**.ts',
      '!src/**/**/**spec.ts',
      '!src/app/**/**.ts',
      '!src/environments/**/**.ts'
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
      '!src/app/**/**.html',
      '!src/app/**/**.js',
      '!src/app/**/**.ts',
      '!src/environments/**/**.ts',
      '!src/polyfills.ts',
      '!src/main.ts',
      '!src/test.ts',
      '!src/typings.d.ts',
      '!src/index.html'
    ]
  }
};
