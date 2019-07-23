'use strict';

var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean', "Clean deploy folder", function() {
  return del([
    'deploy/**/*'
  ]);
});