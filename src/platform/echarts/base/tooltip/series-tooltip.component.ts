import { 
  Component,
  OnInit,
  Input,
  ContentChild,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
  ElementRef,
  ChangeDetectionStrategy,
  Directive,
  OnChanges,
  OnDestroy, 
} 
  from '@angular/core';

import { TdChartOptionsService } from '../chart.service';
import { assignDefined } from '../utils';

export class TdTooltipContext {
  $implicit: any;
  ticket: string;
}

@Directive({
  selector: 'ng-template[tdSeriesTooltipFormatter]',
})
export class TdChartSeriesTooltipFormatterDirective {
}

@Component({
  selector: 'td-chart-series-tooltip',
  templateUrl: './series-tooltip.component.html',
  styleUrls: ['./series-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdSeriesTooltipComponent implements OnChanges, OnInit, OnDestroy {

  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input('config') config: any;
  @Input('configArray') configArray: any[];
  @Input('index') index: number = 0;
  @Input('formatter') formatter: any;
  // Parent tooltip trigger must be set to 'item' to render these properties
  @Input('position') position: string | string[] | number[];
  @Input('backgroundColor') backgroundColor: string = 'rgba(50,50,50,0.7)';
  @Input('borderColor') borderColor: string = '#333';
  @Input('borderWidth') borderWidth: number = 0;
  @Input('padding') padding: number = 5;
  @Input('textStyle') textStyle: any = {
    color: '#FFF',
  };
  @Input('extraCssText') extraCssText: string;

  @ContentChild(TdChartSeriesTooltipFormatterDirective, {read: TemplateRef}) formatterTemplate: TemplateRef<any>;
  @ViewChild('tooltipContent') fullTemplate: TemplateRef<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef,
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
      // const checkKeys: boolean = Object.keys(this.config).length === 0;
      if (!this.configArray) {
      let config: any = assignDefined(this._state, this.config ? this.config : {}, {
        position: this.position,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        padding: this.padding,
        textStyle: this.textStyle,
        extraCssText: this.extraCssText,
        formatter: this.formatter ? this.formatter : this._formatter(),
      });
      // set series tooltip configuration in parent chart and render new configurations
      this._optionsService.setSeriesOption('tooltip', config, this.index);
      } else {
        this._setConfig();
      }
  }
  /**
   * processes configArray and updates
   *
   */
  private _setConfig(): void {
    let config: any = assignDefined(this._state, this.configArray);
    for (const key of Object.keys(config)) {
      if (!config[key].formatter) {
        config[key].formatter = this._formatter();
      }
      this._optionsService.setSeriesOption('tooltip', config[key], parseInt(key, 0));
    }
  }
  
  /**
   * Formatter for tooltip
   *
   */
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

  private _removeOption(): void {
    this._optionsService.clearSeriesOption('tooltip');
  }

}
