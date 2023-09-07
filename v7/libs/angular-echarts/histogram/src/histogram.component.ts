import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
  OnChanges,
} from '@angular/core';

import {
  assignDefined,
  TdChartOptionsService,
  TdSeriesDirective,
} from '@covalent/echarts/base';
import { ITdBarSeries, TdChartSeriesBarComponent } from '@covalent/echarts/bar';
import * as ecStat from 'echarts-stat';

export type TdHistogramBinningMethod =
  | 'squareRoot'
  | 'scott'
  | 'freedmanDiaconis'
  | 'sturges';

export interface ITdHistogramSeries extends ITdBarSeries {
  data?: number[] | number[][];
  method?: TdHistogramBinningMethod;
}

@Component({
  selector: 'td-chart-series[td-histogram]',
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
      provide: TdSeriesDirective,
      useExisting: forwardRef(() => TdChartSeriesHistogramComponent),
    },
  ],
})
export class TdChartSeriesHistogramComponent
  extends TdChartSeriesBarComponent
  implements ITdHistogramSeries, OnChanges
{
  @Input() source?: number[] | number[][];
  @Input() method?: TdHistogramBinningMethod;

  constructor(_optionsService: TdChartOptionsService) {
    super(_optionsService);
  }

  override ngOnChanges(): void {
    let output: any = [];
    if (!this.source) {
      const dataset: any = this.optionsService.getOption('dataset');
      this.source = dataset?.source ?? [];
    }

    if (this.source?.some((item) => Array.isArray(item))) {
      const config = this.getConfig();
      const index = config.datasetIndex ?? 1;
      const source: any[] = this.source;
      const indexedOutput = source[0].map((_: any, colIndex: string | number) =>
        source.map((row) => row[colIndex])
      );
      output = indexedOutput[index - 1] ?? [];
    } else {
      output = this.source;
    }

    const bins = ecStat.histogram(output, this.method ?? 'squareRoot');
    this.data = bins.data;
    this.setOptions();
  }

  override getConfig(): any {
    return {
      method: this.method,
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

  private setOptions(): void {
    const config: any = assignDefined(
      this._state,
      {
        id: this.id,
        type: this.type,
        name: this.name,
        color: this.color,
        data: this.data,
        animation: this.animation,
        animationThreshold: this.animationThreshold,
        animationDuration: this.animationDuration,
        animationEasing: this.animationEasing,
        animationDelay: this.animationDelay,
        animationDurationUpdate: this.animationDurationUpdate,
        animationEasingUpdate: this.animationEasingUpdate,
        animationDelayUpdate: this.animationDelayUpdate,
        tooltip: this.tooltip,
      },
      this.getConfig(),
      this._options,
      this.config ? this.config : {}
    );
    this.optionsService.setArrayOption('series', config);
  }
}
