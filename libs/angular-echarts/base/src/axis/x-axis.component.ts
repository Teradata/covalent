import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
} from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { TdXAxisPosition } from './axis.interface';
import { TdChartAxisDirective } from './axis.component';

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
export class TdChartXAxisComponent extends TdChartAxisDirective {
  @Input() position!: TdXAxisPosition;

  constructor() {
    const _optionsService = inject(TdChartOptionsService);

    super('xAxis', _optionsService);
  }
}
