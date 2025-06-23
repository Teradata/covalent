import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  inject,
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
  private _cdr = inject(ChangeDetectorRef);
  themeSelector = inject(ChartThemeSelectorService);

  themes: string[] = getThemes();
  selectedTheme!: string;
  showCentroids = false;

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
