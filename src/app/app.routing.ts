import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    loadChildren: 'app/components/home/home.module#HomeModule',
  },
  /* An approach for lazy loading for components
  {
    path: '', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], require => {
          resolve(require('./components/home/home.module').HomeModule);
      });
    }),
  },*/
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
