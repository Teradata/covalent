import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

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
  inputs: [
    'config',
    'id',
    'name',
    'color',
    'data',

    'animation',
    'animationThreshold',
    'animationDuration',
    'animationEasing',
    'animationDelay',
    'animationDurationUpdate',
    'animationEasingUpdate',
    'animationDelayUpdate',
    'tooltip',
  ],
  providers: [
    {
      provide: TdSeriesComponent,
      useExisting: forwardRef(() => TdChartSeriesScatterComponent),
    },
  ],
})
export class TdChartSeriesScatterComponent extends TdSeriesComponent<'scatter'> implements ITdScatterSeries {
  @Input() coordinateSystem: TdCoordinateSystem;
  @Input() xAxisIndex: number;
  @Input() yAxisIndex: number;
  @Input() polarIndex: number;
  @Input() geoIndex: number;
  @Input() calendarIndex: number;
  @Input() hoverAnimation: boolean;
  @Input() legendHoverLink: boolean;
  @Input() symbol: TdMarkPointSymbol | string;
  @Input() symbolSize: number | any[] | Function;
  @Input() symbolRotate: number;
  @Input() symbolKeepAspect: boolean;
  @Input() symbolOffset: any[];
  @Input() large: boolean;
  @Input() largeThreshold: number;
  @Input() cursor: string;
  @Input() label: ITdLabel;
  @Input() itemStyle: ITdItemStyle;
  @Input() emphasis: ITdEmphasis;
  @Input() progressive: number;
  @Input() progressiveThreshold: number;
  @Input() dimensions: any[];
  @Input() encode: any;
  @Input() seriesLayoutBy: TdSeriesLayoutBy;
  @Input() datasetIndex: number;
  @Input() markPoint: ITdMarkPoint;
  @Input() markLine: ITdMarkLine;
  @Input() markArea: ITdMarkArea;
  @Input() zlevel: number;
  @Input() z: number;
  @Input() silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('scatter', _optionsService);
  }

  getConfig(): any {
    return {
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
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
    };
  }
}
