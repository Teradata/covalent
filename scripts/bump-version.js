'use strict';

var gulp = require('gulp-help')(require('gulp'));
var bump = require('gulp-bump');
var util = require('gulp-util');
var config = require('../build.conf');

var minimist = require('minimist');

var knownOptions = {
  string: 'ver',
  default: { ver: 'prerelease' }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('bump-version', function(){
  var verTypes = ['major', 'minor', 'patch', 'prerelease'];
  if(verTypes.indexOf(options.ver) < 0){
    throw new util.PluginError({
        plugin: 'bump-version',
        message: '--ver selected as input is not supported.'
      });
  };
  return gulp.src(config.paths.packagejson)
  .pipe(bump({type: options.ver}))
  .pipe(gulp.dest('src/'));
});