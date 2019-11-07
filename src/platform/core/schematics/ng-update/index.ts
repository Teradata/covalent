import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import chalk from 'chalk';
import { TargetVersion } from './target-version';
import { covalentPackages } from '../components';

const green: any = chalk.green;
const yellow: any = chalk.yellow;

/** Entry point for the migration schematics with target of Covalent v3 */
export function updateToV3(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Running covalent update schematic ...');
    const updatedTree: Tree = updateNonCorePackageDependencies(tree, _context);
    onMigrationComplete(TargetVersion.V3);
    return updatedTree;
  };
}

function updateNonCorePackageDependencies(host: Tree, _context: SchematicContext): Tree {
  return updatePackageInPackageJson(host, covalentPackages, '3.0.0');
}

export function updatePackageInPackageJson(host: Tree, pkgs: string[], version: string): Tree {
  if (host.exists('package.json')) {
    const sourceText: string = host.read('package.json').toString('utf-8');
    const json: any = JSON.parse(sourceText);

    if (!json.dependencies) {
      json.dependencies = {};
    }

    pkgs.forEach((pkg: string) => {
      if (json.dependencies[pkg]) {
        json.dependencies[pkg] = version;
      }
    });

    // tslint:disable-next-line
    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }

  return host;
}

/** Function that will be called when the migration completed. */
function onMigrationComplete(targetVersion: string): void {
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
