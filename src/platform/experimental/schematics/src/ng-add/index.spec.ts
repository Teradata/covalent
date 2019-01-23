import { getFileContent } from '@schematics/angular/utility/test';
import { Tree } from '@angular-devkit/schematics';
import { covalentCoreVersion, materialVersion } from './version-names';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';

const collectionPath: string = require.resolve('../collection.json');

describe('ng-add schematic', () => {

  const testRunner: SchematicTestRunner = new SchematicTestRunner('rocket', collectionPath);

  const workspaceOptions: WorkspaceOptions = {
      name: 'workspace',
      newProjectRoot: 'projects',
      version: '6.0.0',
  };

  const appOptions: ApplicationOptions = {
    name: 'bar',
  };

  let appTree: UnitTestTree;

  beforeEach(() => {
    let workspaceTree: UnitTestTree = testRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = testRunner.runExternalSchematic('@schematics/angular', 'application', appOptions, workspaceTree);
  });

  it('should update package.json', () => {
    const tree: Tree = testRunner.runSchematic('ng-add', {}, appTree);
    const packageJson: any = JSON.parse(getFileContent(tree, '/package.json'));
    const dependencies: any = packageJson.dependencies;

    let expectedCovalentVersion: string = `~${covalentCoreVersion}`;
    let expectedMaterialVersion: string = `~${materialVersion}`;

    expectVersionToBe(dependencies, '@covalent/core', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/dynamic-forms', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/highlight', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/http', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/markdown', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/flavored-markdown', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@angular/material', expectedMaterialVersion);

    expect(Object.keys(dependencies)).toEqual(
      Object.keys(dependencies).sort(),
      'Expected the modified ' + dependencies + ' to be sorted alphabetically.',
    );
  });

  it('should create theme.scss', () => {
    const tree: Tree = testRunner.runSchematic('ng-add', {}, appTree);
    expect(tree.exists('src/theme.scss')).toBe(true);
  });

  function expectVersionToBe(dependencies: any, name: string, expectedVersion: string): void {
    expect(dependencies[name]).toBe(expectedVersion,
      'Expected ' + name + ' package to have ' + `~${expectedVersion}` + ' version.');
  }

});
