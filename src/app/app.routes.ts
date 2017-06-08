import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  }, {
    component: TemplatesComponent,
    path: 'templates',
  }, {
    path: '', loadChildren: './components/docs/docs.module#DocsModule',
  }, {
    path: '', loadChildren: './components/style-guide/style-guide.module#StyleGuideModule',
  }, {
    path: '', loadChildren: './components/layouts/layouts.module#LayoutsModule',
  }, {
    path: '', loadChildren: './components/components/components.module#ComponentsModule',
  }, {
    path: '**', redirectTo: '/',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
