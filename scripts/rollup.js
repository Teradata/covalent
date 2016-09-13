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
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    '@angular/router': 'ng.router',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',

    // Angular dependencies
    
    '@angular2-material/button': 'md.button',
    '@angular2-material/button-toggle': 'md.buttonToggle',
    '@angular2-material/card': 'md.card',
    '@angular2-material/checkbox': 'md.checkbox',
    '@angular2-material/core': 'md.core',
    '@angular2-material/grid-list': 'md.gridList',
    '@angular2-material/icon': 'md.icon',
    '@angular2-material/input': 'md.input',
    '@angular2-material/list': 'md.list',
    '@angular2-material/menu': 'md.menu',
    '@angular2-material/progress-bar': 'md.progressBar',
    '@angular2-material/progress-circle': 'md.progressCircle',
    '@angular2-material/radio': 'md.radio',
    '@angular2-material/sidenav': 'md.sidenav',
    '@angular2-material/slider': 'md.slider',
    '@angular2-material/slide-toggle': 'md.slideToggle',
    '@angular2-material/tabs': 'md.tabs',
    '@angular2-material/toolbar': 'md.toolbar',
    '@angular2-material/tooltip': 'md.tooltip',

    // Rxjs dependencies
    'rxjs/Subject': 'Rx',
    'rxjs/add/observable/forkJoin': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/filter': 'Rx.Observable.prototype',
    'rxjs/add/operator/do': 'Rx.Observable.prototype',
    'rxjs/add/operator/share': 'Rx.Observable.prototype',
    'rxjs/add/operator/finally': 'Rx.Observable.prototype',
    'rxjs/add/operator/catch': 'Rx.Observable.prototype',
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
          external: Object.keys(globals).concat(components.map(name => `@covalent/${name}`)),
          plugins: [
            commonjs({ jsnext: true, main: true }),
          ]
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