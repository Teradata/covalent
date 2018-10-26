import {
  ITdSeriesTooltip,
  ITdAxisLabel,
  ITdAxisLine,
  ITdSplitLine,
  ITdLineSeries,
} from '../../platform/echarts';

const NOW: Date = new Date();

const seriesLineToolTip: any[] = [
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

const splitLine: ITdSplitLine = {
  lineStyle: {
    type: 'dashed',
  },
};

const linePlotNoSeries: ITdLineSeries[] = [
  {
    name: 'Line Series 1',
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

const linePlot: ITdLineSeries[] = [
  {
    name: 'Revenue',
    type: 'line',
    lineStyle: {
      color: 'red',
      width: 2,
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 5,
      opacity: 0.75,
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
  {
    name: 'Sales',
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
    data: [
      {
        name: NOW.toISOString(),
        value: [NOW.toISOString(), 200],
      },
      {
        name: new Date(NOW.getTime() + 10 * 3600 * 1000).toISOString(),
        value: [new Date(NOW.getTime() + 10 * 3600 * 1000).toISOString(), 50],
      },
      {
        name: new Date(NOW.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
        value: [
          new Date(NOW.getTime() + 3 * 24 * 3600 * 1000).toISOString(),
          100,
        ],
      },
    ],
  },
];

const lineConfig: any = {
  xAxis: [
    {
      show: true,
      type: 'time',
      boundaryGap: false,
      axisLine: { show: false },
      splitLine: { show: false },
    },
  ],
  yAxis: [{ show: true, type: 'value', axisLabel: { inside: true } }],
  
  series: linePlot,
  tooltip: {
    show: true,
    trigger: 'axis',
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
  linePlot,
  splitLine,
  linePlotNoSeries,
  seriesLineToolTip,
  seriesToolTip,
  lineConfig,
  xAxisLabel,
  yAxisLabel,
  yLine,
  xLine,
};
