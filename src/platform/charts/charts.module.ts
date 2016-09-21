import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdChartsComponent } from './charts.component';
import { TdChartBarComponent } from './chart-bar/chart-bar.component';
import { TdChartLineComponent } from './chart-line/chart-line.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdChartsComponent,
    TdChartBarComponent,
    TdChartLineComponent,
  ],
  exports: [
    TdChartsComponent,
    TdChartBarComponent,
    TdChartLineComponent,
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
