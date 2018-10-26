import { Routes, RouterModule } from '@angular/router';
import { DocsAppComponent } from './app.component';

const routes: Routes = [
  {
    component: DocsAppComponent,
    path: '',
    children: [
      { path: '', redirectTo: 'chart-types', pathMatch: 'full' },
      {
        path: 'chart-types',
        data: { preload: true },
        loadChildren: './chart-docs/chart-docs.module#ChartDocsModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'chart-types',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
