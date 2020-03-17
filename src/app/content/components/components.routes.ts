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
          import('./component-demos/breadcrumbs/breadcrumbs.module').then((m: any) => m.BreadcrumbsDemoModule),
      },
      {
        path: 'chips',
        loadChildren: () => import('./component-demos/chips/chips.module').then((m: any) => m.ChipsDemoModule),
      },
      {
        path: 'code-editor',
        loadChildren: () =>
          import('./component-demos/code-editor/code-editor.module').then((m: any) => m.CodeEditorDemoModule),
      },
      {
        path: 'dialogs',
        loadChildren: () => import('./component-demos/dialogs/dialogs.module').then((m: any) => m.DialogsDemoModule),
      },
      {
        path: 'dynamic-forms',
        loadChildren: () =>
          import('./component-demos/dynamic-forms/dynamic-forms.module').then((m: any) => m.DynamicFormsDemoModule),
      },
      {
        path: 'expansion-panels',
        loadChildren: () =>
          import('./component-demos/expansion-panels/expansion-panels.module').then(
            (m: any) => m.ExpansionPanelsDemoModule,
          ),
      },
      {
        path: 'file-input',
        loadChildren: () =>
          import('./component-demos/file-input/file-input.module').then((m: any) => m.FileInputDemoModule),
      },
      {
        path: 'flavored-markdown',
        loadChildren: () =>
          import('./component-demos/flavored-markdown/flavored-markdown.module').then(
            (m: any) => m.FlavoredMarkdownDemoModule,
          ),
      },
      {
        path: 'markdown-parser',
        loadChildren: () => import('./component-demos/markdown/markdown.module').then((m: any) => m.MarkdownDemoModule),
      },
      {
        path: 'highlight',
        loadChildren: () =>
          import('./component-demos/highlight/highlight.module').then((m: any) => m.HighlightDemoModule),
      },
      {
        path: 'json-formatter',
        loadChildren: () =>
          import('./component-demos/json-formatter/json-formatter.module').then((m: any) => m.JsonFormatterDemoModule),
      },
      {
        path: 'loading',
        loadChildren: () => import('./component-demos/loading/loading.module').then((m: any) => m.LoadingDemoModule),
      },
      {
        path: 'markdown-navigator',
        loadChildren: () =>
          import('./component-demos/markdown-navigator/markdown-navigator.module').then(
            (m: any) => m.MarkdownNavigatorDemoModule,
          ),
      },
      {
        path: 'message',
        loadChildren: () => import('./component-demos/message/message.module').then((m: any) => m.MessageDemoModule),
      },
      {
        path: 'paging',
        loadChildren: () => import('./component-demos/paging/paging.module').then((m: any) => m.PagingDemoModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./component-demos/search/search.module').then((m: any) => m.SearchDemoModule),
      },
      {
        path: 'sidesheet',
        loadChildren: () =>
          import('./component-demos/sidesheet/sidesheet.module').then((m: any) => m.SidesheetDemoModule),
      },
      {
        path: 'layout',
        loadChildren: () => import('./component-demos/layout/layout.module').then((m: any) => m.LayoutDemoModule),
      },
      {
        path: 'layout-nav',
        loadChildren: () =>
          import('./component-demos/layout-nav/layout-nav.module').then((m: any) => m.LayoutNavDemoModule),
      },
      {
        path: 'layout-nav-list',
        loadChildren: () =>
          import('./component-demos/layout-nav-list/layout-nav-list.module').then(
            (m: any) => m.LayoutNavListDemoModule,
          ),
      },
      {
        path: 'layout-card-over',
        loadChildren: () =>
          import('./component-demos/layout-card-over/layout-card-over.module').then(
            (m: any) => m.LayoutCardOverDemoModule,
          ),
      },
      {
        path: 'layout-management-list',
        loadChildren: () =>
          import('./component-demos/layout-management-list/layout-management-list.module').then(
            (m: any) => m.LayoutManagementListDemoModule,
          ),
      },
      {
        path: 'nav-steps',
        loadChildren: () =>
          import('./component-demos/nav-steps/nav-steps.module').then((m: any) => m.NavstepsDemoModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./component-demos/notifications/notifications.module').then((m: any) => m.NotificationsDemoModule),
      },
      {
        path: 'tab-select',
        loadChildren: () =>
          import('./component-demos/tab-select/tab-select.module').then((m: any) => m.TabSelectDemoModule),
      },
      {
        path: 'text-editor',
        loadChildren: () =>
          import('./component-demos/text-editor/text-editor.module').then((m: any) => m.TextEditorDemoModule),
      },
      {
        path: 'data-table',
        loadChildren: () =>
          import('./component-demos/data-table/data-table.module').then((m: any) => m.DataTableDemoModule),
      },
      {
        path: 'steps',
        loadChildren: () => import('./component-demos/steps/steps.module').then((m: any) => m.StepsDemoModule),
      },
      {
        path: 'loading-mask',
        loadChildren: () =>
          import('./component-demos/loading-mask/loading-mask.module').then((m: any) => m.LoadingMaskDemoModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
