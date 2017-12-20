'use strict';

var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config = require('../build.conf');
var sassImporter = require('./sass-importer');

gulp.task('so-compile-sass', 'Build the module styles', function() {
  return gulp
    .src(config.paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('deploy/'));
});

gulp.task('compile-paging-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/paging/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/paging'));
});

gulp.task('compile-virtual-scroll-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/virtual-scroll/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/virtual-scroll'));
});

gulp.task('compile-notifications-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/notifications/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/notifications'));
});

gulp.task('compile-common-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/common/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/common'));
});

gulp.task('compile-message-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/message/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/message'));
});

gulp.task('compile-chips-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/chips/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/chips'));
});

gulp.task('compile-data-table-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/data-table/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/data-table'));
});

gulp.task('compile-dialogs-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/dialogs/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/dialogs'));
});

gulp.task('compile-expansion-panel-sass', 'Build the module styles', function() {
  return gulp
    .src(['src/platform/core/expansion-panel/**/**.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      importer: sassImporter,
    }))
    .pipe(postcss([autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11'
        ]
      })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/packages/core/expansion-panel'));
});
