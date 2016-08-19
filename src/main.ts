import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MdIconRegistry } from '@angular2-material/icon';
import { HTTP_PROVIDERS } from '@angular/http';

import { DocsAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { TD_MEDIA_PROVIDERS } from './platform/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(DocsAppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  MdIconRegistry,
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  TD_MEDIA_PROVIDERS,
  // Sets the app to use /#/ hash urls for github pages
  { provide: LocationStrategy, useClass: HashLocationStrategy },
]);
