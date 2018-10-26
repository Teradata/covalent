import {
  ITdSplitLine,
  ITdSeriesTooltip,
  ITdAxisLabel,
  ITdAxisLine,
  ITdBarSeries,
} from '../../platform/echarts';

const splitLineBar: ITdSplitLine = {
  lineStyle: {
    type: 'dotted',
  },
};

const barPlot: ITdBarSeries[] = [
  {
    type: 'bar',
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
    type: 'bar',
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

const barConfig: any = {
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
      max: 300,
    },
  ],
  series: barPlot,
  tooltip: {
    show: true,
    trigger: 'item',
    showContent: true,
  },
};

const seriesToolTip: ITdSeriesTooltip[] = [
  {
    textStyle: {
      color: '#818181',
    },
    backgroundColor: '#fff',
    // formatter: ' inline Label {a}: {c0}',
  }, {
    textStyle: {
      color: '#00efff',
    },
    // formatter: 'inline Label {a}: {c0}',
  },
];

const xAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: 'italic',
  fontWeight: 'bold',
};

const yAxisLabel: ITdAxisLabel = {
  show: true,
  inside: false,
  fontStyle: 'italic',
  fontWeight: 'bold',
  formatter: '${value}',
};

const yLine: ITdAxisLine = {
  show: true,
  lineStyle: { color: '#777777', width: 2 },
};

const xLine: ITdAxisLine = {
  show: true,
  lineStyle: { color: '#777777', width: 2 },
};

export {
  seriesToolTip,
  barConfig,
  barPlot,
  splitLineBar,
  xAxisLabel,
  yAxisLabel,
  yLine,
  xLine,
};
