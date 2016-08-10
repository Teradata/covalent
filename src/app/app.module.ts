import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../platform/core';

import { DocsAppComponent } from './app.component';
import { ComponentsModule } from './components/components/';
import { DocsModule } from './components/docs/';
import { appRoutes, appRoutingProviders } from './app.routes';
import { TD_MEDIA_PROVIDERS } from '../platform/core';

@NgModule({
  declarations: [
    DocsAppComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    RouterModule,
    ComponentsModule,
    DocsModule,
    appRoutes,
  ],
  providers: [
    appRoutingProviders,
    TD_MEDIA_PROVIDERS,
  ], // additional providers
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
