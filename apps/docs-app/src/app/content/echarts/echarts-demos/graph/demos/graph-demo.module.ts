import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { GraphDemoBasicComponent } from './graph-demo-basic/graph-demo-basic.component';
import { GraphDemoComponent } from './graph-demo.component';
import { GraphDemoRoutingModule } from './graph-demo-routing.module';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
import * as echarts from 'echarts';

@NgModule({
  declarations: [GraphDemoBasicComponent, GraphDemoComponent],
  imports: [
    DemoModule,
    GraphDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule.forRoot({
      echarts,
    }),
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentGraphEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class GraphDemoModule {}
