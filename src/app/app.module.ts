import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DocsAppComponent } from './app.component';
import { ComponentsModule } from './components/components/';
import { HomeModule } from './components/home/';
import { DocsModule } from './components/docs/';
import { LayoutsModule } from './components/layouts/';
import { StyleGuideModule } from './components/style-guide/';
import { appRoutes, appRoutingProviders } from './app.routing';

import { CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS } from '../platform/core';
import { CovalentFileModule } from '../platform/file-upload';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentHttpModule } from '../platform/http';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentJsonFormatterModule } from '../platform/json-formatter';
import { CovalentChipsModule } from '../platform/chips';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    HomeModule,
    DocsModule,
    LayoutsModule,
    StyleGuideModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentChipsModule.forRoot(),
    appRoutes,
  ],
  declarations: [
    DocsAppComponent,
  ],
  providers: [
    appRoutingProviders,
  ],
  entryComponents: [ TD_LOADING_ENTRY_COMPONENTS ],
  bootstrap: [DocsAppComponent],
})
export class AppModule { }
