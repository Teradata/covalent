import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { TdChartOptionsService } from '../base.service';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-y-axis',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartYAxisComponent extends TdChartAxisComponent {

  @Input('position') position: 'left' | 'right';

  constructor(_optionsService: TdChartOptionsService) {
    super('yAxis', _optionsService);
  }

}
