import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

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
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesGraphComponent),
  }],
})
export class TdChartSeriesGraphComponent extends TdSeriesComponent<'graph'> implements ITdGraphSeries {

@Input('legendHoverLink') legendHoverLink: boolean;
@Input('coordinateSystem') coordinateSystem: TdCoordinateSystem;
@Input('xAxisIndex') xAxisIndex: number;
@Input('yAxisIndex') yAxisIndex: number;
@Input('polarIndex') polarIndex: number;
@Input('calendarIndex') calendarIndex: number;
@Input('geoIndex') geoIndex: number;
@Input('hoverAnimation') hoverAnimation: boolean;
@Input('circular') circular: object;
@Input('force') force: ITdGraphForce;
@Input('layout') layout: TdGraphLayout; 
@Input('nodeScaleRatio') nodeScaleRatio: boolean;
@Input('draggable') draggable: boolean;
@Input('symbol') symbol: TdMarkPointSymbol | string;
@Input('symbolSize') symbolSize: number | any[] | Function;
@Input('symbolRotate') symbolRotate: number;
@Input('symbolKeepAspect') symbolKeepAspect: boolean;
@Input('symbolOffset') symbolOffset: any[];
@Input('focusNodeAdjacency') focusNodeAdjacency: boolean;
@Input('edgeSymbol') edgeSymbol: any[] | string;
@Input('edgeSymbolSize') edgeSymbolSize: number;
@Input('cursor') cursor: string;
@Input('roam') roam: boolean;
@Input('initialTreeDepth') initialTreeDepth: number;
@Input('itemStyle') itemStyle: ITdItemStyle;
@Input('lineStyle') lineStyle: ITdLineStyle;
@Input('label') label: ITdLabel;
@Input('edgeLabel') edgeLabel: ITdEdgeLabel;
@Input('emphasis') emphasis: ITdEmphasis;
@Input('categories') categories: ITdCategories;
@Input('data') data: any[];
@Input('nodes') nodes: any[];
@Input('links') links: any[];
@Input('edges') edges: any[];
@Input('markPoint') markPoint: ITdMarkPoint;
@Input('markLine') markLine: ITdMarkLine;
@Input('markArea') markArea: ITdMarkArea;
@Input('zlevel') zlevel: number;
@Input('z') z: number;
@Input('silent') silent: boolean;
@Input('left') left: string | number;
@Input('top') top: string | number;
@Input('right') right: string | number;
@Input('bottom') bottom: string | number;
@Input('width') width: string | number;
@Input('height') height: string | number;
@Input('animation') animation: boolean;
@Input('animationThreshold') animationThreshold: number;
@Input('animationDuration') animationDuration: number | Function;
@Input('animationEasing') animationEasing: string;
@Input('animationDelay') animationDelay: number | Function;
@Input('animationDurationUpdate') animationDurationUpdate: number | Function;
@Input('animationEasingUpdate') animationEasingUpdate: string;
@Input('animationDelayUpdate') animationDelayUpdate: number | Function;

  constructor(_optionsService: TdChartOptionsService) {
    super('graph', _optionsService);
  }

  getConfig(): any {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      color: this.color,
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
      data: this.data,
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
      animation: this.animation,
      animationThreshold: this.animationThreshold,
      animationDuration: this.animationDuration,
      animationEasing: this.animationEasing,
      animationDelay: this.animationDelay,
      animationDurationUpdate: this.animationDurationUpdate,
      animationEasingUpdate: this.animationEasingUpdate,
      animationDelayUpdate: this.animationDelayUpdate,
      tooltip: this.tooltip,
    };
  }
}
