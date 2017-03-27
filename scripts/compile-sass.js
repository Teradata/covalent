'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../build.conf');
var sassImporter = require('./sass-importer');

gulp.task('compile-sass', 'Build the module styles', function() {
  return gulp
    .src(config.paths.styles)
    //.pipe(sourcemaps.init()) // add later on when not using relative routes for node_modules scss
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('deploy/'));
});
