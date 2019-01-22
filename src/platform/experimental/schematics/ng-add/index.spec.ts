import { getFileContent } from '@schematics/angular/utility/test';
import { Tree } from '@angular-devkit/schematics';
import { covalentCoreVersion } from './version-names';
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

    let expectedVersion: string = `~${covalentCoreVersion}`;
    expect(dependencies['@covalent/core']).toBeDefined();
    expect(dependencies['@covalent/core']).toBe(expectedVersion,
      'Expected the @covalent/core package to have ' + `~${expectedVersion}` + ' version.');

    expect(Object.keys(dependencies)).toEqual(
      Object.keys(dependencies).sort(),
      'Expected the modified ' + dependencies + ' to be sorted alphabetically.',
    );
  });
});
