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
  inject,
} from '@angular/core';

import { assignDefined, TdSeriesDirective } from '@covalent/echarts/base';

import {
  TdChartTooltipFormatterDirective,
  TdTooltipContext,
} from './tooltip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-chart-series-tooltip',
  templateUrl: './tooltip.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdSeriesTooltipComponent implements OnChanges, OnDestroy {
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _elementRef = inject(ElementRef);
  private _seriesComponent = inject(TdSeriesDirective);

  private _state: any = {};

  _context: TdTooltipContext = new TdTooltipContext();

  @Input() config?: any;

  @Input() formatter?: any;
  // Parent tooltip trigger must be set to 'item' to render these properties
  @Input() position?: string | string[] | number[];
  @Input() backgroundColor? = 'rgba(50,50,50,0.7)';
  @Input() borderColor? = '#333';
  @Input() borderWidth? = 0;
  @Input() padding? = 5;
  @Input() textStyle? = {
    color: '#FFF',
  };
  @Input() extraCssText?: string;

  @ContentChild(TdChartTooltipFormatterDirective, {
    read: TemplateRef,
    static: true,
  })
  formatterTemplate!: TemplateRef<any>;
  @ViewChild('tooltipContent', { static: true })
  fullTemplate!: TemplateRef<any>;

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
        formatter: this.formatter
          ? this.formatter
          : this.formatterTemplate
            ? this._formatter()
            : undefined,
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
  private _formatter(): (
    params: any,
    ticket: any,
    callback: (ticket: string, html: string) => void,
  ) => string {
    return (
      params: any,
      ticket: any,
      callback: (ticket: string, html: string) => void,
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
          (<HTMLElement>this._elementRef.nativeElement).innerHTML,
        );
      });
      this._changeDetectorRef.markForCheck();
      return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
    };
  }

  private _removeOption(): void {
    this._seriesComponent.removeStateOption('tooltip');
  }
}
