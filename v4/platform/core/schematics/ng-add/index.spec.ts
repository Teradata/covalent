import { getFileContent } from '@schematics/angular/utility/test';
import { Tree } from '@angular-devkit/schematics';
import { covalentCoreVersion, materialVersion } from '../version-names';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
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

  beforeEach(async () => {
    const workspaceTree: UnitTestTree = await testRunner
      .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
      .toPromise();
    appTree = await testRunner
      .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
      .toPromise();
  });

  it('should update package.json', async () => {
    const dependencyOptions: any = {
      dynamicForms: true,
      http: true,
      highlight: false,
      markdown: true,
      flavoredMarkdown: true,
      echarts: true,
      markdownNavigator: true,
    };
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const packageJson: any = JSON.parse(getFileContent(tree, '/package.json'));
    const dependencies: any = packageJson.dependencies;

    const expectedCovalentVersion: string = `~${covalentCoreVersion}`;
    const expectedMaterialVersion: string = `~${materialVersion}`;

    expectVersionToBe(dependencies, '@covalent/core', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/dynamic-forms', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/markdown', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/flavored-markdown', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/echarts', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/text-editor', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/code-editor', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@covalent/markdown-navigator', expectedCovalentVersion);
    expectVersionToBe(dependencies, '@angular/material', expectedMaterialVersion);
    expect(dependencies['@covalent/highlight']).not.toBeDefined();

    expect(Object.keys(dependencies)).toEqual(
      Object.keys(dependencies).sort(),
      'Expected the modified ' + dependencies + ' to be sorted alphabetically.',
    );
  });

  it('should create theme.scss', async () => {
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', {}, appTree).toPromise();
    expect(tree.exists('theme.scss')).toBe(true);
  });

  it('should import component themes to theme.scss if selected', async () => {
    const dependencyOptions: any = { highlight: true, markdown: true, flavoredMarkdown: true };
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const fileContent: string = getFileContent(tree, 'theme.scss');
    expect(fileContent).toContain('covalent-markdown-theme');
    expect(fileContent).toContain('covalent-highlight-theme');
    expect(fileContent).toContain('covalent-flavored-markdown-theme');
  });

  it('should not import component themes to theme.scss if not selected', async () => {
    const dependencyOptions: any = { highlight: false, markdown: false, flavoredMarkdown: false };
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const fileContent: string = getFileContent(tree, 'theme.scss');
    expect(fileContent).not.toContain('covalent-markdown-theme');
    expect(fileContent).not.toContain('covalent-highlight-theme');
    expect(fileContent).not.toContain('covalent-flavored-markdown-theme');
  });

  it('should include sass mixins to theme.scss if selected', async () => {
    const dependencyOptions: any = { styleSheetUtilities: true, styleSheetFlexLayout: true, styleSheetColors: true };
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const fileContent: string = getFileContent(tree, 'theme.scss');
    expect(fileContent).toContain('covalent-utilities');
    expect(fileContent).toContain('covalent-layout');
    expect(fileContent).toContain('covalent-colors');
  });

  it('should not include sass mixins to theme.scss if selected', async () => {
    const dependencyOptions: any = { styleSheetUtilities: false, styleSheetFlexLayout: false, styleSheetColors: false };
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
    const fileContent: string = getFileContent(tree, 'theme.scss');
    expect(fileContent).not.toContain('covalent-utilities');
    expect(fileContent).not.toContain('covalent-layout');
    expect(fileContent).not.toContain('covalent-colors');
  });

  it('should include theme.scss in angular config', async () => {
    const tree: Tree = await testRunner.runSchematicAsync('ng-add', {}, appTree).toPromise();
    const angularJson: any = getFileContent(tree, '/angular.json');
    expect(angularJson).toContain('theme.scss');
  });

  function expectVersionToBe(dependencies: any, name: string, expectedVersion: string): void {
    expect(dependencies[name]).toBe(
      expectedVersion,
      'Expected ' + name + ' package to have ' + `~${expectedVersion}` + ' version.',
    );
  }
});
