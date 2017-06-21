'use strict';

const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const rollup = require('rollup').rollup;
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const path = require('path');
const config = require('../build.conf');

function camelCase(str) {
  return str.replace(/-(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  })
}

gulp.task('rollup-code', '', function() {
  const components = fs.readdirSync(config.paths.deployed)
    .filter(componentName => (fs.statSync(path.join(config.paths.deployed, componentName))).isDirectory());

  const globals = {
    // Angular dependencies
    '@angular/animations': 'ng.animations',
    '@angular/animations/browser': 'ng.animations.browser',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    '@angular/router': 'ng.router',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    '@angular/material': 'ng.material',

    // Rxjs dependencies
    'rxjs/Subject': 'Rx',
    'rxjs/add/observable/forkJoin': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/add/observable/timer': 'Rx.Observable',
    'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/filter': 'Rx.Observable.prototype',
    'rxjs/add/operator/do': 'Rx.Observable.prototype',
    'rxjs/add/operator/share': 'Rx.Observable.prototype',
    'rxjs/add/operator/finally': 'Rx.Observable.prototype',
    'rxjs/add/operator/catch': 'Rx.Observable.prototype',
    'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
    'rxjs/add/operator/skip': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx'
  };
  components.forEach(name => {
    globals[`@covalent/${name}`] = `td.${camelCase(name)}`
  });

  // Build all of them asynchronously.
  return components.reduce((previous, name) => {
    return previous
      .then(() => {
        return rollup({
          entry: path.join(config.paths.deployed, name, 'index.js'),
          context: 'window',
          external: Object.keys(globals).concat(components.map(name => `@covalent/${name}`))
        });
      })
      .then((bundle) => {
        const result = bundle.generate({
          moduleName: `td.${camelCase(name)}`,
          format: 'umd',
          exports: 'named',
          globals
        });
        const outputPath = path.join(config.paths.deployed, name, `${name}.umd.js`);
        fs.writeFileSync( outputPath, result.code );
      });
  }, Promise.resolve());
});
