import { Rule, chain, Tree, apply, mergeWith, url, FileVisitor, FilePredicate } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from './package-config';
import { ISchema } from './schema';
import { covalentCoreVersion, materialVersion } from './version-names';

export function addDepsAndFiles(options: ISchema): Rule {
  return chain([
    (host: Tree) => {
      addPackageToPackageJson(host, '@angular/material', `~${materialVersion}`);
      addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`);
      addPackageToPackageJson(host, '@covalent/dynamic-forms', `~${covalentCoreVersion}`);
      addPackageToPackageJson(host, '@covalent/highlight', `~${covalentCoreVersion}`);
      addPackageToPackageJson(host, '@covalent/http', `~${covalentCoreVersion}`);
      addPackageToPackageJson(host, '@covalent/markdown', `~${covalentCoreVersion}`);
      addPackageToPackageJson(host, '@covalent/flavored-markdown', `~${covalentCoreVersion}`);
    },
    mergeWith(url('./files')),
  ]);
}
