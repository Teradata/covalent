/***********************************************************************************************
 * User Configuration.
 */

/** Map relative paths to URLs. */
const map: any = {
  '@angular/core/testing': 'vendor/@angular/core/bundles/core-testing.umd.js',
  '@angular/compiler/testing': 'vendor/@angular/compiler/bundles/compiler-testing.umd.js',
  '@angular/router/testing': 'vendor/@angular/router/bundles/router-testing.umd.js',
  '@angular/http/testing': 'vendor/@angular/http/bundles/http-testing.umd.js',
  '@angular/common/testing': 'vendor/@angular/common/bundles/common-testing.umd.js',
  '@angular/platform-browser/testing': 'vendor/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
  '@angular/platform-browser-dynamic/testing':
  'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Everything underneath this line is managed by the CLI.
 */
const angularPackages: any = {
  // Angular specific barrels.
  '@angular/core': { main: 'bundles/core.umd.js'},
  '@angular/core/testing': { main: 'bundles/core-testing.umd.js'},
  '@angular/common': { main: 'bundles/common.umd.js'},
  '@angular/compiler': { main: 'bundles/compiler.umd.js'},
  '@angular/http': { main: 'bundles/http.umd.js'},
  '@angular/forms': { main: 'bundles/forms.umd.js'},
  '@angular/router': { main: 'bundles/router.umd.js'},
  '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js'},
  '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js'},
  '@angular/platform-browser-dynamic/testing': {
    main: 'bundles/platform-browser-dynamic-testing.umd.js',
  },
};

const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',
  'highlight.js/lib',
  // Library specific barrels.
  'platform/core',
  'platform/highlight',
  'platform/file-upload',
  'platform/markdown',
  'platform/charts',
  'platform/charts/chart-line',
  'platform/charts/chart-bar',
  'platform/http',
  'platform/json-formatter',
  'platform/chips',
  // App specific barrels.
  'app/',
  'app/components/components',
  'app/components/docs',
  'app/components/layouts',
  'app/components/style-guide',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = angularPackages;
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
    main: pkg + '.umd.js',
  };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'highlight.js/lib': 'vendor/highlight.js/lib',
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material',
  },
  packages: cliSystemConfigPackages,
});

// Apply the user's configuration.
System.config({ map, packages, materialPackages });
