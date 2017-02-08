import { Component } from '@angular/core';
import { single, multi } from './data';

import { TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'ngx-charts-demo',
  styleUrls: ['./ngx-charts.component.scss'],
  templateUrl: './ngx-charts.component.html',
})
export class NgxChartsDemoComponent {

  // Use digits pipe
  private _digits: TdDigitsPipe = new TdDigitsPipe();

  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Products';

  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };

  // line, area
  autoScale: boolean = true;

  constructor( ) {
    // Chart Single
    Object.assign(this, {single});
    // Chart Multi
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  axisPercent(val: any): any {
    return val.toLocaleString() + '%';
  }
  axisDigits(val: any): any {
    return this._digits.transform(val);
  }
  axisRounding(val: any): any {
    if (val % 1 === 0) {
      return val.toLocaleString();
    } else {
      return '';
    }
  }
}
