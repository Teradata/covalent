"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testing_1 = require("@angular-devkit/schematics/testing");
const test_1 = require("@schematics/angular/utility/test");
const chalk_1 = require("chalk");
const green = chalk_1.default.green;
const yellow = chalk_1.default.yellow;
const migrationPath = require.resolve('../migration.json');
const collectionPath = require.resolve('../collection.json');
describe('ng-update schematic', () => {
    const collectionTestRunner = new testing_1.SchematicTestRunner('collection', collectionPath);
    const migrationTestRunner = new testing_1.SchematicTestRunner('migration', migrationPath);
    const workspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '6.0.0',
    };
    const appOptions = {
        name: 'bar',
    };
    let appTree;
    beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const workspaceTree = yield collectionTestRunner
            .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
            .toPromise();
        appTree = yield collectionTestRunner
            .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
            .toPromise();
    }));
    it('should print console messages', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // tslint:disable-next-line: no-console
        console.log = jasmine.createSpy('log');
        yield migrationTestRunner.runSchematicAsync('migration-v3', {}, appTree).toPromise();
        // tslint:disable-next-line: no-console
        expect(console.log).toHaveBeenCalledWith();
        // tslint:disable-next-line
        expect(console.log).toHaveBeenCalledWith(green('  ✓  Updated Covalent to version 3.0.0'));
        // tslint:disable-next-line
        expect(console.log).toHaveBeenCalledWith();
        // tslint:disable-next-line
        expect(console.log).toHaveBeenCalledWith(yellow('  ⚠  Breaking changes are not applied automatically! Please refer the docs' +
            '(https://github.com/Teradata/covalent/wiki) and fix the issues manually'));
    }));
    it('should update non core packages to 3.0.0 in package.json', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const dependencyOptions = {
            dynamicForms: true,
            http: true,
            highlight: false,
            markdown: true,
            flavoredMarkdown: true,
            echarts: true,
        };
        // Create tree using ng-add
        const tree = yield collectionTestRunner.runSchematicAsync('ng-add', dependencyOptions, appTree).toPromise();
        const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
        const dependencies = packageJson.dependencies;
        // Update tree
        const updatedTree = yield migrationTestRunner.runSchematicAsync('migration-v3', {}, tree).toPromise();
        const updatedPackageJson = JSON.parse(test_1.getFileContent(updatedTree, '/package.json'));
        const updatedDependencies = updatedPackageJson.dependencies;
        const expectedCovalentVersion = '3.0.0';
        expectVersionToBe(updatedDependencies, '@covalent/dynamic-forms', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/http', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/markdown', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/flavored-markdown', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/echarts', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/text-editor', expectedCovalentVersion);
        expectVersionToBe(updatedDependencies, '@covalent/code-editor', expectedCovalentVersion);
        expect(dependencies['@covalent/highlight']).not.toBeDefined();
        expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort(), 'Expected the modified ' + dependencies + ' to be sorted alphabetically.');
    }));
    function expectVersionToBe(dependencies, name, expectedVersion) {
        expect(dependencies[name]).toBe(expectedVersion, 'Expected ' + name + ' package to have ' + `~${expectedVersion}` + ' version.');
    }
});
//# sourceMappingURL=index.spec.js.map