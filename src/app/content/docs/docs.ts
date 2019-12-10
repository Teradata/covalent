import { docsRouteBuilder } from 'app/utilities/route-builder';

export const docsRouteCategories: any = [
  { name: 'Getting Started', nested: true, rootRoute: 'get-started' },
  { name: 'Theming', nested: true, rootRoute: 'theming' },
  { name: 'Migration', nested: true, rootRoute: 'migration' },
  { name: 'Other', nested: false, rootRoute: 'other' },
];

const [gettingStarted, theming, migration, other] = docsRouteCategories;

export const docsContentDetails: any = [
  {
    name: 'Overview',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/get-started/overview',
    category: gettingStarted.name,
  },
  {
    name: 'something',
    docUrl: 'docs/GETTING_STARTED.md',
    route: '/docs/get-started/something',
    category: gettingStarted.name,
  },
];

export const docsChildRoutes: object[] = docsRouteBuilder(docsContentDetails);
