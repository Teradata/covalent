import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'components' } },
      {
        path: ':id',
        loadChildren: () => import('./content-details/content-details.module').then((m) => m.ContentDetailsModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
