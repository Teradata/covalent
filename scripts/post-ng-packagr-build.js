'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sassImporter = require('./sass-importer');
const config = require('../build.conf');

gulp.task('move-required-core-files', function () {
  return gulp.src(config.paths.PostNgPackngrBuildRequiredFiles).pipe(gulp.dest(config.deployed + 'core'));
});

gulp.task('move-additional-platform-files', function () {
  return gulp.src(config.paths.PostNgPackngrAdditionalFiles).pipe(gulp.dest(config.deployed));
});

gulp.task('move-coding-standards-package', function () {
  return gulp
    .src(config.paths.PostNgPackagerCodingStandardsPackage)
    .pipe(gulp.dest(`${config.deployed}coding-standards`));
});

gulp.task('compile-core-sass', function () {
  return gulp
    .src(config.paths.PostNgPackngrCompileStyles)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errLogToConsole: true,
        importer: sassImporter,
      }),
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.deployed + 'core'));
});
