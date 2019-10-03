import { Tree } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import { getFileContent } from '@schematics/angular/utility/test';
import chalk from 'chalk';

const green: any = chalk.green;
const yellow: any = chalk.yellow;

const migrationPath: string = require.resolve('../migration.json');

describe('ng-update schematic', () => {
  const testRunner: SchematicTestRunner = new SchematicTestRunner('rocket', migrationPath);

  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0',
  };

  const appOptions: ApplicationOptions = {
    name: 'bar',
  };

  let appTree: UnitTestTree;

  beforeEach(async () => {
    let workspaceTree: UnitTestTree = await testRunner
      .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
      .toPromise();
    appTree = await testRunner
      .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
      .toPromise();
  });

  it('should print console messages', async () => {
    // tslint:disable-next-line: no-console
    console.log = jasmine.createSpy('log');
    const tree: Tree = await testRunner.runSchematicAsync('migration-v3', {}, appTree).toPromise();

    // tslint:disable-next-line: no-console
    expect(console.log).toHaveBeenCalledWith();
    // tslint:disable-next-line
    expect(console.log).toHaveBeenCalledWith(green('  ✓  Updated Covalent to version 3.0.0'));
    // tslint:disable-next-line
    expect(console.log).toHaveBeenCalledWith();
    // tslint:disable-next-line
    expect(console.log).toHaveBeenCalledWith(
      yellow(
        '  ⚠  Breaking changes are not applied automatically! Please refer the docs' +
          '(https://github.com/Teradata/covalent/wiki) and fix the issues manually',
      ),
    );
  });
});
