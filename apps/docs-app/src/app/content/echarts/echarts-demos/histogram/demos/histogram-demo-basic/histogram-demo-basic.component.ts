import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { TdHistogramBinningMethod } from '@covalent/echarts/histogram';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  standalone: false,
  selector: 'histogram-demo-basic',
  styleUrls: ['./histogram-demo-basic.component.scss'],
  templateUrl: './histogram-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistogramDemoBasicComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  themeSelector = inject(ChartThemeSelectorService);

  themes: string[] = getThemes();
  selectedTheme!: string;
  methods: string[] = ['squareRoot', 'scott', 'freedmanDiaconis', 'sturges'];
  selectedMethod: TdHistogramBinningMethod = 'squareRoot';

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
