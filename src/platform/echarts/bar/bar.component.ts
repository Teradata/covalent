import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/bar';

import { BASE_CHART_PROVIDER } from '@covalent/echarts/base';

@Component({
  selector: 'td-chart-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BASE_CHART_PROVIDER],
})
export class TdBarChartComponent {

  @Input('data') data: any[];

}
