import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { CovalentPieEchartsModule } from '../../../../../../platform/echarts/pie';
import { SankeyDemoBasicComponent } from './sankey-demo-basic/sankey-demo-basic.component';
import { SankeyDemoComponent } from './sankey-demo.component';
import { SankeyDemoRoutingModule } from './sankey-demo-routing.module';
import { CovalentSankeyEchartsModule } from '../../../../../../platform/echarts/sankey';

@NgModule({
  declarations: [SankeyDemoBasicComponent, SankeyDemoComponent],
  imports: [
    DemoModule,
    SankeyDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentSankeyEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class SankeyDemoModule {}
