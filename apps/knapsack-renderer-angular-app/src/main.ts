import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { KsAppModule } from './dist/ks-ng-app.module';

platformBrowserDynamic()
  .bootstrapModule(KsAppModule)
  .catch((err) => console.error(err));
