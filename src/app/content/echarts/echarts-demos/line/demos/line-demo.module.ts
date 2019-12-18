import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { CovalentLineEchartsModule } from '../../../../../../platform/echarts';
import { LineDemoComponent } from './line-demo.component';
import { LineDemoRoutingModule } from './line-demo-routing.module';
import { LineDemoBasicComponent } from './line-demo-basic/line-demo-basic.component';

@NgModule({
  declarations: [LineDemoComponent, LineDemoBasicComponent],
  imports: [
    DemoModule,
    LineDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentLineEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class LineDemoModule {}
