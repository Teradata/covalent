import { Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

import { assignDefined } from '../utils/assign-defined';
import { TdChartOptionsService } from '../chart-options.service';
import { ITdSeriesTooltip } from '../series/series.interface';
import { ITdAnimation } from '../base.types';

export interface ITdSeries<T> extends ITdAnimation {
  id?: string;
  name?: string;
  color?: string;
  type?: T;

  tooltip?: ITdSeriesTooltip;
}

export abstract class TdSeriesComponent<T = any> implements ITdSeries<T>, OnChanges, OnInit, OnDestroy {
  private _type: T;

  get type(): T {
    return this._type;
  }

  _state: any = {};
  _options: any = {};

  @Input() config: any = {};

  @Input() id: string;
  @Input() name: string;
  @Input() color: string;
  @Input() data: any[];

  @Input() animation: boolean;
  @Input() animationThreshold: number;
  @Input() animationDuration: number | Function;
  @Input() animationEasing: string;
  @Input() animationDelay: number | Function;
  @Input() animationDurationUpdate: number | Function;
  @Input() animationEasingUpdate: string;
  @Input() animationDelayUpdate: number | Function;
  @Input() tooltip: ITdSeriesTooltip;

  constructor(type: T, protected optionsService: TdChartOptionsService) {
    this._type = type;
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

  setStateOption(option: string, value: any): void {
    this._options[option] = value;
    this._setOptions();
  }

  removeStateOption(option: string): void {
    /* tslint:disable-next-line */
    this._options[option] = null;
    this._setOptions();
  }

  abstract getConfig(): any;

  private _setOptions(): void {
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
      this.config ? this.config : {},
    );
    this.optionsService.setArrayOption('series', config);
  }

  private _removeOption(): void {
    this.optionsService.removeArrayOption('series', this._state);
  }
}
