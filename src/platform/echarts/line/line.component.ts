import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

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
      useExisting: forwardRef(() => TdChartSeriesLineComponent),
    },
  ],
})
export class TdChartSeriesLineComponent extends TdSeriesComponent<'line'> implements ITdLineSeries {
  @Input() coordinateSystem: TdCoordinateSystem;
  @Input() xAxisIndex: number;
  @Input() yAxisIndex: number;
  @Input() polarIndex: number;
  @Input() symbol: TdMarkPointSymbol | string;
  @Input() symbolSize: number | any[] | Function;
  @Input() symbolRotate: number;
  @Input() symbolKeepAspect: boolean;
  @Input() symbolOffset: any[];
  @Input() showSymbol: boolean;
  @Input() showAllSymbol: boolean;
  @Input() hoverAnimation: boolean;
  @Input() legendHoverLink: boolean;
  @Input() stack: string;
  @Input() cursor: string;
  @Input() connectNulls: boolean;
  @Input() clipOverflow: boolean;
  @Input() step: string | boolean;
  @Input() label: ITdLabel;
  @Input() itemStyle: ITdItemStyle;
  @Input() lineStyle: ITdLineStyle;
  @Input() areaStyle: ITdAreaStyle;
  @Input() emphasis: ITdEmphasis;
  @Input() smooth: boolean | number;
  @Input() smoothMonotone: string;
  @Input() sampling: TdSampling;
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
