import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentClusteringEchartsModule } from '@covalent/echarts/clustering';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { ClusteringDemoBasicComponent } from './clustering-demo-basic.component';

@NgModule({
  declarations: [ClusteringDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentClusteringEchartsModule,
    CovalentCommonModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  exports: [ClusteringDemoBasicComponent],
})
export class ClusteringBasicSharedModule {}
