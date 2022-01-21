import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import { getFileContent } from '@schematics/angular/utility/test';
import chalk from 'chalk';

const green: any = chalk.green;
const yellow: any = chalk.yellow;

const migrationPath: string = require.resolve('../migration.json');
const collectionPath: string = require.resolve('../collection.json');

describe('ng-update schematic', () => {
  const collectionTestRunner: SchematicTestRunner = new SchematicTestRunner('collection', collectionPath);
  const migrationTestRunner: SchematicTestRunner = new SchematicTestRunner('migration', migrationPath);

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
    const workspaceTree: UnitTestTree = await collectionTestRunner
      .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
      .toPromise();
    appTree = await collectionTestRunner
      .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
      .toPromise();
  });

  it('should print console messages', async () => {
    // tslint:disable-next-line: no-console
    console.log = jasmine.createSpy('log');
    await migrationTestRunner.runSchematicAsync('migration-v3', {}, appTree).toPromise();

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

  it('should update non core packages to 3.0.0 in package.json', async () => {
    const dependencyOptions: any = {
      dynamicForms: true,
      http: true,
      highlight: false,
      markdown: true,
      flavoredMarkdown: true,
      echarts: true,
    };
    // Create tree using ng-add
    const tree: Tree = await collectionTestRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const packageJson: any = JSON.parse(getFileContent(tree, '/package.json'));
    const dependencies: any = packageJson.dependencies;

    // Update tree
    const updatedTree: Tree = await migrationTestRunner.runSchematicAsync('migration-v3', {}, tree).toPromise();
    const updatedPackageJson: any = JSON.parse(getFileContent(updatedTree, '/package.json'));
    const updatedDependencies: any = updatedPackageJson.dependencies;

    const expectedCovalentVersion: string = '3.0.0';

    expectVersionToBe(updatedDependencies, '@covalent/dynamic-forms', expectedCovalentVersion);
    expectVersionToBe(updatedDependencies, '@covalent/markdown', expectedCovalentVersion);
    expectVersionToBe(updatedDependencies, '@covalent/flavored-markdown', expectedCovalentVersion);
    expectVersionToBe(updatedDependencies, '@covalent/echarts', expectedCovalentVersion);
    expectVersionToBe(updatedDependencies, '@covalent/text-editor', expectedCovalentVersion);
    expectVersionToBe(updatedDependencies, '@covalent/code-editor', expectedCovalentVersion);
    expect(dependencies['@covalent/highlight']).not.toBeDefined();

    expect(Object.keys(dependencies)).toEqual(
      Object.keys(dependencies).sort(),
      'Expected the modified ' + dependencies + ' to be sorted alphabetically.',
    );
  });

  function expectVersionToBe(dependencies: any, name: string, expectedVersion: string): void {
    expect(dependencies[name]).toBe(
      expectedVersion,
      'Expected ' + name + ' package to have ' + `~${expectedVersion}` + ' version.',
    );
  }
});
