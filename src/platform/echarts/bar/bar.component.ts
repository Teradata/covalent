import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/bar';

import { 
  TdChartOptionsService,
  assignDefined,
  TdCoordinateSystem,
  ITdItemStyle,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeriesTooltip,
} from '@covalent/echarts/base';

@Component({
  selector: 'td-chart-series[td-bar]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartSeriesBarComponent implements OnChanges, OnInit, OnDestroy {

  private _type: string = 'bar';

  private _state: any = {};

  @Input('config') config: any = {};

  @Input('id') id: string;
  @Input('name') name: string;
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
  @Input('progressiveChunkMode') progressiveChunkMode: string;
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
  @Input('animation') animation: boolean;
  @Input('animationThreshold') animationThreshold: number;
  @Input('animationDuration') animationDuration: number | Function;
  @Input('animationEasing') animationEasing: string;
  @Input('animationDelay') animationDelay: number | Function;
  @Input('animationDurationUpdate') animationDurationUpdate: number | Function;
  @Input('animationEasingUpdate') animationEasingUpdate: string;
  @Input('animationDelayUpdate') animationDelayUpdate: number | Function;
  @Input('tooltip') tooltip: ITdSeriesTooltip;

  constructor(private _optionsService: TdChartOptionsService) {
  }

  ngOnInit(): void {
    this._setOptions();
  }

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    let config: any = assignDefined(this._state, this.config, {
      id: this.id,
      type: this._type,
      name: this.name,
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
    });
    this._optionsService.setArrayOption('series', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('series');
  }
}
