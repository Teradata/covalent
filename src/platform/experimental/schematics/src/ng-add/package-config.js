"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) { return (result[key] = obj[key]) && result; }, {});
}
function addPackageToPackageJson(host, pkg, version) {
    if (host.exists('package.json')) {
        var sourceText = host.read('package.json').toString('utf-8');
        var json = JSON.parse(sourceText);
        if (!json.dependencies) {
            json.dependencies = {};
        }
        if (!json.dependencies[pkg]) {
            json.dependencies[pkg] = version;
            json.dependencies = sortObjectByKeys(json.dependencies);
        }
        host.overwrite('package.json', JSON.stringify(json, undefined, 2));
    }
    return host;
}
exports.addPackageToPackageJson = addPackageToPackageJson;
function getPackageVersionFromPackageJson(tree, name) {
    if (!tree.exists('package.json')) {
        return undefined;
    }
    var packageJson = JSON.parse(tree.read('package.json').toString('utf8'));
    if (packageJson.dependencies && packageJson.dependencies[name]) {
        return packageJson.dependencies[name];
    }
    return undefined;
}
exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
//# sourceMappingURL=package-config.js.map