import {
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { TdChartOptionsService } from '../chart-options.service';
import { assignDefined } from '../utils';
import { 
  ITdAxisLine,
  ITdAxisLabel,
  ITdAxisTick,
  ITdSplitLine,
  ITdSplitArea,
  ITdAxisPointer,
  TdAxisType,
  TdNameLocation,
  TdXAxisPosition,
  TdYAxisPosition } from './axis.interface';
  
export abstract class TdChartAxisComponent implements OnChanges, OnInit, OnDestroy {

  private _state: any = {
    axisLine: {
      lineStyle: {
        color: '#ABABAB',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#ABABAB',
      },
    },
  };

  @Input('config') config: any = {};

  @Input('id') id: string;
  @Input('show') show: boolean = true;
  @Input('gridIndex') gridIndex: number;
  @Input('offset') offset: number;
  abstract position: TdXAxisPosition | TdYAxisPosition;
  @Input('type') type: TdAxisType;
  @Input('name') name: string;
  @Input('nameLocation') nameLocation: TdNameLocation;
  @Input('nameTextStyle') nameTextStyle: any;
  @Input('nameGap') nameGap: number;
  @Input('nameRotate') nameRotate: number;
  @Input('inverse') inverse: boolean;
  @Input('boundaryGap') boundaryGap: boolean | string[];
  @Input('min') min: string | number;
  @Input('max') max: string | number;
  @Input('scale') scale: boolean;
  @Input('minInterval') minInterval: number;
  @Input('interval') interval: number;
  @Input('logBase') logBase: number;
  @Input('silent') silent: boolean;
  @Input('triggerEvent') triggerEvent: boolean;
  @Input('axisLine') axisLine: ITdAxisLine;
  @Input('axisTick') axisTick: ITdAxisTick;
  @Input('axisLabel') axisLabel: ITdAxisLabel;
  @Input('splitLine') splitLine: ITdSplitLine;
  @Input('splitArea') splitArea: ITdSplitArea;
  @Input('data') data: any;
  @Input('axisPointer') axisPointer: ITdAxisPointer;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;

  constructor(private _axisOption: string,
              private _optionsService: TdChartOptionsService) {
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
    let config: any = assignDefined(this._state, {
      id: this.id,
      show: this.show,
      gridIndex: this.gridIndex,
      position: this.position,
      offset: this.offset,
      type: this.type,
      name: this.name,
      nameLocation: this.nameLocation,
      nameTextStyle: this.nameTextStyle,
      nameGap: this.nameGap,
      nameRotate: this.nameRotate,
      inverse: this.inverse,
      boundaryGap: this.boundaryGap,
      min: this.min,
      max: this.max,
      scale: this.scale,
      minInterval: this.minInterval,
      interval: this.interval,
      logBase: this.logBase,
      silent: this.silent,
      triggerEvent: this.triggerEvent,
      axisLine: this.axisLine,
      axisTick: this.axisTick,
      axisLabel: this.axisLabel,
      splitLine: this.splitLine,
      splitArea: this.splitArea,
      data: this.data,
      axisPointer: this.axisPointer,
      zlevel: this.zlevel,
      z: this.z,
    }, this.config ? this.config : {});
    this._optionsService.setArrayOption(this._axisOption, config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption(this._axisOption);
  }

}
