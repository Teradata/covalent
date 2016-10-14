import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdChartsComponent, TdXAxisComponent, TdYLeftAxisComponent, TdYRightAxisComponent } from './charts.component';
import { TdChartBarComponent } from './chart-bar/chart-bar.component';
import { TdChartLineComponent } from './chart-line/chart-line.component';
import { TdChartAreaComponent } from './chart-area/chart-area.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdYLeftAxisComponent,
    TdYRightAxisComponent,
    TdXAxisComponent,
    TdChartsComponent,
    TdChartBarComponent,
    TdChartLineComponent,
    TdChartAreaComponent,
  ],
  exports: [
    TdYLeftAxisComponent,
    TdYRightAxisComponent,
    TdXAxisComponent,
    TdChartsComponent,
    TdChartBarComponent,
    TdChartLineComponent,
    TdChartAreaComponent,
  ],
})
export class CovalentChartsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentChartsModule,
      providers: [],
    };
  }
}
