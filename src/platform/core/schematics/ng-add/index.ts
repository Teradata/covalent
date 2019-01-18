import { Rule, SchematicContext, Tree, TaskId } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from './package-config';
import { ISchema } from './schema';
import { covalentCoreVersion } from './version-names';

export function addPackageDependencies(options: ISchema): Rule {
  return (host: Tree, context: SchematicContext) => {

    addPackageToPackageJson(host, '@covalent/core', `~${covalentCoreVersion}`);
    
    const installTaskId: TaskId = context.addTask(new NodePackageInstallTask());

    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
  };
}
