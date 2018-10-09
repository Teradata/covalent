import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/scatter';

import { 
  TdChartOptionsService,
  assignDefined,
  TdSeriesType,
  TdCoordinateSystem,
  TdMarkPointSymbol,
  ITdMarkPoint,
  ITdItemStyle,
  ITdLabel,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeriesTooltip,
} from '@covalent/echarts/base';

import { ITdScatterConfig } from './scatter-config.interface';
  
@Component({
  selector: 'td-chart-series[td-scatter]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartSeriesScatterComponent implements OnChanges, OnInit, OnDestroy {

  private _type: TdSeriesType = TdSeriesType.Scatter;

  private _state: any = {};

  @Input('config') config: ITdScatterConfig = {};

  @Input('id') id: string;
  @Input('name') name: string;
  @Input('color') color: string;
  @Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('polarIndex') polarIndex: number;
  @Input('geoIndex') geoIndex: number;
  @Input('calendarIndex') calendarIndex: number;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('symbol') symbol: TdMarkPointSymbol | string;
  @Input('symbolSize') symbolSize: number | any[] | Function;
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('symbolOffset') symbolOffset: any[];
  @Input('large') large: boolean;
  @Input('largeThreshold') largeThreshold: number;
  @Input('cursor') cursor: string;
  @Input('label') label: ITdLabel;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('progressive') progressive: number;
  @Input('progressiveThreshold') progressiveThreshold: number;
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
  @Input('silent') silent: boolean;
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
      color: this.color,
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
      data: this.data,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
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
