/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      '@angular2-material/**/*.js',
      'showdown/dist/showdown.js',
      'd3-array/index.js',
      'd3-array/index.js',
      'd3-axis/index.js',
      'd3-request/index.js',
      'd3-scale/index.js',
      'd3-selection/index.js',
      'd3-shape/index.js',
      'd3-time-format/index.js',
    ],
    polyfills: [
      'vendor/es6-shim/es6-shim.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.src.js',
      'vendor/zone.js/dist/zone.js',
      'vendor/showdown/dist/showdown.js'
    ]
  });
};
