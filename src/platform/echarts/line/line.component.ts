import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/line';

import { 
  TdChartOptionsService,
  assignDefined,
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
  ITdSeriesTooltip, 
  TdSeriesType,
  ITdEmphasis,
  ITdAnimation,
  ITdShadow,
} from '@covalent/echarts/base';

export type TdSampling = 'average' | 'max' | 'min' | 'sum';

export interface ITdLineSeries extends ITdAnimation, ITdShadow {
  type?: TdSeriesType;
  id?: string;
  name?: string;
  color?: string;
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  symbol?: TdMarkPointSymbol;
  symbolSize?: number;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  showSymbol?: boolean;
  showAllSymbol?: boolean | 'auto';
  hoverAnimation?: boolean;
  legendHoverLink?: boolean;
  stack?: boolean;
  cursor?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: boolean;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  lineStyle?: ITdLineStyle;
  width?: number;
  opacity?: number;
  areaStyle?: ITdAreaStyle;
  emphasis?: ITdEmphasis;
  smooth?: boolean;
  smoothMonotone?: string;
  sampling?: TdSampling;
  dimensions?: any[];
  encode?: any;
  seriesLayoutBy?: TdSeriesLayoutBy;
  datasetIndex?: 0;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  zlevel?: number;
  z?: number;
  silent?: boolean;
  tooltip?: ITdSeriesTooltip;
}

@Component({
  selector: 'td-chart-series[td-line]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartSeriesLineComponent implements OnChanges, OnInit, OnDestroy {

  private _type: TdSeriesType = TdSeriesType.Line;

  private _state: any = {};

  @Input('config') config: any = {};

  @Input('id') id: string;
  @Input('name') name: string;
  @Input('color') color: string;
  @Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('polarIndex') polarIndex: number;
  @Input('symbol') symbol: TdMarkPointSymbol | string;
  @Input('symbolSize') symbolSize: number | any[] | Function;
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('symbolOffset') symbolOffset: any[];
  @Input('showSymbol') showSymbol: boolean;
  @Input('showAllSymbol') showAllSymbol: boolean;
  @Input('hoverAnimation') hoverAnimation: boolean;
  @Input('legendHoverLink') legendHoverLink: boolean;
  @Input('stack') stack: string;
  @Input('cursor') cursor: string;
  @Input('connectNulls') connectNulls: boolean;
  @Input('clipOverflow') clipOverflow: boolean;
  @Input('step') step: string | boolean;
  @Input('label') label: ITdLabel;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('lineStyle') lineStyle: ITdLineStyle;
  @Input('areaStyle') areaStyle: ITdAreaStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('smooth') smooth: boolean | number;
  @Input('smoothMonotone') smoothMonotone: string;
  @Input('sampling') sampling: string;
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
