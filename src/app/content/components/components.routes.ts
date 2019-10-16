import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'components' } },
      {
        path: 'breadcrumbs',
        loadChildren: () =>
          import('./component-demos/breadcrumbs/breadcrumbs.module').then((m) => m.BreadcrumbsDemoModule),
      },
      {
        path: 'markdown-parser',
        loadChildren: () => import('./component-demos/markdown/markdown.module').then((m) => m.MarkdownDemoModule),
      },
      {
        path: 'paging',
        loadChildren: () => import('./component-demos/paging/paging.module').then((m) => m.PagingDemoModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./component-demos/search/search.module').then((m) => m.SearchDemoModule),
      },
      {
        path: 'sidesheet',
        loadChildren: () => import('./component-demos/sidesheet/sidesheet.module').then((m) => m.SidesheetDemoModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
