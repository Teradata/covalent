import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { TdYAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-y-axis',
  template: '',
  inputs: [
    'config',
    'id',
    'show',
    'gridIndex',
    'offset',
    'type',
    'name',
    'nameLocation',
    'nameTextStyle',
    'nameGap',
    'nameRotate',
    'inverse',
    'boundaryGap',
    'min',
    'max',
    'scale',
    'minInterval',
    'interval',
    'logBase',
    'silent',
    'triggerEvent',
    'axisLine',
    'axisTick',
    'axisLabel',
    'splitLine',
    'splitArea',
    'data',
    'axisPointer',
    'zlevel',
    'z',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartYAxisComponent extends TdChartAxisComponent {
  @Input() position: TdYAxisPosition;

  constructor(_optionsService: TdChartOptionsService) {
    super('yAxis', _optionsService);
  }
}
