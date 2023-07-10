import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { TdHistogramBinningMethod } from '@covalent/echarts/histogram';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'histogram-demo-basic',
  styleUrls: ['./histogram-demo-basic.component.scss'],
  templateUrl: './histogram-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistogramDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme!: string;
  methods: string[] = ['squareRoot', 'scott', 'freedmanDiaconis', 'sturges'];
  selectedMethod: TdHistogramBinningMethod = 'squareRoot';

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
          type: ['line', 'bar'],
          title: { line: 'Line', bar: 'Bar' },
        },
        restore: { title: 'Restore' },
      },
    },
    dataset: [
      {
        source: [
          [8.3, 8.5],
          [8.6, 8.7],
          [8.8, 9.2],
          [10.5, 9.9],
          [10.7, 10.2],
          [10.8, 10.3],
          [11.0, 11.2],
          [11.0, 11.3],
          [11.1, 11.3],
          [11.2, 11.5],
          [11.3, 11.6],
          [11.4, 11.7],
          [11.4, 11.8],
          [11.7, 12.0],
          [12.0, 12.0],
          [12.9, 12.5],
          [12.9, 12.9],
          [13.3, 13.0],
          [13.7, 13.5],
          [13.8, 14, 8],
          [14.0, 15.1],
          [14.2, 15.2],
          [14.5, 15.3],
          [16.0, 15.8],
          [16.3, 16.2],
          [17.3, 16.3],
          [17.5, 16.4],
          [17.9, 19.5],
          [18.0, 19.8],
          [18.0, 20.1],
          [20.6, 20.2],
        ],
      },
      {
        transform: {
          type: 'ecStat:histogram',
        },
      },
    ],
    tooltip: {},
    xAxis: {
      type: 'category',
      scale: true,
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        name: 'Sparrows',
        barWidth: '99.3%',
        label: {
          show: true,
          position: 'top',
        },
        datasetIndex: 1,
      },
      {
        type: 'line',
        name: 'Crows',
        barWidth: '99.3%',
        label: {
          show: true,
          position: 'top',
        },
        datasetIndex: 2,
      },
    ],
  };

  constructor(
    private _cdr: ChangeDetectorRef,
    public themeSelector: ChartThemeSelectorService
  ) {}

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
