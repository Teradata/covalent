'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config = require('../build.conf');
var sassImporter = require('./sass-importer');

gulp.task('compile-sass', 'Build the module styles', function() {
  return gulp
    .src(config.paths.styles)
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
    .pipe(gulp.dest('deploy/'));
});
