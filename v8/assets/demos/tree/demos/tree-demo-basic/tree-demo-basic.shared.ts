import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';

import { TreeDemoBasicComponent } from './tree-demo-basic.component';

@NgModule({
  declarations: [TreeDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentTreeEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
  exports: [TreeDemoBasicComponent],
})
export class TreeBasicSharedModule {}
