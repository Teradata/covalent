import { RouterConfig } from '@angular/router';

import { DocsComponent } from './docs.component';
import { OverviewComponent } from './overview';
import { CreatingComponent } from './creating';
import { AngularMaterialComponent } from './angular-material';
import { Angular2Component } from './angular-2';
import { BuildTasksComponent } from './build-tasks';
import { DeploymentComponent } from './deployment';
import { IconsComponent } from './icons';
import { TestingComponent } from './testing';
import { ThemeComponent } from './theme';

export const docsRoutes: RouterConfig = [{
  children: [{
      component: OverviewComponent,
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
    },
  ],
  component: DocsComponent,
  path: 'docs',
}];
