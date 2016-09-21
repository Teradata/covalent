import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment, AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

// JIT compile long form
platformBrowserDynamic().bootstrapModule(AppModule);
