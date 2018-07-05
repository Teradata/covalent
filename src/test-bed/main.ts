import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
import { TestBedModule } from './test-bed.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TestBedModule);
