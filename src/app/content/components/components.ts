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
    route: '/components/xyz',
  },
  {
    name: 'Highlight',
    id: 'highlight',
    description: 'Hightlight it',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/highlight',
    demos: [],
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'JSON format it',
    apiDocUrl: 'platform/core/json-formatter/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: '',
    route: '/components/json-formatter',
    demos: [],
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'loading',
    apiDocUrl: 'platform/core/loading/README.md',
    overviewDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    icon: '',
    category: buttons.name,
    route: '/components/loading',
    demos: [],
  },
];

export const setComponentRoutes: IScopedRouteBuilder = routeBuilder(componentDetails);
