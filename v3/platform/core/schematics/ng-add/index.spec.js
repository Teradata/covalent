'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tslib_1 = require('tslib');
const test_1 = require('@schematics/angular/utility/test');
const version_names_1 = require('../version-names');
const testing_1 = require('@angular-devkit/schematics/testing');
const collectionPath = require.resolve('../collection.json');
describe('ng-add schematic', () => {
  const testRunner = new testing_1.SchematicTestRunner('rocket', collectionPath);
  const workspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0',
  };
  const appOptions = {
    name: 'bar',
  };
  let appTree;
  beforeEach(() =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const workspaceTree = yield testRunner
        .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
        .toPromise();
      appTree = yield testRunner
        .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
        .toPromise();
    }),
  );
  it('should update package.json', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const dependencyOptions = {
        dynamicForms: true,
        http: true,
        highlight: false,
        markdown: true,
        flavoredMarkdown: true,
        echarts: true,
        markdownNavigator: true,
      };
      const tree = yield testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
      const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
      const dependencies = packageJson.dependencies;
      const expectedCovalentVersion = `~${version_names_1.covalentCoreVersion}`;
      const expectedMaterialVersion = `~${version_names_1.materialVersion}`;
      expectVersionToBe(dependencies, '@covalent/core', expectedCovalentVersion);
      expectVersionToBe(dependencies, '@covalent/dynamic-forms', expectedCovalentVersion);
      expectVersionToBe(dependencies, '@covalent/http', expectedCovalentVersion);
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
    }));
  it('should create theme.scss', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const tree = yield testRunner.runSchematicAsync('ng-add', {}, appTree).toPromise();
      expect(tree.exists('theme.scss')).toBe(true);
    }));
  it('should import component themes to theme.scss if selected', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const dependencyOptions = { highlight: true, markdown: true, flavoredMarkdown: true };
      const tree = yield testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
      const fileContent = test_1.getFileContent(tree, 'theme.scss');
      expect(fileContent).toContain('covalent-markdown-theme');
      expect(fileContent).toContain('covalent-highlight-theme');
      expect(fileContent).toContain('covalent-flavored-markdown-theme');
    }));
  it('should not import component themes to theme.scss if not selected', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const dependencyOptions = { highlight: false, markdown: false, flavoredMarkdown: false };
      const tree = yield testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
      const fileContent = test_1.getFileContent(tree, 'theme.scss');
      expect(fileContent).not.toContain('covalent-markdown-theme');
      expect(fileContent).not.toContain('covalent-highlight-theme');
      expect(fileContent).not.toContain('covalent-flavored-markdown-theme');
    }));
  it('should include sass mixins to theme.scss if selected', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const dependencyOptions = { styleSheetUtilities: true, styleSheetFlexLayout: true, styleSheetColors: true };
      const tree = yield testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
      const fileContent = test_1.getFileContent(tree, 'theme.scss');
      expect(fileContent).toContain('covalent-utilities');
      expect(fileContent).toContain('covalent-layout');
      expect(fileContent).toContain('covalent-colors');
    }));
  it('should not include sass mixins to theme.scss if selected', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const dependencyOptions = { styleSheetUtilities: false, styleSheetFlexLayout: false, styleSheetColors: false };
      const tree = yield testRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
      const fileContent = test_1.getFileContent(tree, 'theme.scss');
      expect(fileContent).not.toContain('covalent-utilities');
      expect(fileContent).not.toContain('covalent-layout');
      expect(fileContent).not.toContain('covalent-colors');
    }));
  it('should include theme.scss in angular config', () =>
    tslib_1.__awaiter(void 0, void 0, void 0, function* () {
      const tree = yield testRunner.runSchematicAsync('ng-add', {}, appTree).toPromise();
      const angularJson = test_1.getFileContent(tree, '/angular.json');
      expect(angularJson).toContain('theme.scss');
    }));
  function expectVersionToBe(dependencies, name, expectedVersion) {
    expect(dependencies[name]).toBe(
      expectedVersion,
      'Expected ' + name + ' package to have ' + `~${expectedVersion}` + ' version.',
    );
  }
});
//# sourceMappingURL=index.spec.js.map
