import {
  TdAreaOrigin,
  ITdLabel,
  TdMarkPointSymbol,
  TdLineLabelPosition,
  ITdLineStyle,
  ITdTextStyle,
  TdTooltipPosition,
  ITdAnimation,
  ITdShadow,
} from '../base.types';

// used in series, move to base.types if used elsewhere
export interface ITdItemStyle extends ITdShadow {
  color?: any;
  borderColor?: string;
  borderWidth?: number;
  borderType?: string;
  opacity?: number;
}

export interface ITdAreaStyle extends ITdShadow {
  color?: any;
  origin?: TdAreaOrigin;
  opacity?: number;
}

export interface ITdEmphasis {
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
}

export interface ITdMarkPoint extends ITdAnimation {
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
}

export interface ITdMarkLineEmphasis {
  label?: ITdLineLabel;
  itemStyle?: ITdLineStyle;
}

export interface ITdMarkAreaEmphasis {
  label?: ITdLabel;
  itemStyle?: ITdLineStyle;
}

export interface ITdLineLabel {
  show?: boolean;
  position?: TdLineLabelPosition;
  formatter?: string | Function;
}

export interface ITdMarkLine extends ITdAnimation {
  silent?: boolean;
  symbol?: string | any[];
  symbolSize?: number;
  precision?: number;
  label?: ITdLineLabel;
  lineStyle?: ITdLineStyle;
  emphasis?: ITdMarkLineEmphasis;
  data?: any[];
}

export interface ITdMarkArea extends ITdAnimation {
  silent?: boolean;
  label?: ITdLabel;
  lineStyle?: ITdLineStyle;
  emphasis?: ITdMarkAreaEmphasis;
  data?: any[];
}

export interface ITdSeriesTooltip {
  position?: TdTooltipPosition | any;
  formatter?: any;
  backgroundColor?: any;
  borderColor?: any;
  borderWidth?: number;
  padding?: number;
  textStyle?: ITdTextStyle;
  extraCssText?: string;
}

export type TdCoordinateSystem = 'cartesian2d' | 'polar';

/**
 * 'column': By default, the datasetcolumns correspond to the series, so that dataseteach column is a dimension (dimension).
 * 'row': datasetthe row corresponding to the series, so that dataseteach row is a dimension (dimension).
 * http://echarts.baidu.com/option.html#series-line.seriesLayoutBy
 */
export type TdSeriesLayoutBy = 'column' | 'row';

export type TdProgressiveChunkMode = 'sequential' | 'mod';
