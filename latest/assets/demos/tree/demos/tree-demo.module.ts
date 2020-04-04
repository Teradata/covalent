import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';

import { TreeDemoComponent } from './tree-demo.component';
import { TreeDemoRoutingModule } from './tree-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { TreeBasicSharedModule } from './tree-demo-basic/tree-demo-basic.shared';

@NgModule({
  declarations: [TreeDemoComponent],
  imports: [
    TreeBasicSharedModule,
    DemoModule,
    TreeDemoRoutingModule,
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
})
export class TreeDemoModule {}
