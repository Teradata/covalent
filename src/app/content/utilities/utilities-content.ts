import { IComponentDetails } from '../component-interfaces';

export const utilitiesRouteCategories: any = [
  { name: '', nested: false },
  { name: 'Http', nested: false },
  { name: 'Media Queries', nested: false },
];

const tabs: object = {
  showOverview: true,
  showAPI: true,
  showExamples: true,
  showMigration: false,
};

const [root, http, media] = utilitiesRouteCategories;

export const createUtilitiesDetails: IComponentDetails[] = [
  {
    name: 'Http Service',
    id: 'http-service',
    description:
      'Service provided with methods that extend the @angular [HttpClient] service and provide an additional layer of interceptor functionality.',
    apiDocUrl: 'platform/http/interceptors/README.md',
    showMigration: true,
    migrationUrl: 'https://angular.io/api/common/http',
    category: http.name,
    route: '/utilities/http-service',
  },
  {
    name: 'Http Decorators',
    id: 'http-decorators',
    description:
      'Framework of decorators on top of the angular [HttpClient] or covalent [TdHttpService] to enhance your services and give them Http capabilities.',
    apiDocUrl: 'platform/http/actions/README.md',
    showMigration: true,
    migrationUrl: 'https://angular.io/api/common/http',
    category: http.name,
    route: '/utilities/http-decorators',
  },
  {
    name: 'Animations',
    id: 'animations',
    description:
      'Simple reusable animations to reduce boilerplate code. For custom and complex animations look into the Angular animations doc.',
    apiDocUrl: '',
    category: root.name,
    route: '/utilities/animations',
  },
  {
    name: 'Directives',
    id: 'directives',
    description: 'Core Covalent custom directives',
    apiDocUrl: '',
    category: root.name,
    route: '/utilities/directives',
  },
  {
    name: 'Pipes',
    id: 'pipes',
    description: 'Custom angular pipes',
    apiDocUrl: '',
    category: root.name,
    route: '/utilities/pipes',
  },
  {
    name: 'Functions',
    id: 'functions',
    description: 'Helper functions',
    apiDocUrl: '',
    category: root.name,
    route: '/utilities/functions',
  },
  {
    name: 'Styling',
    id: 'styling',
    description: 'CSS style classes',
    apiDocUrl: '',
    category: root.name,
    route: '/utilities/styling',
  },
  {
    name: 'Query Service',
    id: 'styling',
    description: 'Responsive service & directive (for attributes)',
    apiDocUrl: '',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/cdk/layout/overview',
    category: media.name,
    route: '/utilities/media-service',
  },
  {
    name: 'Toggle Directive',
    id: 'styling',
    description: 'Responsive service & directive (for attributes)',
    apiDocUrl: '',
    showMigration: true,
    migrationUrl: 'https://material.angular.io/cdk/layout/overview',
    category: media.name,
    route: '/utilities/media-directive',
  },
];

export const utilitiesContentDetails: IComponentDetails[] = createUtilitiesDetails.map(
  (component: IComponentDetails) => {
    return { ...tabs, ...component };
  },
);
