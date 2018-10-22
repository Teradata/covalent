import { Component, ChangeDetectorRef } from '@angular/core';
import {
  ITdAxisLine,
  ITdAxisLabel,
  ITdSplitLine,
  ITdBarSeries,
  ITdLineSeries,
  TdSeriesType,
} from '../platform/echarts';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/tooltip';

import { configScatterOption } from './data/scatter';

export const NOW: Date = new Date();

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {
  configScatter: any = configScatterOption;

  barPlot: ITdBarSeries[] = [
    {
      type: TdSeriesType.Bar,
      itemStyle: {
        opacity: 0.75,
        color: '#575757',
      },
      markPoint: {
        data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
      },
      name: 'Yesterday',
      data: [150, 130, 150, 120, 150, 120],
    },
    {
      type: TdSeriesType.Bar,
      markPoint: {
        data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
      },
      markLine: {
        data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
        lineStyle: { color: '#000', type: 'dotted' },
        symbol: 'circle',
      },
      itemStyle: {
        opacity: 0.75,
        color: '#00E5FF',
      },
      name: 'Today',
      data: [80, 122, 80, 120, 80, 120],
    },
  ];

  comboPlot: ITdBarSeries[] = [
    {
      type: TdSeriesType.Bar,
      itemStyle: {
        opacity: 0.75,
        color: '#575757',
      },
      markPoint: {
        data: [{ name: 'Target', value: 130, xAxis: 1, yAxis: 130 }],
      },
      name: 'Yesterday',
      data: [150, 130, 150, 120, 150, 120],
    },
    {
      type: TdSeriesType.Line,
      markPoint: {
        data: [{ name: 'Target', value: 100, xAxis: 1, yAxis: 121 }],
        symbolRotate: 180,
        label: { offset: [0, 10] },
      },
      markLine: {
        data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
        lineStyle: { color: '#000', type: 'dotted' },
        symbol: 'circle',
      },
      itemStyle: {
        opacity: 0.75,
        color: '#00E5FF',
      },
      name: 'Today',
      data: [80, 122, 80, 120, 80, 120],
    },
  ];

  showTooltip: boolean = true;

  linePlot: ITdLineSeries[] = [
    {
      name: 'Line Test',
      type: TdSeriesType.Line,
      lineStyle: {
        color: '#575757',
        width: 2,
        shadowBlur: 5,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffsetX: 0,
        shadowOffsetY: 5,
        opacity: 0.75,
      },
      markLine: {
        data: [{ name: 'Average', value: 125, xAxis: 1, yAxis: 125 }],
        lineStyle: { color: '#607d8b', type: 'dashed' },
        symbol: 'none',
      },
      data: [
        {
          name: NOW.toISOString(),
          value: [NOW.toISOString(), 200],
        },
        {
          name: new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(),
          value: [new Date(NOW.getTime() + 24 * 3600 * 1000).toISOString(), 50],
        },
        {
          name: new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
          value: [
            new Date(NOW.getTime() + 2 * 24 * 3600 * 1000).toISOString(),
            100,
          ],
        },
      ],
    },
  ];

  barConfig: any = {
    xAxis: [
      {
        data: [
          'Electronics',
          'Toys',
          'Grocery',
          'Appliances',
          'Automotive',
          'Sports',
        ],
      },
      {
        show: true,
        type: 'time',
        boundaryGap: false,
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'time',
        axisLabel: { inside: false },
        max: 300,
      },
    ],
    series: this.barPlot,
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };

  lineConfig: any = {
    xAxis: [
      {
        show: true,
        type: 'time',
        boundaryGap: false,
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      { show: true, type: 'value', axisLabel: { inside: false } },
    ],
    series: this.linePlot,
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };

  comboConfig: any = {
    xAxis: [
      {
        data: [
          'Electronics',
          'Toys',
          'Grocery',
          'Appliances',
          'Automotive',
          'Sports',
        ],
      },
      {
        show: true,
        type: 'time',
        boundaryGap: false,
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'time',
        axisLabel: { inside: false },
        min: 0,
        max: 300,
      },
      {
        show: true,
        type: 'value',
        axisLabel: { inside: false },
        splitLine: { lineStyle: { type: 'dotted' } },
        position: 'right',
        min: 0,
        max: 100,
      },
    ],
    series: this.comboPlot,
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };

  yLine: ITdAxisLine = {
    show: true,
    lineStyle: { color: '#777777', width: 2 },
  };

  yAxisLabel: ITdAxisLabel = {
    show: true,
    inside: false,
    fontStyle: 'italic',
    fontWeight: 'bold',
    formatter: '${value}',
  };

  xLine: ITdAxisLine = {
    show: true,
    lineStyle: { color: '#777777', width: 2 },
  };

  xAxisLabel: ITdAxisLabel = {
    show: true,
    inside: false,
    fontStyle: 'italic',
    fontWeight: 'bold',
  };

  splitLineBar: ITdSplitLine = {
    lineStyle: {
      type: 'dotted',
    },
  };

  splitLine: ITdSplitLine = {
    lineStyle: {
      type: 'dashed',
    },
  };

  seriesToolTip: any[] = [
    {
      icon: 'person',
      textStyle: {
        color: '#818181',
      },
      backgroundColor: '#fff',
      // formatter: ' inline Label {a}: {c0}',
    },
        {
      icon: 'dashboard',
      textStyle: {
        color: '#00efff',
      },
      // formatter: 'inline Label {a}: {c0}',
    },
  ];

  seriesLineToolTip: any[] = [
    {
      textStyle: {
        color: '#818181',
      },
      backgroundColor: '#fff',
      // formatter: ' inline Label {a}: {c0}',
    },
        {
      textStyle: {
        color: '#00efff',
      },
      // formatter: 'test {a}: {c0}',
    },
  ];

  linePlotNoSeries: any[] = [{
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

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}
}
