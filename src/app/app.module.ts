import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DocsAppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components/';
import { DocsModule } from './components/docs/';
import { LayoutsModule } from './components/layouts/';
import { StyleGuideModule } from './components/style-guide/';
import { appRoutes, appRoutingProviders } from './app.routes';

import { CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS } from '../platform/core';
import { CovalentFileModule } from '../platform/file-upload';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentHttpModule } from '../platform/http';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentJsonFormatterModule } from '../platform/json-formatter';
import { CovalentChipsModule } from '../platform/chips';

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
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentChipsModule.forRoot(),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
