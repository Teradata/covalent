import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { TdChartOptionsService } from '../chart.service';
import { TdXAxisPosition  } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';

@Component({
  selector: 'td-chart-x-axis',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartXAxisComponent extends TdChartAxisComponent {

  @Input('position') position: TdXAxisPosition;

  constructor(_optionsService: TdChartOptionsService) {
    super('xAxis', _optionsService);
  }

}
