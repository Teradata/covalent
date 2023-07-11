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
