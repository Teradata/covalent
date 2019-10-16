import { routeBuilder, IScopedRouteBuilder } from '../../utilities/route-builder';

export const componentRouteCategories = [
  { name: '', nested: false },
  { name: 'Layout', nested: false },
  { name: 'Buttons & Indicators', nested: false },
  { name: 'Navigation', nested: false },
  { name: 'Dialogs', nested: false },
  { name: 'Forms', nested: false },
];

const [root, layout, buttons, nav, dialogs, forms] = componentRouteCategories;

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
    name: 'Paging',
    id: 'paging',
    description: 'Component used to paging within a dataset',
    apiDocUrl: 'platform/core/paging/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'swap_horiz',
    category: nav.name,
    route: '/components/paging',
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Component used to search data within a dataset',
    apiDocUrl: 'platform/core/search/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'search',
    category: forms.name,
    route: '/components/search',
  },
  {
    name: 'Sidesheet',
    id: 'sidesheet',
    description: 'Sidesheet use to provide additional context within a particular scope',
    apiDocUrl: 'platform/core/sidesheet/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: 'view_array',
    category: layout.name,
    route: '/components/sidesheet',
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
