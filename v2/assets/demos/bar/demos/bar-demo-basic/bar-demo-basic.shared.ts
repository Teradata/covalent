import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '../../../../../../../platform/echarts/base';
import { CovalentBarEchartsModule } from '../../../../../../../platform/echarts/bar';
import { CovalentTooltipEchartsModule } from '../../../../../../../platform/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '../../../../../../../platform/echarts/toolbox';
import { BarDemoBasicComponent } from './bar-demo-basic.component';

@NgModule({
  declarations: [BarDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
  exports: [BarDemoBasicComponent],
})
export class BarBasicSharedModule {}
