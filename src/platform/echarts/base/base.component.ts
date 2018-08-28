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

import { TdChartOptionsService, BASE_CHART_PROVIDER } from './base.service';
import { assignDefined } from './utils';

@Component({
  selector: 'td-base-chart',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BASE_CHART_PROVIDER],
})
export class TdBaseChartComponent implements AfterViewInit, OnChanges, DoCheck, OnDestroy {

  private _resizeSubscription: Subscription;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;

  private _series: any[];
  private _legend: any;

  private _instance: any;
  private _options: any = {};

  get instance(): any {
    return this._instance;
  }

  get options(): any {
    return this._options;
  }

  @Input('chartTitle') chartTitle: string;
  @Input('showLegend') showLegend: boolean = true;
  @Input('data') data: any[];
  @Input('max') max: number;
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
      if (this.data && this.data instanceof Array ) {
        this._series = this.data.map((d: any) => {
          return {
            name: d.name,
            id: d.id,
            type: d.type ? d.type : 'line',
            stack: d.stack,
            data: d.data,
            color: d.color,
            connectNulls: false,
            barWidth: d.barWidth,
            barGap: d.barGap,
            z: d.z,
            lineStyle: {
              opacity: d.opacity,
              width: d.width,
              shadowBlur: d.shadowBlur,
              shadowColor: d.shadowColor,
              shadowOffsetX: d.shadowOffsetX,
              shadowOffsetY: d.shadowOffsetY,
            },
            itemStyle: {
              opacity: d.opacity,
            },
            showSymbol: false,
            areaStyle: d.area ? {opacity: d.opacity} : undefined,
            markArea: {
              data: d.markArea,
              itemStyle: {
                borderColor: '#464646',
                borderWidth: 1,
                opacity: d.markAreaOpacity ? d.markAreaOpacity : 0.1,
              },
            },
          };
        });
      }
      this._legend = {
        show: this.showLegend,
        type: 'scroll',
        selectedMode: 'multiple',
        orient: 'horizontal', // 'vertical'
        right: '5',
        bottom: '5',
        data: this.data && this.data instanceof Array ? this.data.map((d: any) => d.name) : [],
      },
      this._instance.setOption(Object.assign({}, {
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
        series: this._series,
      }, this._options), true);
      this._changeDetectorRef.markForCheck();
    }
  }

}
