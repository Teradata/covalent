import { Routes, RouterModule } from '@angular/router';
import { DocsAppComponent } from './app.component';

const routes: Routes = [
  {
    component: DocsAppComponent,
    path: '',
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      {
        path: 'components',
        data: { preload: true },
        loadChildren: './components/components.module#ComponentsModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'components',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
