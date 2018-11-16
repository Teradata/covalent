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
  TdMarkPointSymbol,
  ITdLabel,
  ITdLineStyle,
  ITdSeries,
  TdSeriesComponent,
  ITdEmphasis,
  ITdShadow,
} from '@covalent/echarts/base';

/**
 * ECHART OPTION DOCS
 * https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree
 *
 */

/** 
 * LR - from left to right
 * RL - from right to left
 * TB - from top to bottom
 * BT - from bottom to top
 */
export type TdTreeOrient = 'LR' | 'RL'| 'TB' | 'BT';

export type TdTreeLayout = 'orthogonal' | 'radial';

export interface ITdTreeEmphasisLineStyle extends ITdShadow {
  color?: any;
  width?: number;
  curveness?: number;
}

export interface ITdTreeEmphasis extends ITdEmphasis {
  lineStyle: ITdTreeEmphasisLineStyle;
}

export interface ITdTreeLeaves {
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  emphasis: ITdEmphasis;
}

interface ITdTreeSeries extends ITdSeries<'tree'> {
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  layout?: TdTreeLayout;
  orient?: TdTreeOrient;
  symbol?: TdMarkPointSymbol | string; // string added for custom SVG, URL or dataURI
  symbolSize?: number;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  roam?: boolean | string;
  expandAndCollapse?: boolean;
  initialTreeDepth?: number;
  itemStyle?: ITdItemStyle;
  label?: ITdLabel;
  lineStyle?: ITdLineStyle;
  leaves?: ITdTreeLeaves;
  emphasis?: ITdTreeEmphasis;
  data: any[];
}

@Component({
  selector: 'td-chart-series[td-tree]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreeComponent),
  }],
})

export class TdChartSeriesTreeComponent extends TdSeriesComponent<'tree'> implements ITdTreeSeries {

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
  @Input('layout') layout: TdTreeLayout;
  @Input('orient') orient: TdTreeOrient;
  @Input('symbol') symbol: TdMarkPointSymbol | string; // string added for custom SVG, URL or dataURI
  @Input('symbolSize') symbolSize: number; // string added for custom SVG, URL or dataURI
  @Input('symbolRotate') symbolRotate: number;
  @Input('symbolKeepAspect') symbolKeepAspect: boolean;
  @Input('roam') roam: boolean | string;
  @Input('expandAndCollapse') expandAndCollapse: boolean;
  @Input('initialTreeDepth') initialTreeDepth: number;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('label') label: ITdLabel;
  @Input('lineStyle') lineStyle: ITdLineStyle;
  @Input('leaves') leaves: ITdTreeLeaves;
  @Input('emphasis') emphasis: ITdTreeEmphasis;
  @Input('tooltip') tooltip: ITdSeriesTooltip;

  constructor(_optionsService: TdChartOptionsService) {
    super('tree', _optionsService);
  }

  getConfig(): any {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      data: this.data,
      zlevel: this.zlevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
      layout: this.layout,
      orient: this.orient,
      symbol: this.symbol,
      symbolSize: this.symbolSize,
      symbolRotate: this.symbolRotate,
      symbolKeepAspect: this.symbolKeepAspect,
      roam: this.roam,
      expandAndCollapse: this.expandAndCollapse,
      initialTreeDepth: this.initialTreeDepth,
      itemStyle: this.itemStyle,
      label: this.label,
      lineStyle: this.lineStyle,
      leaves: this.leaves,
      emphasis: this.emphasis,
      tooltip: this.tooltip,
    };
  }
}
