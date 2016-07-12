'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var config = require('../build.conf');
var merge = require('merge2');

var tsProject = ts.createProject({
      declaration: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      module: "commonjs",
      moduleResolution: "node",
      noEmitOnError: true,
      noImplicitAny: false,
      target: "ES5",
      typescript: require('typescript')
    });

gulp.task('compile-ts', 'Build the UDA scripts', function() {
  var tsResult = gulp
    .src(config.paths.tsfiles)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return merge(tsResult.dts
    .pipe(gulp.dest('deploy/')),
  tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('deploy/'))
  );
});
