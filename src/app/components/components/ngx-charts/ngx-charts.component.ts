import { Component, OnInit} from '@angular/core';
import { sourcesData, latencyData } from './data';

@Component({
  selector: 'ngx-charts-demo',
  styleUrls: ['./ngx-charts.component.scss'],
  templateUrl: './ngx-charts.component.html',
})
export class NgxChartsDemoComponent implements OnInit {

  displaySizeData: any[] = [];
  displayLatencyData: any = [{
    'name': 'Latency',
    'series': [],
  }];
  displayRecordsData: any = [{
    'name': 'Records',
    'series': [],
  }];
  formatLatencyData: any[] = [];
  formatRecordsData: any[] = [];

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

  view: any[] = [700, 400];

  // Generic Chart options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  colorScheme: any = {
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886',
    ],
  };

  // Bar Chart options
  barXAxisLabel: string = 'Time';
  barYAxisLabel: string = 'Size';

  // Line Chart options
  lineXAxisLabel: string = 'Time';
  lineYAxisLabel: string = 'Latency';

  // Area Chart options
  areaXAxisLabel: string = 'Time';
  areaYAxisLabel: string = 'Records';

  lineColorScheme: any = {
    domain: [
      '#a27ea8',
    ],
  };

  ngOnInit(): void {
    this.loadSourcesData();
    this.loadLatencyData();
  }

  loadSourcesData(): void {
    let volumes: any[] = sourcesData;
    volumes.shift();
    volumes.forEach((metric: any) => {
      let size: number = Math.round(metric.total_bytes.value);
      let records: number = Math.round(metric.total_docs.value);

      let x: any = new Date(metric.time).getHours() + ':' + new Date(metric.time).getMinutes();
      this.displaySizeData.push({
        'name': x,
        'value': size,
      });
      this.formatRecordsData.push({
        'name': x,
        'value': records,
      });
    });
    this.displayRecordsData[0]['series'] = this.formatRecordsData;
  }

  loadLatencyData(): void {
    let latencies: any[] = latencyData;
    latencies.forEach((metric: any) => {
      let router: number = (metric.router_latency_stats.avg / 1000000);

      let x: any = new Date(metric.time).getHours() + ':' + new Date(metric.time).getMinutes();

      if (router < 0) {
        router = 0.001;
      }

      this.formatLatencyData.push({
        'name': x,
        'value': router,
      });
    });
    this.displayLatencyData[0]['series'] = this.formatLatencyData;
  }

  onSelect(event: any): void {
    // test func
  }
}
