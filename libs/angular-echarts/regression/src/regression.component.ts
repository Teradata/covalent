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
import {
  ITdScatterSeries,
  TdChartSeriesScatterComponent,
} from '@covalent/echarts/scatter';
import * as ecStat from 'echarts-stat';

export type TdRegressionType =
  | 'linear'
  | 'exponential'
  | 'logarithmic'
  | 'polynomial';

export interface ITdRegressionSeries extends ITdScatterSeries {
  data?: number[][];
  regressionType?: TdRegressionType;
  polinomialOrder?: number;
}

@Component({
  selector: 'td-chart-series[td-regression]',
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
      useExisting: forwardRef(() => TdChartSeriesRegressionComponent),
    },
  ],
})
export class TdChartSeriesRegressionComponent
  extends TdChartSeriesScatterComponent
  implements ITdRegressionSeries, OnChanges
{
  @Input() override data?: number[][];
  @Input() regressionType?: TdRegressionType;
  @Input() polinomialOrder?: number;

  constructor(_optionsService: TdChartOptionsService) {
    super(_optionsService);
  }

  override ngOnChanges(): void {
    this.render();
  }

  override getConfig(): any {
    return {
      regressionType: this.regressionType,
      polinomialOrder: this.polinomialOrder,
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
    this.optionsService.setArrayOption('scatter', config);
  }

  private render() {
    const output: any = this.data;
    const result = ecStat.regression(
      this.regressionType ?? 'linear',
      output,
      this.polinomialOrder ?? 2
    );
    let series = this.optionsService.getOption('series');

    if (series) {
      for (const item in series) {
        if (series[item].type === 'line') {
          delete series[item];
        }
      }
    } else {
      series = [];
    }

    series.push({
      type: 'line',
      data: result.points,
      tooltip: {},
      showSymbol: false,
    });

    this.optionsService.setOption('series', series);
    this.setOptions();
  }
}
