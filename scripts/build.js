'use strict';

var gulp = require('gulp-help')(require('gulp'));

gulp.task('build', 'Compile the SASS and move required files', [
  'compile-sass',
  'move-required-files'
]);
