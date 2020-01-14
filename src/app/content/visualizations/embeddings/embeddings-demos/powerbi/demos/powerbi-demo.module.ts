import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

import { PowerBIDemoComponent } from './powerbi-demo.component';
import { PowerBIDemoRoutingModule } from './powerbi-demo-routing.module';
import { DemoModule } from 'app/components/shared/demo-tools/demo.module';
import { CovalentMapEchartsModule } from '../../../../../../../platform/echarts/map';
import { PowerBIBasicSharedModule } from './powerbi-demo-basic/powerbi-demo-basic.shared';

@NgModule({
  declarations: [PowerBIDemoComponent],
  imports: [
    PowerBIBasicSharedModule,
    DemoModule,
    PowerBIDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentMapEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class PowerBIDemoModule {}
