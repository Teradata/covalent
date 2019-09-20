import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    pathMatch: 'full',
    children: [
      { path: '', component: ComponentOverviewComponent },
      {
        path: ':id',
        loadChildren: () => import('./content-details/content-details.module').then((m) => m.ContentDetailsModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
