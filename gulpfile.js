'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

/* load some files into the registry */
var hub = new HubRegistry(['scripts/*.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);
