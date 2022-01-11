"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependenciesAndFiles = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const package_config_1 = require("@angular/material/schematics/ng-add/package-config");
const version_names_1 = require("../version-names");
const components_1 = require("../components");
const core_1 = require("@angular-devkit/core");
const schematics_2 = require("@angular/cdk/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
function addDependenciesAndFiles(options) {
    return schematics_1.chain([
        (host) => {
            package_config_1.addPackageToPackageJson(host, '@angular/material', `~${version_names_1.materialVersion}`);
            package_config_1.addPackageToPackageJson(host, '@covalent/core', `~${version_names_1.covalentCoreVersion}`);
            components_1.components.forEach((component) => {
                if (component.enabled(options)) {
                    package_config_1.addPackageToPackageJson(host, component.dependency(), `~${version_names_1.covalentCoreVersion}`);
                }
            });
        },
        mergeFiles(options),
        addThemeToAngularJson(),
    ]);
}
exports.addDependenciesAndFiles = addDependenciesAndFiles;
function mergeFiles(options) {
    const templateSource = schematics_1.apply(schematics_1.url('./files'), [
        schematics_1.template(Object.assign(Object.assign({}, core_1.strings), options)),
    ]);
    return schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource));
}
function addThemeToAngularJson() {
    return workspace_1.updateWorkspace((workspace) => {
        const project = schematics_2.getProjectFromWorkspace(workspace);
        const targetOptions = schematics_2.getProjectTargetOptions(project, 'build');
        const assetPath = `theme.scss`;
        const prebuiltThemePathSegment = `styles.scss`;
        if (!targetOptions.styles) {
            targetOptions.styles = [assetPath];
        }
        else {
            const existingStyles = targetOptions.styles.map((s) => (typeof s === 'string' ? s : s.input));
            for (const [index, stylePath] of existingStyles.entries()) {
                if (stylePath === assetPath) {
                    return;
                }
                if (stylePath.includes(prebuiltThemePathSegment)) {
                    targetOptions.styles.splice(index, 0);
                }
            }
            targetOptions.styles.unshift(assetPath);
        }
    });
}
//# sourceMappingURL=index.js.map