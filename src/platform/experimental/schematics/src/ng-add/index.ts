import { Rule, chain, Tree, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { ISchema } from './schema';
import { covalentCoreVersion, materialVersion } from './version-names';
import { IComponent, DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown } from './components';
import { strings } from '@angular-devkit/core';

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
    mergeFiles(options),
  ]);
}

function mergeFiles(options: ISchema): Rule {
  const templateSource: any = apply(
    url('./files'),
    [
      template({
        ...strings,
        ...options,
      }),
    ],
  );

  return branchAndMerge(mergeWith(templateSource));
}
