import {
  TdAlign,
  TdFontStyle,
  TdFontWeight,
  TdVerticalAlign,
  TdFontFamily,
  TdPointerType,
  TdStatus,
  ITdLineStyle,
  TdLineType,
  ITdTextStyle,
  ITdAxisPointerLabel,
  ITdBaseStyle,
} from '../base.types';

interface ITdAxisLine {
  show: boolean;
  onZero?: boolean;
  onZeroAxisIndex?: number;
  symbol?: string | string[];
  symbolSize?: number | number[];
  symbolOffset?: number | number[];
  lineStyle?: ITdLineStyle;
}

interface ITdAxisLabel {
  show?: boolean;
  interval?: any;
  inside?: boolean;
  rotate?: number;
  margin?: number;
  formatter?: any;
  showMinLabel?: boolean;
  showMaxLabel?: boolean;
  color?: any;
  fontStyle?: TdFontStyle;
  fontWeight?: TdFontWeight;
  fontFamily?: TdFontFamily;
  fontSize?: number;
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string | object;
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  shadowColor?: string | object;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string | object;
  textBorderWidth?: number;
  textShadowColor?: string | object;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

interface ITdAxisTick {
  alignWithLabel?: boolean;
  interval?: any;
  inside?: boolean;
  length?: number;
  lineStyle?: ITdLineStyle;
}

interface ITdSplitLine {
  type?: TdLineType;
  show?: boolean;
  interval?: any;
  lineStyle?: ITdLineStyle;
}

interface ITdSplitArea {
  show?: boolean;
  interval?: any;
  areaStyle?: ITdBaseStyle;
}

interface ITdAxisPointer {
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
  handle?: object; // TODO Look into this more
}

interface ITdNameAxisTextStyle {
  color?: string | object;
  fontStyle?: TdFontStyle;
  fontWeight?: TdFontWeight;
  fontFamily?: TdFontFamily;
  fontSize?: number; // Defaults to 12
  align?: TdAlign;
  verticalAlign?: TdVerticalAlign;
  lineHeight?: number;
  backgroundColor?: string | object;
  borderColor?: string; // Defaults to transparent
  borderWidth?: number;
  borderRadius?: number;
  padding?: number;
  shadowColor?: string; // Defaults to transparent
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  width?: number | string;
  height?: number | string;
  textBorderColor?: string; // Defaults to transparent
  textBorderWidth?: number;
  textShadowColor?: string; // Defaults to transparent
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  /*
     * used to define rish text styles
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Rich%20Text
    */
  rich: object;
}

interface ITdXAxisConfig {
  id?: string;
  show?: boolean ;
  gridIndex?: number ;
  position?: TdXAxisPosition;
  offset?: number ;
  type?: TdAxisType;
  name?: string;
  nameLocation?: TdNameLocation;
  nameTextStyle?: ITdTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean |  any[];
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

interface ITdYAxisConfig {
  id?: string;
  show?: boolean ;
  gridIndex?: number ;
  position?: TdYAxisPosition;
  offset?: number ;
  type?: TdAxisType;
  name?: string;
  nameLocation?: TdNameLocation;
  nameTextStyle?: ITdTextStyle;
  nameGap?: number;
  nameRotate?: number;
  inverse?: boolean;
  boundaryGap?: boolean |  any[];
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

enum TdNameLocation {
  Start = 'start',
  Middle = 'middle',
  Center = 'center',
  End = 'end',
}

enum TdAxisType {
  Value = 'value',
  Category = 'category',
  Time = 'time',
  Log = 'log',
}

enum TdYAxisPosition {
  Left = 'left',
  Right = 'right',
}

enum TdXAxisPosition {
  Top = 'top',
  Bottom = 'bottom',
}

export {
  ITdAxisLine,
  ITdAxisLabel,
  ITdAxisTick,
  ITdSplitLine,
  ITdNameAxisTextStyle,
  ITdSplitArea,
  ITdAxisPointer,
  TdYAxisPosition,
  TdXAxisPosition,
  TdNameLocation,
  TdAxisType,
  ITdXAxisConfig,
  ITdYAxisConfig,
};
