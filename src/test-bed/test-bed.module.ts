import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TestBedComponent } from './test-bed/test-bed.component';

import { appRoutes, appRoutingProviders } from './test-bed.routes';

@NgModule({
  declarations: [TestBedComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    appRoutes,
  ], // modules needed to run this module
  providers: [appRoutingProviders],
  bootstrap: [TestBedComponent],
})
export class TestBedModule {}
