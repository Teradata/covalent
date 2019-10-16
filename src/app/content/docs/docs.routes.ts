import { Routes, RouterModule } from '@angular/router';
import { TdReadmeLoaderComponent } from 'app/documentation-tools/readme-loader/readme-loader.component';

const routes: Routes = [
  {
    children: [
      {
        path: '',
        redirectTo: 'get-started',
      },
      {
        path: 'get-started',
        children: [
          { path: '', redirectTo: 'overview' },
          { path: 'overview', component: TdReadmeLoaderComponent, data: { resourceUrl: 'docs/GETTING_STARTED.md' } },
          { path: 'something', component: TdReadmeLoaderComponent, data: { resourceUrl: 'docs/GETTING_STARTED.md' } },
        ],
      },
    ],
    path: 'docs',
  },
];

export const docsRoutes: any = RouterModule.forChild(routes);
