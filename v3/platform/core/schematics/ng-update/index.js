'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const chalk_1 = require('chalk');
const target_version_1 = require('./target-version');
const components_1 = require('../components');
const green = chalk_1.default.green;
const yellow = chalk_1.default.yellow;
/** Entry point for the migration schematics with target of Covalent v3 */
function updateToV3() {
  return (tree, _context) => {
    _context.logger.info('Running covalent update schematic ...');
    const updatedTree = updateNonCorePackageDependencies(tree, _context);
    onMigrationComplete(target_version_1.TargetVersion.V3);
    return updatedTree;
  };
}
exports.updateToV3 = updateToV3;
function updateNonCorePackageDependencies(host, _context) {
  return updatePackageInPackageJson(host, components_1.covalentPackages, '3.0.0');
}
function updatePackageInPackageJson(host, pkgs, version) {
  if (host.exists('package.json')) {
    const sourceText = host.read('package.json').toString('utf-8');
    const json = JSON.parse(sourceText);
    if (!json.dependencies) {
      json.dependencies = {};
    }
    pkgs.forEach((pkg) => {
      if (json.dependencies[pkg]) {
        json.dependencies[pkg] = version;
      }
    });
    // tslint:disable-next-line
    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }
  return host;
}
exports.updatePackageInPackageJson = updatePackageInPackageJson;
/** Function that will be called when the migration completed. */
function onMigrationComplete(targetVersion) {
  // tslint:disable-next-line
  console.log();
  // tslint:disable-next-line
  console.log(green(`  ✓  Updated Covalent to ${targetVersion}`));
  // tslint:disable-next-line
  console.log();
  // tslint:disable-next-line
  console.log(
    yellow(
      '  ⚠  Breaking changes are not applied automatically! Please refer the docs' +
        '(https://github.com/Teradata/covalent/wiki) and fix the issues manually',
    ),
  );
}
//# sourceMappingURL=index.js.map
