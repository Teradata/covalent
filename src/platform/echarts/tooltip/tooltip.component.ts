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
  ticket: string;
}

@Directive({
  selector: 'ng-template[tdTooltipFormatter]',
})
export class TdChartTooltipFormatterDirective {
}

@Component({
  selector: 'td-chart-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartTooltipComponent implements OnChanges, OnDestroy {

  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input('config') config: any = {};

  @Input('show') show: boolean = true;
  @Input('trigger') trigger: TdTooltipTrigger =  'axis';
  @Input('axisPointer') axisPointer: any;
  @Input('showContent') showContent: boolean = true;
  @Input('alwaysShowContent') alwaysShowContent: boolean = false;
  @Input('triggerOn') triggerOn: TdTooltipTriggerOn = 'mousemove|click';
  @Input('showDelay') showDelay: number = 0;
  @Input('hideDelay') hideDelay: number = 0;
  @Input('enterable') enterable: boolean = false;
  @Input('renderMode') renderMode: 'html' | 'richText';
  @Input('confine') confine: boolean = false;
  @Input('transitionDuration') transitionDuration: number = 0.5;
  @Input('position') position: TdTooltipPosition; // series
  @Input('formatter') formatter: string | Function; // series
  @Input('backgroundColor') backgroundColor: string = 'rgba(50,50,50,0.7)'; // series
  @Input('borderColor') borderColor: string = '#333'; // series
  @Input('borderWidth') borderWidth: number = 0; // series
  @Input('padding') padding: number = 5; // series
  @Input('textStyle') textStyle: any = { // series
    color: '#FFF',
  };
  @Input('extraCssText') extraCssText: string; // series

  @ContentChild(TdChartTooltipFormatterDirective, {read: TemplateRef}) formatterTemplate: TemplateRef<any>;
  @ViewChild('tooltipContent') fullTemplate: TemplateRef<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
              private _optionsService: TdChartOptionsService) {
  }

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {
    let config: any = assignDefined(this._state, this.config ? this.config : {}, {
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
      formatter: this.formatter ? this.formatter : this._formatter(),
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
      padding: this.padding,
      textStyle: this.textStyle,
      extraCssText: this.extraCssText,
    });
    // set tooltip configuration in parent chart and render new configurations
    this._optionsService.setOption('tooltip', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('tooltip');
  }

  private _formatter(): Function {
    return (params: any, ticket: any, callback: (ticket: string, html: string) => void) => {
      this._context = {
        $implicit: params,
        ticket: ticket,
      };
      // timeout set since we need to set the HTML at the end of the angular lifecycle when
      // the tooltip delay is more than 0
      setTimeout(() => {
        callback(ticket, (<HTMLElement>this._elementRef.nativeElement).innerHTML);
      });
      this._changeDetectorRef.markForCheck();
      return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
    };
  }

}
