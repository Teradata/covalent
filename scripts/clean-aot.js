'use strict';

var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('clean-aot', "Clean unwanted AoT files from /deploy folder", function() {
  return del([
    'deploy/**/*.ngsummary.json',
    'deploy/**/*.ngfactory.ts',
    'deploy/**/*.shim.ngstyle.ts',
    'deploy/**/node_modules/'
  ]);
});