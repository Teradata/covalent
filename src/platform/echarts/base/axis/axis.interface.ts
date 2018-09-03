import {
  TdAlign,
  TdFontStyle,
  TdFontWeight,
  TdVerticalAlign,
  TdFontFamily,
  TdPointerType,
  TdStatus,
} from '../base.types';

interface IAxisLine {
  show: boolean;
  onZero?: boolean;
  onZeroAxisIndex?: number;
  symbol?: string | string[];
  symbolSize?: number | number[];
  symbolOffset?: number | number[];
  lineStyle?: ITdStyle;
}

interface IAxisLabel {
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

interface IAxisTick {
  alignWithLabel?: boolean;
  interval?: any;
  inside?: boolean;
  length?: number;
  lineStyle?: ITdStyle;
}

interface ISplitLine {
  show?: boolean;
  interval?: any;
  lineStyle?: ITdStyle;
}

interface ISplitArea {
  show?: boolean;
  interval?: any;
  areaStyle?: ITdBaseStyle;
}

interface ITdBaseStyle {
  color?: any;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

interface ITdStyle {
  color?: any;
  width?: number;
  type?: TdAxisLineType;
  shadowBlur?: number;
  shadowColor?: any;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
}

interface IAxisPointer {
  show?: boolean;
  type?: TdPointerType;
  snap?: boolean;
  z?: number;
  label?: IAxisPointerLabel;
  lineStyle?: ITdStyle;
  shadowStyle?: ITdBaseStyle;
  triggerTooltip?: boolean;
  value?: number;
  status?: TdStatus;
  handle?: object; // TODO Look into this more
}

interface IAxisPointerLabel {
  show: boolean;
  precision: string | number;
  formatter: any;
  margin: number;
  color: string;
  fontStyle: TdFontStyle;
  fontWeight: TdFontWeight;
  fontFamily: TdFontFamily;
  fontSize: number;
  lineHeight: number;
  width: number | string;
  height: number | string;
  textBorderColor: string;
  textBorderWidth: number;
  textShadowColor: string;
  textShadowBlur: number;
  textShadowOffsetX: number;
  textShadowOffsetY: number;
  padding: number | number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  shadowBlur: number;
  shadowColor: any;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

interface INameAxisTextStyle {
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

enum TdAxisLineType {
  Solid = 'solid',
  Dashed = 'dashed',
  Dotted = 'dotted',
}

export {
  IAxisLine,
  IAxisLabel,
  IAxisTick,
  ISplitLine,
  IAxisPointerLabel,
  INameAxisTextStyle,
  ISplitArea,
  IAxisPointer,
  ITdBaseStyle,
  ITdStyle,
  TdYAxisPosition,
  TdXAxisPosition,
  TdAxisLineType,
  TdNameLocation,
  TdAxisType,
};
