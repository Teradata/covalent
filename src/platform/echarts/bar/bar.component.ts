import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

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
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesBarComponent),
  }],
})
export class TdChartSeriesBarComponent extends TdSeriesComponent<'bar'> implements ITdBarSeries {

  @Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('stack') stack: string;
  @Input('cursor') cursor: string;
  @Input('label') label: any;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('barWidth') barWidth: number;
  @Input('barMaxWidth') barMaxWidth: number;
  @Input('barMinHeight') barMinHeight: number;
  @Input('barGap') barGap: string;
  @Input('barCategoryGap') barCategoryGap: string;
  @Input('large') large: boolean;
  @Input('largeThreshold') largeThreshold: number;
  @Input('progressive') progressive: number;
  @Input('progressiveThreshold') progressiveThreshold: number;
  @Input('progressiveChunkMode') progressiveChunkMode: TdProgressiveChunkMode;
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

  constructor(_optionsService: TdChartOptionsService) {
    super('bar', _optionsService);
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
      data: this.data,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
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
