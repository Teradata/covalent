'use strict';

module.exports = {
  paths: {
    packagejson: [
      'src/**/package.json'
    ],
    tsfiles: [
      'src/typings.d.ts',
      '!src/main.ts',
      '!src/system-config.ts',
      'src/**/**.ts',
      '!src/**/**/**spec.ts',
      '!src/app/**/**.ts'
    ],
    styles: [
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
      'src/**/**.html',
      'src/**/**.md',
      'src/**/**.js',
      'src/**/**/package.json',
      '!src/app/**/**.html',
      '!src/app/**/**.js',
      '!src/index.html'
    ]
  }
};
