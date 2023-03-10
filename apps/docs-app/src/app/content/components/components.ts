import {
  routeBuilder,
  IScopedRouteBuilder,
} from '../../utilities/route-builder';
import { IComponentDetails } from '../component-interfaces';

export const componentRouteCategories: any = [
  { name: '', nested: false, color: '' },
  { name: 'Screen Layouts', nested: false, color: 'td-blue' },
  { name: 'Core Basics', nested: false, color: 'pink-900' },
  { name: 'Code Formatting', nested: false, color: 'yellow-900' },
  { name: 'Markdown', nested: false, color: 'deep-purple-900' },
  { name: 'Guided Tour', nested: false, color: 'blue-900' },
];

const tabs: object = {
  showOverview: true,
  showAPI: true,
  showExamples: true,
  showMigration: false,
};

const [root, viewLayouts, buttons, code, markdown, tour] =
  componentRouteCategories;

export const createComponentDetails: IComponentDetails[] = [
  {
    name: 'Search',
    id: 'search',
    description: 'Component used to search data within a dataset',
    apiDocUrl: 'libs/angular/search/README.md',
    icon: 'search',
    category: buttons.name,
    route: '/components/search',
    demo: import('./component-demos/search/demos/search-demo.module').then(
      (mod: any) => mod.SearchDemoModule
    ),
  },
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'Responsive navigation indicators',
    apiDocUrl: 'libs/angular/breadcrumbs/README.md',
    icon: 'more_horiz',
    category: buttons.name,
    route: '/components/breadcrumbs',
    demo: import(
      './component-demos/breadcrumbs/demos/breadcrumbs-demo.module'
    ).then((mod: any) => mod.BreadcrumbsDemoModule),
  },
  {
    name: 'File Input',
    id: 'file-input',
    description: 'Text input for files',
    apiDocUrl: 'libs/angular/file/src/file-input/README.md',
    icon: 'space_bar',
    category: buttons.name,
    route: '/components/file-input',
    demo: import(
      './component-demos/file-input/demos/file-input-demo.module'
    ).then((mod: any) => mod.FileInputDemoModule),
  },
  {
    name: 'Message',
    id: 'message',
    description:
      'Informational component supporting visibility toggling and additional information action',
    apiDocUrl: 'libs/angular/message/README.md',
    icon: 'info_outline',
    category: buttons.name,
    route: '/components/message',
    demo: import('./component-demos/message/demos/message-demo.module').then(
      (mod: any) => mod.MessageDemoModule
    ),
  },
  {
    name: 'Dialogs',
    id: 'dialogs',
    description:
      'Quick way to use alert, confirm, prompt, and draggable dialogs',
    apiDocUrl: 'libs/angular/dialogs/README.md',
    icon: 'open_in_browser',
    category: buttons.name,
    route: '/components/dialogs',
    demo: import('./component-demos/dialogs/demos/dialogs-demo.module').then(
      (mod: any) => mod.DialogsDemoModule
    ),
  },
  {
    name: 'User Profile',
    id: 'user-profile',
    description:
      'User profile menu component with support for lists for customization',
    apiDocUrl: 'libs/angular/user-profile/README.md',
    icon: 'person',
    category: buttons.name,
    route: '/components/user-profile',
    demo: import(
      './component-demos/user-profile/demos/user-profile-demo.module'
    ).then((mod: any) => mod.UserProfileDemosModule),
  },
  {
    name: 'Syntax Highlight',
    id: 'highlight',
    description: 'Highlighting your code snippets',
    apiDocUrl: 'libs/angular-highlight/README.md',
    icon: 'code',
    category: code.name,
    route: '/components/highlight',
    demo: import(
      './component-demos/highlight/demos/highlight-demo.module'
    ).then((mod: any) => mod.HighlightDemoModule),
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'libs/angular/json-formatter/README.md',
    icon: 'format_indent_increase',
    category: buttons.name,
    route: '/components/json-formatter',
    demo: import(
      './component-demos/json-formatter/demos/json-formatter-demo.module'
    ).then((mod: any) => mod.JsonFormatterDemoModule),
  },
  {
    name: 'Code Editor',
    id: 'code-editor',
    description: 'Multi-language code editor with custom configurations',
    apiDocUrl: 'libs/angular-code-editor/README.md',
    icon: 'featured_play_list',
    category: code.name,
    route: '/components/code-editor',
    demo: import(
      './component-demos/code-editor/demos/code-editor-demo.module'
    ).then((mod: any) => mod.CodeEditorDemoModule),
  },
  {
    name: 'Guided Tour',
    id: 'guided-tour',
    description: 'Guided tours using Shepherd',
    apiDocUrl: 'libs/angular-guided-tour/README.md',
    icon: 'directions_bus',
    category: tour.name,
    route: '/components/guided-tour',
    demo: import(
      './component-demos/guided-tour/demos/guided-tour-demo.module'
    ).then((mod: any) => mod.GuidedTourDemosModule),
  },
  {
    name: 'Flavored Markdown Parser',
    id: 'flavored-markdown',
    description: 'Parse and render markdown code with a Material Design flavor',
    apiDocUrl: 'libs/markdown-flavored/README.md',
    icon: 'format_paint',
    category: markdown.name,
    route: '/components/flavored-markdown',
    demo: import(
      './component-demos/flavored-markdown/demos/flavored-markdown-demo.module'
    ).then((mod: any) => mod.FlavoredMarkdownDemoModule),
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'Circular or linear progress loader',
    apiDocUrl: 'libs/angular/loading/README.md',
    icon: 'hourglass_empty',
    category: buttons.name,
    route: '/components/loading',
    demo: import('./component-demos/loading/demos/loading-demo.module').then(
      (mod: any) => mod.LoadingDemoModule
    ),
  },
  {
    name: 'Markdown Parser',
    id: 'markdown-parser',
    description: 'Parse and render markdown code',
    apiDocUrl: 'libs/markdown/README.md',
    icon: 'chrome_reader_mode',
    category: markdown.name,
    route: '/components/markdown-parser',
    demo: import('./component-demos/markdown/demos/markdown-demo.module').then(
      (mod: any) => mod.MarkdownDemoModule
    ),
  },
  {
    name: 'Markdown Navigator',
    id: 'markdown-navigator',
    description:
      'A component for rendering and navigating through markdown, such as documentation.',
    apiDocUrl: 'libs/markdown-navigator/README.md',
    icon: 'subject',
    category: markdown.name,
    route: '/components/markdown-navigator',
    demo: import(
      './component-demos/markdown-navigator/demos/markdown-navigator-demo.module'
    ).then((mod: any) => mod.MarkdownNavigatorDemoModule),
  },
  {
    name: 'Base Layout',
    id: 'layout',
    description:
      'Blank main sidenav component that gets hooked as parent of all the other layouts',
    apiDocUrl: 'libs/angular/layout/README.md',
    showOverview: false,
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout',
    demo: import('./component-demos/layout/demos/layout-demo.module').then(
      (mod: any) => mod.LayoutDemosModule
    ),
  },
  {
    name: 'Nav View',
    id: 'layout-nav',
    description:
      'Layout with a custom navigation view with toolbar items and footers.',
    apiDocUrl: 'libs/angular/layout/src/layout-nav/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-nav',
    demo: import(
      './component-demos/layout-nav/demos/layout-nav-demo.module'
    ).then((mod: any) => mod.LayoutNavDemosModule),
  },
  {
    name: 'Nav List',
    id: 'layout-nav-list',
    description: 'Basic sidesheet content',
    apiDocUrl: 'libs/angular/layout/src/layout-nav-list/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-nav-list',
    demo: import(
      './component-demos/layout-nav-list/demos/layout-nav-list-demo.module'
    ).then((mod: any) => mod.LayoutNavListDemosModule),
  },
  {
    name: 'Focused Layout',
    id: 'layout-card-over',
    description: 'Single card layout for focusing on single tasks',
    apiDocUrl: 'libs/angular/layout/src/layout-card-over/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-card-over',
    demo: import(
      './component-demos/layout-card-over/demos/layout-card-over-demo.module'
    ).then((mod: any) => mod.LayoutCardOverDemosModule),
  },
  {
    name: 'Manage List',
    id: 'layout-management-list',
    description:
      'Management focused layout with toolbar items, item selections and footers',
    apiDocUrl: 'libs/angular/layout/src/layout-manage-list/README.md',
    icon: 'web',
    category: viewLayouts.name,
    route: '/components/layout-management-list',
    demo: import(
      './component-demos/layout-management-list/demos/layout-management-list-demo.module'
    ).then((mod: any) => mod.LayoutManagementListDemosModule),
  },
  {
    name: 'Side Sheet',
    id: 'side-sheet',
    description:
      "A side sheet dialog that overlays content with an animation (based on Angular Material's dialog)",
    apiDocUrl: 'libs/angular/side-sheet/README.md',
    icon: 'view_array',
    category: viewLayouts.name,
    route: '/components/side-sheet',
    demo: import(
      './component-demos/side-sheet/demos/sidesheet-demo.module'
    ).then((mod: any) => mod.SideSheetDemoModule),
  },
  {
    name: 'Dynamic Menu',
    id: 'dynamic-menu',
    description: 'Multi-level menu',
    apiDocUrl: 'libs/angular/dynamic-menu/README.md',
    icon: 'format_align_center',
    category: buttons.name,
    route: '/components/dynamic-menu',
    demo: import(
      './component-demos/dynamic-menu/demos/dynamic-menu-demo.module'
    ).then((mod: any) => mod.DynamicMenuDemoModule),
  },
  {
    name: 'Dynamic Forms',
    id: 'dynamic-forms',
    description: 'Build forms from a JS object',
    apiDocUrl: 'libs/angular-dynamic-forms/README.md',
    icon: 'format_align_center',
    category: buttons.name,
    route: '/components/dynamic-forms',
    demo: import(
      './component-demos/dynamic-forms/demos/dynamic-forms-demo.module'
    ).then((mod: any) => mod.DynamicFormsDemoModule),
  },
  {
    name: 'Text Editor',
    id: 'text-editor',
    description:
      'Simple markdown text editor component (edit the markdown in the left editor for a real-time preview)',
    apiDocUrl: 'libs/angular-text-editor/README.md',
    icon: 'keyboard',
    category: markdown.name,
    route: '/components/text-editor',
    demo: import(
      './component-demos/text-editor/demos/text-editor-demo.module'
    ).then((mod: any) => mod.TextEditorDemoModule),
  },
];

export const componentDetails: IComponentDetails[] = createComponentDetails.map(
  (component: IComponentDetails) => {
    return { ...tabs, ...component };
  }
);

export const setComponentRoutes: IScopedRouteBuilder =
  routeBuilder(componentDetails);
