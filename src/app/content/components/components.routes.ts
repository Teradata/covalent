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
        path: 'file-input',
        loadChildren: () => import('./component-demos/file-input/file-input.module').then((m) => m.FileInputDemoModule),
      },
      {
        path: 'flavored-markdown',
        loadChildren: () =>
          import('./component-demos/flavored-markdown/flavored-markdown.module').then(
            (m) => m.FlavoredMarkdownDemoModule,
          ),
      },
      {
        path: 'markdown-parser',
        loadChildren: () => import('./component-demos/markdown/markdown.module').then((m) => m.MarkdownDemoModule),
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
