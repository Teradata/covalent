import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../utilities/chart-theme';

@Component({
  standalone: false,
  selector: 'types-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesCombinationComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  themeSelector = inject(ChartThemeSelectorService);

  themes: string[] = getThemes();
  selectedTheme!: string;

  config: any = {
    xAxis: [
      {
        data: [
          'Electronics',
          'Toys',
          'Grocery',
          'Appliances',
          'Automotive',
          'Sports',
        ],
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

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
