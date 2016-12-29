import { Component, OnInit} from '@angular/core';
import { sizeData } from './data';

@Component({
  selector: 'ngx-charts-demo',
  styleUrls: ['./ngx-charts.component.scss'],
  templateUrl: './ngx-charts.component.html',
})
export class NgxChartsDemoComponent implements OnInit {

  displayData: any[] = [];

  chartRange: any[] = [
    {
      range: '1h',
      interval: '1m',
      rangeText: 'last hour',
      reload: 15 * 1000,
      reloadRange: '3m',
      maxPoints: 60,
    }, {
      range: '1d',
      interval: '24m',
      rangeText: 'last day',
      reload: 60 * 1000,
      reloadRange: '72m',
      maxPoints: 60,
    }, {
      range: '7d',
      interval: '3h',
      rangeText: 'last week',
      reload: 60 * 1000,
      reloadRange: '9h',
      maxPoints: 56,
    }, {
      range: '1M',
      interval: '12h',
      rangeText: 'last month',
      reload: 60 * 1000,
      reloadRange: '36h',
      maxPoints: 60,
    },
  ];

  range: any = this.chartRange[0];
  volume: any = {
    x: [],
    records: [],
    size: [],
  };

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Size';

  colorScheme: any = {
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886',
    ],
  };

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    let volumes: any[] = sizeData;
    volumes.shift();
    let point: any[];
    volumes.forEach((metric: any) => {
      let size: number = Math.round(metric.total_bytes.value);
      let records: number = Math.round(metric.total_docs.value);

      let x: any = new Date(metric.time).getHours() + ':' + new Date(metric.time).getMinutes();
      let index: number = this.volume.x.indexOf(x);
      if (index < 0) {
        point = [
          ['x', x],
          ['Size', size],
          ['Records', records],
        ];
        this.volume.x.push(x);
        this.volume.size.push(size);
        this.volume.records.push(records);
        this.displayData.push({
          'name': x,
          'value': size,
        });
        if (this.volume.x.length > this.range.maxPoints) {
          this.volume.x.shift();
          this.volume.size.shift();
          this.volume.records.shift();
        }
      } else {
        this.volume.size[index] = size;
      }
    });
  }

  onSelect(event: any): void {
    // test func
  }
}
