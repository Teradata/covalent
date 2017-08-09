'use strict';

var gulp = require('gulp-help')(require('gulp'));
var config = require('../build.conf');

gulp.task('move-required-files', 'Move required files', function() {
  return gulp
    .src(config.paths.requiredfiles)
    .pipe(gulp.dest('deploy/'));
});
