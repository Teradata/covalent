'use strict';

var gulp = require('gulp');
var bump = require('gulp-bump');
var semver = require('semver');

var minimist = require('minimist');

var knownOptions = {
  string: 'ver',
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('bump-version', function(){
  if (!options.ver) {
    throw '--ver is required';
  }
  if(!semver.valid(options.ver)){
    throw '--ver selected as input is not supported.';
  };
  return gulp.src('package.json')
  .pipe(bump({version: options.ver}))
  .pipe(gulp.dest('.'));
});