import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestBedComponent } from './test-bed/test-bed.component';

@NgModule({
  declarations: [TestBedComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    /** Experimental Modules */
  ],
  bootstrap: [TestBedComponent],
})
export class TestBedModule { }
