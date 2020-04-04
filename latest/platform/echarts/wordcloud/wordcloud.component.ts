import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import { TdChartOptionsService, ITdSeries, TdSeriesComponent } from '@covalent/echarts/base';

export type TdWordcloudShape =
  | 'circle'
  | 'cardioid'
  | 'diamond'
  | 'triangle-forward'
  | 'triangle'
  | 'pentagon'
  | 'star';

export interface ITdWordcloudTextStyle {
  normal?: {
    fontFamily?: string;
    fontWeight?: string;
    color?: string | ((x: any) => string);
  };
  emphasis?: {
    shadowBlur?: number;
    shadowColor?: string;
  };
}

export interface ITdWordCloudData {
  name: string;
  value: number;
  textStyle?: ITdWordcloudTextStyle;
}

export interface ITdWordcloudSeries extends ITdSeries<'wordCloud'> {
  data?: ITdWordCloudData[];
  shape?: TdWordcloudShape;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  right?: string | number;
  bottom?: string | number;
  sizeRange?: number[];
  rotationRange?: number[];
  rotationStep?: number;
  gridSize?: number;
  drawOutOfBound?: boolean;
  textStyle?: ITdWordcloudTextStyle;
}

@Component({
  selector: 'td-chart-series[td-wordCloud]',
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
      useExisting: forwardRef(() => TdChartSeriesWordcloudComponent),
    },
  ],
})
export class TdChartSeriesWordcloudComponent extends TdSeriesComponent<'wordCloud'> implements ITdWordcloudSeries {
  @Input() data: ITdWordCloudData[];
  @Input() shape: TdWordcloudShape;
  @Input() left: string | number;
  @Input() top: string | number;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() right: string | number;
  @Input() bottom: string | number;
  @Input() sizeRange: number[];
  @Input() rotationRange: number[];
  @Input() rotationStep: number;
  @Input() gridSize: number;
  @Input() drawOutOfBound: boolean;
  @Input() textStyle: ITdWordcloudTextStyle;

  constructor(_optionsService: TdChartOptionsService) {
    super('wordCloud', _optionsService);
  }

  getConfig(): any {
    return {
      shape: this.shape,
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height,
      right: this.right,
      bottom: this.bottom,
      sizeRange: this.sizeRange,
      rotationRange: this.rotationRange,
      rotationStep: this.rotationStep,
      gridSize: this.gridSize,
      drawOutOfBound: this.drawOutOfBound,
      textStyle: this.textStyle,
    };
  }
}
