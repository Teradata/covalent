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
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { Subject, fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

import * as echarts from 'echarts/lib/echarts';

import { TdChartOptionsService, CHART_PROVIDER } from './chart-options.service';
import { assignDefined } from './utils';

@Component({
  selector: 'td-chart',
  template: '',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CHART_PROVIDER],
})
export class TdChartComponent implements AfterViewInit, OnChanges, OnDestroy {

  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();

  private _instance: any;

  /**
   * returns the echarts instance
   */
  get instance(): any {
    return this._instance;
  }

  private _state: any = {};
  private _options: any = {};

  /**
   * config?: any;
   * Sets the JS config object if you choose to not use the property inputs.
   * Note: property inputs override JS config conject properties.
   * https://ecomfe.github.io/echarts-doc/public/en/option.html
   */
  @Input('config') config: any = {};

  /**
   * group?: string
   * group name in which the chart instance will be connected to
   * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.connect
   */
  @Input('group') group: string;

  /**
   * themeName?: string
   * theme to be applied into chart instance
   * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Overview%20of%20Style%20Customization
   */
  @Input('themeName') themeName: string;

  /**
   * renderer: 'svg' | 'canvas'
   * sets the rendering mode for the chart.
   * defaults to 'canvas'
   * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
   */
  @Input('renderer') renderer: 'canvas' | 'svg' = 'canvas';

  @Output('chartClick') chartClick: EventEmitter<any> = new EventEmitter<any>();
  @Output('chartDblclick') chartDblclick: EventEmitter<any> = new EventEmitter<any>();
  @Output('chartContextmenu') chartContextmenu: EventEmitter<any> = new EventEmitter<any>();
  @Output('magicTypeChanged') magicTypeChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output('dataViewChanged') dataViewChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output('datazoom') datazoom: EventEmitter<any> = new EventEmitter<any>();
  @Output('restore') restore: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
              private _optionsService: TdChartOptionsService) {
  }

  ngAfterViewInit(): void {
    this._initializeChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._instance) {
      // destroy and reinitialize chart only when `renderer`, `themeName` and `group` changes
      if (changes.renderer || changes.themeName || changes.group) {
        this._disposeChart();
        this._initializeChart();
      } else {
        this.render();
      }
    }
  }

  ngOnDestroy(): void {
    this._disposeChart();
    this._destroy.unsubscribe();
  }

  render(): void {
    if (this._instance) {
      this._instance.setOption(assignDefined(this._state, {
        grid: {
          show: true,
          left: '20',
          right: '20',
          bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number') 
          || (this.config.toolbox && this.config.toolbox.bottom) ? this._checkToolboxHeight() : '10',
          top: (this.config.toolbox && typeof this.config.toolbox.top === 'number') 
          || (this.config.toolbox && this.config.toolbox.top) ? this._checkToolboxHeight() : '10',
          containLabel: true,
          borderColor: '#FCFCFC',
        },
      }, this.config ? this.config : {}, this._options), true);
      this._changeDetectorRef.markForCheck();
    }
  }

  private _initializeChart(): void {
    this._instance = echarts.init(this._elementRef.nativeElement, this.themeName, {
      renderer: this.renderer,
    });
    fromEvent(this._instance, 'click').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.chartClick.next(params);
    });
    fromEvent(this._instance, 'dblclick').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.chartDblclick.next(params);
    });
    fromEvent(this._instance, 'contextmenu').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.chartContextmenu.next(params);
    });
    fromEvent(this._instance, 'magictypechanged').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.magicTypeChanged.next(params);
    });
    fromEvent(this._instance, 'dataviewchanged').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.dataViewChanged.next(params);
    });
    fromEvent(this._instance, 'datazoom').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.datazoom.next(params);
    });
    fromEvent(this._instance, 'restore').pipe(
      takeUntil(this._destroy),
    ).subscribe((params: any) => {
      this.restore.next(params);
    });
    if (this.group) {
      this._instance.group = this.group;
      echarts.connect(this.group);
      this._changeDetectorRef.markForCheck();
    }
    merge(
      fromEvent(window, 'resize').pipe(
        debounceTime(100),
      ),
      this._widthSubject.asObservable().pipe(
        distinctUntilChanged(),
      ),
      this._heightSubject.asObservable().pipe(
        distinctUntilChanged(),
      ),
    ).pipe(
      takeUntil(this._destroy),
      debounceTime(100),
    ).subscribe(() => {
      if (this._instance) {
        this._instance.resize();
        this._changeDetectorRef.markForCheck();
      }
    });
    this._optionsService.listen().pipe(
      tap((options: any) => {
        assignDefined(this._options, options);
      }),
      debounceTime(0),
      takeUntil(this._destroy),
    ).subscribe(() => {
      this.render();
    });
    timer(500, 250).pipe(
      takeUntil(this._destroy),
    ).subscribe(() => {
      if (this._elementRef && this._elementRef.nativeElement) {
        this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
        this._heightSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height);
      }
    });
  }

  private _disposeChart(): void {
    if (this._instance) {
      this._instance.clear();
      echarts.dispose(this._instance);
    }
    this._destroy.next(true);
  }

  private _checkToolboxHeight(): string {
    return this.config.toolbox.height ? this.config.toolbox.height : '40';
  }

}
