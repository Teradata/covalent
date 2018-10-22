import {
  ITdLabel,
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
  ITdAnimation,
} from '@covalent/echarts/base';

export interface ITdBarSeries extends ITdAnimation {
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
  tooltip?: ITdSeriesTooltip;
}
