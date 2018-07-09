import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentMediaModule } from '../platform/core';

import { TestBedComponent } from './test-bed/test-bed.component';

import { appRoutes, appRoutingProviders } from './test-bed.routes';
import { MainComponent } from './main/main.component';
import { BreadcrumbDemoComponent } from './sandbox/breadcrumbs/breadcrumbs.component';
import { CovalentBreadcrumbsModule } from '../platform/experimental/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    TestBedComponent,
    BreadcrumbDemoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CovalentMediaModule,
    FormsModule,
    appRoutes,
    /** Experimental Modules */
    CovalentBreadcrumbsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  bootstrap: [TestBedComponent],
})
export class TestBedModule { }
