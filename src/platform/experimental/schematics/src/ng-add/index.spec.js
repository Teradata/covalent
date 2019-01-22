"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@schematics/angular/utility/test");
var version_names_1 = require("./version-names");
var testing_1 = require("@angular-devkit/schematics/testing");
var collectionPath = require.resolve('../collection.json');
describe('ng-add schematic', function () {
    var testRunner = new testing_1.SchematicTestRunner('rocket', collectionPath);
    var workspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '6.0.0',
    };
    var appOptions = {
        name: 'bar',
    };
    var appTree;
    beforeEach(function () {
        var workspaceTree = testRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
        appTree = testRunner.runExternalSchematic('@schematics/angular', 'application', appOptions, workspaceTree);
    });
    it('should update package.json', function () {
        var tree = testRunner.runSchematic('ng-add', {}, appTree);
        var packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
        var dependencies = packageJson.dependencies;
        var expectedVersion = "~" + version_names_1.covalentCoreVersion;
        expect(dependencies['@covalent/core']).toBeDefined();
        expect(dependencies['@covalent/core']).toBe(expectedVersion, 'Expected the @covalent/core package to have ' + ("~" + expectedVersion) + ' version.');
        expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort(), 'Expected the modified ' + dependencies + ' to be sorted alphabetically.');
    });
});
//# sourceMappingURL=index.spec.js.map