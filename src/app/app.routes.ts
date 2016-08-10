import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
