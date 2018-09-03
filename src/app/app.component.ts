import { Component, ChangeDetectorRef } from '@angular/core';
import { IAxisLine, IAxisLabel, ISplitLine, TdXAxisPosition, TdYAxisPosition, TdAxisLineType } from '../platform/echarts';

export const NOW: Date = new Date();

import 'echarts/lib/component/tooltip';
import { TdFontFamily, TdfontStyle, TdFontWeight } from '@covalent/echarts/base/base.types';

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
    data: [100],
  }, {
    color: '#00E5FF',
    opacity: 0.75,
    name: 'Today',
    type: 'bar',
    data: [80],
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

  yLine: IAxisLine = { 
    show: true, 
    lineStyle: 
    { color: '#777777', width: 2 },
  };

  yAxisLabel: IAxisLabel = { 
    show: true, 
    inside: false,
    fontStyle: TdfontStyle.Italic,
    fontWeight: TdFontWeight.Bold,
    formatter: '${value}',
  };

  xLine: IAxisLine = { 
    show: true, 
    lineStyle: 
    { color: '#777777', width: 2 },
  };

  xAxisLabel: IAxisLabel = { 
    show: true, 
    inside: false,
    fontStyle: TdfontStyle.Italic,
    fontWeight: TdFontWeight.Bold,
  };

  splitLineBar: ISplitLine = {
    lineStyle: {
      type: TdAxisLineType.Dotted,
    },
  };

  splitLine: ISplitLine = {
    lineStyle: {
      type: TdAxisLineType.Dashed,
    },
  };

  barYaxisPosition: TdYAxisPosition = TdYAxisPosition.Right;
  lineXAxisPosition: TdXAxisPosition = TdXAxisPosition.Top;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

}
