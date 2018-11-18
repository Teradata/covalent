import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import { 
  TdChartOptionsService,
  ITdLabel,
  ITdItemStyle,
  ITdEmphasis,
  ITdSeries,
  TdSeriesComponent,
  ITdShadow,
  ITdLineCurveStyle,
} from '@covalent/echarts/base';

export type TdSankeyOrient = 'horizontal' | 'vertical';

export type TdSankeyFocusNodeAdjacency = boolean | 'allEdges' | 'outEdges' | 'inEdges';

export interface ITdSankeyEmphasisLineStyle extends ITdShadow {
  color?: any;
  opacity?: number;
  curveness?: number;
}

export interface ITdSankeyEmphasis extends ITdEmphasis {
  lineStyle: ITdSankeyEmphasisLineStyle;
}

export interface ITdSankeySeries extends ITdSeries<'sankey'> {
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  nodeWidth?: number;
  nodeGap?: number;
  layoutIterations?: number;
  orient?: TdSankeyOrient;
  draggable?: boolean;
  focusNodeAdjacency?: TdSankeyFocusNodeAdjacency;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  lineStyle?: ITdLineCurveStyle;
  emphasis?: ITdEmphasis;
  data?: any[];
  nodes?: any[];
  links?: any[];
  edges?: any[];
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-sankey]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesSankeyComponent),
  }],
})
export class TdChartSeriesSankeyComponent extends TdSeriesComponent<'sankey'> implements ITdSankeySeries {

  @Input('zlevel') zlevel: number;
  @Input('z') z: number;
  @Input('left') left: string | number;
  @Input('top') top: string | number;
  @Input('right') right: string | number;
  @Input('bottom') bottom: string | number;
  @Input('width') width: string | number;
  @Input('height') height: string | number;
  @Input('nodeWidth') nodeWidth: number;
  @Input('nodeGap') nodeGap: number;
  @Input('layoutIterations') layoutIterations: number;
  @Input('orient') orient: TdSankeyOrient;
  @Input('draggable') draggable: boolean;
  @Input('focusNodeAdjacency') focusNodeAdjacency: TdSankeyFocusNodeAdjacency;
  @Input('label') label: ITdLabel;
  @Input('itemStyle') itemStyle: ITdItemStyle;
  @Input('lineStyle') lineStyle: ITdLineCurveStyle;
  @Input('emphasis') emphasis: ITdEmphasis;
  @Input('data') data: any[];
  @Input('nodes') nodes: any[];
  @Input('links') links: any[];
  @Input('edges') edges: any[];
  @Input('silent') silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('sankey', _optionsService);
  }

  getConfig(): any {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      color: this.color,
      zlevel: this.zlevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
      nodeWidth: this.nodeWidth,
      nodeGap: this.nodeGap,
      layoutIterations: this.layoutIterations,
      orient: this.orient,
      draggable: this.draggable,
      focusNodeAdjacency: this.focusNodeAdjacency,
      label: this.label,
      itemStyle: this.itemStyle,
      lineStyle: this.lineStyle,
      emphasis: this.emphasis,
      data: this.data,
      nodes: this.nodes,
      links: this.links,
      edges: this.edges,
      silent: this.silent,
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
