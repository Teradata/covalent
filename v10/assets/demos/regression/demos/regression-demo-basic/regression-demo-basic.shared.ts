import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentRegressionEchartsModule } from '@covalent/echarts/regression';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { RegressionDemoBasicComponent } from './regression-demo-basic.component';

@NgModule({
  declarations: [RegressionDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentRegressionEchartsModule,
    CovalentCommonModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
  exports: [RegressionDemoBasicComponent],
})
export class RegressionBasicSharedModule {}
