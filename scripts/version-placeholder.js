const platform = require('os').platform;
const readFileSync = require('fs').readFileSync;
const writeFileSync = require('fs').writeFileSync;
const spawnSync = require('child_process').spawnSync;
const packageJson = require('../package.json');
const args = process.argv.slice(2);

const placeholders = [
  ['0.0.0-COVALENT', packageJson.version],
  ['0.0.0-TSLIB', packageJson.dependencies['tslib']],
  ['0.0.0-NG', packageJson.dependencies['@angular/core']],
  ['0.0.0-MATERIAL', packageJson.dependencies['@angular/material']],
  ['0.0.0-ECHARTS', packageJson.dependencies['echarts']],
  ['0.0.0-ECHARTS-WORDCLOUD', packageJson.dependencies['echarts-wordcloud']],
  ['0.0.0-SHOWDOWN', packageJson.dependencies['showdown']],
  ['0.0.0-HIGHLIGHT', packageJson.dependencies['highlight.js']],
  ['0.0.0-MONACO', packageJson.dependencies['monaco-editor']],
  ['0.0.0-EASYMDE', packageJson.dependencies['easymde']],
  ['0.0.0-SHEPHERD', packageJson.dependencies['shepherd.js']],
];
console.log('Replacing placeholders: ', placeholders);

/** RegExps that match version placeholders inside of a file. */
const placeholderRegexes = placeholders.map(
  (placeholder) => new RegExp(placeholder[0], 'g')
);
/**
 * Walks through every file in a directory and replaces the version placeholders
 */
function replaceVersionPlaceholders(packageDir = 'dist') {
  // Resolve files that contain version placeholders using Grep or Findstr since those are
  // extremely fast and also have a very simple usage.
  const files = findFilesWithPlaceholders(packageDir);

  // Walk through every file that contains version placeholders and replace those with the current
  // version of the root package.json file.

  files.forEach((filePath) => {
    const fileContent = placeholderRegexes.reduce(
      (accumulator, currentValue, currentIndex) =>
        accumulator.replace(currentValue, placeholders[currentIndex][1]),
      readFileSync(filePath, 'utf-8')
    );

    console.log(`Replacing placeholder in ${filePath}`);

    writeFileSync(filePath, fileContent);
  });
}

/** Finds all files in the specified package dir where version placeholders are included. */
function findFilesWithPlaceholders(packageDir) {
  const findCommand = buildPlaceholderFindCommand(packageDir);

  console.log(`Finding files in ${packageDir}`);

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
      args: [
        '/msi',
        placeholders.map((item) => item[0]).join(' '),
        `${packageDir}\\*`,
      ],
    };
  } else {
    return {
      binary: 'grep',
      args: [
        '-ril',
        placeholders.map((item) => item[0]).join(`\\|`),
        packageDir,
      ],
    };
  }
}

replaceVersionPlaceholders(args[0]);
