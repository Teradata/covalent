import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DocsAppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ComponentsModule } from './views/components/';
import { DocsModule } from './views/docs/';
import { LayoutsModule } from './views/layouts/';
import { StyleGuideModule } from './views/style-guide/';
import { appRoutes, appRoutingProviders } from './app.routes';

import { CovalentCoreModule } from '../platform/core';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentHttpModule } from '../platform/http';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentChartsModule } from '../platform/charts';
import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';

import { GitHubService } from './services';

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
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    GitHubService,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
