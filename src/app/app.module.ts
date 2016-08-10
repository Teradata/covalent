import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { DocsAppComponent } from './app.component';
import { ComponentsModule } from './components/components/';
import { DocsModule } from './components/docs/';
import { HomeComponent } from './components/home/';
import { LayoutsModule } from './components/layouts/';
import { StyleGuideModule } from './components/style-guide/';
import { appRoutes, appRoutingProviders } from './app.routes';

import { CovalentCoreModule } from '../platform/core';
import { CovalentFileModule } from '../platform/file-upload';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentMarkdownModule } from '../platform/markdown';

@NgModule({
  declarations: [
    DocsAppComponent,
    HomeComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    JsonpModule,
    ComponentsModule,
    DocsModule,
    LayoutsModule,
    StyleGuideModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    appRoutes,
  ],
  providers: [
    appRoutingProviders,
  ], // additional providers
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
