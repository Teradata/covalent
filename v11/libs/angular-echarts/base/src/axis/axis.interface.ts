import {
  TdAlign,
  TdVerticalAlign,
  TdPointerType,
  TdStatus,
  ITdLineStyle,
  TdLineType,
  ITdTextStyle,
  ITdAxisPointerLabel,
  ITdBaseStyle,
  ITdShadow,
  ITdTextShadow,
  ITdFont,
} from '../base.types';

export interface ITdNameTextStyle extends ITdShadow, ITdTextShadow, ITdFont {
  color?: string | any;
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | any;
  borderColor?: string; // Defaults to transparent
  borderWidth?: number;
  borderRadius?: number;
  padding?: number | number[];
  width?: number | string;
  height?: number | string;
  textBorderColor?: string; // Defaults to transparent
  textBorderWidth?: number;
  /**
   * used to define rish text styles
   * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Rich%20Text
   */
  rich: any;
}

export interface ITdAxisLine {
  show: boolean;
  onZero?: boolean;
  onZeroAxisIndex?: number;
  symbol?: 'none' | 'arrow' | string[];
  symbolSize?: number[];
  symbolOffset?: number | number[];
  lineStyle?: ITdLineStyle;
}

export interface ITdAxisTick {
  show?: boolean;
  alignWithLabel?: boolean;
  interval?: number | Function;
  inside?: boolean;
  length?: number;
  lineStyle?: ITdLineStyle;
}

export interface ITdAxisLabel extends ITdShadow, ITdTextShadow, ITdFont {
  show?: boolean;
  interval?: number | Function;
  inside?: boolean;
  rotate?: number;
  margin?: number;
  formatter?: string | Function;
  showMinLabel?: boolean;
  showMaxLabel?: boolean;
  color?: string | Function;
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string | object;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string | object;
  textBorderWidth?: number;
}

export interface ITdSplitLine {
  type?: TdLineType;
  show?: boolean;
  interval?: any;
  lineStyle?: ITdLineStyle;
}

export interface ITdSplitArea {
  show?: boolean;
  interval?: any;
  areaStyle?: ITdBaseStyle;
}

export interface ITdAxisPointer {
  show?: boolean;
  type?: TdPointerType;
  snap?: boolean;
  z?: number;
  label?: ITdAxisPointerLabel;
  lineStyle?: ITdLineStyle;
  shadowStyle?: ITdBaseStyle;
  triggerTooltip?: boolean;
  value?: number;
  status?: TdStatus;
  handle?: any; // TODO Look into this more
}

export interface ITdXAxisConfig {
  id?: string;
  show?: boolean;
  gridIndex?: number;
  position?: TdXAxisPosition;
  offset?: number;
  type?: TdAxisType;
  name?: string;
  nameLocation?: TdNameLocation;
  nameTextStyle?: ITdTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | any[];
  min?: number | string | Function;
  max?: number | string;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: false;
  triggerEvent?: boolean;
  axisLine?: ITdAxisLine;
  axisTick?: ITdAxisTick;
  axisLabel?: ITdAxisLabel;
  splitLine?: ITdSplitLine;
  splitArea?: ITdSplitArea;
  data?: any[];
  axisPointer?: ITdAxisPointer;
  zlevel?: number;
  z?: number;
}

export interface ITdYAxisConfig {
  id?: string;
  show?: boolean;
  gridIndex?: number;
  position?: TdYAxisPosition;
  offset?: number;
  type?: TdAxisType;
  name?: string;
  nameLocation?: TdNameLocation;
  nameTextStyle?: ITdTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean | any[];
  min?: number | string | Function;
  max?: number | string;
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: false;
  triggerEvent?: boolean;
  axisLine?: ITdAxisLine;
  axisTick?: ITdAxisTick;
  axisLabel?: ITdAxisLabel;
  splitLine?: ITdSplitLine;
  splitArea?: ITdSplitArea;
  data?: any[];
  axisPointer?: ITdAxisPointer;
  zlevel?: number;
  z?: number;
}

export type TdNameLocation = 'start' | 'middle' | 'center' | 'end';

export type TdAxisType = 'value' | 'category' | 'time' | 'log';

export type TdYAxisPosition = 'left' | 'right';

export type TdXAxisPosition = 'top' | 'bottom';
