import { IComponentDetails } from '../component-interfaces';

export const utilitiesRouteCategories: any = [{ name: '', nested: false }];

const tabs: object = {
  showOverview: true,
  showAPI: true,
  showExamples: true,
  showMigration: false,
};

const [root, http, media] = utilitiesRouteCategories;

export const createUtilitiesDetails: IComponentDetails[] = [
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
];

export const utilitiesContentDetails: IComponentDetails[] = createUtilitiesDetails.map(
  (component: IComponentDetails) => {
    return { ...tabs, ...component };
  },
);
