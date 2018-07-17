import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';

import { TdTabSelectComponent } from './tab-select.component';
import { TdTabOptionComponent } from './tab-option.component';

@NgModule({
  declarations: [
    TdTabSelectComponent,
    TdTabOptionComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    /** Angular Modules */
    CommonModule,
    FormsModule,
    /** Material Modules */
    PortalModule,
    MatTabsModule,
  ], // modules needed to run this module
  exports: [
    TdTabSelectComponent,
    TdTabOptionComponent,
  ],
})
export class CovalentTabSelectModule {}
