import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableauDemoBasicComponent } from './tableau-demo-basic.component';
import { CovalentTableauModule } from '../../../../../../../../platform/tableau-embed';

@NgModule({
  declarations: [TableauDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentTableauModule,
    /** Angular Modules */
    CommonModule,
    // Material
  ],
  exports: [TableauDemoBasicComponent],
})
export class TableauBasicSharedModule {}
