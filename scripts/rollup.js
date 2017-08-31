'use strict';

const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const rollup = require('rollup').rollup;
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const path = require('path');
const config = require('../build.conf');
const uglify = require('uglify-js')

function camelCase(str) {
  return str.replace(/-(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  })
}

gulp.task('rollup-code', '', function() {
  const components = fs.readdirSync(config.paths.deployed)
    .filter(componentName => (fs.statSync(path.join(config.paths.deployed, componentName))).isDirectory());

  const globals = {
    'tslib': 'tslib',

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
    '@angular/cdk': 'ng.cdk',
    '@angular/cdk/overlay': 'ng.cdk.overlay',
    '@angular/cdk/portal': 'ng.cdk.portal',
    '@angular/cdk/keycodes': 'ng.cdk.keycodes',
    '@angular/cdk/bidi': 'ng.cdk.bidi',
    '@angular/cdk/coercion': 'ng.cdk.coercion',
    '@angular/cdk/rxjs': 'ng.cdk.rxjs',
    '@angular/cdk/scrolling': 'ng.cdk.scrolling',

    // Rxjs dependencies
    'rxjs/Subject': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/observable/forkJoin': 'Rx.Observable',
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/timer': 'Rx.Observable',
    'rxjs/operator/pairwise': 'Rx.Observable.prototype',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/operator/map': 'Rx.Observable.prototype',
    'rxjs/operator/filter': 'Rx.Observable.prototype',
    'rxjs/observable/fromEvent': 'Rx.Observable.prototype',
    'rxjs/operator/do': 'Rx.Observable.prototype',
    'rxjs/operator/share': 'Rx.Observable.prototype',
    'rxjs/operator/finally': 'Rx.Observable.prototype',
    'rxjs/operator/catch': 'Rx.Observable.prototype',
    'rxjs/operator/debounceTime': 'Rx.Observable.prototype',
    'rxjs/operator/skip': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx',

    // Covalent
    '@covalent/core': 'td.core',
    '@covalent/dynamic-forms': 'td.dynamicForms',
    '@covalent/highlight': 'td.highlight',
    '@covalent/markdown': 'td.markdown',
    '@covalent/http': 'td.http',
  };
  components.forEach(name => {
    globals[`@covalent/${name}`] = `td.${camelCase(name)}`
  });

  // Build all of them asynchronously.
  return components.reduce((previous, name) => {
    let outputPath = path.join(config.paths.deployed, name, `bundles/${name}.umd.js`);
    let outputMinPath = path.join(config.paths.deployed, name, `bundles/${name}.umd.min.js`);
    const writeOptions = {
      // Keep the moduleId empty because we don't want to force developers to a specific moduleId.
      moduleId: '',
      moduleName: `td.${camelCase(name)}`,
      format: 'umd',
      dest: outputPath,
      globals: globals,
      sourceMap: true,
    }
    const bundleOptions = {
      context: 'this',
      external: Object.keys(globals),
      entry: path.join(config.paths.deployed, name, 'index.js'),
      plugins: [nodeResolve()],
    }
    return previous
      .then(() => {
        bundleOptions.plugins.push(nodeResolve());
        const external = Object.keys(globals);
        external.splice(external.indexOf('tslib'), 1);
        bundleOptions.external = external;
        return rollup(bundleOptions);
      })
      .then((bundle) => {
        bundle.write(writeOptions).then(() => {
          const result = uglify.minify(outputPath, {
            outSourceMap: outputMinPath + '.map',
            output: {
              comments: 'some'
            }
          });
          if (result.error) {
            throw Error(result.error.DefaultsError);
          }
          fs.writeFileSync(outputMinPath, result.code);
          fs.writeFileSync(outputMinPath + '.map', result.map);
        });
      });
  }, Promise.resolve());
});
