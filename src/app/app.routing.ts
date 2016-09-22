import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: 'app/components/home/home.module#HomeModule',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
