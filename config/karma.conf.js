module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'dist/vendor/core-js/client/core.js', included: true, watched: false},
      { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false},
      { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/proxy.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/sync-test.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/jasmine-patch.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false},
      { pattern: 'dist/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false},
      { pattern: 'dist/vendor/hammerjs/hammer.min.js', included: true, watched: false},

      { pattern: 'config/karma-test-shim.js', included: true, watched: true },

      // Distribution folder.
      { pattern: 'dist/**/*', included: false, watched: true }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/vendor/**/*.spec.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false
  });
};
