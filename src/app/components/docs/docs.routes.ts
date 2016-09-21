import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview/overview.component';
import { CreatingComponent } from './creating/creating.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { Angular2Component } from './angular-2/angular-2.component';
import { BuildTasksComponent } from './build-tasks/build-tasks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { IconsComponent } from './icons/icons.component';
import { TestingComponent } from './testing/testing.component';
import { ThemeComponent } from './theme/theme.component';
import { MockDataComponent } from './mock-data/mock-data.component';

const routes: Routes = [{
  children: [{
      component: DocsOverviewComponent,
      path: '',
    }, {
      component: Angular2Component,
      path: 'angular-2',
    }, {
      component: CreatingComponent,
      path: 'creating',
    }, {
      component: AngularMaterialComponent,
      path: 'angular-material',
    }, {
      component: BuildTasksComponent,
      path: 'build-tasks',
    }, {
      component: DeploymentComponent,
      path: 'deployment',
    }, {
      component: IconsComponent,
      path: 'icons',
    }, {
      component: TestingComponent,
      path: 'testing',
    }, {
      component: ThemeComponent,
      path: 'theme',
    }, {
      component: MockDataComponent,
      path: 'mock-data',
    },
  ],
  component: DocsComponent,
  path: 'docs',
}];

export const docsRoutes: any = RouterModule.forChild(routes);
