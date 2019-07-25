import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentLayoutModule } from '@covalent/core/layout'; 

import { DocsAppComponent } from './app.component';
import { appRoutes, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    DocsAppComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
