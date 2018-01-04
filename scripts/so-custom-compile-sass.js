'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sassImporter = require('./sass-importer');

gulp.task('compile-common-sass', 'compile some common sass to css to be distributed', function() {
  return gulp
    .src(['dist/core/common/material-icons.scss', 'dist/core/common/platform.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/core/common'));
});
