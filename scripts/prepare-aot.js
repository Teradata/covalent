'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sassExtReplace = require('./sass-ext-replace.js');
var config = require('../build.conf');

gulp.task('prepare-aot', 'Steps to prepare for aot', function() {
  sassExtReplace([config.paths.deployed]);
});
