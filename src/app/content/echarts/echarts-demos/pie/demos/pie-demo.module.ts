import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { CovalentPieEchartsModule } from '../../../../../../platform/echarts/pie';
import { PieDemoBasicComponent } from './pie-demo-basic/pie-demo-basic.component';
import { PieDemoComponent } from './pie-demo.component';
import { PieDemoRoutingModule } from './pie-demo-routing.module';

@NgModule({
  declarations: [PieDemoBasicComponent, PieDemoComponent],
  imports: [
    DemoModule,
    PieDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    CovalentPieEchartsModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class PieDemoModule {}
