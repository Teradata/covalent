import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
  inject,
} from '@angular/core';

import {
  TdChartOptionsService,
  ITdItemStyle,
  ITdSeriesTooltip,
  ITdLabel,
  ITdSeries,
  TdSeriesDirective,
  ITdEmphasis,
  ITdShadow,
} from '@covalent/echarts/base';

/**
 * ECHART OPTION DOCS
 * https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-treemap
 *
 */

export interface ITdTreemapEmphasisLineStyle extends ITdShadow {
  color?: any;
  width?: number;
  curveness?: number;
}

export interface ITdTreemapEmphasis extends ITdEmphasis {
  lineStyle: ITdTreemapEmphasisLineStyle;
}

export interface ITdTreemapUpperLabel {
  show?: boolean;
  position?: string | any[];
  distance?: string | number;
  rotate?: string | number;
  offset?: any[];
  formatter?: string;
  color?: any;
  fontStyle?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string | number;
  align?: string;
  verticalAlign?: string;
  lineHeight?: string | number;
  backgroundColor?: any;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  padding?: number | any[];
  shadowColor?: string;
  shadowBlur?: string | number;
  shadowOffsetX?: string | number;
  shadowOffsetY?: string | number;
  width?: string | number;
  height?: string | number;
  textBorderColor?: string;
  textBorderWidth?: string | number;
  textShadowColor?: string;
  textShadowBlur?: string | number;
  textShadowOffsetX?: string | number;
  textShadowOffsetY?: string | number;
  rich?: any;
  ellipsis?: any;
}

export interface ITdTreemapBreadcrumb {
  show?: boolean;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  height?: string | number;
  emptyItemWidth?: string | number;
  itemStyle?: ITdItemStyle;
  emphasis?: ITdTreemapEmphasis;
}

interface ITdTreemapSeries extends ITdSeries {
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  squareRatio?: string | number;
  leafDepth?: string | number;
  drillDownIcon?: string;
  roam?: boolean | string;
  nodeClick?: boolean | string;
  zoomToNodeRatio?: string | number;
  levels?: any[];
  silent?: boolean;
  visualDimension?: string | number;
  visualMin?: string | number;
  visualMax?: string | number;
  colorAlpha?: any[];
  colorSaturation?: string | number;
  colorMappingBy?: string;
  visibleMin?: string | number;
  childrenVisibleMin?: string | number;
  itemStyle?: ITdItemStyle;
  label?: ITdLabel;
  upperLabel?: ITdTreemapUpperLabel;
  breadcrumb?: ITdTreemapBreadcrumb;
  emphasis?: ITdTreemapEmphasis;
  data?: any[];
}

@Component({
  selector: 'td-chart-series[td-treemap]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [
    'config',
    'id',
    'name',
    'color',
    'data',

    'animation',
    'animationThreshold',
    'animationDuration',
    'animationEasing',
    'animationDelay',
    'animationDurationUpdate',
    'animationEasingUpdate',
    'animationDelayUpdate',
    'tooltip',
  ],
  providers: [
    {
      provide: TdSeriesDirective,
      useExisting: forwardRef(() => TdChartSeriesTreemapComponent),
    },
  ],
})
export class TdChartSeriesTreemapComponent
  extends TdSeriesDirective
  implements ITdTreemapSeries
{
  @Input() override config?: any = {};
  @Input() declare id?: string;
  @Input() declare name?: string;
  @Input() declare data?: any;
  @Input() zlevel?: number;
  @Input() z?: number;
  @Input() left?: string | number;
  @Input() top?: string | number;
  @Input() right?: string | number;
  @Input() bottom?: string | number;
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() squareRatio?: string | number;
  @Input() leafDepth?: string | number;
  @Input() drillDownIcon?: string;
  @Input() roam?: boolean | string;
  @Input() nodeClick?: boolean | string;
  @Input() zoomToNodeRatio?: string | number;
  @Input() levels?: any[];
  @Input() silent?: boolean;
  @Input() visualDimension?: string | number;
  @Input() visualMin?: string | number;
  @Input() visualMax?: string | number;
  @Input() colorAlpha?: any[];
  @Input() colorSaturation?: string | number;
  @Input() colorMappingBy?: string;
  @Input() visibleMin?: string | number;
  @Input() childrenVisibleMin?: string | number;
  @Input() itemStyle?: ITdItemStyle;
  @Input() label?: ITdLabel;
  @Input() upperLabel?: ITdTreemapUpperLabel;
  @Input() breadcrumb?: ITdTreemapBreadcrumb;
  @Input() emphasis?: ITdTreemapEmphasis;
  @Input() declare tooltip: ITdSeriesTooltip;

  constructor() {
    const _optionsService = inject(TdChartOptionsService);

    super('treemap', _optionsService);
  }

  getConfig(): any {
    return {
      zlevel: this.zlevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
      squareRatio: this.squareRatio,
      leafDepth: this.leafDepth,
      drillDownIcon: this.drillDownIcon,
      roam: this.roam,
      nodeClick: this.nodeClick,
      zoomToNodeRatio: this.zoomToNodeRatio,
      levels: this.levels,
      silent: this.silent,
      visualDimension: this.visualDimension,
      visualMin: this.visualMin,
      visualMax: this.visualMax,
      colorAlpha: this.colorAlpha,
      colorSaturation: this.colorSaturation,
      colorMappingBy: this.colorMappingBy,
      visibleMin: this.visibleMin,
      childrenVisibleMin: this.childrenVisibleMin,
      itemStyle: this.itemStyle,
      label: this.label,
      upperLabel: this.upperLabel,
      breadcrumb: this.breadcrumb,
      emphasis: this.emphasis,
    };
  }
}
