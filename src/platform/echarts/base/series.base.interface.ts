import {
  TdAreaOrigin,
  ITdLabel,
  TdMarkPointSymbol,
  TdAnimationEasing,
  TdLineLabelPosition,
  ITdLineStyle,
  ITdLineCurveStyle,
  ITdTextStyle,
  TdTooltipPosition,
} from './base.types';

// used in series, move to base.types if used elsewhere
interface ITdItemStyle {
  color?: any;
  borderColor?: string;
  borderWidth?: number;
  borderType?: string;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

interface ITdAreaStyle {
  color?: any;
  origin?: TdAreaOrigin;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

interface ITdEmphasis {
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
}

interface ITdMarkPoint {
  symbol?: TdMarkPointSymbol | string;
  symbolSize?: number;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  silent?: boolean;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  emphasis?: ITdEmphasis;
  data?: any[];
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: TdAnimationEasing;
  animationDelay?: number;
  animationDurationUpdate?: number;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number;
}

interface ITdMarkLineEmphasis {
  label?: ITdLineLabel;
  itemStyle?: ITdLineStyle;
}

interface ITdMarkAreaEmphasis {
  label?: ITdLabel;
  itemStyle?: ITdLineStyle;
}

interface ITdLineLabel {
  show?: boolean;
  position?: TdLineLabelPosition;
  formatter?: string | Function;
}

interface ITdMarkLine {
  silent?: boolean;
  symbol?: string | any[];
  symbolSize?: number;
  precision?: number;
  label?: ITdLineLabel;
  lineStyle?: ITdLineCurveStyle;
  emphasis?: ITdMarkLineEmphasis;
  data?: any[];
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: TdAnimationEasing;
  animationDelay?: number;
  animationDurationUpdate?: number;
  animationEasingUpdate?: TdAnimationEasing;
  animationDelayUpdate?: number | Function;
}

interface ITdMarkArea {
  silent?: boolean;
  label?: ITdLabel;
  lineStyle?: ITdLineStyle;
  emphasis?: ITdMarkAreaEmphasis;
  data?: any[];
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: TdAnimationEasing;
  animationDelay?: number;
  animationDurationUpdate?: number;
  animationEasingUpdate?: TdAnimationEasing;
  animationDelayUpdate?: number | Function;
}

interface ITdSeriesTooltip {
  position?: TdTooltipPosition | any;
  formatter?: any;
  backgroundColor?: any;
  borderColor?: any;
  borderWidth?: number;
  padding?: number;
  textStyle?: ITdTextStyle;
  extraCssText?: string;
}

enum TdCoordinateSystem {
  Cartesian2d = 'cartesian2d',
  Polar = 'polar',
}

/**
 * 'column': By default, the datasetcolumns correspond to the series, so that dataseteach column is a dimension (dimension).
 * 'row': datasetthe row corresponding to the series, so that dataseteach row is a dimension (dimension).
 * http://echarts.baidu.com/option.html#series-line.seriesLayoutBy
 */
enum TdSeriesLayoutBy {
  Column = 'column',
  Row = 'row',
}

enum TdProgressiveChunkMode {
  sequential = 'sequential',
  Mod = 'mod',
}

enum TdSeriesType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie',
  Scatter = 'scatter',
  EffectScatter = 'effectScatter',
  Radar = 'radar',
  Tree = 'tree',
  Treemap = 'treemap',
  Sunburst = 'sunburst',
  Boxplot = 'boxplot',
  Candlestick = 'candlestick',
  Heatmap = 'heatmap',
  Map = 'map',
  Parallel = 'parallel',
  Lines = 'lines',
  Graph = 'graph',
  Sankey = 'sankey',
  Funnel = 'funnel',
  Gauge = 'gauge',
  PictorialBar = 'pictorialBar',
  ThemeRiver = 'themeRiver',
  Custom = 'custom',
}

interface ITdScatterSeries {
  type?: TdSeriesType;
  id?: string;
  name?: string;
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  geoIndex?: number;
  calendarIndex?: number;
  hoverAnimation?: boolean;
  legendHoverLink?: boolean;
  symbol?: TdMarkPointSymbol;
  symbolSize?: number;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  large: boolean;
  largeThreshold: number;
  cursor?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: boolean;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  Emphasis?: ITdEmphasis;
  progressive: number;
  progressiveThreshold: number;
  dimensions?: any[];
  encode?: any;
  seriesLayoutBy?: TdSeriesLayoutBy;
  datasetIndex?: 0;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  zlevel?: number;
  z?: number;
  silent?: boolean;
  Animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: TdAnimationEasing;
  animationDelay?: 0;
  animationDurationUpdate?: number;
  animationEasingUpdate?: TdAnimationEasing;
  animationDelayUpdate?: number;
  tooltip?: ITdSeriesTooltip;
}

export {
  TdSeriesType,
  ITdItemStyle,
  ITdAreaStyle,
  ITdEmphasis,
  ITdMarkPoint,
  TdCoordinateSystem,
  ITdMarkLine,
  ITdMarkArea,
  ITdLineLabel,
  ITdMarkLineEmphasis,
  ITdSeriesTooltip,
  TdSeriesLayoutBy,
  TdProgressiveChunkMode,
  ITdScatterSeries,
  ITdMarkAreaEmphasis,
};
