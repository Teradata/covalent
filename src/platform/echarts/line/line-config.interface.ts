import { ITdTooltip, ITdXAxisConfig, ITdYAxisConfig, ITdAnimation } from '@covalent/echarts/base';
import { ITdLineSeries } from './line-series.interface';

export interface ITdLineConfig extends ITdAnimation {
  title?: any;
  toolbox?: any;
  xAxis?: ITdXAxisConfig[];
  yAxis?: ITdYAxisConfig[];
  series?: ITdLineSeries[];
  tooltip?: ITdTooltip;
  legend?: any;
  backgroundColor?: any;
  color?: any;
  renderAsImage?: boolean;
  calculable?: boolean;
  timeline?: any;
  dataRange?: any;
  dataZoom?: any;
  grid?: any;
  polar?: any;
  radiusAxis?: any;
  angleAxis?: any;
  radar?: any;
  visualMap?: any;
  axisPointer?: any;
  brush?: any;
  geo?: any;
  parallel?: any;
  parallelAxis?: any;
  singleAxis?: any;
  graphic?: any;
  calendar?: any;
  dataset?: any;
  aria?: any;
  textStyle?: any;
  blendMode?: any;
  hoverLayerThreshold?: any;
  useUTC?: any;
}
