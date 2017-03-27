import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';

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
import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';

import { GitHubService } from './services';
import { getSelectedLanguage, createTranslateLoader } from './utilities/translate';

@NgModule({
  declarations: [
    DocsAppComponent,
    HomeComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    CovalentCoreModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http],
      },
    }),
    ComponentsModule,
    DocsModule,
    LayoutsModule,
    StyleGuideModule,
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    GitHubService, {
      // Configure LOCALE_ID depending on the language set in browser
      provide: LOCALE_ID, useFactory: getSelectedLanguage, deps: [TranslateService],
    },
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
