import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { TdXAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-x-axis',
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
export class TdChartXAxisComponent extends TdChartAxisComponent {
  @Input() position: TdXAxisPosition;

  constructor(_optionsService: TdChartOptionsService) {
    super('xAxis', _optionsService);
  }
}
