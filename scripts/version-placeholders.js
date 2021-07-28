'use strict';

var platform = require('os').platform;
var readFileSync = require('fs').readFileSync;
var writeFileSync = require('fs').writeFileSync;
var spawnSync = require('child_process').spawnSync;
var gulp = require('gulp');
const buildConfig = require('../build.conf');
const packageJson = require('../package.json');

gulp.task('version-placeholder', function(cb) {
  replaceVersionPlaceholders(buildConfig.deployed);
  cb();
});

const placeholders = [
  ['0.0.0-COVALENT', packageJson.version],
  ['0.0.0-NG', buildConfig.angularVersion],
  ['0.0.0-MATERIAL', buildConfig.materialVersion],
  ['0.0.0-ECHARTS', buildConfig.echartsVersion],
  ['0.0.0-SHOWDOWN', buildConfig.showdownVersion],
  ['0.0.0-HIGHLIGHT', buildConfig.highlightVersion],
  ['0.0.0-MONACO', buildConfig.monacoVersion],
  ['0.0.0-EASYMDE', buildConfig.easymdeVersion],
  ['0.0.0-SHEPHERD', buildConfig.shepherdVersion],
];

/** RegExps that match version placeholders inside of a file. */
const placeholderRegexes = placeholders.map((placeholder) => new RegExp(placeholder[0], 'g'));

/**
 * Walks through every file in a directory and replaces the version placeholders
 */
function replaceVersionPlaceholders(packageDir) {
  // Resolve files that contain version placeholders using Grep or Findstr since those are
  // extremely fast and also have a very simple usage.
  const files = findFilesWithPlaceholders(packageDir);

  // Walk through every file that contains version placeholders and replace those with the current
  // version of the root package.json file.
  files.forEach((filePath) => {
    const fileContent = placeholderRegexes.reduce(
      (accumulator, currentValue, currentIndex) => accumulator.replace(currentValue, placeholders[currentIndex][1]),
      readFileSync(filePath, 'utf-8'),
    );
    writeFileSync(filePath, fileContent);
  });
}

/** Finds all files in the specified package dir where version placeholders are included. */
function findFilesWithPlaceholders(packageDir) {
  const findCommand = buildPlaceholderFindCommand(packageDir);
  return spawnSync(findCommand.binary, findCommand.args)
    .stdout.toString()
    .split(/[\n\r]/)
    .filter(String);
}

/** Builds the command that will be executed to find all files containing version placeholders. */
function buildPlaceholderFindCommand(packageDir) {
  if (platform() === 'win32') {
    return {
      binary: 'findstr',
      args: ['/msi', placeholders.map((item) => item[0]).join(' '), `${packageDir}\\*`],
    };
  } else {
    return {
      binary: 'grep',
      args: ['-ril', placeholders.map((item) => item[0]).join(`\\|`), packageDir],
    };
  }
}
