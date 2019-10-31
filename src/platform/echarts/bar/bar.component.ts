import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import {
  TdChartOptionsService,
  TdCoordinateSystem,
  ITdItemStyle,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeries,
  ITdLabel,
  TdProgressiveChunkMode,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export interface ITdBarSeries extends ITdSeries<'bar'> {
  legendHoverLink?: boolean;
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  Label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  emphasis?: ITdEmphasis;
  stack?: string;
  cursor?: string;
  barWidth?: number | string;
  barMaxWidth?: number | string;
  barMinHeight?: number;
  barGap?: string;
  barCategoryGap?: string;
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
}

@Component({
  selector: 'td-chart-series[td-bar]',
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
      useExisting: forwardRef(() => TdChartSeriesBarComponent),
    },
  ],
})
export class TdChartSeriesBarComponent extends TdSeriesComponent<'bar'> implements ITdBarSeries {
  @Input() coordinateSystem: TdCoordinateSystem;
  @Input() xAxisIndex: number;
  @Input() yAxisIndex: number;
  @Input() legendHoverLink: boolean;
  @Input() stack: string;
  @Input() cursor: string;
  @Input() label: any;
  @Input() itemStyle: ITdItemStyle;
  @Input() emphasis: ITdEmphasis;
  @Input() barWidth: number;
  @Input() barMaxWidth: number;
  @Input() barMinHeight: number;
  @Input() barGap: string;
  @Input() barCategoryGap: string;
  @Input() large: boolean;
  @Input() largeThreshold: number;
  @Input() progressive: number;
  @Input() progressiveThreshold: number;
  @Input() progressiveChunkMode: TdProgressiveChunkMode;
  @Input() dimensions: any[];
  @Input() encode: any;
  @Input() seriesLayoutBy: TdSeriesLayoutBy;
  @Input() datasetIndex: number;
  @Input() markPoint: ITdMarkPoint;
  @Input() markLine: ITdMarkLine;
  @Input() markArea: ITdMarkArea;
  @Input() zlevel: number;
  @Input() z: number;

  constructor(_optionsService: TdChartOptionsService) {
    super('bar', _optionsService);
  }

  getConfig(): any {
    return {
      coordinateSystem: this.coordinateSystem,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      legendHoverLink: this.legendHoverLink,
      stack: this.stack,
      cursor: this.cursor,
      label: this.label,
      itemStyle: this.itemStyle,
      emphasis: this.emphasis,
      barWidth: this.barWidth,
      barMaxWidth: this.barMaxWidth,
      barMinHeight: this.barMinHeight,
      barGap: this.barGap,
      barCategoryGap: this.barCategoryGap,
      large: this.large,
      largeThreshold: this.largeThreshold,
      progressive: this.progressive,
      progressiveThreshold: this.progressiveThreshold,
      progressiveChunkMode: this.progressiveChunkMode,
      dimensions: this.dimensions,
      encode: this.encode,
      seriesLayoutBy: this.seriesLayoutBy,
      datasetIndex: this.datasetIndex,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
    };
  }
}
