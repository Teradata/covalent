import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview';
import { CreatingComponent } from './creating';
import { AngularMaterialComponent } from './angular-material';
import { Angular2Component } from './angular-2';
import { BuildTasksComponent } from './build-tasks';
import { DeploymentComponent } from './deployment';
import { IconsComponent } from './icons';
import { TestingComponent } from './testing';

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
    },
  ],
  component: DocsComponent,
  path: 'docs',
}];

export const docsRoutes: any = RouterModule.forRoot(routes, { useHash: true });
