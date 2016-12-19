import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { CovalentJsonFormatterModule } from '../platform/json-formatter';
import { CovalentChartsModule } from '../platform/charts';
import { CovalentPagingModule } from '../platform/paging';
import { CovalentSearchModule } from '../platform/search';

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
    CovalentJsonFormatterModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentPagingModule.forRoot(),
    CovalentSearchModule.forRoot(),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
