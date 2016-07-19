'use strict';

var gulp = require('gulp-help')(require('gulp'));
var bump = require('gulp-bump');
var gulpif = require('gulp-if');
var util = require('gulp-util');
var semver = require('semver');
var merge = require('merge2');
var config = require('../build.conf');

var minimist = require('minimist');

var knownOptions = {
  string: 'ver',
  default: { ver: 'prerelease' }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('bump-version', function(){
  var verTypes = ['major', 'minor', 'patch', 'prerelease'];
  var isVerType = verTypes.indexOf(options.ver) > -1;
  if(!isVerType && !semver.valid(options.ver)){
    throw new util.PluginError({
        plugin: 'bump-version',
        message: '--ver selected as input is not supported.'
      });
  };
  var mainPackageJson = gulp.src('package.json')
  .pipe(gulpif(isVerType, bump({type: options.ver}), bump({version: options.ver})))
  .pipe(gulp.dest('.'));

  var platformPackageJsons = gulp.src(config.paths.packagejson)
  .pipe(gulpif(isVerType, bump({type: options.ver}), bump({version: options.ver})))
  .pipe(gulp.dest('src/'))

  return merge(mainPackageJson, platformPackageJsons);
});