import { routeBuilder, IScopedRouteBuilder } from '../../utilities/route-builder';

export const componentRouteCategories = [
  { name: '', nested: false },
  { name: 'Layout', nested: false },
  { name: 'Buttons & Indicators', nested: false },
  { name: 'Navigation', nested: false },
  { name: 'Dialogs', nested: false },
  { name: 'Forms', nested: false },
  { name: 'Markdown', nested: false },
];

const [root, layout, buttons, nav, dialogs, forms, markdown] = componentRouteCategories;

export const componentDetails: any = [
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'Responsive navigation indicators',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/breadcrumbs',
    demos: [],
  },
  {
    name: 'File Input',
    id: 'file-input',
    description: 'Text input for files',
    apiDocUrl: 'platform/core/file/file-input/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/file-input',
  },
  {
    name: 'Flavored Markdown Parser',
    id: 'flavored-markdown',
    description: 'Parse and render markdown code with a Material Design flavor',
    apiDocUrl: 'platform/flavored-markdown/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: markdown.name,
    route: '/components/flavored-markdown',
  },
  {
    name: 'Loading Mask',
    id: 'loading-mask',
    description:
      'Animated mask for multiple uses on loading states asoudhasiudhausihdiasuhdiuashdiu suad asiud haisud aisu',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: 'Buttons & Indicators',
    route: '/components/breadcrumbs',
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Search and filter items',
    apiDocUrl: 'this one has two readmes that need to be consolidated',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/search',
  },
  {
    name: 'Sidesheet Content',
    id: 'sidesheet',
    description: 'Basic sidesheet content',
    apiDocUrl: 'platform/core/sidesheet/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: layout.name,
    route: '/components/sidesheet',
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
