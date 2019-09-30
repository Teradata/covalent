import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import chalk from 'chalk';
import { TargetVersion } from './target-version';

const green: any = chalk.green;
const yellow: any = chalk.yellow;

/** Entry point for the migration schematics with target of Covalent v3 */
export function updateToV3(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Running covalent update schematic ...');
    onMigrationComplete(TargetVersion.V3);
    return tree;
  };
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
