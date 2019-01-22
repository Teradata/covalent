"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var package_config_1 = require("./package-config");
var version_names_1 = require("./version-names");
function addCoreDepsAndFiles(options) {
    return schematics_1.chain([
        function (host) { return package_config_1.addPackageToPackageJson(host, '@covalent/core', "~" + version_names_1.covalentCoreVersion); },
        schematics_1.mergeWith(schematics_1.url('./files')),
    ]);
}
exports.addCoreDepsAndFiles = addCoreDepsAndFiles;
//# sourceMappingURL=index.js.map