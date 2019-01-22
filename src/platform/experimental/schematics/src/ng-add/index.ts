import { Rule, chain, Tree, apply, mergeWith, url, FileVisitor, FilePredicate } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from './package-config';
import { ISchema } from './schema';
import { covalentCoreVersion } from './version-names';

export function addCoreDepsAndFiles(options: ISchema): Rule {
  return chain([
    (host: Tree) => addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`),
    mergeWith(url('./files')),
  ]);
}
