import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { TdRegressionType } from '@covalent/echarts/regression';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'regression-demo-basic',
  styleUrls: ['./regression-demo-basic.component.scss'],
  templateUrl: './regression-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegressionDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme!: string;
  regressionTypes = ['linear', 'exponential', 'logarithmic', 'polynomial'];
  selectedRegressionType: TdRegressionType = 'linear';

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
