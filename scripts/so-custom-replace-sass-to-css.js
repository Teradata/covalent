'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sassExtReplace = require('./so-custom-sass-ext-replace.js');
var config = require('../so-custom-build.conf');

gulp.task('core-replace-ngc-generated-metadata-scss-css', 'Replace dist/packages/core/**/index.metadata.json .scss with .css for ngc generated index.metadata.json for smaller payload for ssr', function() {
  sassExtReplace([config.paths.distCoreNgcGeneratedMetadataForSSR]);
});
