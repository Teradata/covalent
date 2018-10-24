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
  ITdMarkPoint,
  ITdItemStyle,
  ITdLabel,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkLine,
  ITdMarkArea,
  TdSeriesComponent,
  ITdSeries,
} from '@covalent/echarts/base';

export interface ITdScatterSeries extends ITdSeries<'scatter'> {
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  geoIndex?: number;
  calendarIndex?: number;
  hoverAnimation?: boolean;
  legendHoverLink?: boolean;
  symbol?: TdMarkPointSymbol | string;
  symbolSize?: number | any[] | Function;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  large?: boolean;
  largeThreshold?: number;
  cursor?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: boolean;
  label?: ITdLabel;
  itemStyle?: any;
  emphasis?: ITdEmphasis;
  progressive?: number;
  progressiveThreshold?: number;
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
  selector: 'td-chart-series[td-scatter]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
  }],
})
export class TdChartSeriesScatterComponent extends TdSeriesComponent<'scatter'> implements ITdScatterSeries {

  @Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('polarIndex') polarIndex: number;
  @Input('geoIndex') geoIndex: number;
  @Input('calendarIndex') calendarIndex: number;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('symbol') symbol: TdMarkPointSymbol | string;
  @Input('symbolSize') symbolSize: number | any[] | Function;
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('symbolOffset') symbolOffset: any[];
  @Input('large') large: boolean;
  @Input('largeThreshold') largeThreshold: number;
  @Input('cursor') cursor: string;
  @Input('label') label: ITdLabel;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('progressive') progressive: number;
  @Input('progressiveThreshold') progressiveThreshold: number;
  @Input('dimensions') dimensions: any[];
  @Input('encode') encode: any;
  @Input('seriesLayoutBy') seriesLayoutBy: TdSeriesLayoutBy;
  @Input('datasetIndex') datasetIndex: number;
  @Input('data') data: any[];
  @Input('markPoint') markPoint: ITdMarkPoint;
  @Input('markLine') markLine: ITdMarkLine;
  @Input('markArea') markArea: ITdMarkArea;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('silent') silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('scatter', _optionsService);
  }

  getConfig(): any {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      color: this.color,
      coordinateSystem: this.coordinateSystem,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      polarIndex: this.polarIndex,
      geoIndex: this.geoIndex,
      calendarIndex: this.calendarIndex,
      hoverAnimation: this.hoverAnimation,
      legendHoverLink: this.legendHoverLink,
      symbol: this.symbol,
      symbolSize: this.symbolSize,
      symbolRotate: this.symbolRotate,
      symbolKeepAspect: this.symbolKeepAspect,
      symbolOffset: this.symbolOffset,
      large: this.large,
      largeThreshold: this.largeThreshold,
      cursor: this.cursor,
      label: this.label,
      itemStyle: this.itemStyle,
      emphasis: this.emphasis,
      progressive: this.progressive,
      progressiveThreshold: this.progressiveThreshold,
      dimensions: this.dimensions,
      encode: this.encode,
      seriesLayoutBy: this.seriesLayoutBy,
      datasetIndex: this.datasetIndex,
      data: this.data,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
      animation: this.animation,
      animationThreshold: this.animationThreshold,
      animationDuration: this.animationDuration,
      animationEasing: this.animationEasing,
      animationDelay: this.animationDelay,
      animationDurationUpdate: this.animationDurationUpdate,
      animationEasingUpdate: this.animationEasingUpdate,
      animationDelayUpdate: this.animationDelayUpdate,
      tooltip: this.tooltip,
    };
  }
}
