import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import 'echarts/lib/chart/line';

import { TdChartOptionsService, assignDefined } from '@covalent/echarts/base';

@Component({
  selector: 'td-chart-series[td-line]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartSeriesLineComponent implements OnChanges, OnInit, OnDestroy {

  private _type: string = 'line';

  private _state: any = {};

  @Input('config') config: any = {};

  @Input('id') id: string;
  @Input('type') type: string;
  @Input('name') name: string;
  @Input('coordinateSystem') coordinateSystem: string;
  @Input('xAxisIndex') xAxisIndex: number;
  @Input('yAxisIndex') yAxisIndex: number;
  @Input('polarIndex') polarIndex: number;
  @Input('symbol') symbol: string;
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
  @Input('label') label: any;
  @Input('itemStyle') itemStyle: any;
  @Input('lineStyle') lineStyle: any;
  @Input('areaStyle') areaStyle: any;
  @Input('emphasis') emphasis: any;
  @Input('smooth') smooth: boolean | number;
  @Input('smoothMonotone') smoothMonotone: string;
  @Input('sampling') sampling: string;
  @Input('dimensions') dimensions: any[];
  @Input('encode') encode: any;
  @Input('seriesLayoutBy') seriesLayoutBy: string;
  @Input('datasetIndex') datasetIndex: number;
  @Input('data') data: any[];
  @Input('markPoint') markPoint: any;
  @Input('markLine') markLine: any;
  @Input('markArea') markArea: any;
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
  @Input('tooltip') tooltip: any;

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
