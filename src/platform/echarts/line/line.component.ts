import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import { 
  TdChartOptionsService,
  TdCoordinateSystem,
  TdMarkPointSymbol,
  ITdLabel,
  ITdItemStyle,
  ITdLineStyle,
  ITdAreaStyle,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdEmphasis,
  ITdSeries,
  ITdShadow,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export type TdSampling = 'average' | 'max' | 'min' | 'sum';

export interface ITdLineSeries extends ITdSeries<'line'>, ITdShadow {
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  symbol?: TdMarkPointSymbol | string;
  symbolSize?: number | any[] | Function;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  showSymbol?: boolean;
  showAllSymbol?: boolean | 'auto';
  hoverAnimation?: boolean;
  legendHoverLink?: boolean;
  stack?: string;
  cursor?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: string | boolean;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  lineStyle?: ITdLineStyle;
  width?: number;
  opacity?: number;
  areaStyle?: ITdAreaStyle;
  emphasis?: ITdEmphasis;
  smooth?: boolean | number;
  smoothMonotone?: string;
  sampling?: TdSampling;
  dimensions?: any[];
  encode?: any;
  seriesLayoutBy?: TdSeriesLayoutBy;
  datasetIndex?: number;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  zlevel?: number;
  z?: number;
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-line]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesLineComponent),
  }],
})
export class TdChartSeriesLineComponent extends TdSeriesComponent<'line'> implements ITdLineSeries {

  @Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('polarIndex') polarIndex: number;
  @Input('symbol') symbol: TdMarkPointSymbol | string;
  @Input('symbolSize') symbolSize: number | any[] | Function;
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('symbolOffset') symbolOffset: any[];
  @Input('showSymbol') showSymbol: boolean;
  @Input('showAllSymbol') showAllSymbol: boolean;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('stack') stack: string;
  @Input('cursor') cursor: string;
  @Input('connectNulls') connectNulls: boolean;
  @Input('clipOverflow') clipOverflow: boolean;
  @Input('step') step: string | boolean;
  @Input('label') label: ITdLabel;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('lineStyle') lineStyle: ITdLineStyle;
  @Input('areaStyle') areaStyle: ITdAreaStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('smooth') smooth: boolean | number;
  @Input('smoothMonotone') smoothMonotone: string;
  @Input('sampling') sampling: TdSampling;
  @Input('dimensions') dimensions: any[];
  @Input('encode') encode: any;
  @Input('seriesLayoutBy') seriesLayoutBy: TdSeriesLayoutBy;
  @Input('datasetIndex') datasetIndex: number;
  @Input('markPoint') markPoint: ITdMarkPoint;
  @Input('markLine') markLine: ITdMarkLine;
  @Input('markArea') markArea: ITdMarkArea;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('silent') silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('line', _optionsService);
  }

  getConfig(): any {
    return {
      coordinateSystem: this.coordinateSystem,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      polarIndex: this.polarIndex,
      symbol: this.symbol,
      symbolSize: this.symbolSize,
      symbolRotate: this.symbolRotate,
      symbolKeepAspect: this.symbolKeepAspect,
      symbolOffset: this.symbolOffset,
      showSymbol: this.showSymbol,
      showAllSymbol: this.showAllSymbol,
      hoverAnimation: this.hoverAnimation,
      legendHoverLink: this.legendHoverLink,
      stack: this.stack,
      cursor: this.cursor,
      connectNulls: this.connectNulls,
      clipOverflow: this.clipOverflow,
      step: this.step,
      label: this.label,
      itemStyle: this.itemStyle,
      lineStyle: this.lineStyle,
      areaStyle: this.areaStyle,
      emphasis: this.emphasis,
      smooth: this.smooth,
      smoothMonotone: this.smoothMonotone,
      sampling: this.sampling,
      dimensions: this.dimensions,
      encode: this.encode,
      seriesLayoutBy: this.seriesLayoutBy,
      datasetIndex: this.datasetIndex,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
    };
  }

}
