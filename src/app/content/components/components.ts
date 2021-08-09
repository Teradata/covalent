import { routeBuilder, IScopedRouteBuilder } from '../../utilities/route-builder';
import { IComponentDetails } from '../component-interfaces';

export const componentRouteCategories: any = [
  { name: '', nested: false, color: '' },
  { name: 'Screen Layouts', nested: false, color: 'td-blue' },
  { name: 'Content Layout', nested: false, color: 'td-yellow' },
  { name: 'Buttons & Indicators', nested: false, color: 'pink-900' },
  { name: 'Navigation', nested: false, color: 'orange-900' },
  { name: 'Dialogs', nested: false, color: 'td-teal-900' },
  { name: 'Guided Tour', nested: false, color: 'blue-900' },
  { name: 'Forms', nested: false, color: 'amber-900' },
  { name: 'Markdown', nested: false, color: 'deep-purple-900' },
  { name: 'Editors', nested: false, color: 'yellow-900' },
  { name: 'Formatting', nested: false, color: 'indigo-900' },
];

const tabs: object = {
  showOverview: true,
  showAPI: true,
  showExamples: true,
  showMigration: false,
};

const [root, viewLayouts, layout, buttons, nav, dialogs, guidedTour, forms, markdown, editors, formatting] =
  componentRouteCategories;

export const createComponentDetails: IComponentDetails[] = [
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'Responsive navigation indicators',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    icon: 'more_horiz',
    category: nav.name,
    route: '/components/breadcrumbs',
    demo: () =>
      import('./component-demos/breadcrumbs/demos/breadcrumbs-demo.module').then(
        (mod: any) => mod.BreadcrumbsDemoModule,
      ),
  },
  {
    name: 'Chips Autocomplete',
    id: 'chips',
    description: 'Field completion with chips',
    apiDocUrl: 'platform/core/chips/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/chips/overview',
    icon: 'label',
    category: forms.name,
    route: '/components/chips',
    demo: () => import('./component-demos/chips/demos/chips-demo.module').then((mod: any) => mod.ChipsDemoModule),
  },
  {
    name: 'Code Editor',
    id: 'code-editor',
    description: 'Multi-language code editor with custom configurations',
    apiDocUrl: 'platform/code-editor/README.md',
    icon: 'featured_play_list',
    category: editors.name,
    route: '/components/code-editor',
    demo: () =>
      import('./component-demos/code-editor/demos/code-editor-demo.module').then(
        (mod: any) => mod.CodeEditorDemoModule,
      ),
  },
  {
    name: 'Dialogs',
    id: 'dialogs',
    description: 'Quick way to use alert, confirm, prompt, and draggable dialogs',
    apiDocUrl: 'platform/core/dialogs/README.md',
    icon: 'open_in_browser',
    category: dialogs.name,
    route: '/components/dialogs',
    demo: () => import('./component-demos/dialogs/demos/dialogs-demo.module').then((mod: any) => mod.DialogsDemoModule),
  },
  {
    name: 'Guided Tour',
    id: 'guided-tour',
    description: 'Guided tours using Shepherd',
    apiDocUrl: 'platform/guided-tour/README.md',
    icon: 'directions_bus',
    category: guidedTour.name,
    route: '/components/guided-tour',
    demo: () =>
      import('./component-demos/guided-tour/demos/guided-tour-demo.module').then(
        (mod: any) => mod.GuidedTourDemosModule,
      ),
  },
  {
    name: 'Dynamic Forms',
    id: 'dynamic-forms',
    description: 'Build forms from a JS object',
    apiDocUrl: 'platform/dynamic-forms/README.md',
    icon: 'format_align_center',
    category: forms.name,
    route: '/components/dynamic-forms',
    demo: () =>
      import('./component-demos/dynamic-forms/demos/dynamic-forms-demo.module').then(
        (mod: any) => mod.DynamicFormsDemoModule,
      ),
  },
  {
    name: 'File Input',
    id: 'file-input',
    description: 'Text input for files',
    apiDocUrl: 'platform/core/file/file-input/README.md',
    icon: 'space_bar',
    category: buttons.name,
    route: '/components/file-input',
    demo: () =>
      import('./component-demos/file-input/demos/file-input-demo.module').then((mod: any) => mod.FileInputDemoModule),
  },
  {
    name: 'Stepper',
    id: 'steps',
    description: 'A sequence of logical and numbered steps with associated active and complete state',
    apiDocUrl: 'platform/core/steps/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/cdk/stepper/overview',
    icon: 'view_array',
    category: buttons.name,
    route: '/components/steps',
    demo: () => import('./component-demos/steps/demos/steps-demo.module').then((mod: any) => mod.StepsDemosModule),
  },
  {
    name: 'Flavored Markdown Parser',
    id: 'flavored-markdown',
    description: 'Parse and render markdown code with a Material Design flavor',
    apiDocUrl: 'platform/flavored-markdown/README.md',
    icon: 'format_paint',
    category: markdown.name,
    route: '/components/flavored-markdown',
    demo: () =>
      import('./component-demos/flavored-markdown/demos/flavored-markdown-demo.module').then(
        (mod: any) => mod.FlavoredMarkdownDemoModule,
      ),
  },
  {
    name: 'Syntax Highlight',
    id: 'highlight',
    description: 'Highlighting your code snippets',
    apiDocUrl: 'platform/highlight/README.md',
    icon: 'code',
    category: formatting.name,
    route: '/components/highlight',
    demo: () =>
      import('./component-demos/highlight/demos/highlight-demo.module').then((mod: any) => mod.HighlightDemoModule),
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'platform/core/json-formatter/README.md',
    icon: 'format_indent_increase',
    category: formatting.name,
    route: '/components/json-formatter',
    demo: () =>
      import('./component-demos/json-formatter/demos/json-formatter-demo.module').then(
        (mod: any) => mod.JsonFormatterDemoModule,
      ),
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'Circular or linear progress loader',
    apiDocUrl: 'platform/core/loading/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/progress-spinner/overview',
    icon: 'hourglass_empty',
    category: buttons.name,
    route: '/components/loading',
    demo: () => import('./component-demos/loading/demos/loading-demo.module').then((mod: any) => mod.LoadingDemoModule),
  },
  {
    name: 'Markdown Parser',
    id: 'markdown-parser',
    description: 'Parse and render markdown code',
    apiDocUrl: 'platform/markdown/README.md',
    icon: 'chrome_reader_mode',
    category: markdown.name,
    route: '/components/markdown-parser',
    demo: () =>
      import('./component-demos/markdown/demos/markdown-demo.module').then((mod: any) => mod.MarkdownDemoModule),
  },
  {
    name: 'Markdown Navigator',
    id: 'markdown-navigator',
    description: 'A component for rendering and navigating through markdown, such as documentation.',
    apiDocUrl: 'platform/markdown-navigator/README.md',
    icon: 'subject',
    category: markdown.name,
    route: '/components/markdown-navigator',
    demo: () =>
      import('./component-demos/markdown-navigator/demos/markdown-navigator-demo.module').then(
        (mod: any) => mod.MarkdownNavigatorDemoModule,
      ),
  },
  {
    name: 'Message',
    id: 'message',
    description: 'Informational component supporting visibility toggling and additional information action',
    apiDocUrl: 'platform/core/message/README.md',
    icon: 'info_outline',
    category: buttons.name,
    route: '/components/message',
    demo: () => import('./component-demos/message/demos/message-demo.module').then((mod: any) => mod.MessageDemoModule),
  },
  {
    name: 'Paging',
    id: 'paging',
    description: 'Component used to paging within a dataset',
    apiDocUrl: 'platform/core/paging/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/paginator/overview',
    icon: 'swap_horiz',
    category: nav.name,
    route: '/components/paging',
    demo: () => import('./component-demos/paging/demos/paging-demo.module').then((mod: any) => mod.PagingDemoModule),
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Component used to search data within a dataset',
    apiDocUrl: 'platform/core/search/README.md',
    icon: 'search',
    category: buttons.name,
    route: '/components/search',
    demo: () => import('./component-demos/search/demos/search-demo.module').then((mod: any) => mod.SearchDemoModule),
  },
  {
    name: 'Data Table',
    id: 'data-table',
    description: 'Component for displaying tabular data',
    apiDocUrl: 'platform/core/data-table/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/table/overview',
    icon: 'border_all',
    category: layout.name,
    route: '/components/data-table',
    demo: () =>
      import('./component-demos/data-table/demos/data-table-demo.module').then((mod: any) => mod.DataTableDemosModule),
  },
  {
    name: 'Expansion Panels',
    id: 'expansion-panels',
    description: 'Expand and collapse containers',
    apiDocUrl: 'platform/core/expansion-panel/README.md',
    showExamples: false,
    showOverview: false,
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/expansion/overview',
    icon: 'view_array',
    category: layout.name,
    route: '/components/expansion-panels',
    migration: () =>
      import('./component-demos/expansion-panels/demos/expansion-panels-demo.module').then(
        (mod: any) => mod.ExpansionPanelsDemoModule,
      ),
  },
  {
    name: 'Base Layout',
    id: 'layout',
    description: 'Blank main sidenav component that gets hooked as parent of all the other layouts',
    apiDocUrl: 'platform/core/layout/README.md',
    showOverview: false,
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout',
    demo: () => import('./component-demos/layout/demos/layout-demo.module').then((mod: any) => mod.LayoutDemosModule),
  },
  {
    name: 'Nav View',
    id: 'layout-nav',
    description: 'Layout with a custom navigation view with toolbar items and footers.',
    apiDocUrl: 'platform/core/layout/layout-nav/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-nav',
    demo: () =>
      import('./component-demos/layout-nav/demos/layout-nav-demo.module').then((mod: any) => mod.LayoutNavDemosModule),
  },
  {
    name: 'Nav List',
    id: 'layout-nav-list',
    description: 'Basic sidesheet content',
    apiDocUrl: 'platform/core/layout/layout-nav-list/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-nav-list',
    demo: () =>
      import('./component-demos/layout-nav-list/demos/layout-nav-list-demo.module').then(
        (mod: any) => mod.LayoutNavListDemosModule,
      ),
  },
  {
    name: 'Focused Layout',
    id: 'layout-card-over',
    description: 'Single card layout for focusing on single tasks',
    apiDocUrl: 'platform/core/layout/layout-card-over/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-card-over',
    demo: () =>
      import('./component-demos/layout-card-over/demos/layout-card-over-demo.module').then(
        (mod: any) => mod.LayoutCardOverDemosModule,
      ),
  },
  {
    name: 'Manage List',
    id: 'layout-management-list',
    description: 'Management focused layout with toolbar items, item selections and footers',
    apiDocUrl: 'platform/core/layout/layout-manage-list/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-management-list',
    demo: () =>
      import('./component-demos/layout-management-list/demos/layout-management-list-demo.module').then(
        (mod: any) => mod.LayoutManagementListDemosModule,
      ),
  },
  {
    name: 'Sidesheet Content',
    id: 'sidesheet',
    description: 'Basic sidesheet content',
    apiDocUrl: 'platform/core/sidesheet/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/sidenav/overview',
    icon: 'view_array',
    category: layout.name,
    route: '/components/sidesheet',
    demo: () =>
      import('./component-demos/sidesheet/demos/sidesheet-demo.module').then((mod: any) => mod.SidesheetDemoModule),
  },
  {
    name: 'Nav Steps',
    id: 'nav-steps',
    description:
      'Navigate across a sequence of logical and numbered steps. Shrink width of page to see responsive behavior',
    apiDocUrl: 'platform/core/steps/nav/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/stepper/overview',
    icon: 'format_line_spacing',
    category: nav.name,
    route: '/components/nav-steps',
    demo: () =>
      import('./component-demos/nav-steps/demos/nav-steps-demo.module').then((mod: any) => mod.NavStepsDemoModule),
  },
  {
    name: 'Dynamic Menu',
    id: 'dynamic-menu',
    description: 'Multi-level menu',
    apiDocUrl: 'platform/core/dynamic-menu/README.md',
    icon: 'format_align_center',
    category: nav.name,
    route: '/components/dynamic-menu',
    demo: () =>
      import('./component-demos/dynamic-menu/demos/dynamic-menu-demo.module').then(
        (mod: any) => mod.DynamicMenuDemoModule,
      ),
  },
  {
    name: 'Notifications',
    id: 'notifications',
    description: 'Notification count & menu for toolbar',
    apiDocUrl: 'platform/core/notifications/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/badge/overview',
    icon: 'notifications',
    category: buttons.name,
    route: '/components/notifications',
    demo: () =>
      import('./component-demos/notifications/demos/notifications-demo.module').then(
        (mod: any) => mod.NotificationsDemoModule,
      ),
  },
  {
    name: 'Tab Select',
    id: 'tab-select',
    description: 'Bind values to tabs and use them as filters',
    apiDocUrl: 'platform/core/tab-select/README.md',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/components/tabs/overview',
    icon: 'tab',
    category: forms.name,
    route: '/components/tab-select',
    demo: () =>
      import('./component-demos/tab-select/demos/tab-select-demo.module').then((mod: any) => mod.TabSelectDemoModule),
  },
  {
    name: 'Text Editor',
    id: 'text-editor',
    description: 'Simple markdown text editor component (edit the markdown in the left editor for a real-time preview)',
    apiDocUrl: 'platform/text-editor/README.md',
    icon: 'keyboard',
    category: editors.name,
    route: '/components/text-editor',
    demo: () =>
      import('./component-demos/text-editor/demos/text-editor-demo.module').then(
        (mod: any) => mod.TextEditorDemoModule,
      ),
  },
  {
    name: 'User Profile',
    id: 'user-profile',
    description: 'User profile menu component with support for lists for customization',
    apiDocUrl: 'platform/core/user-profile/README.md',
    icon: 'person',
    category: layout.name,
    route: '/components/user-profile',
    demo: () =>
      import('./component-demos/user-profile/demos/user-profile-demo.module').then(
        (mod: any) => mod.UserProfileDemosModule,
      ),
  },
  {
    name: 'Virtual Scrolling',
    id: 'virtual-scroll',
    description: 'Virtual Scroll a list of items',
    apiDocUrl: 'platform/core/virtual-scroll/README.md',
    showExamples: false,
    showOverview: false,
    showMigration: true,
    migrationUrl: 'https://material.angular.io/cdk/scrolling/overview',
    icon: 'format_line_spacing',
    category: layout.name,
    route: '/components/virtual-scroll',
    migration: () =>
      import('./component-demos/virtual-scroll/demos/virtual-scroll-demo.module').then(
        (mod: any) => mod.VirtualScrollDemoModule,
      ),
  },
  {
    name: 'File Upload',
    id: 'file-upload',
    description: 'Upload files from your computer or device',
    apiDocUrl: 'platform/core/file/file-upload/README.md',
    showExamples: false,
    showOverview: false,
    showMigration: true,
    migrationUrl: '#/components/file-input',
    icon: 'cloud_upload',
    category: buttons.name,
    route: '/components/file-upload',
    migration: () =>
      import('./component-demos/file-upload/demos/file-upload-demo.module').then(
        (mod: any) => mod.FileUploadDemoModule,
      ),
  },
];

export const componentDetails: IComponentDetails[] = createComponentDetails.map((component: IComponentDetails) => {
  return { ...tabs, ...component };
});

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
