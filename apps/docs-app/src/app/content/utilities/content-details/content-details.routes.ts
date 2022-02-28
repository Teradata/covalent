import { Routes, RouterModule } from '@angular/router';
import { ContentDetailsComponent } from './content-details.component';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { ContentApiComponent } from './content-api/content-api.component';
import { ContentExamplesComponent } from './content-examples/content-examples.component';

const routes: Routes = [
  {
    component: ContentDetailsComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'overview',
      },
      {
        component: ContentOverviewComponent,
        path: 'overview',
      },
      {
        component: ContentApiComponent,
        path: 'api',
      },
      {
        component: ContentExamplesComponent,
        path: 'examples',
      },
    ],
  },
];

export const contentDetailsRoutes: any = RouterModule.forChild(routes);
