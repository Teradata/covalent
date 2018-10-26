
import { ITdBarSeries } from '../../platform/echarts';

export const comboPlot: any[] = [
  {
    type: 'bar',
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
    type: 'line',
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

export const comboConfig: any = {
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
      type: 'value',
      axisLabel: { inside: false },
      min: 0,
      max: 300,
    },
    {
      show: true,
      type: 'value',
      axisLabel: { inside: false },
      splitLine: { lineStyle: { type: 'value' } },
      position: 'right',
      min: 0,
      max: 100,
    },
  ],
  series: comboPlot,
  tooltip: {
    show: true,
    trigger: 'item',
    showContent: true,
  },
};
