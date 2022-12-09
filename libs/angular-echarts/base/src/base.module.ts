import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';
import { TdDatasetComponent } from './dataset/dataset.component';

import { registerDefaultThemes } from './utils';

export const BASE_MODULE_COMPONENTS: Type<any>[] = [
  TdChartComponent,
  TdChartXAxisComponent,
  TdChartYAxisComponent,
  TdDatasetComponent,
];

export interface TdEchartsConfig {
  echarts: typeof echarts;
  defaultThemes?: boolean;
}

export const TD_ECHARTS_CONFIG = new InjectionToken<TdEchartsConfig>('TD_ECHARTS_CONFIG');

import 'zrender/lib/svg/svg';

@NgModule({
  imports: [CommonModule],
  declarations: [BASE_MODULE_COMPONENTS],
  exports: [BASE_MODULE_COMPONENTS],
})
export class CovalentBaseEchartsModule {
  static forRoot(config: TdEchartsConfig): ModuleWithProviders<CovalentBaseEchartsModule> {
    if (config.defaultThemes !== false) {
      registerDefaultThemes(config.echarts);
    }

    return {
      ngModule: CovalentBaseEchartsModule,
      providers: [{ provide: TD_ECHARTS_CONFIG, useValue: config }],
    };
  }
}
