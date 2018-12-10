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
  ITdLabel,
  ITdShadow,
  ITdItemStyle,
  TdTextPosition,
  TdTextAlign,
} from '@covalent/echarts/base';

export type TdToolboxOrient = 'horizontal' | 'vertical';
export type TdImageType = 'png' | 'jpeg';

export interface ITdAcceptedBrushTypes {
  rect?: string;
  polygon?: string;
  lineX?: string;
  lineY?: string;
  keep?: string;
  clear?: string;
}

export interface ITdAcceptedMagicTypes {
  line?: string;
  bar?: string;
  stack?: string;
  tiled?: string;
}

export interface ITdToolboxIconEmphasis extends ITdItemStyle, ITdShadow {}

export interface ITdFeatureIconStyle extends ITdItemStyle, ITdShadow {
  textPosition?: TdTextPosition;
  textAlign?: TdTextAlign;
  emphasis?: ITdToolboxIconEmphasis;
}

export interface ITdZoomTitles {
  zoom?: string;
  back?: string;
}

export interface ITdSaveAsImage {
  type?: TdImageType;
  name?: string;
  backgroundColor?: any;
  excludeComponents?: string[]; // defaults to ['toolbox']
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
  pixelRatio?: number;
}

export interface ITdRestore {
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
}

export interface ITdDataView {
  show?: boolean;
  title?: string;
  icon?: string;
  iconStyle?: ITdFeatureIconStyle;
  readOnly?: boolean;
  optionToContent?: Function;
  contentToOption?: Function;
  lang?: string[]; // Defaults to Chinese, there are 3 names in data view, which are ['data view', 'turn off' and 'refresh'].
  textareaColor?: string;
  textareaBorderColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

export interface ITdDataZoom {
  show?: boolean;
  title?: ITdZoomTitles;
  icon?: ITdZoomTitles;
  iconStyle?: ITdFeatureIconStyle;
  xAxisIndex?: number | number[] | boolean;
  yAxisIndex?: number | number[] | boolean;
}

export interface ITdMagicType {
  show?: boolean;
  type?: string[]; // only expects 'line' | 'bar' | 'stack' | 'tiled';
  title?: ITdAcceptedMagicTypes;
  icon?: ITdAcceptedMagicTypes;
  iconStyle?: ITdFeatureIconStyle;
  option?: {
    line?: object;
    bar?: object;
    stack?: object;
    tiled?: object;
  };
  seriesIndex?: {
    line?: any[];
    bar?: any[];
    stack?: any[];
    tiled?: any[];
  };
}

export interface ITdBrush {
  type?: any[];
  icon?: ITdAcceptedBrushTypes;
  title?: ITdAcceptedBrushTypes;
}

export interface ITdToolboxFeature {
  saveAsImage?: ITdSaveAsImage;
  restore?: ITdRestore;
  dataView?: ITdDataView;
  dataZoom?: ITdDataZoom;
  magicType?: ITdMagicType;
  brush?: ITdBrush;
}

@Directive({
  selector: 'ng-template[tdViewDataFormatter]',
})
export class TdChartViewDataFormatterDirective {}

@Component({
  selector: 'td-chart-toolbox',
  templateUrl: './toolbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChartToolboxComponent implements OnChanges, OnDestroy {
  private _state: any = {};

  @Input('config') config: any = {};

  @Input('show') show: boolean = true;
  @Input('name') trigger: string;
  @Input('orient') orient: TdToolboxOrient;
  @Input('itemSize') itemSize: number;
  @Input('itemGap') itemGap: number;
  @Input('showTitle') showTitle: boolean = true;
  @Input('label') label: ITdLabel;
  @Input('feature') feature: ITdToolboxFeature;
  @Input('iconStyle') iconStyle: ITdFeatureIconStyle;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('transitionDuration') transitionDuration: number = 0.5;
  @Input('left') left: string | number = 'auto';
  @Input('top') top: string | number = 'auto';
  @Input('right') right: string | number = 'auto';
  @Input('bottom') bottom: string | number = 'auto';
  @Input('width') width: string | number = 'auto';
  @Input('height') height: string | number = 'auto';

  @ContentChild(TdChartViewDataFormatterDirective, { read: TemplateRef })
  formatterTemplate: TemplateRef<any>;
  @ViewChild('toolboxContent') fullTemplate: TemplateRef<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _optionsService: TdChartOptionsService,
  ) {}

  ngOnChanges(): void {
    this._setOptions();
  }

  ngOnDestroy(): void {
    this._removeOption();
  }

  private _setOptions(): void {

    this._checkFormatterTemplate();

    let config: any = assignDefined(
      this._state,
      this.config ? this.config : {},
      {
        show: this.show,
        name: this.trigger,
        orient: this.orient,
        itemSize: this.itemSize,
        itemGap: this.itemGap,
        showTitle: this.showTitle,
        label: this.label,
        feature: this.feature,
        iconStyle: this.iconStyle,
        zlevel: this.zlevel,
        z: this.z,
        transitionDuration: this.transitionDuration,
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        width: this.width,
        height: this.height,
      },
    );
    // set toolbox configuration in parent chart and render new configurations
    this._optionsService.setOption('toolbox', config);
  }

  private _removeOption(): void {
    this._optionsService.clearOption('toolbox');
  }

  private _checkFormatterTemplate(): void {
    if (this.formatterTemplate) {
      this.feature = {
        ...this.feature,
        dataView: {
          ...this.feature.dataView,
          optionToContent: this._optionToContentFormatter(),
        },
      };
    }
  }

  private _optionToContentFormatter(): Function {
    return () => {
      this._changeDetectorRef.markForCheck();
      return (<HTMLElement>this._elementRef.nativeElement).innerHTML;
    };
  }
}
