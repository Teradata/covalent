import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { CovalentTextEditorModule } from './platform/text-editor';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CovalentTextEditorModule);
