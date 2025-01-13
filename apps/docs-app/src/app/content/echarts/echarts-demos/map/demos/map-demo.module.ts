import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartSeriesLineComponent } from '@covalent/echarts/line';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartToolboxComponent } from '@covalent/echarts/toolbox';

import { MapDemoComponent } from './map-demo.component';
import { MapDemoRoutingModule } from './map-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { TdChartSeriesMapComponent } from '@covalent/echarts/map';
import { MapBasicSharedModule } from './map-demo-basic/map-demo-basic.shared';

@NgModule({
  declarations: [MapDemoComponent],
  imports: [
    MapBasicSharedModule,
    DemoModule,
    MapDemoRoutingModule,
    /** Covalent Modules */
    CovalentBaseEchartsModule,
    TdChartSeriesLineComponent,
    TdChartSeriesMapComponent,
    TdChartTooltipComponent,
    TdChartToolboxComponent,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class MapDemoModule {}
