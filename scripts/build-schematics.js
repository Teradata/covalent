'use strict';

var path = require('path');
var spawn = require('child_process').spawn;
var chalk = require("chalk");

var gulp = require('gulp-help')(require('gulp'));
const config = require('../build.conf');

const schematicsDir = path.join('src/platform/experimental', 'schematics');

const schematicsGlobs = [
    path.join(schematicsDir, '**/+(data|files)/**/*'),
    path.join(schematicsDir, '**/+(schema|collection|migration).json'),
];

gulp.task(`compile-schematics-ts`, () => {
    return tsCompile(['-p', path.join(schematicsDir, 'tsconfig.json')]);
});

gulp.task(`build-schematics-assets`, [`compile-schematics-ts`], () => {
    return gulp.src(schematicsGlobs).pipe(gulp.dest(path.join(config.deployed, 'experimental/schematics')));
});

function tsCompile(flags) {
    return new Promise((resolve, reject) => {
      const binaryPath = path.resolve(`./node_modules/.bin/tsc`);
      const childProcess = spawn(binaryPath, flags, {shell: true});
  
      childProcess.stdout.on('data', (data) => console.log(`${data}`));
      childProcess.stderr.on('data', (data) => console.error(chalk.red(`${data}`)));
      childProcess.on('exit', (exitCode) => {
        exitCode === 0 ? resolve() : reject(`tsc compilation failure`);
      });
    });
  }