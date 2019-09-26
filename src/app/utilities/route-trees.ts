export interface ICombinedRouteGroup {
  name: string;
  routeGroups: IRouteGroup[];
  rootRoute: string;
}

interface IRouteGroup {
  name: string;
  nested: boolean;
  views: IRoute[];
}

interface IRoute {
  name: string;
  route: string;
  exactMatch: boolean;
}

export const docsRouteGroup: IRouteGroup[] = [
  {
    name: '',
    nested: false,
    views: [
      {
        name: 'Get Started',
        exactMatch: true,
        route: '/docs',
      },
    ],
  },
  {
    name: 'Nested Group',
    nested: true,
    views: [
      {
        name: 'Get Started',
        exactMatch: true,
        route: '/some-route',
      },
      {
        name: 'Get Started',
        exactMatch: true,
        route: '/some-other route',
      },
    ],
  },
];

export const echartsRouteGroup: IRouteGroup[] = [
  {
    name: '',
    nested: false,
    views: [
      {
        name: 'Overview',
        route: '/echarts',
        exactMatch: true,
      },
      {
        name: 'Chart',
        route: '/echarts/chart',
        exactMatch: false,
      },
    ],
  },
  {
    name: 'Chart Types',
    nested: false,
    views: [
      {
        name: 'Bar',
        route: '/echarts/bar',
        exactMatch: true,
      },
      {
        name: 'Chart',
        route: '/echarts/chart',
        exactMatch: false,
      },
    ],
  },
];

export const componentRoutesGroup: IRouteGroup[] = [
  {
    name: '',
    nested: false,
    views: [
      {
        name: 'Overview',
        route: '/components',
        exactMatch: true,
      },
    ],
  },
  {
    name: 'Layout',
    nested: false,
    views: [
      {
        name: 'JSON Formatter',
        route: '/components/json-formatter',
        exactMatch: false,
      },
      {
        name: 'Expansion Panel',
        route: '/components/expansion-panel',
        exactMatch: false,
      },
      {
        name: 'Sidesheet Content',
        route: '/components/sidesheet',
        exactMatch: false,
      },
      {
        name: 'Draggable Help',
        route: '/components/help',
        exactMatch: false,
      },
    ],
  },
  {
    name: 'Buttons & Indicators',
    nested: false,
    views: [
      {
        name: 'Search',
        route: '/components/search',
        exactMatch: false,
      },
      {
        name: 'Loading',
        route: '/components/loading',
        exactMatch: false,
      },
      {
        name: 'File Input',
        route: '/components/file-input',
        exactMatch: false,
      },
      {
        name: 'Messages & Alerts',
        route: '/components/messages-alerts',
        exactMatch: false,
      },
    ],
  },
  {
    name: 'Navigation',
    nested: false,
    views: [
      {
        name: 'Tab Select',
        route: '/components/tab-select',
        exactMatch: false,
      },
      {
        name: 'Breadcrumbs',
        route: '/components/breadcrumbs',
        exactMatch: false,
      },
    ],
  },
  {
    name: 'Dialogs',
    nested: false,
    views: [
      {
        name: 'Dynamic Forms',
        route: '/components/dynamic-forms',
        exactMatch: false,
      },
      {
        name: 'Chips Autocomplete',
        route: '/components/chips',
        exactMatch: false,
      },
    ],
  },
  {
    name: 'Forms',
    nested: false,
    views: [
      {
        name: 'Dynamic Forms',
        route: '/components/dynamic-forms',
        exactMatch: false,
      },
      {
        name: 'Chips Autocomplete',
        route: '/components/chips',
        exactMatch: false,
      },
    ],
  },
];

export const utilitiesRouteGroup: IRouteGroup[] = [
  {
    name: '',
    nested: false,
    views: [
      {
        name: 'Overview',
        route: '/docs',
        exactMatch: true,
      },
      {
        name: 'Chart',
        route: '/echarts/chart',
        exactMatch: false,
      },
    ],
  },
];

export const routeGroups: ICombinedRouteGroup[] = [
  { name: 'Documentation', routeGroups: docsRouteGroup, rootRoute: '/docs' },
  { name: 'Components', routeGroups: componentRoutesGroup, rootRoute: '/components' },
  { name: 'ECharts', routeGroups: echartsRouteGroup, rootRoute: '/echarts' },
  { name: 'Utilities', routeGroups: utilitiesRouteGroup, rootRoute: '/utilities' },
];
