import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'sankey-demo-basic',
  templateUrl: './sankey-demo-basic.component.html',
  styleUrls: ['./sankey-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class SankeyDemoBasicComponent implements OnInit {
  themes: string[] = getThemes();
  selectedTheme: string;

  config: any = {
    xAxis: { show: false },
    yAxis: { show: false },
    grid: { borderColor: 'transparent' },
    color: [
      '#67001f',
      '#b2182b',
      '#d6604d',
      '#f4a582',
      '#fddbc7',
      '#d1e5f0',
      '#92c5de',
      '#4393c3',
      '#2166ac',
      '#053061',
    ],
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    animation: false,
    series: [
      {
        type: 'sankey',
        right: 40,
        left: 40,
        focusNodeAdjacency: 'allEdges',
        data: [{ name: 'a' }, { name: 'b' }, { name: 'a1' }, { name: 'b1' }, { name: 'c' }, { name: 'e' }],
        links: [
          { source: 'a', target: 'a1', value: 5 },
          { source: 'e', target: 'b', value: 3 },
          { source: 'a', target: 'b1', value: 3 },
          { source: 'b1', target: 'a1', value: 1 },
          { source: 'b1', target: 'c', value: 2 },
          { source: 'b', target: 'c', value: 1 },
        ],
        label: {
          position: 'top',
        },
        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0.5,
          },
        },
      },
    ],
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
