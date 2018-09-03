import { Component, ChangeDetectorRef } from '@angular/core';
import { IAxisLine, IAxisLabel, ISplitLine, TdXAxisPosition, TdYAxisPosition, TdAxisLineType } from '../platform/echarts';

export const NOW: Date = new Date();

import 'echarts/lib/component/tooltip';
import { TdFontFamily, TdFontStyle, TdFontWeight } from '@covalent/echarts/base/base.types';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  barPlot: any = [{
    itemStyle: {
      opacity: 0.75,
      color: '#575757',
    },
    name: 'Historical Model',
    data: [100],
  }, {
    itemStyle: {
      opacity: 0.75,
      color: '#00E5FF',
    },
    name: 'Today',
    data: [80],
  }];

  showTooltip: boolean = true;
  linePlot: any[] = [{
    name: 'Line Test',
    type: 'line',
    lineStyle: {
      color: '#575757',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
    },
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

  lineConfig: any = {
    xAxis: [{show: true, type: 'time', boundaryGap: false, axisLine: {show: false}, splitLine: {show: false}}],
    yAxis: [{show: true, type: 'value', axisLabel: {inside: true}}],
    series: this.linePlot,
    tooltip: {
      show: true,
      trigger: 'axis',
      showContent: true,
    },
  };

  yLine: IAxisLine = { 
    show: true, 
    lineStyle: 
    { color: '#777777', width: 2 },
  };

  yAxisLabel: IAxisLabel = { 
    show: true, 
    inside: false,
    fontStyle: TdFontStyle.Italic,
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
    fontStyle: TdFontStyle.Italic,
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
