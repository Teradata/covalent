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
        path: 'highlight',
        loadChildren: () => import('./component-demos/highlight/highlight.module').then((m) => m.HighlightDemoModule),
      },
      {
        path: 'json-formatter',
        loadChildren: () =>
          import('./component-demos/json-formatter/json-formatter.module').then((m) => m.JsonFormatterDemoModule),
      },
      {
        path: 'loading',
        loadChildren: () => import('./component-demos/loading/loading.module').then((m) => m.LoadingDemoModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
