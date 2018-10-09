import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  OnChanges,
  NgZone,
  OnDestroy,
  DoCheck,
  ContentChild,
} from '@angular/core';

import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/dataZoom';

import { TdChartOptionsService, CHART_PROVIDER } from './chart.service';
import { assignDefined } from './utils';

@Component({
  selector: 'td-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CHART_PROVIDER],
})
export class TdChartComponent implements AfterViewInit, OnChanges, DoCheck, OnDestroy {

  private _resizeSubscription: Subscription;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;

  private _legend: any;

  private _instance: any;

  get instance(): any {
    return this._instance;
  }

  private _state: any = {};
  private _options: any = {};

  @Input('config') config: any = {};

  @Input('chartTitle') chartTitle: string;
  @Input('showLegend') showLegend: boolean = true;
  @Input('chartGroup') chartGroup: string;
  @Input('dataZoom') dataZoom: boolean = true;

  @Output('markAreaClick') markAreaClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
              private _optionsService: TdChartOptionsService) {
  }

  ngAfterViewInit(): void {
    this._instance = echarts.init(this._elementRef.nativeElement);
    fromEvent(this._instance, 'click').subscribe((params: any) => {
      if (params.componentType === 'markArea') {
        this.markAreaClick.next(params);
      }
    });
    if (this.chartGroup) {
      this._instance.group = this.chartGroup;
      echarts.connect(this.chartGroup);
      this._changeDetectorRef.markForCheck();
    }
    this._resizeSubscription = merge(
      fromEvent(window, 'resize').pipe(
        debounceTime(10),
      ),
      this._widthSubject.asObservable().pipe(
        debounceTime(0),
        distinctUntilChanged(),
      ),
      this._heightSubject.asObservable().pipe(
        debounceTime(0),
        distinctUntilChanged(),
      ),
    ).subscribe(() => {
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this._instance.resize();
          this._resizing = false;
          this._changeDetectorRef.markForCheck();
        }, 100);
      }
    });
    this.render();
    this._optionsService.listen().subscribe((options: any) => {
      assignDefined(this._options, options);
      this.render();
    });
  }

  ngDoCheck(): void {
    if (this._elementRef && this._elementRef.nativeElement) {
      this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
      this._heightSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height);
    }
  }

  ngOnChanges(): void {
    if (this._instance) {
      this._instance.clear();
      this.render();
    }
  }

  ngOnDestroy(): void {
    if (this._resizeSubscription) {
      this._resizeSubscription.unsubscribe();
    }
  }

  render(): void {
    if (this._instance) {
      this._legend = {
        show: this.showLegend,
        type: 'scroll',
        selectedMode: 'multiple',
        orient: 'horizontal', // 'vertical'
        right: '5',
        bottom: '5',
      },
      this._instance.setOption(assignDefined(this._state, {
        grid: {
          show: true,
          left: '20',
          right: '20',
          bottom: this.showLegend ? '30' : '10',
          top: '10',
          containLabel: true,
          borderColor: '#FCFCFC',
        },
        dataZoom: this.dataZoom ? [{
          type: 'inside',
          throttle: 50,
          zoomOnMouseWheel: 'shift',
        }] : undefined,
        legend: this._legend,
        xAxis : [{}], // throws error if its empty
        yAxis : [{}], // throws error if its empty
        series: [],
      }, this.config ? this.config : {}, this._options), true);
      this._changeDetectorRef.markForCheck();
    }
  }

}
