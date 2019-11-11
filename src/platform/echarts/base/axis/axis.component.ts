import { Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

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
  TdYAxisPosition,
} from './axis.interface';

export abstract class TdChartAxisComponent implements OnChanges, OnInit, OnDestroy {
  private _state: any = {};

  @Input() config: any = {};

  @Input() id: string;
  @Input() show: boolean = true;
  @Input() gridIndex: number;
  @Input() offset: number;
  abstract position: TdXAxisPosition | TdYAxisPosition;
  @Input() type: TdAxisType;
  @Input() name: string;
  @Input() nameLocation: TdNameLocation;
  @Input() nameTextStyle: any;
  @Input() nameGap: number;
  @Input() nameRotate: number;
  @Input() inverse: boolean;
  @Input() boundaryGap: boolean | string[];
  @Input() min: string | number;
  @Input() max: string | number;
  @Input() scale: boolean;
  @Input() minInterval: number;
  @Input() interval: number;
  @Input() logBase: number;
  @Input() silent: boolean;
  @Input() triggerEvent: boolean;
  @Input() axisLine: ITdAxisLine;
  @Input() axisTick: ITdAxisTick;
  @Input() axisLabel: ITdAxisLabel;
  @Input() splitLine: ITdSplitLine;
  @Input() splitArea: ITdSplitArea;
  @Input() data: any;
  @Input() axisPointer: ITdAxisPointer;
  @Input() zlevel: number;
  @Input() z: number;

  constructor(private _axisOption: string, private _optionsService: TdChartOptionsService) {}

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
    const config: any = assignDefined(
      this._state,
      {
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
      },
      this.config ? this.config : {},
    );
    this._optionsService.setArrayOption(this._axisOption, config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption(this._axisOption);
  }
}
