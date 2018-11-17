import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CovalentNavStepperModule } from '../platform/experimental/nav-stepper';
import { CovalentTimepickerModule } from '../platform/experimental/timepicker';

import { TestBedComponent } from './test-bed/test-bed.component';
import { MainComponent } from './main/main.component';
import { NavStepperDemoComponent } from './sandbox/nav-stepper/nav-stepper.component';
import { TimepickerDemoComponent } from './sandbox/timepicker/timepicker.component';
import { appRoutes, appRoutingProviders } from './test-bed.routes';

@NgModule({
  declarations: [
    TestBedComponent,
    NavStepperDemoComponent,
    TimepickerDemoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    appRoutes,
    /** Experimental Modules */
    CovalentNavStepperModule,
    CovalentTimepickerModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [TestBedComponent],
})
export class TestBedModule { }
