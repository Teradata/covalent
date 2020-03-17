import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import {
  TdChartOptionsService,
  ITdItemStyle,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeries,
  ITdLabel,
  ITdLabelLine,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export interface ITdPieSeries extends ITdSeries<'pie'> {
  legendHoverLink?: boolean;
  hoverAnimation?: boolean;
  hoverOffset?: number;
  selectedMode?: boolean | string;
  selectedOffset?: number;
  clockwise?: boolean;
  startAngle?: number;
  minAngle?: number;
  minShowLabelAngle?: number;
  roseType?: boolean | string;
  avoidLabelOverlap?: boolean;
  stillShowZeroSum?: boolean;
  cursor?: string;
  labelLine?: ITdLabelLine;
  Label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  emphasis?: ITdEmphasis;
  seriesLayoutBy?: TdSeriesLayoutBy;
  datasetIndex?: number;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  Zlevel?: 0;
  z?: number;
  center?: object;
  radius?: number | string | any[];
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-pie]',
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
      useExisting: forwardRef(() => TdChartSeriesPieComponent),
    },
  ],
})
export class TdChartSeriesPieComponent extends TdSeriesComponent<'pie'> implements ITdPieSeries {
  @Input() legendHoverLink: boolean;
  @Input() hoverAnimation: boolean;
  @Input() hoverOffset: number;
  @Input() selectedMode: boolean | string;
  @Input() selectedOffset: number;
  @Input() clockwise: boolean;
  @Input() startAngle: number;
  @Input() minAngle: number;
  @Input() minShowLabelAngle: number;
  @Input() roseType: boolean | string;
  @Input() avoidLabelOverlap: boolean;
  @Input() stillShowZeroSum: boolean;
  @Input() cursor: string;
  @Input() labelLine: object;
  @Input() label: any;
  @Input() itemStyle: ITdItemStyle;
  @Input() emphasis: ITdEmphasis;
  @Input() seriesLayoutBy: TdSeriesLayoutBy;
  @Input() datasetIndex: number;
  @Input() markPoint: ITdMarkPoint;
  @Input() markLine: ITdMarkLine;
  @Input() markArea: ITdMarkArea;
  @Input() zlevel: number;
  @Input() z: number;
  @Input() center: object;
  @Input() radius: number | string | any[];

  constructor(_optionsService: TdChartOptionsService) {
    super('pie', _optionsService);
  }

  getConfig(): any {
    return {
      legendHoverLink: this.legendHoverLink,
      label: this.label,
      itemStyle: this.itemStyle,
      emphasis: this.emphasis,
      selectedMode: this.selectedMode,
      selectedOffset: this.selectedOffset,
      clockwise: this.clockwise,
      startAngle: this.startAngle,
      minAngle: this.minAngle,
      minShowLabelAngle: this.minShowLabelAngle,
      roseType: this.roseType,
      avoidLabelOverlap: this.avoidLabelOverlap,
      stillShowZeroSum: this.stillShowZeroSum,
      cursor: this.cursor,
      labelLine: this.labelLine,
      seriesLayoutBy: this.seriesLayoutBy,
      datasetIndex: this.datasetIndex,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      center: this.center,
      radius: this.radius,
    };
  }
}
