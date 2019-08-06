import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { TdXAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-x-axis',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartXAxisComponent extends TdChartAxisComponent {
  @Input('position') position: TdXAxisPosition;
  @Input('show') show: any;
  @Input('type') type: any;
  @Input('boundaryGap') boundaryGap: any;
  @Input('splitLine') splitLine: any;
  @Input('data') data: any;

  constructor(_optionsService: TdChartOptionsService) {
    super('xAxis', _optionsService);
  }
}
