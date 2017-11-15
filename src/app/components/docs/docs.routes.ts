import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview/overview.component';
import { DocsQuickstartComponent } from './quickstart/quickstart.component';
import { CreatingComponent } from './creating/creating.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AngularComponent } from './angular/angular.component';
import { BuildTasksComponent } from './build-tasks/build-tasks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { IconsComponent } from './icons/icons.component';
import { TestingComponent } from './testing/testing.component';
import { ThemeComponent } from './theme/theme.component';
import { MockDataComponent } from './mock-data/mock-data.component';
import { UtilitySASSMixinsComponent } from './utility-sass-mixins/utility-sass-mixins.component';

const routes: Routes = [{
  children: [{
      component: DocsOverviewComponent,
      path: '',
    }, {
      component: DocsQuickstartComponent,
      path: 'quickstart',
    }, {
      component: AngularComponent,
      path: 'angular',
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
      component: UtilitySASSMixinsComponent,
      path: 'utility-sass-mixins',
    }, {
      component: MockDataComponent,
      path: 'mock-data',
    },
  ],
  component: DocsComponent,
  path: 'docs',
}];

export const docsRoutes: any = RouterModule.forChild(routes);
