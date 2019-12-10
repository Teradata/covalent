import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'bar-demo-basic',
  styleUrls: ['./bar-demo-basic.component.scss'],
  templateUrl: './bar-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class BarDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme: string;

  // Chart config
  config: any = {
    toolbox: {
      showTitle: true,
      top: 0,
      right: '30px',
      show: true,
      feature: {
        dataView: {
          title: 'View Data',
          lang: ['Data View', 'Turn Off', 'Refresh'],
        },
        dataZoom: { title: { zoom: 'Zoom', back: 'Back' } },
        magicType: {
          type: ['line', 'bar', 'stack', 'tiled'],
          title: { line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled' },
        },
        restore: { title: 'Restore' },
      },
    },
    xAxis: [
      {
        data: ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'],
      },
      {
        show: true,
        type: 'time',
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',
        axisLabel: { inside: false },
        max: 300,
      },
    ],
    series: [
      {
        type: 'bar',
        itemStyle: {
          opacity: 0.95,
          color: '#007373',
        },
        markPoint: {
          data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
        },
        name: 'Yesterday',
        data: [150, 130, 150, 120, 150, 120],
      },
      {
        type: 'bar',
        itemStyle: {
          opacity: 0.95,
          color: '#1B98C6',
        },
        markPoint: {
          data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
        },
        markLine: {
          data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
          symbol: 'circle',
        },
        name: 'Today',
        data: [80, 122, 80, 120, 80, 120],
      },
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };

  constructor(private _cdr: ChangeDetectorRef, public themeSelector: ChartThemeSelectorService) {}

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
