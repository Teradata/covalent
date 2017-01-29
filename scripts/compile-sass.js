'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var path = require("path");
var sourcemaps = require('gulp-sourcemaps');
var config = require('../build.conf');

gulp.task('compile-sass', 'Build the module styles', function() {
  return gulp
    .src(config.paths.styles)
    //.pipe(sourcemaps.init()) // add later on when not using relative routes for node_modules scss
    .pipe(sass({
      errLogToConsole: true,
      importer: function(url, prev, done) {
        if (url.indexOf('~') === 0) {
          url = 'node_modules/' + url.substring(1, url.length);
          return {file: path.relative(path.dirname(prev), url)};
        }
        return {file: url};
      }
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('deploy/'));
});
