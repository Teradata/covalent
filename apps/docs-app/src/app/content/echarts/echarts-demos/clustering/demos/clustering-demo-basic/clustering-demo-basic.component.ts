import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  standalone: false,
  selector: 'clustering-demo-basic',
  styleUrls: ['./clustering-demo-basic.component.scss'],
  templateUrl: './clustering-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClusteringDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme!: string;
  showCentroids = false;

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
