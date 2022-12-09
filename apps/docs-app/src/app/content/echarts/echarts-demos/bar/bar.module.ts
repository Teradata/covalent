import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';

import { CovalentBaseEchartsModule, TD_ECHARTS_CONFIG } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { BarBasicSharedModule } from './demos/bar-demo-basic/bar-demo-basic.shared';
import { BarDemoBasicComponent } from './demos/bar-demo-basic/bar-demo-basic.component';

import * as echarts from 'echarts';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: BarDemoBasicComponent,
  id: 'bar',
});

@NgModule({
  imports: [
    BarBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule.forRoot({
      echarts
    }),
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class BarModule {}
