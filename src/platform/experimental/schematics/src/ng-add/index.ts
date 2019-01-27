import { Rule, chain, Tree, mergeWith, url } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { ISchema } from './schema';
import { covalentCoreVersion, materialVersion } from './version-names';
import { IComponent, DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown } from './components';

export function addDependenciesAndFiles(options: ISchema): Rule {
  return chain([
    (host: Tree) => {
      addPackageToPackageJson(host, '@angular/material', `~${materialVersion}`);
      addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`);

      let components: IComponent[] = [new DynamicForms(), new Http(), new Highlight(), new Markdown(), new FlavoredMarkdown()];

      components.forEach((component: IComponent) => {
        if (component.enabled(options)) {
          addPackageToPackageJson(host, component.dependency(), `~${covalentCoreVersion}`);
        }
      });
    },
    mergeWith(url('./files')),
  ]);
}
