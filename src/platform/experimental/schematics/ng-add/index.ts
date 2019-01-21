import { Rule, chain, Tree, apply, mergeWith, url, FileVisitor, FilePredicate } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from './package-config';
import { ISchema } from './schema';
import { covalentCoreVersion } from './version-names';

export function addCoreDepsAndFiles(options: ISchema): Rule {
  return chain([
    (host: Tree) => addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`),
    (host: Tree) => {host.visit((filePath: any) => console.log(filePath)); return host; },
    mergeWith(url('./files')),
  ]);
}
