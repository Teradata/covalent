export const utilitiesRouteCategories = [
  { name: '', nested: false },
  { name: 'Http', nested: false },
  { name: 'Media Queries', nested: false },
];

const [root, http, media] = utilitiesRouteCategories;

export const utilitiesContentDetails: any = [
  {
    name: 'Http Service',
    id: 'http-service',
    description:
      'Service provided with methods that extend the @angular [HttpClient] service and provide an additional layer of interceptor functionality.',
    apiDocUrl: 'platform/http/interceptors/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    category: http.name,
    route: '/utilities/http-service',
  },
  {
    name: 'Http Decorators',
    id: 'http-decorators',
    description:
      'Framework of decorators on top of the angular [HttpClient] or covalent [TdHttpService] to enhance your services and give them Http capabilities.',
    apiDocUrl: 'platform/http/actions/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    category: http.name,
    route: '/utilities/http-decorators',
  },
  {
    name: 'Animations',
    id: 'animations',
    description:
      'Simple reusable animations to reduce boilerplate code. For custom and complex animations look into the Angular animations doc.',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: root.name,
    route: '/utilities/animations',
  },
  {
    name: 'Pipes',
    id: 'pipes',
    description: 'Custom angular pipes',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: root.name,
    route: '/utilities/pipes',
  },
  {
    name: 'Functions',
    id: 'functions',
    description: 'Helper functions',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: root.name,
    route: '/utilities/functions',
  },
  {
    name: 'Styling',
    id: 'styling',
    description: 'CSS style classes',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: root.name,
    route: '/utilities/styling',
  },
  {
    name: 'Query Service',
    id: 'styling',
    description: 'Responsive service & directive (for attributes)',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: media.name,
    route: '/utilities/media-service',
  },
  {
    name: 'Toggle Directive',
    id: 'styling',
    description: 'Responsive service & directive (for attributes)',
    apiDocUrl: '',
    showExampleTab: true,
    showOverviewDemo: true,
    category: media.name,
    route: '/utilities/media-directive',
  },
];
