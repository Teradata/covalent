import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import {
  TdChartOptionsService,
  TdCoordinateSystem,
  ITdItemStyle,
  ITdEmphasis,
  TdSeriesLayoutBy,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeries,
  ITdLabel,
  TdSeriesComponent,
  TdMarkPointSymbol,
  ITdLineStyle,
  ITdEdgeLabel,
} from '@covalent/echarts/base';

export interface ITdCategories {
  name?: string;
  symbol?: TdMarkPointSymbol | string;
  symbolSize?: number | any[];
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset: any[];
  itemStyle: ITdItemStyle;
  label: ITdLabel;
  emphasis: ITdEmphasis;
}

export interface ITdGraphForce {
  initLayout?: string;
  repulsion?: any | number;
  gravity?: number;
  edgeLength?: any | number;
  layoutAnimation?: boolean;
}

export type TdGraphLayout = 'none' | 'circular' | 'force';

export interface ITdGraphSeries extends ITdSeries<'graph'> {
  legendHoverLink?: boolean;
  coordinateSystem?: TdCoordinateSystem;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  calendarIndex?: number;
  geoIndex?: number;
  hoverAnimation?: boolean;
  circular?: object;
  force?: ITdGraphForce;
  layout?: TdGraphLayout;
  nodeScaleRatio?: boolean;
  draggable?: boolean;
  symbol?: TdMarkPointSymbol | string;
  symbolSize?: number | any[] | Function;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  focusNodeAdjacency: boolean;
  edgeSymbol: any[] | string;
  edgeSymbolSize: number;
  cursor: string;
  roam?: boolean;
  expandAndCollapse?: boolean;
  initialTreeDepth?: number;
  itemStyle?: ITdItemStyle;
  lineStyle?: ITdLineStyle;
  label?: ITdLabel;
  edgeLabel?: ITdEdgeLabel;
  emphasis?: ITdEmphasis;
  categories: ITdCategories;
  data?: any[];
  nodes: any[];
  links: any[];
  edges: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  zlevel: number;
  z?: number;
  silent?: boolean;
  left: string | number;
  top: string | number;
  right: string | number;
  bottom: string | number;
  width: string | number;
  height: string | number;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number | Function;
  animationEasing?: string;
  animationDelay?: number | Function;
  animationDurationUpdate?: number | Function;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | Function;
}

@Component({
  selector: 'td-chart-series[td-graph]',
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
      provide: TdSeriesComponent,
      useExisting: forwardRef(() => TdChartSeriesGraphComponent),
    },
  ],
})
export class TdChartSeriesGraphComponent extends TdSeriesComponent<'graph'> implements ITdGraphSeries {
  @Input() legendHoverLink: boolean;
  @Input() coordinateSystem: TdCoordinateSystem;
  @Input() xAxisIndex: number;
  @Input() yAxisIndex: number;
  @Input() polarIndex: number;
  @Input() calendarIndex: number;
  @Input() geoIndex: number;
  @Input() hoverAnimation: boolean;
  @Input() circular: object;
  @Input() force: ITdGraphForce;
  @Input() layout: TdGraphLayout;
  @Input() nodeScaleRatio: boolean;
  @Input() draggable: boolean;
  @Input() symbol: TdMarkPointSymbol | string;
  @Input() symbolSize: number | any[] | Function;
  @Input() symbolRotate: number;
  @Input() symbolKeepAspect: boolean;
  @Input() symbolOffset: any[];
  @Input() focusNodeAdjacency: boolean;
  @Input() edgeSymbol: any[] | string;
  @Input() edgeSymbolSize: number;
  @Input() cursor: string;
  @Input() roam: boolean;
  @Input() initialTreeDepth: number;
  @Input() itemStyle: ITdItemStyle;
  @Input() lineStyle: ITdLineStyle;
  @Input() label: ITdLabel;
  @Input() edgeLabel: ITdEdgeLabel;
  @Input() emphasis: ITdEmphasis;
  @Input() categories: ITdCategories;
  @Input() nodes: any[];
  @Input() links: any[];
  @Input() edges: any[];
  @Input() markPoint: ITdMarkPoint;
  @Input() markLine: ITdMarkLine;
  @Input() markArea: ITdMarkArea;
  @Input() zlevel: number;
  @Input() z: number;
  @Input() silent: boolean;
  @Input() left: string | number;
  @Input() top: string | number;
  @Input() right: string | number;
  @Input() bottom: string | number;
  @Input() width: string | number;
  @Input() height: string | number;

  constructor(_optionsService: TdChartOptionsService) {
    super('graph', _optionsService);
  }

  getConfig(): any {
    return {
      legendHoverLink: this.legendHoverLink,
      coordinateSystem: this.coordinateSystem,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      polarIndex: this.polarIndex,
      calendarIndex: this.calendarIndex,
      geoIndex: this.geoIndex,
      hoverAnimation: this.hoverAnimation,
      circular: this.circular,
      force: this.force,
      layout: this.layout,
      nodeScaleRatio: this.nodeScaleRatio,
      draggable: this.draggable,
      symbol: this.symbol,
      symbolSize: this.symbolSize,
      symbolRotate: this.symbolRotate,
      symbolKeepAspect: this.symbolKeepAspect,
      symbolOffset: this.symbolOffset,
      focusNodeAdjacency: this.focusNodeAdjacency,
      edgeSymbol: this.edgeSymbol,
      edgeSymbolSize: this.edgeSymbolSize,
      cursor: this.cursor,
      roam: this.roam,
      itemStyle: this.itemStyle,
      lineStyle: this.lineStyle,
      label: this.label,
      edgeLabel: this.edgeLabel,
      emphasis: this.emphasis,
      categories: this.categories,
      nodes: this.nodes,
      links: this.links,
      edges: this.edges,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      zlevel: this.zlevel,
      z: this.z,
      silent: this.silent,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
    };
  }
}
