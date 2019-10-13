import { routeBuilder, IScopedRouteBuilder } from 'app/utilities/route-builder';

export const echartsContentDetails: any = [
  {
    name: 'Bar',
    id: 'bar',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/echarts/bar/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Combination',
    id: 'combination',
    description: 'Combination description',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    overviewDocUrl: '',
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Breadcrumbs',
    id: 'breadcrumbs',
    description: 'A component for rendering and navigating through documentation.',
    apiDocUrl: 'platform/experimental/help/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    overviewDocUrl: 'platform/echarts/bar/README.md',
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'JSON Formatter',
    id: 'json-formatter',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Loading',
    id: 'loading',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Search',
    id: 'search',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'File Input',
    id: 'file-input',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Messages & Alerts',
    id: 'messages-alerts',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Tab Select',
    id: 'tab-select',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Simple Dialogs',
    description: 'Breadcrumbs description blah blah',
    id: 'simple-dialogs',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Dynamic Forms',
    id: 'dynamic-forms',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Chips & Autocomplete',
    id: 'chips-autocomplete',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Markdown Parser',
    id: 'markdown-parser',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Flavored Markdown Parser',
    id: 'flavored-markdown-parser',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Syntax Highlighting',
    id: 'syntax-highlight',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Code Editor',
    id: 'code-editor',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
  {
    name: 'Markdown Editor',
    id: 'markdown-editor',
    description: 'Breadcrumbs description blah blah',
    apiDocUrl: 'platform/core/breadcrumbs/README.md',
    showExampleTab: true,
    showOverviewDemo: true,
    // componentDoc: url to component description,
    // overViewDemo: wether to show demo on overview,
    // module: []
  },
];

export const setEchartRoutes: IScopedRouteBuilder = routeBuilder(echartsContentDetails);
