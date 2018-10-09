import {
  ITdLabel,
  TdAnimationEasing,
  TdCoordinateSystem,
  ITdItemStyle,
  ITdEmphasis,
  TdProgressiveChunkMode,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeriesTooltip,
  TdSeriesType,
} from '@covalent/echarts/base';

interface ITdBarSeries {
  type?: TdSeriesType;
  id?: string;
  name?: string;
  color?: string;
  legendHoverLink?: boolean;
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  Label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  emphasis?: ITdEmphasis;
  stack?: boolean;
  cursor?: string;
  barWidth?: number | string;
  barMaxWidth?: number | string;
  barMinHeight?: number;
  barGap?: string;
  barCategoryGap?: 'string';
  large?: boolean;
  largeThreshold?: number;
  progressive?: number;
  progressiveThreshold?: number;
  progressiveChunkMode?: TdProgressiveChunkMode;
  dimensions?: any[];
  encode?: any;
  seriesLayoutBy?: TdSeriesLayoutBy;
  datasetIndex?: number;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  Zlevel?: 0;
  z?: number;
  silent?: boolean;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: TdAnimationEasing;
  animationDelay?: number;
  animationDurationUpdate?: number;
  animationEasingUpdate?: TdAnimationEasing;
  animationDelayUpdate?: number;
  tooltip?: ITdSeriesTooltip;
}

export { ITdBarSeries };
