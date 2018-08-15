import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { CovalentBreadcrumbsModule } from '../platform/experimental/breadcrumbs/breadcrumbs.module';
import { CovalentTabSelectModule } from '../platform/experimental/tab-select';

import { TestBedComponent } from './test-bed/test-bed.component';
import { MainComponent } from './main/main.component';
import { BreadcrumbDemoComponent } from './sandbox/breadcrumbs/breadcrumbs.component';
import { TabSelectDemoComponent } from './sandbox/tab-select/tab-select.component';
import { appRoutes, appRoutingProviders } from './test-bed.routes';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { MultiSelectDemoComponent } from './sandbox/multiselect/multiselect.component';

@NgModule({
  declarations: [
    TestBedComponent,
    BreadcrumbDemoComponent,
    TabSelectDemoComponent,
    MultiSelectDemoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    appRoutes,
    CovalentDynamicFormsModule,
    /** Experimental Modules */
    CovalentBreadcrumbsModule,
    CovalentTabSelectModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    CovalentTabSelectModule,
  ],
  bootstrap: [TestBedComponent],
})
export class TestBedModule { }
