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
  selector: 'types-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesLineComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  themeSelector = inject(ChartThemeSelectorService);

  today: Date = new Date();

  themes: string[] = getThemes();
  selectedTheme!: string;

  // Chart config
  config: any = {
    xAxis: [
      {
        show: true,
        type: 'time',
        boundaryGap: false,
      },
    ],
    yAxis: [{ show: true, type: 'value', axisLabel: { inside: true } }],
    series: [
      {
        name: 'Revenue',
        type: 'line',
        itemStyle: {
          opacity: 0.95,
          color: '#007373',
        },
        data: [
          {
            name: this.today.toISOString(),
            value: [this.today.toISOString(), 200],
          },
          {
            name: new Date(
              this.today.getTime() + 24 * 3600 * 1000,
            ).toISOString(),
            value: [
              new Date(this.today.getTime() + 24 * 3600 * 1000).toISOString(),
              50,
            ],
          },
          {
            name: new Date(
              this.today.getTime() + 2 * 24 * 3600 * 1000,
            ).toISOString(),
            value: [
              new Date(
                this.today.getTime() + 2 * 24 * 3600 * 1000,
              ).toISOString(),
              100,
            ],
          },
        ],
      },
      {
        name: 'Sales',
        type: 'line',
        itemStyle: {
          opacity: 0.95,
          color: '#1B98C6',
        },
        data: [
          {
            name: this.today.toISOString(),
            value: [this.today.toISOString(), 200],
          },
          {
            name: new Date(
              this.today.getTime() + 10 * 3600 * 1000,
            ).toISOString(),
            value: [
              new Date(this.today.getTime() + 10 * 3600 * 1000).toISOString(),
              50,
            ],
          },
          {
            name: new Date(
              this.today.getTime() + 3 * 24 * 3600 * 1000,
            ).toISOString(),
            value: [
              new Date(
                this.today.getTime() + 3 * 24 * 3600 * 1000,
              ).toISOString(),
              100,
            ],
          },
        ],
      },
    ],
    tooltip: {
      show: true,
      trigger: 'axis',
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
