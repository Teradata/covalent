import { getFileContent } from '@schematics/angular/utility/test';
import { Tree } from '@angular-devkit/schematics';
import { covalentCoreVersion } from './version-names';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import * as path from 'path';

// const collectionPath: string = require.resolve('../collection.json');
const collectionPath: string = path.join(__dirname, '../collection.json');

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
    appTree = testRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = testRunner.runExternalSchematic('@schematics/angular', 'application', appOptions, appTree);
  });

  it('should update package.json', () => {
    const tree: Tree = testRunner.runSchematic('ng-add', {}, appTree);
    const packageJson: any = JSON.parse(getFileContent(tree, '/package.json'));
    const dependencies: any = packageJson.dependencies;

    expect(dependencies['@covalent/core']).toBeDefined();
    expect(dependencies['@covalent/core']).toBe(covalentCoreVersion,
      'Expected the @covalent/core package to have ' + covalentCoreVersion + 'version.');

    expect(Object.keys(dependencies)).toEqual(
      Object.keys(dependencies).sort(),
      'Expected the modified ' + dependencies + ' to be sorted alphabetically.',
    );

  });
});
