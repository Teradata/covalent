import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';

import { TreeDemoBasicComponent } from './tree-demo-basic/tree-demo-basic.component';
import { TreeDemoComponent } from './tree-demo.component';
import { TreeDemoRoutingModule } from './tree-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [TreeDemoComponent, TreeDemoBasicComponent],
  imports: [
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
