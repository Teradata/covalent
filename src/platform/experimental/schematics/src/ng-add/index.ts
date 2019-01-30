import { Rule, chain, Tree, mergeWith, url, apply, branchAndMerge, template } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '@angular/material/schematics/ng-add/package-config';
import { ISchema } from './schema';
import { covalentCoreVersion, materialVersion } from './version-names';
import { IComponent, DynamicForms, Http, Highlight, Markdown, FlavoredMarkdown } from './components';
import { strings } from '@angular-devkit/core';
import { getProjectFromWorkspace, getProjectTargetOptions } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceSchema, WorkspaceProject } from '@angular-devkit/core/src/workspace';

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
    addThemeToAngularJson(),
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

function addThemeToAngularJson(): Rule {
  return (host: Tree) => {
    const workspace: WorkspaceSchema = getWorkspace(host);
    const project: WorkspaceProject = getProjectFromWorkspace(workspace);
    const targetOptions: any = getProjectTargetOptions(project, 'build');
    const assetPath: string =  `src/theme.scss`;
    const prebuiltThemePathSegment: string = `src/styles.scss`;

    if (!targetOptions.styles) {
      targetOptions.styles = [assetPath];
    } else {
      const existingStyles: any = targetOptions.styles.map((s: any) => typeof s === 'string' ? s : s.input);

      for (let [index, stylePath] of existingStyles.entries()) {
        if (stylePath === assetPath) {
          return;
        }
        if (stylePath.includes(prebuiltThemePathSegment)) {
          targetOptions.styles.splice(index, 0);
        }
      }
      targetOptions.styles.unshift(assetPath);
    }
    host.overwrite('angular.json', JSON.stringify(workspace, undefined, 2));
    return host;
  };
}
