import { Routes, RouterModule } from '@angular/router';

import { HttpDemoComponent } from './sandbox/http/http.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  }, {
    component: HttpDemoComponent,
    path: 'http',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
});
