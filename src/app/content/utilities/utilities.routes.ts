import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';
import { AnimationsComponent } from './utilities-demos/animations/animations.component';
import { PipesComponent } from './utilities-demos/pipes/pipes.component';
import { FunctionsDemoComponent } from './utilities-demos/functions/functions.component';
import { UtilityStylesComponent } from './utilities-demos/utility-styles/utility-styles.component';
import { DirectivesComponent } from './utilities-demos/directives/directives.component';

const routes: Routes = [
  {
    path: 'utilities',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'utilities' } },
      {
        path: 'animations',
        component: AnimationsComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'functions',
        component: FunctionsDemoComponent,
      },
      {
        path: 'directives',
        component: DirectivesComponent,
      },
      {
        path: 'styling',
        component: UtilityStylesComponent,
      },
    ],
  },
];

export const utilitiesRoutes: any = RouterModule.forChild(routes);
