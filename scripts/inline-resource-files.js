'use strict';

var gulp = require('gulp-help')(require('gulp'));
var inlineResources = require('./inline-resources.js');
var config = require('../build.conf');

gulp.task('inline-resource-files', 'Inline resouces files into JS files', function() {
  inlineResources([config.paths.deployed]);
});
