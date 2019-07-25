'use strict';

var platform = require('os').platform;
var readFileSync = require('fs').readFileSync;
var writeFileSync = require('fs').writeFileSync;
var spawnSync = require('child_process').spawnSync;
var gulp = require('gulp');
const buildConfig = require('../build.conf');
const packageJson = require('../package.json');

gulp.task('version-placeholder', function(cb){
  replaceVersionPlaceholders(buildConfig.deployed, packageJson.version);
  cb();
});

/** Variable that is set to the string for version placeholders. */
const versionPlaceholderText = '0.0.0-COVALENT';
const ngVersionPlaceholderText = '0.0.0-NG';
const materialVersionPlaceholderText = '0.0.0-MATERIAL';
const echartsVersionPlaceholderText = '0.0.0-ECHARTS';

/** RegExp that matches version placeholders inside of a file. */
const versionPlaceholderRegex = new RegExp(versionPlaceholderText, 'g');
const ngVersionPlaceholderRegex = new RegExp(ngVersionPlaceholderText, 'g');
const materialVersionPlaceholderRegex = new RegExp(materialVersionPlaceholderText, 'g');
const echartsVersionPlaceholderRegex = new RegExp(echartsVersionPlaceholderText, 'g');

/**
 * Walks through every file in a directory and replaces the version placeholders
 */
function replaceVersionPlaceholders(packageDir, projectVersion) {
  // Resolve files that contain version placeholders using Grep or Findstr since those are
  // extremely fast and also have a very simple usage.
  const files = findFilesWithPlaceholders(packageDir);

  // Walk through every file that contains version placeholders and replace those with the current
  // version of the root package.json file.
  files.forEach(filePath => {
    const fileContent = readFileSync(filePath, 'utf-8')
      .replace(ngVersionPlaceholderRegex, buildConfig.angularVersion)
      .replace(materialVersionPlaceholderRegex, buildConfig.materialVersion)
      .replace(echartsVersionPlaceholderRegex, buildConfig.echartsVersion)
      .replace(versionPlaceholderRegex, projectVersion);

    writeFileSync(filePath, fileContent);
  });
}

/** Finds all files in the specified package dir where version placeholders are included. */
function findFilesWithPlaceholders(packageDir) {
  const findCommand = buildPlaceholderFindCommand(packageDir);
  return spawnSync(findCommand.binary, findCommand.args).stdout
    .toString()
    .split(/[\n\r]/)
    .filter(String);
}

/** Builds the command that will be executed to find all files containing version placeholders. */
function buildPlaceholderFindCommand(packageDir) {
  if (platform() === 'win32') {
    return {
      binary: 'findstr',
      args: ['/msi', `${materialVersionPlaceholderText} ${ngVersionPlaceholderText} ${echartsVersionPlaceholderText} ${versionPlaceholderText}`, `${packageDir}\\*`]
    };
  } else {
    return {
      binary: 'grep',
      args: ['-ril', `${materialVersionPlaceholderText}\\|${echartsVersionPlaceholderText}\\|${ngVersionPlaceholderText}\\|${versionPlaceholderText}`, packageDir]
    };
  }
}