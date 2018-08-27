import { Component, ChangeDetectorRef } from '@angular/core';

export const NOW: Date = new Date();

import 'echarts/lib/component/tooltip';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  barPlot: any = [{
    color: '#575757',
    opacity: 0.75,
    name: 'Historical Model',
    type: 'bar',
    data: [3002403],
  }, {
    color: '#00E5FF',
    opacity: 0.75,
    name: 'Today',
    type: 'bar',
    data: [2432433],
  }];

  showTooltip: boolean = true;
  linePlot: any[] = [{
    name: 'Line Test',
    color: '#575757',
    shadowBlur: 5,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffsetX: 0,
    shadowOffsetY: 5,
    width: 2,
    opacity: 0.75,
    data: [{
      name: NOW.toISOString(),
      value: [NOW.toISOString(), 200],
    }, {
      name: new Date(NOW.getTime() + (24 * 3600 * 1000)).toISOString(),
      value: [new Date(NOW.getTime() + (24 * 3600 * 1000)).toISOString(), 50],
    }, {
      name: new Date(NOW.getTime() + (2 * 24 * 3600 * 1000)).toISOString(),
      value: [new Date(NOW.getTime() + (2 * 24 * 3600 * 1000)).toISOString(), 100],
    }],
  }];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

}
