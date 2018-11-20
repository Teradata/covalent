import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import { 
  TdChartOptionsService,
  ITdItemStyle,
  ITdSeriesTooltip,
  ITdLabel,
  ITdSeries,
  TdSeriesComponent,
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
  rich: any;
  ellipsis: any;
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

interface ITdTreemapSeries extends ITdSeries<'treemap'> {
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
  data: any[];
}

@Component({
  selector: 'td-chart-series[td-treemap]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreemapComponent),
  }],
})
export class TdChartSeriesTreemapComponent extends TdSeriesComponent<'treemap'> implements ITdTreemapSeries {

  @Input('config') config: any = {};
  @Input('id') id: string;
  @Input('name') name: string;
  @Input('data') data: any;
  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('left') left: string | number;
  @Input('top') top: string | number;
  @Input('right') right: string | number;
  @Input('bottom') bottom: string | number;
  @Input('width') width: string | number;
  @Input('height') height: string | number;
  @Input('squareRatio') squareRatio: string | number;
  @Input('leafDepth') leafDepth: string | number;
  @Input('drillDownIcon') drillDownIcon: string;
  @Input('roam') roam: boolean | string;
  @Input('nodeClick') nodeClick: boolean | string;
  @Input('zoomToNodeRatio') zoomToNodeRatio: string | number;
  @Input('levels') levels: any[];
  @Input('silent') silent: boolean;
  @Input('visualDimension') visualDimension: string | number;
  @Input('visualMin') visualMin: string | number;
  @Input('visualMax') visualMax: string | number;
  @Input('colorAlpha') colorAlpha: any[];
  @Input('colorSaturation') colorSaturation: string | number;
  @Input('colorMappingBy') colorMappingBy: string;
  @Input('visibleMin') visibleMin: string | number;
  @Input('childrenVisibleMin') childrenVisibleMin: string | number;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('label') label: ITdLabel;
  @Input('upperLabel') upperLabel: ITdTreemapUpperLabel;
  @Input('breadcrumb') breadcrumb: ITdTreemapBreadcrumb;
  @Input('emphasis') emphasis: ITdTreemapEmphasis;
  @Input('tooltip') tooltip: ITdSeriesTooltip;

  constructor(_optionsService: TdChartOptionsService) {
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
