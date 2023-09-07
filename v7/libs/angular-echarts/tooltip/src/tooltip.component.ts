import {
  Component,
  Input,
  Directive,
  TemplateRef,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  ContentChild,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import {
  TdChartOptionsService,
  assignDefined,
  TdTooltipTrigger,
  TdTooltipTriggerOn,
  TdTooltipPosition,
} from '@covalent/echarts/base';

export class TdTooltipContext {
  $implicit: any;
  ticket!: string;
}

@Directive({
  selector: 'ng-template[tdTooltipFormatter]',
})
export class TdChartTooltipFormatterDirective {}

@Component({
  selector: 'td-chart-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartTooltipComponent implements OnChanges, OnDestroy {
  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input() config: any = {};

  @Input() show? = true;
  @Input() trigger?: TdTooltipTrigger = 'axis';
  @Input() axisPointer: any;
  @Input() showContent? = true;
  @Input() alwaysShowContent? = false;
  @Input() triggerOn?: TdTooltipTriggerOn = 'mousemove|click';
  @Input() showDelay? = 0;
  @Input() hideDelay? = 0;
  @Input() enterable? = false;
  @Input() renderMode?: 'html' | 'richText';
  @Input() confine = false;
  @Input() transitionDuration = 0.5;
  @Input() position?: TdTooltipPosition; // series
  @Input() formatter?: string | Function; // series
  @Input() backgroundColor? = 'rgba(50,50,50,0.7)'; // series
  @Input() borderColor? = '#333'; // series
  @Input() borderWidth? = 0; // series
  @Input() padding? = 5; // series
  @Input() textStyle: any = {
    // series
    color: '#FFF',
  };
  @Input() extraCssText?: string; // series

  @ContentChild(TdChartTooltipFormatterDirective, {
    read: TemplateRef,
    static: true,
  })
  formatterTemplate!: TemplateRef<any>;
  @ViewChild('tooltipContent', { static: true })
  fullTemplate!: TemplateRef<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _optionsService: TdChartOptionsService
  ) {}

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
        show: this.show,
        trigger: this.trigger,
        axisPointer: this.axisPointer,
        showContent: this.showContent,
        alwaysShowContent: this.alwaysShowContent,
        triggerOn: this.triggerOn,
        showDelay: this.showDelay,
        hideDelay: this.hideDelay,
        enterable: this.enterable,
        confine: this.confine,
        transitionDuration: this.transitionDuration,
        position: this.position,
        formatter: this.formatter
          ? this.formatter
          : this.formatterTemplate
          ? this._formatter()
          : undefined,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        padding: this.padding,
        textStyle: this.textStyle,
        extraCssText: this.extraCssText,
      },
      this.config ? this.config : {}
    );
    // set tooltip configuration in parent chart and render new configurations
    this._optionsService.setOption('tooltip', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('tooltip');
  }

  private _formatter(): (
    params: any,
    ticket: any,
    callback: (ticket: string, html: string) => void
  ) => string {
    return (
      params: any,
      ticket: any,
      callback: (ticket: string, html: string) => void
    ) => {
      this._context = {
        $implicit: params,
        ticket,
      };
      // timeout set since we need to set the HTML at the end of the angular lifecycle when
      // the tooltip delay is more than 0
      setTimeout(() => {
        callback(
          ticket,
          (<HTMLElement>this._elementRef.nativeElement).innerHTML
        );
      });
      this._changeDetectorRef.markForCheck();
      return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
    };
  }
}
