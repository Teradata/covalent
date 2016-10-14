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
      mapRoot: "./",
      lib: ["es6", "dom"],
      module: "es6",
      moduleResolution: "node",
      noEmitOnError: true,
      noImplicitAny: false,
      target: "ES5",
      typescript: require('typescript'),
      typeRoots: [
        "../node_modules/@types"
      ],
      types: [
        "hammerjs"
      ]
    });

gulp.task('compile-ts', 'Build the UDA scripts', function() {
  var tsResult = gulp
    .src(config.paths.tsfiles)
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return merge(tsResult.dts
    .pipe(gulp.dest('deploy/')),
  tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('deploy/'))
  );
});
