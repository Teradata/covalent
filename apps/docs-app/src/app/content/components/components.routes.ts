import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: '',
        component: ComponentOverviewComponent,
        data: { category: 'components' },
      },
      {
        path: 'breadcrumbs',
        loadChildren: () =>
          import('./component-demos/breadcrumbs/breadcrumbs.module').then(
            (m: any) => m.BreadcrumbsDemoModule
          ),
      },
      {
        path: 'code-editor',
        loadChildren: () =>
          import('./component-demos/code-editor/code-editor.module').then(
            (m: any) => m.CodeEditorDemoModule
          ),
      },
      {
        path: 'dialogs',
        loadChildren: () =>
          import('./component-demos/dialogs/dialogs.module').then(
            (m: any) => m.DialogsDemoModule
          ),
      },
      {
        path: 'guided-tour',
        loadChildren: () =>
          import('./component-demos/guided-tour/guided-tour.module').then(
            (m: any) => m.GuidedTourDemoModule
          ),
      },
      {
        path: 'dynamic-forms',
        loadChildren: () =>
          import('./component-demos/dynamic-forms/dynamic-forms.module').then(
            (m: any) => m.DynamicFormsDemoModule
          ),
      },
      {
        path: 'dynamic-menu',
        loadChildren: () =>
          import('./component-demos/dynamic-menu/dynamic-menu.module').then(
            (m: any) => m.DynamicMenuDemoModule
          ),
      },
      {
        path: 'file-input',
        loadChildren: () =>
          import('./component-demos/file-input/file-input.module').then(
            (m: any) => m.FileInputDemoModule
          ),
      },
      {
        path: 'flavored-markdown',
        loadChildren: () =>
          import(
            './component-demos/flavored-markdown/flavored-markdown.module'
          ).then((m: any) => m.FlavoredMarkdownDemoModule),
      },
      {
        path: 'markdown-parser',
        loadChildren: () =>
          import('./component-demos/markdown/markdown.module').then(
            (m: any) => m.MarkdownDemoModule
          ),
      },
      {
        path: 'highlight',
        loadChildren: () =>
          import('./component-demos/highlight/highlight.module').then(
            (m: any) => m.HighlightDemoModule
          ),
      },
      {
        path: 'json-formatter',
        loadChildren: () =>
          import('./component-demos/json-formatter/json-formatter.module').then(
            (m: any) => m.JsonFormatterDemoModule
          ),
      },
      {
        path: 'markdown-navigator',
        loadChildren: () =>
          import(
            './component-demos/markdown-navigator/markdown-navigator.module'
          ).then((m: any) => m.MarkdownNavigatorDemoModule),
      },
      {
        path: 'message',
        loadChildren: () =>
          import('./component-demos/message/message.module').then(
            (m: any) => m.MessageDemoModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./component-demos/search/search.module').then(
            (m: any) => m.SearchDemoModule
          ),
      },
      {
        path: 'side-sheet',
        loadChildren: () =>
          import('./component-demos/side-sheet/sidesheet.module').then(
            (m: any) => m.SideSheetDemoModule
          ),
      },
      {
        path: 'layout',
        loadChildren: () =>
          import('./component-demos/layout/layout.module').then(
            (m: any) => m.LayoutDemoModule
          ),
      },
      {
        path: 'layout-nav',
        loadChildren: () =>
          import('./component-demos/layout-nav/layout-nav.module').then(
            (m: any) => m.LayoutNavDemoModule
          ),
      },
      {
        path: 'layout-nav-list',
        loadChildren: () =>
          import(
            './component-demos/layout-nav-list/layout-nav-list.module'
          ).then((m: any) => m.LayoutNavListDemoModule),
      },
      {
        path: 'layout-card-over',
        loadChildren: () =>
          import(
            './component-demos/layout-card-over/layout-card-over.module'
          ).then((m: any) => m.LayoutCardOverDemoModule),
      },
      {
        path: 'layout-management-list',
        loadChildren: () =>
          import(
            './component-demos/layout-management-list/layout-management-list.module'
          ).then((m: any) => m.LayoutManagementListDemoModule),
      },
      {
        path: 'text-editor',
        loadChildren: () =>
          import('./component-demos/text-editor/text-editor.module').then(
            (m: any) => m.TextEditorDemoModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./component-demos/user-profile/user-profile.module').then(
            (m: any) => m.UserProfileDemoModule
          ),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
