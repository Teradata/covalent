'use strict';

var gulp = require('gulp-help')(require('gulp'));

gulp.task('build', 'Compile the code', [
  'compile-ts',
  'compile-sass',
  'move-required-files'
]);
