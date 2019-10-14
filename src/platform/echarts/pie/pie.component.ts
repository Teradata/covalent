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
  providers: [
    {
      provide: TdSeriesComponent,
      useExisting: forwardRef(() => TdChartSeriesPieComponent),
    },
  ],
})
export class TdChartSeriesPieComponent extends TdSeriesComponent<'pie'> implements ITdPieSeries {
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('hoverOffset') hoverOffset: number;
  @Input('selectedMode') selectedMode: boolean | string;
  @Input('selectedOffset') selectedOffset: number;
  @Input('clockwise') clockwise: boolean;
  @Input('startAngle') startAngle: number;
  @Input('minAngle') minAngle: number;
  @Input('minShowLabelAngle') minShowLabelAngle: number;
  @Input('roseType') roseType: boolean | string;
  @Input('avoidLabelOverlap') avoidLabelOverlap: boolean;
  @Input('stillShowZeroSum') stillShowZeroSum: boolean;
  @Input('cursor') cursor: string;
  @Input('labelLine') labelLine: object;
  @Input('label') label: any;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('seriesLayoutBy') seriesLayoutBy: TdSeriesLayoutBy;
  @Input('datasetIndex') datasetIndex: number;
  @Input('markPoint') markPoint: ITdMarkPoint;
  @Input('markLine') markLine: ITdMarkLine;
  @Input('markArea') markArea: ITdMarkArea;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('center') center: object;
  @Input('radius') radius: number | string | any[];

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
