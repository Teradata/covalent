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
const angularPackages = {
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

  // Library specific barrels.
  'platform/core',
  'platform/highlight',
  'platform/file-upload',
  'platform/markdown',

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
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material',
  },
  packages: cliSystemConfigPackages,
});

// Apply the user's configuration.
System.config({ map, packages, materialPackages });
