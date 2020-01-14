import { ComponentOverviewComponent } from '../../../components/shared/component-overview/component-overview.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'visualizations/embeddings',
    children: [
      {
        component: ComponentOverviewComponent,
        path: '',
        data: { category: 'embeddings' },
      },
      {
        path: 'powerbi',
        loadChildren: () => import('./embeddings-demos/powerbi/powerbi.module').then((m: any) => m.PowerBIModule),
      },
      {
        path: 'tableau',
        loadChildren: () => import('./embeddings-demos/tableau/tableau.module').then((m: any) => m.TableauModule),
      },
      {
        path: 'microstrategy',
        loadChildren: () =>
          import('./embeddings-demos/microstrategy/microstrategy.module').then((m: any) => m.MicrostrategyModule),
      },
    ],
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
