import { NgModule, LOCALE_ID } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

import { DocsAppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components/';
import { DocsModule } from './components/docs/';
import { LayoutsModule } from './components/layouts/';
import { StyleGuideModule } from './components/style-guide/';
import { appRoutes, appRoutingProviders } from './app.routes';

import { CovalentCoreModule } from '../platform/core';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentHttpModule } from '../platform/http';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentChartsModule } from '../platform/charts';
import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';

import { GitHubService } from './services';

/**
 * Dynamically get language for LOCALE_ID and at the same time set it for `ngx-translate`
 */
export function getLanguage(translateService: TranslateService): string {
  translateService.setDefaultLang('en');
  // Supported languages
  translateService.addLangs(['en', 'es']);
  if (translateService.getLangs().indexOf(translateService.getBrowserLang()) > -1) {
    translateService.use(translateService.getBrowserLang());
    return translateService.getBrowserLang();
  }
  return translateService.getDefaultLang();
}

/**
 * Crate custom TranslateLoader since we have a diff dir structure for our json files
 */
export function createTranslateLoader(http: Http): TranslateLoader {
    return new TranslateStaticLoader(http, 'app/assets/i18n', '.json');
}

@NgModule({
  declarations: [
    DocsAppComponent,
    HomeComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    ComponentsModule,
    DocsModule,
    LayoutsModule,
    StyleGuideModule,
    CovalentCoreModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentDynamicFormsModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http],
    }),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    GitHubService, {
    // Configure LOCALE_ID depending on the language set in browser
    provide: LOCALE_ID, useFactory: getLanguage, deps: [TranslateService],
  },
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
