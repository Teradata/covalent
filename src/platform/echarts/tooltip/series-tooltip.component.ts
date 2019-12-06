import {
  Component,
  Input,
  ContentChild,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
  ElementRef,
  ChangeDetectionStrategy,
  OnChanges,
  OnDestroy,
} from '@angular/core';

import { assignDefined, TdSeriesComponent } from '@covalent/echarts/base';

import { TdChartTooltipFormatterDirective, TdTooltipContext } from './tooltip.component';

@Component({
  selector: 'td-chart-series-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdSeriesTooltipComponent implements OnChanges, OnDestroy {
  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input() config: any;

  @Input() formatter: any;
  // Parent tooltip trigger must be set to 'item' to render these properties
  @Input() position: string | string[] | number[];
  @Input() backgroundColor: string = 'rgba(50,50,50,0.7)';
  @Input() borderColor: string = '#333';
  @Input() borderWidth: number = 0;
  @Input() padding: number = 5;
  @Input() textStyle: any = {
    color: '#FFF',
  };
  @Input() extraCssText: string;

  @ContentChild(TdChartTooltipFormatterDirective, { read: TemplateRef, static: true }) formatterTemplate: TemplateRef<
    any
  >;
  @ViewChild('tooltipContent', { static: true }) fullTemplate: TemplateRef<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _seriesComponent: TdSeriesComponent,
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
        position: this.position,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth,
        padding: this.padding,
        textStyle: this.textStyle,
        extraCssText: this.extraCssText,
        formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
      },
      this.config ? this.config : {},
    );
    // set series tooltip configuration in parent chart and render new configurations
    this._seriesComponent.setStateOption('tooltip', config);
  }

  /**
   * Formatter for tooltip
   *
   */
  private _formatter(): (params: any, ticket: any, callback: (ticket: string, html: string) => void) => string {
    return (params: any, ticket: any, callback: (ticket: string, html: string) => void) => {
      this._context = {
        $implicit: params,
        ticket,
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
    this._seriesComponent.removeStateOption('tooltip');
  }
}
