// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

// set the current location so can use external node_modules in tests
var path = require('path');
process.env['NODE_MODULE_DIR'] = __dirname.replace(new RegExp('\\' + path.sep, 'g'), '/') + "/dist";

module.exports = function (config) {
  var configuration = {
    basePath: '.',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-electron'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      useIframe: false, // can't run in iframe if using Electron Webview
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      CustomElectron: {
        base: 'Electron',
        flags: ['--show']
      }
    },
    files: [
      { pattern: "./karma.shim.js", watched: true, included: true, served: true},
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
     coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
   },
    angularCli: {
      environment: 'dev'
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['CustomElectron', 'Chrome'],
    singleRun: false
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
