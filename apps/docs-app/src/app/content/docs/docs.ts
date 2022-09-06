import { docsRouteBuilder } from '../../utilities/route-builder';

export const docsRouteCategories: any = [
  { name: 'Getting Started', nested: true, rootRoute: 'get-started' },
  { name: 'Theming', nested: true, rootRoute: 'theming' },
  // { name: 'Migration', nested: true, rootRoute: 'migration' },
  // { name: 'Other', nested: false, rootRoute: 'other' },
];

const [gettingStarted, theming] = docsRouteCategories;
// const [gettingStarted, theming, migration, other] = docsRouteCategories;

export const docsContentDetails: any = [
  {
    name: 'What is Covalent?',
    docUrl: 'docs/COVALENT.md',
    route: '/docs/get-started/what-is-covalent',
    category: gettingStarted.name,
  },
  {
    name: 'Get Covalent',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/get-started/overview',
    category: gettingStarted.name,
  },
  {
    name: 'Angular Material',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/get-started/angular',
    category: gettingStarted.name,
  },
  {
    name: 'SVG Icon Sets',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/theming/icon-sets',
    category: theming.name,
  },
  {
    name: 'Custom Theme',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/theming/custom-theme',
    category: theming.name,
  },
  {
    name: 'Utility Sass Mixins',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/theming/sass-mixins',
    category: theming.name,
  },
];

export const docsChildRoutes: object[] = docsRouteBuilder(docsContentDetails);
