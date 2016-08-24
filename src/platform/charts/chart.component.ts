import {Component} from '@angular/core';

import { TdBarChartComponent } from './bar-chart/bar-chart.component';
import { TdLineChartComponent } from './line-chart/line-chart.component';

declare let d3: any;

@Component({
  directives: [
    TdBarChartComponent,
    TdLineChartComponent,
  ],
  moduleId: module.id,
  selector: 'td-chart',
  styleUrls: ['chart.component.css'],
  templateUrl: 'chart.component.html',
})

export class TdChartComponent {

}
