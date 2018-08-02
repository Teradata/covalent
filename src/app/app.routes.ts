import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '**', redirectTo: '/',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
