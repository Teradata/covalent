import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'combination-demo-basic',
  styleUrls: ['./combination-demo-basic.component.scss'],
  templateUrl: './combination-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class CombinationDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme: string;

  config: any = {
    xAxis: [
      {
        data: ['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports'],
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',
        axisLabel: { inside: false },
        min: 0,
        max: 300,
      },
    ],
    series: [
      {
        type: 'bar',
        markPoint: {
          data: [{ name: 'Target', value: 130, xAxis: 1, yAxis: 130 }],
        },
        name: 'Yesterday',
        data: [150, 130, 150, 120, 150, 120],
      },
      {
        type: 'line',
        markPoint: {
          data: [{ name: 'Target', value: 100, xAxis: 1, yAxis: 121 }],
          symbolRotate: 180,
          label: { offset: [0, 10] },
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
