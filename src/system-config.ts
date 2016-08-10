/***********************************************************************************************
 * User Configuration.
 */

/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Everything underneath this line is managed by the CLI.
 */
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // Library specific barrels.
  'platform',
  'platform/core',
  'platform/highlight',
  'platform/file-upload',
  'platform/markdown',

  // App specific barrels.
  'app/',
  'app/components/home',
  'app/components/components',
  'app/components/docs',
  'app/components/docs/overview',
  'app/components/docs/creating',
  'app/components/docs/angular-material',
  'app/components/docs/angular-2',
  'app/components/docs/build-tasks',
  'app/components/docs/deployment',
  'app/components/docs/icons',
  'app/components/docs/testing',
  'app/components/layouts',
  'app/components/layouts/overview',
  'app/components/layouts/nav-view',
  'app/components/layouts/nav-list',
  'app/components/layouts/card-over',
  'app/components/layouts/manage-list',
  'app/components/style-guide',
  'app/components/style-guide/colors',
  'app/components/style-guide/iconography',
  'app/components/style-guide/logo',
  'app/components/style-guide/product-icons',
  'app/components/style-guide/typography',
  'app/components/style-guide/material-components',
  'app/components/style-guide/cards',
  'app/components/style-guide/utility-styles',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

// Angular Material 2 Packages
const materialPackages: string[] = [
  'button',
  'button-toggle',
  'card',
  'checkbox',
  'core',
  'grid-list',
  'icon',
  'input',
  'list',
  'menu',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slider',
  'slide-toggle',
  'tabs',
  'toolbar',
  'tooltip',
];

materialPackages.forEach(function(pkg: string): void {
  let name: string = '@angular2-material/' + pkg;
  packages[name] = {
    defaultExtension: 'js',
    format: 'cjs',
    main: pkg + '.js',
  };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material',
  },
  packages: cliSystemConfigPackages,
});

// Apply the user's configuration.
System.config({ map, packages, materialPackages });
