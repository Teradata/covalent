// Loads recursively all the .spec and framework files
import 'core-js/es7/reflect';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: any;

export function setupTestEnv(context: any): void {
  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  // And load the modules.
  context.keys().map(context);
}
