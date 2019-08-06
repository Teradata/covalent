import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { TdYAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-y-axis',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartYAxisComponent extends TdChartAxisComponent {
  @Input('position') position: TdYAxisPosition;
  @Input('show') show: any;
  @Input('type') type: any;
  @Input('max') max: any;
  @Input('splitLine') splitLine: any;
  @Input('min') min: any;

  constructor(_optionsService: TdChartOptionsService) {
    super('yAxis', _optionsService);
  }
}
